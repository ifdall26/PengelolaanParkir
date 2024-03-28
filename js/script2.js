// membuat objek
function Parkiran(pengelola, slotParkir, kas) {
  this.pengelola = pengelola;
  this.slotParkir = slotParkir;
  this.kas = kas;

  this.kendaraanMasuk = function (platNomorKendaraan) {
    this.slotParkir.push(platNomorKendaraan);
    return this.slotParkir;
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
        return slotParkir;
      }
    }
  };
}
var parkiranA = new Parkiran("Ifdal", [], 0);
var parkiranB = new Parkiran("Lisyukri", [], 0);
