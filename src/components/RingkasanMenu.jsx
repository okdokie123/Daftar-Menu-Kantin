import { formatRupiah } from "../utils/formatRupiah";

// Komponen 2: ringkasan jumlah menu dan menu termurah
function RingkasanMenu({ daftarMenu }) {
  const total = daftarMenu.length;

  // cari menu dengan harga paling kecil (kalau daftar tidak kosong)
  const termurah =
    total > 0
      ? daftarMenu.reduce((a, b) => (a.harga <= b.harga ? a : b))
      : null;

  return (
    <section className="ringkasan" aria-label="Ringkasan menu">
      <div>
        <span className="ringkasan-angka">{total}</span>
        <span className="ringkasan-label">menu tersedia</span>
      </div>
      <div>
        {termurah ? (
          <>
            <span className="ringkasan-angka">{formatRupiah(termurah.harga)}</span>
            <span className="ringkasan-label">termurah: {termurah.nama}</span>
          </>
        ) : (
          <span className="ringkasan-label">Belum ada harga untuk dibandingkan</span>
        )}
      </div>
    </section>
  );
}

export default RingkasanMenu;
