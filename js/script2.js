// membuat objek
function Parkiran(pengelola, slotParkir, kas) {
  this.pengelola = pengelola;
  this.slotParkir = slotParkir;
  this.kas = kas;

  this.kendaraanMasuk = function (platNomorKendaraan) {
    this.slotParkir.push(platNomorKendaraan);
    return this.slotParkir;
  };
}
var parkiranA = new Parkiran("Ifdal", [], 0);
var parkiranB = new Parkiran("Lisyukri", [], 0);
