function buatKodeQR(kode) {
    elModalTitle.innerText = 'Kode QR'
    elModalBody.innerHTML = ''
    const bodyQR = document.createElement('div');
    bodyQR.setAttribute('class', 'm-auto')
    bodyQR.setAttribute('style', 'width: 300px')
  
    const qrcode = new QRCode(bodyQR, {
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