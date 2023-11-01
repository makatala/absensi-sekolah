
// elemen

const elFormSiswa = document.getElementById('form-siswa')
const elFormAbsen = document.getElementById('form-absen')
const elFormKelas = document.getElementById('form-kelas')
const elKelasSiswa = document.getElementById('kelas-siswa')
const elNamaSiswa = document.getElementById('nama-siswa')
const elNomorAbsenSiswa = document.getElementById('nomor-absen-siswa')
const elNomorAbsen = document.getElementById('nomor-absen')
const elButtonSiswa = document.getElementById('tombol-siswa')
const elTabelSiswa = document.getElementById('data-siswa')
const templateRowSiswa = elTabelSiswa.querySelector('tr')

const elButtonAbsen = document.getElementById('tombol-absen')
const elUploadFile = document.getElementById('upload')
const elModalTitle = document.getElementById('modal-title')
const elModalBody = document.getElementById('modal-body')
const elQrCode = document.getElementById('area-cetak-qrcode')

const elHalaman = document.querySelectorAll('.halaman')
const elNavMenu = document.querySelectorAll(".menu-halaman")

const elKodeBaris = document.getElementById('kode-per-baris')
const elUkuranKode = document.getElementById('ukuran-kode')

const bMulaiScan = document.getElementById('mulai-scan')
const videoElement = document.getElementById('scanner')
const hasilElement = document.getElementById('hasil')

function buatElCard(title, element, ukuran) {
  const elCard = document.createElement('div')
  const elKode = document.createElement('div')
  elKode.setAttribute('class', 'mx-auto')
  elKode.setAttribute('style',`max-width: ${ukuran}px`)
  elKode.appendChild(element)
  const elCardBody = document.createElement('div')
  elCardBody.setAttribute('class', 'p-0')
  elCardBody.innerHTML=`<div class="w-100 mx-auto" style="max-width: ${ukuran}px"><p class="text-center text-truncate"><small>${title}</small></p></div>`
  elCard.appendChild(elKode)
  elCard.appendChild(elCardBody)
  return elCard
}