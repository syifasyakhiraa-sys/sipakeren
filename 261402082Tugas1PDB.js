function suitBatu() {
  let pilihan = ["batu", "gunting", "kertas"];
  let user = prompt("Pilih batu, gunting, atau kertas");
  let kom = pilihan[Math.floor(Math.random() * 3)];

  if (user == kom) {
    alert("Komputer pilih " + kom + ", seri");
  } else if (user == "batu" && kom == "gunting") {
    alert("Komputer pilih " + kom + ", kamu menang");
  } else if (user == "gunting" && kom == "kertas") {
    alert("Komputer pilih " + kom + ", kamu menang");
  } else if (user == "kertas" && kom == "batu") {
    alert("Komputer pilih " + kom + ", kamu menang");
  } else {
    alert("Komputer pilih " + kom + ", cupu deh kalah");
  }
}

function suitGajah() {
  let pilihan = ["gajah", "orang", "semut"];
  let user = prompt("Pilih gajah, orang, atau semut");
  let kom = pilihan[Math.floor(Math.random() * 3)];

  if (user == kom) {
    alert("Komputer pilih " + kom + ", seri");
  } else if (user == "gajah" && kom == "orang") {
    alert("Komputer pilih " + kom + ", kamu menang");
  } else if (user == "orang" && kom == "semut") {
    alert("Komputer pilih " + kom + ", kamu menang");
  } else if (user == "semut" && kom == "gajah") {
    alert("Komputer pilih " + kom + ", kamu menang");
  } else {
    alert("Komputer pilih " + kom + ", yahahai kalah kalah");
  }
}

function suitJari() {
  let pilihan = ["jempol", "telunjuk", "kelingking"];
  let user = prompt("Pilih jempol, telunjuk, atau kelingking");
  let kom = pilihan[Math.floor(Math.random() * 3)];

  if (user == kom) {
    alert("Komputer pilih " + kom + ", seri");
  } else if (user == "jempol" && kom == "telunjuk") {
    alert("Komputer pilih " + kom + ", kamu menang");
  } else if (user == "telunjuk" && kom == "kelingking") {
    alert("Komputer pilih " + kom + ", kamu menang");
  } else if (user == "kelingking" && kom == "jempol") {
    alert("Komputer pilih " + kom + ", kamu menang");
  } else {
    alert("Komputer pilih " + kom + ", kalah kalah");
  }
}
