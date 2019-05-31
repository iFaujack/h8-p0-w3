var data = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(){
    var alamat = String(data.slice(2,3));
    var nama = String(data.slice(1,2));
    var tanggal = String(data.slice(3,4));
    data.splice(1,4);

    alamat = 'Provinsi ' + alamat;
    nama = nama + ' Elsharawy';
    var tanggalSplit = tanggal.split("/");
    
    var bulan = '';
    switch (tanggalSplit[1]){
        case '01':
            bulan = 'Januari'
            break;
        case '02': 
            bulan = 'Februari'
            break;
        case '03': 
            bulan = 'Maret'
            break;
        case '04':
            bulan = 'April'
            break;
        case '05':
            bulan = 'Mei'
            break;
        case '06':
            bulan = 'Juni'
            break;
        case '07': 
            bulan = 'Juli'
            break;
        case '08': 
            bulan= 'Agustus'
            break;
        case '09': 
            bulan = 'September'
            break;
        case '10':
            bulan = 'October'
            break;
        case '11':
            bulan = 'November'
            break;
        case '12': 
            bulan = 'Desember'
            break;
        default:
            bulan = 'Januari'
            break;
    }

    // console.log(tanggalSplit)

    data.push(nama, alamat , tanggal, "Pria", "SMA International Metro")


    // Log Test Case 
    console.log(data)
    console.log(bulan)
    console.log(tanggalSplit.sort(function(a, b){return b-a}))
    console.log(tanggalSplit.join("-"));
    console.log(nama.slice(0,15))

}

dataHandling2();
