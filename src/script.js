const elnamaSiswa = document.getElementById('nama-siswa').value;
const elkelasSiswa = document.getElementById('kelas-siswa').value;
const elidSiswa = document.getElementById('id-siswa').value;
const elhariMasuk = document.getElementById('hari-masuk').value;
const eljamMasuk = document.getElementById('jam-masuk').value;
const elButton = document.getElementById('tombol-tambah')
let indexDataUpdate = -1

function ambilData(key) {
  
    const dataString = localStorage.getItem(key)
    if (typeof dataString === 'undefined' || dataString === null) {
      return null
    }
    console.log(dataString)
    return JSON.parse(dataString).data
  }
  
  function simpanData(key, data) {
    const dataTersimpan = JSON.stringify({data})
    console.log(dataTersimpan)
    localStorage.setItem(key, dataTersimpan)
  }
  
  let daftarSiswa = ambilData('siswa') || []
  console.log(daftarSiswa)
  document.getElementById('tombol-tambah').addEventListener('click', tambahData);
  const elemenTabel = document.getElementById('data-siswa');
  
  function tampilkanData() {
    elemenTabel.innerHTML = '';
    const jumlahSiswa = daftarSiswa.length;
    for (let i = 0; i < jumlahSiswa; i++) {
      const item = daftarSiswa[i];
      const elemenbarisdata = document.createElement('tr');
      elemenbarisdata.innerHTML = `<td>
        <button type="button" onclick="hapusData(${i})" class="btn btn-danger">
        Hapus Data
        </button>

        <button type="button" onclick="updateData(${i})" class="btn btn-success">
          Update Data
        </button> ${item.nama}</td><td>${item.kelas}</td><td>${item.id}</td><td>${item.hari}</td><td>${item.jam}</td>`;
      elemenTabel.appendChild(elemenbarisdata);
    }
  }
  
  function updateData(z) {
    indexDataUpdate = z
    const dataUpdate = daftarSiswa[z]
    elNamaSiswa.value = dataUpdate.nama
    elJamMasuk.value = dataUpdate.jam
    elIdSiswa.value = dataUpdate.id
    elHariMasuk.value = dataUpdate.hari
    elJamMasuk.value = dataUpdate.jam
    elButton.innerText = 'Update Data'
  }
  

  function hapusData(z) {
    daftarSiswa.splice(z, 1)
    simpanData('siswa', daftarSiswa)
    tampilkanData()
  }
  
  function tambahData() {
    console.log('tombol tambah data di-klik');
    let namaSiswa = document.getElementById('nama-siswa').value;
    let kelasSiswa = document.getElementById('kelas-siswa').value;
    let idSiswa = document.getElementById('id-siswa').value;
    let hariMasuk = document.getElementById('hari-masuk').value;
    let jamMasuk = document.getElementById('jam-masuk').value;
    if (namaSiswa === '' || kelasSiswa === '' || idSiswa === '' || hariMasuk === '' || jamMasuk === '') {
      alert('Mohon lengkapi isian!');
      return;
    }
    daftarSiswa.push({ nama: namaSiswa, kelas: kelasSiswa, id: idSiswa, hari: hariMasuk, jam: jamMasuk,  });

    if (indexDataUpdate > 0) {
      indexDataUpdate = -1
      elButton.innerText = 'Tambah Data'
      daftarSiswa.splice(indexDataUpdate, 1, { nama: namaSiswa, kelas: kelasSiswa, id: idSiswa, hari: hariMasuk, jam: jamMasuk, })
    } else {
      daftarSiswa.push({ nama: namaSiswa, kelas: kelasSiswa, id: idSiswa, hari: hariMasuk, jam: jamMasuk, });
    }
    simpanData('siswa', daftarSiswa)
    console.log(JSON.stringify({ daftarSiswa }));
    tampilkanData()
  }
  
   
  
  tampilkanData()