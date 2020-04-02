// Filter()
// metode ini berfungsi untuk membuat sebuah array baru dari array yang sudah ada, kita seleksi array yang akan kita ambil => kita seleksi sekaligus olah elemen arraynya =>    kemudian kita pisahkan menjadi array yang baru
// IMPLEMENTASI

// kita punya array number[]
let number = [1, 2, 3, 4, 5, 6, 9, 8, 7];
// function yang akan memfilter angka genap dari array number menjadi leih besar dari 5
function lebihBesardariLima(param) {
    // parameter param = digunakan untuk mengambil argumen array number[]
    // singkatnya : (param = number[])
    return param.filter(function (e) {
        // parameter e = digunakan untuk menangkap setiap elemen dari array number 
        // singkatnya : (e = elemen dari array number[])
        return e >= 5;

    });
}

function jadiGenap(param) {
    return param.filter(function (e) {
        return e % 2 === 0;
    });
}
// let hasil = lebihBesardariLima(number);
// let hasil2 = jadiGenap(number);

// CONTOH MENGGUNAKAN filter() yang lebih realistis
let serieA = [{
        club: 'juventus',
        klasemen: 1
    },
    {
        club: 'lazio',
        klasemen: 3
    },
    {
        club: 'brescia',
        klasemen: 2
    },
    {
        club: 'ac milan',
        klasemen: 6
    },
    {
        club: 'internazionale',
        klasemen: 4
    },
    {
        club: 'napoli',
        klasemen: 7
    },
    {
        club: 'fiorentina',
        klasemen: 8
    },
]
const masukLigaChampions = function (param) {
    return param.filter(function (e) {
        return e.klasemen <= 3;
    });
}
const lolosLigaChampions = masukLigaChampions(serieA);
console.log(lolosLigaChampions);