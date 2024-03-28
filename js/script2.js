// membuat objek
function Parkiran(pengelola, slotParkir, kas) {
  this.pengelola = pengelola;
  this.slotParkir = slotParkir;
  this.kas = kas;

  this.kendaraanMasuk = function (platNomorKendaraan) {
    if (this.slotParkir.length === 0) {
      this.slotParkir.push(platNomorKendaraan);
      return this.slotParkir;
    } else {
      // telusuri ketersediaan slot parkir
      for (var i = 0; i < this.slotParkir.length; i++) {
        // jika ada slot kosong
        if (!this.slotParkir[i]) {
          // parkirkan kendaraan yang baru masuk ke slot tersebut
          this.slotParkir[i] = platNomorKendaraan;
          // kembalikan isi array & keluar dari fungsi
          return this.slotParkir;
        }
        // jika ada kendaraan yang sama
        else if (platNomorKendaraan == this.slotParkir[i]) {
          // tampilkan pesan kesalahannya
          console.log(
            "kendaraan dengan plat nomor : " +
              platNomorKendaraan +
              " sudah berada di parkiran"
          );
          // kembalikan isi dari array dan keluar dari fungsi
          return this.slotParkir;
        }
      }
      // jika seluruh slot parkir terisi, tambah slot parkir baru di akhir array
      this.slotParkir.push(platNomorKendaraan);
      // kembalikan isi dari array
      return this.slotParkir;
    }
  };

  this.kendaraaanKeluar = function (platNomorKendaraan, tarif) {
    if (slotParkir.length === 0) {
      console.log("Seluruh slot parkir dalam keadaan kosong");
      return false;
    }

    for (var i = 0; i < slotParkir.length; i++) {
      if (this.slotParkir[i] == platNomorKendaraan) {
        this.slotParkir[i] = undefined;
        this.kas += tarif;
        return this.slotParkir;
      }
    }
  };
}
var parkiranA = new Parkiran("Ifdal", [], 0);
var parkiranB = new Parkiran("Lisyukri", [], 0);
