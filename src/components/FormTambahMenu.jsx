import { useState } from "react";

const DAFTAR_KATEGORI = ["Makanan berat", "Camilan", "Minuman"];

// Komponen 3: form tambah menu (controlled component)
function FormTambahMenu({ onTambah }) {
  const [nama, setNama] = useState("");
  const [harga, setHarga] = useState("");
  const [kategori, setKategori] = useState(DAFTAR_KATEGORI[0]);
  const [deskripsi, setDeskripsi] = useState("");
  const [pesanError, setPesanError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (nama.trim() === "" || Number(harga) <= 0) {
      setPesanError("Nama menu harus diisi dan harga harus lebih dari 0.");
      return;
    }

    onTambah({
      nama: nama.trim(),
      harga: Number(harga),
      kategori,
      deskripsi: deskripsi.trim(),
    });

    // kosongkan form setelah berhasil ditambah
    setNama("");
    setHarga("");
    setKategori(DAFTAR_KATEGORI[0]);
    setDeskripsi("");
    setPesanError("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Tambah menu</h2>

      <label htmlFor="nama">Nama menu</label>
      <input
        id="nama"
        type="text"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
        placeholder="Contoh: Gado-gado"
      />

      <label htmlFor="harga">Harga (Rp)</label>
      <input
        id="harga"
        type="number"
        min="0"
        value={harga}
        onChange={(e) => setHarga(e.target.value)}
        placeholder="12000"
      />

      <label htmlFor="kategori">Kategori</label>
      <select
        id="kategori"
        value={kategori}
        onChange={(e) => setKategori(e.target.value)}
      >
        {DAFTAR_KATEGORI.map((k) => (
          <option key={k} value={k}>
            {k}
          </option>
        ))}
      </select>

      <label htmlFor="deskripsi">Deskripsi singkat</label>
      <input
        id="deskripsi"
        type="text"
        value={deskripsi}
        onChange={(e) => setDeskripsi(e.target.value)}
        placeholder="Sayur rebus dengan bumbu kacang"
      />

      {pesanError && (
        <p className="form-error" role="alert">
          {pesanError}
        </p>
      )}

      <button type="submit">Tambah</button>
    </form>
  );
}

export default FormTambahMenu;
