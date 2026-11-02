import { useState } from "react";
import Header from "./components/Header";
import RingkasanMenu from "./components/RingkasanMenu";
import FormTambahMenu from "./components/FormTambahMenu";
import DaftarMenu from "./components/DaftarMenu";
import Sidebar from "./components/Sidebar";
import "./App.css";

// data awal, nanti pada Pekan 11 diganti dengan data dari backend/API
const menuAwal = [
  { id: 1, nama: "Nasi goreng kampung", harga: 15000, kategori: "Makanan berat", deskripsi: "Nasi goreng dengan telur ceplok dan kerupuk." },
  { id: 2, nama: "Mie ayam bakso", harga: 14000, kategori: "Makanan berat", deskripsi: "Mie ayam dengan dua bakso dan pangsit goreng." },
  { id: 3, nama: "Soto ayam Lamongan", harga: 16000, kategori: "Makanan berat", deskripsi: "Kuah kuning bening, koya, dan sambal terpisah." },
  { id: 4, nama: "Pisang goreng keju", harga: 8000, kategori: "Camilan", deskripsi: "Lima potong, ditaburi keju parut dan susu kental manis." },
  { id: 5, nama: "Es teh manis", harga: 4000, kategori: "Minuman", deskripsi: "Teh tubruk dengan gula cair dan es batu." },
  { id: 6, nama: "Es jeruk peras", harga: 6000, kategori: "Minuman", deskripsi: "Jeruk peras segar tanpa pemanis tambahan." },
];

function App() {
  // state utama: array daftar menu
  const [daftarMenu, setDaftarMenu] = useState(menuAwal);
  const [kategoriAktif, setKategoriAktif] = useState("Semua");

  // menu yang ditampilkan mengikuti kategori yang dipilih di sidebar
  const menuTampil =
    kategoriAktif === "Semua"
      ? daftarMenu
      : daftarMenu.filter((menu) => menu.kategori === kategoriAktif);

  function tambahMenu(menuBaru) {
    setDaftarMenu((lama) => [...lama, { id: Date.now(), ...menuBaru }]);
  }

  function hapusMenu(id) {
    setDaftarMenu((lama) => lama.filter((menu) => menu.id !== id));
  }

  function cetakMenu() {
    window.print();
  }

  return (
    <div className="halaman">
      <Header
        judul="Daftar menu kantin"
        subjudul="Kelola makanan dan minuman yang dijual hari ini."
      />
      <main className="isi">
        <RingkasanMenu daftarMenu={daftarMenu} />
        <div className="kolom">
          <Sidebar
            kategoriAktif={kategoriAktif}
            onPilihKategori={setKategoriAktif}
            onCetak={cetakMenu}
          />
          <section aria-label="Daftar menu">
            <DaftarMenu daftarMenu={menuTampil} onHapus={hapusMenu} />
          </section>
          <FormTambahMenu onTambah={tambahMenu} />
        </div>
      </main>
    </div>
  );
}

export default App;
