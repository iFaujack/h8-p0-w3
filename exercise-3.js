var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling(input){
    var print = ["Nomor ID: ", "Nama Lengkap: ","Lokasi:","TT:","Hobi:"];
    for (var i=0; i<input.length; i++){
        var data = input[i];
        for (var j=0; j<data.length; j++){
            console.log(print[j] + data[j]);
        }
        console.log("")
    }
}

dataHandling(input);