// ForEach dan MAP

// 1.ForEach

// kode biasa menggunakan for
// let angka = [1, 3, 5, 5, 2, 3, 1, 2, 5, 6];
// for (let i = 0; i < angka.length; i++) {
//     console.log(i);
// }

// setelah menggunakan foreach
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// forEach = untuk setiap elemen yang ada pada array number[], lakukan fungsi berikut ini
// Kelebihan : * tidak perlu pakai index untuk looping, tetapi langsung pakai elemen array nya, kode lebih simple
// number.forEach(function (e) {
//     console.log(e);
// });

// jika ingin mengetahui indexnya bisa menggunakan kode berikut :
// forEach bisa menyimpan 2 parameter, index dan elemen
// number.forEach(function (e, i) {
//     console.log(`${i} adalah index dari elemen ${e}`);
// });

// 2.Map
// perhatikan kode berikut ini :
let nomor = [2, 3, 4, 1, 2, 7, 6, 8, 9];
// pada dasarnya map sama dengan ForEach, bedanya :
// ForEach = mengembalikan elemen array
// Map = mengembalikan array itu sendiri => semua elemen array bisa diolah sekaligus dalam satu waktu, 
// tetapi yang dkembalikan adalah kotak array nya bukan isinya

let kaliArray = nomor.map(function (e) {
    // elemen array bisa langsung dikali 2 secara serentak 
    hasil = e * 2;
    return hasil;

});
// variable kali array = berisi kotak array (bukan isi array)
console.log(kaliArray);