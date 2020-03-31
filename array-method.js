// Array method

// 1.JOIN

// method untuk menggabungkan seluruh isi array dan mengunahnya menjadi String
let ubahJadiString = function (nama) {
    // join() akan mengubah elemen array menjadi string utuh tanpa pengulangan (for / forEach)
    // bedanya join() hanya akan menampilkan nya secara mendatar saja (persis seperti type data String)
    console.log(nama.join());
}
// ubahJadiString(['irfan', 'fauzi', 'rahman', 'jani']);
// --------------------------------------------------------------------------
// 2.PUSH
// diguanakan untuk menambahkan array di paling akhir elemen
// contoh (kode ini hanya bisa menambhakan satu persatu elemen)
// let name = ['irfan', 'fauzi', 'rahman', 'jani'];

// let pushArray = function (e) {
//     name.push(e);
//     name.forEach(function (e) {
//         console.log(e);
//     });
// }
// pushArray('setia', 'sanjay dut');
// ----------------------------------Masih method PUSH-------------
// menggunakan arguments untuk menambahkan elemen array secara bersamaan
let nama = ['irfan', 'fauzi', 'rahman', 'jani'];
let tambahNama = function () {
    // supaya menambah sekaligus (pakai arguments)
    for (let i = 0; i < arguments.length; i++) {
        nama.push(arguments[i]);
    }
    // tampilkan langsung isi array nya kepada user
    nama.forEach(function (e) {
        console.log(e);
    });
}
tambahNama('singa', 'laut', 'buaya');