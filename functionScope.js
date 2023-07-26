// global scope / window scope

var a = 1;

// scope di function tidak bisa dijalankan dari luar, tetapi scope global bisa dijalankan dalam function
function tes() {
    // name conflict
    // jika didalam function tidak memakai var, bisa dijalankan dari luar
    var a = 2;
    
}

tes();
console.log(a);