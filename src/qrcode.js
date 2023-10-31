
function buatKodeQR(kode) {
  elModalTitle.innerText = 'Kode QR'
  elModalBody.innerHTML = ''
  const bodyQR = document.createElement('div');
  bodyQR.setAttribute('class', 'm-auto')
  bodyQR.setAttribute('style', 'width: 300px')

  new QRCode(bodyQR, {
    text: kode,
    width: 300,
    height: 300,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });
  elModalBody.innerHTML = ''
  elModalBody.appendChild(bodyQR)
}

function tampilkanQrCode() {
  elQrCode.innerHTML = ''
  let index = 0
  const jumlahSiswa = dataSiswa.length
  let _loop = true
  while (_loop) {
    const elRow = document.createElement('div')
    elRow.setAttribute('class', 'row page-break-inside-avoid')
    for (let j = 0; j < KodeperBaris; j++) {
      console.log(JSON.stringify({ index, jumlahSiswa }))
      const elCol = document.createElement('div')
      elCol.setAttribute('class', Kolom)
      if (jumlahSiswa > index) {
        const data = dataSiswa[index]
        const kelas = data.kelas
        const nama = data.nama
        const nomor = data.nomor
        const kode = `${nomor}-${nama}-${kelas}`
        console.log(JSON.stringify({ kode }))
        // elCol.innerHTML = kode
        const elTempQR = document.createElement('div')
        elTempQR.setAttribute('class', 'm-auto mt-3')
        new QRCode(elTempQR, {
          text: kode,
          width: UkuranKode,
          height: UkuranKode,
          colorDark: "#000000",
          colorLight: "#ffffff",
          correctLevel: QRCode.CorrectLevel.H
        });
        const elTempQRCode = buatElCard(kode, elTempQR, UkuranKode)
        elCol.appendChild(elTempQRCode)
      } else {
        _loop = false
      }
      elRow.appendChild(elCol)
      index++
    }
    elQrCode.appendChild(elRow)
  }
}


function cetakQRCode() {
  document.body.classList.add('p-0', 'm-0')
  document.getElementById('qrcode-page').classList.remove('mt-80')
  window.print()
  document.body.classList.remove('p-0', 'm-0')
  document.getElementById('qrcode-page').classList.add('mt-80')
}

async function fKolom(tempKPB) {
  try {
    if (tempKPB < 1) {
      await delay(100)
      elKodeBaris.value = 1
      return
    } else if (tempKPB > 12) {
      await delay(100)
      elKodeBaris.value = 12
      return
    }

    const jumlahKolom = getKolom(tempKPB)
    if (jumlahKolom < 0) {
      await delay(100)
      tempKPB--
      elKodeBaris.value = tempKPB
      fKolom(tempKPB)
      return
    }
    console.log(JSON.stringify({ jumlahKolom }))
    KodeperBaris = tempKPB
    Kolom = `col-${jumlahKolom}`
    tampilkanQrCode()
  } catch (error) {
    console.error(error)
  }
}

elKodeBaris.addEventListener('change', (e) => {
  console.log(e.currentTarget.value)
  const tempKPB = parseInt(e.currentTarget.value, 10)
  fKolom(tempKPB)
})

async function fPixel(ukuran) {
  try {
    if (ukuran < 20) {
      await delay(100)
      elUkuranKode.value = 20
      return
    } else if (ukuran > 300) {
      await delay(100)
      elUkuranKode.value = 300
      return
    }
    UkuranKode = ukuran
    tampilkanQrCode()
  } catch (error) {
    console.error(error)
  }
}

elUkuranKode.addEventListener('change', async (e) => {
  console.log(e.currentTarget.value)
  const tempUk = parseInt(e.currentTarget.value, 10)
  fPixel(tempUk)
})