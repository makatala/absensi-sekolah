// variabel
let dataKelas = ambilData('kelas') || []
let dataSiswa = ambilData('siswa') || []
let dataAbsen = ambilData('absen') || []

let indexDataUpdate = -1

const Sheet1 = 'Data Siswa'
const Sheet2 = 'Data Absen'

let KodeperBaris = 3
let UkuranKode = 100
let Kolom = 'col-4'

const codeReader = new ZXing.BrowserQRCodeReader();

function ambilData(key) {
  const dataString = localStorage.getItem(key)
  if (typeof dataString === 'undefined' || dataString === null) {
    return null
  }
  return JSON.parse(dataString).data
}

function simpanData(key, data) {
  const dataTersimpan = JSON.stringify({ data })
  console.log(dataTersimpan)
  localStorage.setItem(key, dataTersimpan)
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getKolom(jumlah) {
  switch (jumlah) {
      case 1:
          return 12;
      case 2:
          return 6;
      case 3:
          return 4;
      case 4:
          return 3;
      case 6:
          return 2;
      case 12:
          return 1;
      default:
          return -1;
  }
}