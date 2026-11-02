// ubah angka jadi tulisan rupiah, contoh: 15000 -> "Rp 15.000"
export function formatRupiah(angka) {
  return "Rp " + Number(angka).toLocaleString("id-ID");
}
