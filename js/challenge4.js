//const untuk button-button yang akan dipilih player
const batuPlayer = document.getElementById('batu-player');
const kertasPlayer = document.getElementById('kertas-player');
const guntingPlayer = document.getElementById('gunting-player');

//const untuk button-button com
const batuCom = document.getElementById('batu-com');
const kertasCom = document.getElementById('kertas-com');
const guntingCom = document.getElementById('gunting-com');

//const untuk menampilkan hasil game di web secara DOM
const boxHasil = document.getElementById('box-hasil');
const refresh = document.getElementById('refresh');


//daftar function
    //function untuk menentukan pilihan com dan mengubah tampilan button com sesuai dengan hasil pilihan com
let pilihanCom
let random
function buatPilihanCom() {
    random = Math.floor(Math.random() * 3);

    if (random === 0) {
        pilihanCom = 'batu';
        batuCom.classList.add('terpilih');
    }
    if (random === 1) {
        pilihanCom = 'kertas';
        kertasCom.classList.add('terpilih');
    }
    if (random === 2) {
        pilihanCom = 'gunting';
        guntingCom.classList.add('terpilih');
    }
}

    //function untuk menentukan hasil game dan menampilkannya di web
let hasil
function buatHasil() {
    if (pilihanPlayer === pilihanCom) {
        hasil = 'DRAW';
        boxHasil.classList.add('display-hasil-draw');
    }
    if (pilihanPlayer === 'batu' && pilihanCom === 'kertas') {
        hasil = 'COM WIN';
    }
    if (pilihanPlayer === 'kertas' && pilihanCom === 'gunting') {
        hasil = 'COM WIN';
    }
    if (pilihanPlayer === 'gunting' && pilihanCom === 'batu') {
        hasil = 'COM WIN';
    }
    if (pilihanPlayer === 'gunting' && pilihanCom === 'kertas') {
        hasil = 'PLAYER 1 WIN';
    }
    if (pilihanPlayer === 'kertas' && pilihanCom === 'batu') {
        hasil = 'PLAYER 1 WIN';
    }
    if (pilihanPlayer === 'batu' && pilihanCom === 'gunting') {
        hasil = 'PLAYER 1 WIN';
    }
    console.log(hasil);
    boxHasil.innerHTML = hasil;
    boxHasil.classList.add('display-hasil');
}

    //function stop, untuk men-disable button-button 'batu', 'gunting', 'kertas' agar tidak bisa diklik 2 kali.
function stop() {
    batuPlayer.classList.add('stop');
    kertasPlayer.classList.add('stop');
    guntingPlayer.classList.add('stop');
}
//akhir dari daftar function

//execute
let pilihanPlayer
batuPlayer.addEventListener('click', function() {
    batuPlayer.classList.add('terpilih');
    pilihanPlayer = 'batu';
    console.log(pilihanPlayer);
    buatPilihanCom();
    buatHasil();
    stop();
})
kertasPlayer.addEventListener('click', function() {
    kertasPlayer.classList.add('terpilih');
    pilihanPlayer = 'kertas';
    console.log(pilihanPlayer);
    buatPilihanCom();
    buatHasil();
    stop();
})
guntingPlayer.addEventListener('click', function() {
    guntingPlayer.classList.add('terpilih');
    pilihanPlayer = 'gunting';
    console.log(pilihanPlayer);
    buatPilihanCom();
    buatHasil();
    stop();
})
//akhir dari execute


//js untuk tombol refresh
refresh.addEventListener('click', function() {
    batuPlayer.classList.remove('terpilih');
    kertasPlayer.classList.remove('terpilih');
    guntingPlayer.classList.remove('terpilih');
    batuCom.classList.remove('terpilih');
    kertasCom.classList.remove('terpilih');
    guntingCom.classList.remove('terpilih');
    boxHasil.classList.remove('display-hasil');
    boxHasil.classList.remove('display-hasil-draw');
    boxHasil.classList.add('info-vs');
    boxHasil.innerHTML = 'VS';
    batuPlayer.classList.remove('stop');
    kertasPlayer.classList.remove('stop');
    guntingPlayer.classList.remove('stop');
})
//akhir dari js untuk tombol refresh