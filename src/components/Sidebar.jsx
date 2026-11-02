const DAFTAR_KATEGORI = ["Semua", "Makanan berat", "Camilan", "Minuman"];

// Komponen 6: sidebar berisi filter kategori dan tombol cetak
function Sidebar({ kategoriAktif, onPilihKategori, onCetak }) {
  return (
    <aside className="sidebar" aria-label="Menu samping">
      <h2>Kategori</h2>
      <nav>
        {DAFTAR_KATEGORI.map((k) => (
          <button
            key={k}
            type="button"
            className={k === kategoriAktif ? "sidebar-item aktif" : "sidebar-item"}
            aria-current={k === kategoriAktif ? "true" : undefined}
            onClick={() => onPilihKategori(k)}
          >
            {k}
          </button>
        ))}
      </nav>

      <h2>Aksi</h2>
      <button type="button" className="sidebar-item" onClick={onCetak}>
        Cetak menu
      </button>
    </aside>
  );
}

export default Sidebar;