import { formatRupiah } from "../utils/formatRupiah";

// Komponen 4: tampilan satu menu
function KartuMenu({ nama, harga, kategori, deskripsi, onHapus }) {
  return (
    <li className="kartu">
      <div className="kartu-baris">
        <h3>{nama}</h3>
        <span className="kartu-titik" aria-hidden="true"></span>
        <span className="kartu-harga">{formatRupiah(harga)}</span>
      </div>
      {deskripsi && <p className="kartu-deskripsi">{deskripsi}</p>}
      <div className="kartu-bawah">
        <span className="kartu-kategori">{kategori}</span>
        <button type="button" className="tombol-hapus" onClick={onHapus}>
          Hapus
        </button>
      </div>
    </li>
  );
}

export default KartuMenu;
