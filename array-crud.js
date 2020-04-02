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
// 2.Tambahelemen Array
//      2.1 PUSH
// diguanakan untuk menambahkan array di paling akhir elemen
// contoh (kode ini hanya bisa menambhakan satu persatu elemen)
let name = ['irfan', 'fauzi', 'rahman', 'jani'];

let pushArray = function (e) {
    name.push(e);
    name.forEach(function (e) {
        console.log(e);
    });
}
pushArray('setia', 'sanjay dut');
// 2.2 UNSHIFT
// diguanakan untuk menambahkan array di awal elemen
// name.unshift('karim);
// ----------------------------------Masih method PUSH-------------
// menggunakan arguments untuk menambahkan elemen array secara bersamaan
let nama = ['irfan', 'fauzi', 'rahman', 'jani'];
let tambahNama = function () {
    // supaya menambah sekaligus (pakai arguments)
    // dengan ini saya bisa menambahkan argumen tanpa parameter
    for (let i = 0; i < arguments.length; i++) {
        nama.push(arguments[i]);
    }
    // tampilkan langsung isi array nya kepada user
    nama.forEach(function (e) {
        console.log(e);
    });
}
// tambahNama('singa', 'laut', 'buaya');
// --------------------------------------------------------------------------
// 3.Delete Elemen Array
// 3.1. POP
// untuk menghapus elemen terakhir dalama array
let hewan = ['kuda', 'singa', 'zebra', 'ular'];
let hapusHewan = function () {
    // method pop() hanya bisa menghapus elemen terakhir dari array hewan
    hewan.pop();
}
hapusHewan();
// 3.2 SHIFT
// untuk menghapus elemen pertama dalama array
// hewan.shift()