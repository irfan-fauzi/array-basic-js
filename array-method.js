// Array method
// 1.Join
// method untuk menggabungkan seluruh isi array dan mengunahnya menjadi String
let ubahJadiString = function (nama) {
    // join() akan mengubah elemen array menjadi string utuh tanpa pengulangan (for / forEach)
    // bedanya join() hanya akan menampilkan nya secara mendatar saja (persis seperti type data String)
    console.log(nama.join());
}
ubahJadiString(['irfan', 'fauzi', 'rahman', 'jani']);