var myLoc;
var myMap;
var canvas;

var mappa = new Mappa('MapboxGL', 'pk.eyJ1IjoiZmlsaXBwb2ZlcnJhcmkiLCJhIjoiY2pvcjBjODBkMGFycjNwa3cxZm5yOW4xdyJ9.Mi1WrnitxS1WTjQDSZGBqA');

var mexicoLat = 24.3794071;
var mexicoLon = -104.3900085;

var JungLat = 42.3142647;
var JungLon = -71.1103688;
var Jung$ = 100;

var RossLat = 32.1450787;
var RossLon = -95.141931;
var Ross$ = 600;

var RafaLat = 25.3626566;
var RafaLon = -107.5705903;
var Rafa$ = 650;

var ChapoLat = 32.4966818;
var ChapoLon = -117.0878931;
var Chapo$ = 14000;

var CaliLat = 3.3950619;
var CaliLon = -76.5957049;
var Cali$ = 3000;

var GachaLat = 5.1379183;
var GachaLon = -74.1703776;
var Gacha$ = 5000;

var KhunLat = 22.4223925;
var KhunLon = 98.0236242;
var Khun$ = 5000;

var OchoaLat = 6.2441988;
var OchoaLon = -75.6512524;
var Ochoa$ = 6000;

var AmadoLat = 24.8433278;
var AmadoLon = -107.7493806;
var Amado$ = 25000;

var PabloLat = 6.1448366;
var PabloLon = -75.3925951;
var Pablo$ = 30000;

//
var options = {
  lat: mexicoLat,
  lng: mexicoLon,
  zoom: 2,
  style: 'mapbox://styles/filippoferrari/cjozogo730jvx2rqv2innit5i'
}

function preload() {

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  myMap = mappa.tileMap(options);

  myMap.overlay(canvas);

}

