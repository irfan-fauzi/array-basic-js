// saya punya array number[]
let number = [1, 2, 3, 4, 5, 6, 9, 8, 7];
// saya buat function sederhana
function jadiGenap(param) {
    // function ini menjalankan method filter()
    return param.filter(function (e) {
        // mengembalikan nilai / operasi matematik / apa saja
        return e % 2 === 0;
    });
}

let angkaGenap = jadiGenap(number);
conslole.log(angkaGenap);
