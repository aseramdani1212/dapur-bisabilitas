
# Kebijakan Keamanan Dapur Bisa Bilitas

## Tujuan

Melindungi integritas aplikasi, data pengguna, dan sumber kode Dapur Bisa Bilitas.

## Arsitektur

Aplikasi menggunakan pendekatan website statis dengan penyimpanan data personal di browser pengguna.

Tidak tersedia halaman administrasi publik untuk mengubah kode atau konten aplikasi.

## Perlindungan

1. Sumber kode dikelola melalui repository GitHub.
2. Akses tulis repository hanya diberikan kepada pihak yang berwenang.
3. Autentikasi dua faktor atau passkey dianjurkan.
4. Branch utama dilindungi dari perubahan yang tidak sah.
5. File rahasia tidak boleh dimasukkan ke repository.
6. HTTPS digunakan untuk publikasi.
7. Input pengguna harus divalidasi.
8. Data yang ditampilkan harus diproses secara aman.

## Pengelolaan Perubahan

Perubahan aplikasi dilakukan melalui repository resmi dan proses publikasi yang dikendalikan pengelola proyek.

## Privasi

Data peta dapur dan favorit disimpan di browser pengguna. Pengguna perlu memahami bahwa penghapusan data browser dapat menghapus informasi tersebut.

## Pelaporan Kerentanan

Temuan kerentanan sebaiknya dilaporkan kepada pengelola proyek melalui kanal komunikasi resmi.

## Batasan Keamanan

Tidak ada sistem digital yang dapat dijamin sepenuhnya bebas dari serangan. Pemeriksaan, pembaruan, dan pengujian keamanan tetap diperlukan.

---

Pengelola proyek: Ase Muhamad Ramdani.