function draw() {
  clear();

  //Net worth line pablo
  push();
  noStroke();
  fill(230, 176, 170);
  rect(0, 480, 300, 10);
  pop();

  //Net worth line amado
  push();
  noStroke();
  fill(215, 189, 226);
  rect(0, 490, 250, 10);
  pop();

  //Net worth line el chapo
  push();
  noStroke();
  fill(250, 215, 160);
  rect(0, 500, 140, 10);
  pop();

  //Net worth line ochoa
  push();
  noStroke();
  fill(169, 204, 227);
  rect(0, 510, 60, 10);
  pop();

  //Net worth line khun sa
  push();
  noStroke();
  fill(163, 228, 215);
  rect(0, 520, 50, 10);
  pop();

  //Net worth line gacha
  push();
  noStroke();
  fill(249, 231, 159);
  rect(0, 530, 50, 10);
  pop();

  //Net worth line cali
  push();
  noStroke();
  fill(162, 217, 206);
  rect(0, 540, 30, 10);
  pop();

  //Net worth line rafa
  push();
  noStroke();
  fill(171, 178, 185);
  rect(0, 550, 6.5, 10);
  pop();

  //Net worth line ross
  push();
  noStroke();
  fill(237, 187, 153);
  rect(0, 560, 6, 10);
  pop();

  //Net worth line jung
  push();
  noStroke();
  fill(204, 209, 209);
  rect(0, 570, 1, 10);
  pop();

  push();
  fill(214, 216, 203);
  textFont('Ultra');
  textAlign(CENTER);
  textSize(20);

  //Rafael Caro Quintero
  push();
  var rafa = myMap.latLngToPixel(RafaLat, RafaLon);
  ellipse(rafa.x, rafa.y, 20);
  var rafaDist = dist(mouseX, mouseY, rafa.x, rafa.y);
  if (rafaDist < 20) {
    fill(0);
    ellipse(rafa.x, rafa.y, 20);
    push();
    noStroke();
    fill(52, 73, 94);
    rect(0, 550, 6.5, 10);
    pop();
    text('Rafael Caro Quintero', rafa.x, rafa.y - 45);
    text('650 M $', rafa.x, rafa.y - 15);
  }
  pop();

  //Amado Carrillo Fuentes
  push();
  var amado = myMap.latLngToPixel(AmadoLat, AmadoLon);
  ellipse(amado.x, amado.y, 20);
  var amadoDist = dist(mouseX, mouseY, amado.x, amado.y);
  if (amadoDist < 20) {
    fill(0);
    push();
    noStroke();
    fill(142, 68, 173);
    rect(0, 490, 250, 10);
    pop();
    ellipse(amado.x, amado.y, 20);
    text('Amado Carrillo Fuentes', amado.x, amado.y - 45);
    text('25 B $', amado.x, amado.y - 15);
  }
  pop();

  //Ochoa Brothers
  push();
  var ochoa = myMap.latLngToPixel(OchoaLat, OchoaLon);
  ellipse(ochoa.x, ochoa.y, 20);
  var ochoaDist = dist(mouseX, mouseY, ochoa.x, ochoa.y);
  if (ochoaDist < 20) {
    fill(0);
    ellipse(ochoa.x, ochoa.y, 20);
    push();
    noStroke();
    fill(41, 128, 185);
    rect(0, 510, 60, 10);
    pop();
    text('Ochoa Brothers', ochoa.x, ochoa.y - 45);
    text('6 B $', ochoa.x, ochoa.y - 15);
  }
  pop();

  //Pablo Escobar
  push();
  var pablo = myMap.latLngToPixel(PabloLat, PabloLon);
  ellipse(pablo.x, pablo.y, 20);
  var pabloDist = dist(mouseX, mouseY, pablo.x, pablo.y);
  if (pabloDist < 20) {
    fill(0);
    ellipse(pablo.x, pablo.y, 20);
    push();
    noStroke();
    fill(192, 57, 43);
    rect(0, 480, 300, 10);
    pop();
    text('Pablo Escobar', pablo.x, pablo.y - 45);
    text('30 B $', pablo.x, pablo.y - 15);
  }
  pop();

  //Khun Sa
  push();
  var khun = myMap.latLngToPixel(KhunLat, KhunLon);
  ellipse(khun.x, khun.y, 20);
  var khunDist = dist(mouseX, mouseY, khun.x, khun.y);
  if (khunDist < 20) {
    fill(0);
    ellipse(khun.x, khun.y, 20);
    push();
    noStroke();
    fill(22, 160, 133);
    rect(0, 520, 50, 10);
    pop();
    text('Khun Sa', khun.x, khun.y - 45);
    text('5 B $', khun.x, khun.y - 15);
  }
  pop();

  //Jose Gonzalo Rodriguez Gacha
  push();
  var gacha = myMap.latLngToPixel(GachaLat, GachaLon);
  ellipse(gacha.x, gacha.y, 20);
  var gachaDist = dist(mouseX, mouseY, gacha.x, gacha.y);
  if (gachaDist < 20) {
    fill(0);
    ellipse(gacha.x, gacha.y, 20);
    push();
    noStroke();
    fill(241, 196, 15);
    rect(0, 530, 50, 10);
    pop();
    text('Jose Gonzalo Rodriguez Gacha', gacha.x, gacha.y - 45);
    text('5 B $', gacha.x, gacha.y - 15);
  }
  pop();

  //Cali Cartel
  push();
  var cali = myMap.latLngToPixel(CaliLat, CaliLon);
  ellipse(cali.x, cali.y, 20);
  var caliDist = dist(mouseX, mouseY, cali.x, cali.y);
  if (caliDist < 20) {
    fill(0);
    ellipse(cali.x, cali.y, 20);
    push();
    noStroke();
    fill(22, 160, 133);
    rect(0, 540, 30, 10);
    pop();
    text('Cali Cartel', cali.x, cali.y - 45);
    text('3 B $', cali.x, cali.y - 15);
  }
  pop();

  //El Chapo
  push();
  var chapo = myMap.latLngToPixel(ChapoLat, ChapoLon);
  ellipse(chapo.x, chapo.y, 20);
  var chapoDist = dist(mouseX, mouseY, chapo.x, chapo.y);
  if (chapoDist < 20) {
    fill(0);
    ellipse(chapo.x, chapo.y, 20);
    push();
    noStroke();
    fill(243, 156, 18);
    rect(0, 500, 140, 10);
    pop();
    text('El Chapo', chapo.x, chapo.y - 45);
    text('14 B $', chapo.x, chapo.y - 15);
  }
  pop();

  //George Jung
  push();
  var jung = myMap.latLngToPixel(JungLat, JungLon);
  ellipse(jung.x, jung.y, 20);
  var jungDist = dist(mouseX, mouseY, jung.x, jung.y);
  if (jungDist < 20) {
    fill(0);
    ellipse(jung.x, jung.y, 20);
    push();
    noStroke();
    fill(44, 62, 80);
    rect(0, 570, 1, 10);
    pop();
    text('George Jung', jung.x, jung.y - 45);
    text('100 M $', jung.x, jung.y - 15);
  }
  pop();

  //Freeway Rick Ross
  push();
  var ross = myMap.latLngToPixel(RossLat, RossLon);
  ellipse(ross.x, ross.y, 20);
  var rossDist = dist(mouseX, mouseY, ross.x, ross.y);
  if (rossDist < 20) {
    fill(0);
    ellipse(ross.x, ross.y, 20);
    push();
    noStroke();
    fill(211, 84, 0);
    rect(0, 560, 6, 10);
    pop();
    text('Freeway Rick Ross', ross.x, ross.y - 45);
    text('600 M $', ross.x, ross.y - 15);
  }
  pop();

  pop();

  //Description background
  push();
  strokeWeight(5);
  line(300, 0, 300, 400);
  line(0, 400, 300, 400)
  pop();
  push();
  noStroke();
  fill(226, 219, 201);
  rect(0, 0, 300, 400);
  pop();

  //title
  push();
  fill(0);
  textSize(35);
  textFont('Ultra');
  text('Drug Lords', 20, 50);
  pop();
  //Description of the map
  push();
  fill(0);
  textSize(18);
  textFont('Special Elite');
  text('This map shows the top 10', 20, 100);
  text('most famous drug lords in', 20, 120);
  text('history.', 20, 140);
  pop();

  //How to use it
  push();
  fill(0);
  textSize(18);
  textFont('Special Elite');
  textStyle(BOLD);
  text('HOW TO USE IT', 20, 190);
  pop();

  //Description of use 1
  push();
  fill(0);
  textSize(18);
  textFont('Special Elite');
  text('1. The map works better', 20, 240);
  text('if you zoom in to see', 40, 260);
  text('every detail.', 40, 280);
  pop();

  //Description of use 2
  push();
  fill(0);
  textSize(18);
  textFont('Special Elite');
  text('2. Go with the mouse over', 20, 320);
  text('any circle to see the', 40, 340);
  text('name and the net worth', 40, 360);
  text('of the drug lord.', 40, 380);
  pop();

  //fine
  push();
  fill(0);
  textSize(35);
  textFont('Ultra');
  text('Net Worth', 20, 450);
  pop();

}
