var slotParkir = [];
var kendaraanMasuk = function (platNomorKendaraan, slotParkir) {
  // jika parkiran kosong
  if (slotParkir.length == 0) {
    // tambah slotParkir diawal array
    slotParkir.push(platNomorKendaraan);
    // kembalikan isi array dan keluar  dari fungsi
    return slotParkir;
  } else {
    // telusuri ketersediaan slot parkir
    for (var i = 0; i < slotParkir.length; i++) {
      // jika ada slot kosong
      if (slotParkir[i] == undefined) {
        // parkirkan kendaraanMasuk yang baru masuk ke slot tersebut
        slotParkir[i] = platNomorKendaraan;
        // kembalikan isi array & keluar dari fungsi
        return slotParkir;
      }
      // jika ada kendaraan yang sama
      else if (platNomorKendaraan == slotParkir[i]) {
        // tampilkan pesan kesalahannya
        console.log(
          "kendaraan dengan plat nomor : " +
            platNomorKendaraan +
            " sudah berada di parkiran"
        );
        // kembalikan isi dari array dan keluar dari fungsi
        return slotParkir;
      }
      // jika seluruh slot parkir terisi
      else if (i == slotParkir.length - 1) {
        // tambah slot parkir di akhir array
        slotParkir.push(platNomorKendaraan);
        // kembalikan isi dari array dan keluar dari fungsi
        return slotParkir;
      }
    }
  }
};
