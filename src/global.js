// variabel
let dataSiswa = ambilData('siswa') || []
let dataAbsen = ambilData('absen') || []

let indexDataUpdate = -1

const Sheet1 = 'Data Siswa'
const Sheet2 = 'Data Absen'

function ambilData(key) {
  const dataString = localStorage.getItem(key)
  if (typeof dataString === 'undefined' || dataString === null) {
    return null
  }
  console.log(dataString)
  return JSON.parse(dataString).data
}

function simpanData(key, data) {
  const dataTersimpan = JSON.stringify({ data })
  console.log(dataTersimpan)
  localStorage.setItem(key, dataTersimpan)
}