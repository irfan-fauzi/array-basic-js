// Manipulasi array
// 1. Menambah isi array
let number = [1, 2, 3, 4, 5, 6, 7];
// cara menambahkan nya bisa langsung seperti ini :
// kelemmahan kode dibawah = indexnya jangan sampai salah
// jika salah = error atau ada elemen yang undifine
number[7] = 8;
number[8] = "sembilan";
number[9] = false;

// -----------------------------------------------------------
// 2. Menghapus isi array
let nama = ['irfan', 'fauzi', 'rahman', 'hafidz'];
// bisa mengubah index array nya menjadi undifine
nama[1] = undefined;

// 3. Menampilkan isi array 
// kita tampilkan keseluruhan arraynya
// untuk menampilan isi array harus menggunakan pengulangan
let hari = ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'ahad'];
// bisa menggunakan for
// for (let i = 0; i < hari.length; i++) {
//     console.log(hari[i]);
// }
// atau menggunakan forEach
hari.forEach(function (e) {
    console.log(e);
});