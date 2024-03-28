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

var kendaraanKeluar = function (platNomorKendaraan, slotParkir) {
  // jika slot parkiran kosong
  if (slotParkir.length == 0) {
    console.log("Seluruh parkiran telah kosong");
    return slotParkir;
  } else {
    // telusuri keseluruhan slot parkir
    for (var i = 0; i < slotParkir.length; i++) {
      // jika ada kendaraan dengan plat nomor yang sesuai
      if (platNomorKendaraan == slotParkir[i]) {
        // keluarkan kendaraan tersebut dengan mengubah nilainya menjadi undefined
        slotParkir[i] = undefined;
        // kambalikan isi dari array dan keluar dari fungsi
        return slotParkir;
        //jika tidak ada kendaraan dengan plat nomor yang sesuai
      } else if (i == slotParkir.length - 1) {
        // tampilkan pesan "kendaraan tersebut tidak ada di parkiran"
        console.log(
          "Kendaraan dengan plat nomor : " +
            platNomorKendaraan +
            " dimaling orang tadi"
        );
        // kembalikan isi dari array dan keluar dari fungsi
        return slotParkir;
      }
    }
  }
};
