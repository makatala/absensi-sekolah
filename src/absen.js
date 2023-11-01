

// elButtonAbsen.addEventListener('click', tambahDataAbsen);
const elemenTabel = document.getElementById('data-absen');

function tampilkanDataAbsen() {
  elemenTabel.innerHTML = '';
  const jumlahAbsen = dataAbsen.length;
  for (let i = 0; i < jumlahAbsen; i++) {
    const item = dataAbsen[i];
    const cariSiswa = dataSiswa.find(d => d.nomor === item.nomor)
    if (typeof cariSiswa === 'undefined') continue
    const elemenbarisdata = document.createElement('tr');
    elemenbarisdata.innerHTML = `<td>${item.nomor}</td><td>${cariSiswa.nama}</td><td>${cariSiswa.kelas}</td><td>${item.hari}</td><td>${item.jam}</td>`;
    elemenTabel.appendChild(elemenbarisdata);
  }
}

function tambahDataAbsen(nomor) {
  if (nomor === '') {
    alert('Mohon lengkapi isian!');
    return;
  }

  const cariSiswa = dataSiswa.find(d => d.nomor === nomor)
  if (typeof cariSiswa === 'undefined') {
    alert(`Data Siswa dengan Nomor Absen ${nomor} tidak ditemukan!`)
    return
  }
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0'); // Bulan dimulai dari 0
  const day = String(now.getDate()).padStart(2, '0');
  const hour = String(now.getHours()).padStart(2, '0');
  const minute = String(now.getMinutes()).padStart(2, '0');
  const second = String(now.getSeconds()).padStart(2, '0');

  const hariMasuk = `${year}-${month}-${day}`
  const jamMasuk = `${hour}:${minute}:${second}`

  const cariAbsen = dataAbsen.find(d => d.hari === hariMasuk && d.nomor === nomor)
  // console.log(JSON.stringify({ cariAbsen }))
  if (typeof cariAbsen !== 'undefined') {
    alert(`${cariSiswa.nama} sudah absen hari ini`)
    return
  }

  dataAbsen.push({ nomor, hari: hariMasuk, jam: jamMasuk });
  simpanData('absen', dataAbsen)
  // console.log(JSON.stringify({ dataAbsen }));
  tampilkanDataAbsen()
  elFormAbsen.reset()
}

tampilkanDataAbsen()

