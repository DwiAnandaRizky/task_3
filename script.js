//Membuat teks kedalam halaman html
const judul = document.getElementById("judul");
judul.innerText = "Document 1";

//Membuat elemen p
const newP = document.createElement("p");
const newPText = document.createTextNode("Section 2");
newP.appendChild(newPText);

//Memasukkan elemen p kedalam id='container'
const divP = document.getElementById("container");
divP.appendChild(newP);

//Memberikan batas penambahan
let i = 3;

//Fungsi ketika tombol + di klik maka paragraf akan bertambah
function tambahP() {
  if (i > 7) {
    alert("Sorry, can not add sections anymore");
  } else {
    const newPs = document.createElement("p");
    const newPTexts = document.createTextNode("Section " + i);
    newPs.appendChild(newPTexts);

    //Memasukkan elemen p kedalam id='container'
    const divPs = document.getElementById("container");
    divPs.appendChild(newPs);
  }
  i++;
}
//Menggunakan addeventlistener untuk event handler 
const button = document.getElementById("tombol");
button.addEventListener("click", tambahP);

