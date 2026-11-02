import KartuMenu from "./KartuMenu";

// Komponen 5: daftar semua menu (render list + conditional rendering)
function DaftarMenu({ daftarMenu, onHapus }) {
  if (daftarMenu.length === 0) {
    return (
      <p className="kosong">
        Belum ada data menu. Isi formulir di samping untuk menambah menu pertama.
      </p>
    );
  }

  return (
    <ul className="daftar">
      {daftarMenu.map((menu) => (
        <KartuMenu
          key={menu.id}
          nama={menu.nama}
          harga={menu.harga}
          kategori={menu.kategori}
          deskripsi={menu.deskripsi}
          onHapus={() => onHapus(menu.id)}
        />
      ))}
    </ul>
  );
}

export default DaftarMenu;
