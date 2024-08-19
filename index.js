let hurufKecil = "abcdefghijklmnopqrstuvwxyz";
let hurufBesar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let nomor = "0123456789";
let simbol = "!@#$%&*()+=?-";
let semuaKarakter = hurufBesar + hurufKecil + nomor + simbol;
let chekHurufbesar = document.getElementById("hurufbesarsaja");
let checkHurufkecil = document.getElementById("hurufkecil");
let checkSimbol = document.getElementById("simbol");
let checkAngka = document.getElementById("angka");
let tampilpas = document.getElementById("tampilpass");
let a = chekHurufbesar.checked ? 1 : 0;
let b = checkHurufkecil.checked ? 1 : 0;
let c = checkAngka.checked ? 1 : 0;
let d = checkSimbol.checked ? 1 : 0;
let slider = document.getElementById("slider");
let panjangKarakter = slider.value;
let keamanan = document.getElementById("keamanan");
slider.addEventListener("input", function () {
  tampilslider.textContent = "Panjang: " + slider.value;
  panjangKarakter = slider.value; // Update panjangKarakter
  bikin(); // Panggil fungsi bikin
});

// pengecekan check box huruf besar
chekHurufbesar.addEventListener("click", function () {
  if (chekHurufbesar.checked == true) {
    a += 1;
    console.log("a" + a);
  } else {
    a = 0;
    console.log(a);
  }
  bikin();
});
checkHurufkecil.addEventListener("click", function () {
  if (checkHurufkecil.checked == true) {
    b += 1;
    console.log("b" + b);
  } else {
    b = 0;
    console.log(b);
  }
  bikin();
});
checkAngka.addEventListener("click", function () {
  if (checkAngka.checked == true) {
    c += 1;
    console.log("c" + c);
  } else {
    c = 0;
    console.log(c);
  }
  bikin();
});
checkSimbol.addEventListener("click", function () {
  if (checkSimbol.checked == true) {
    d += 1;
    console.log("d" + d);
  } else {
    d = 0;
    console.log(d);
  }
  bikin();
});
function bikin() {
  let password = "";
  // Tambahkan setidaknya satu karakter dari setiap kategori yang dipilih
  if (a === 1) {
    password += hurufBesar[Math.floor(Math.random() * hurufBesar.length)];
  }
  if (b === 1) {
    password += hurufKecil[Math.floor(Math.random() * hurufKecil.length)];
  }
  if (c === 1) {
    password += nomor[Math.floor(Math.random() * nomor.length)];
  }
  if (d === 1) {
    password += simbol[Math.floor(Math.random() * simbol.length)];
  }
  // Tambahkan karakter secara acak sampai panjang password sesuai dengan panjang yang diinginkan
  while (password.length < panjangKarakter) {
    let karakterTersedia = "";
    // Gabungkan karakter yang diizinkan ke dalam satu string
    if (a === 1) karakterTersedia += hurufBesar;
    if (b === 1) karakterTersedia += hurufKecil;
    if (c === 1) karakterTersedia += nomor;
    if (d === 1) karakterTersedia += simbol;
    // Tambahkan satu karakter acak dari karakter yang tersedia
    password +=
      karakterTersedia[Math.floor(Math.random() * karakterTersedia.length)];
  }
  // Jika password lebih panjang dari yang diinginkan, potong sesuai panjangKarakter
  password = password.substring(0, panjangKarakter);
  console.log("password = " + password);
  if (a === 0 && b === 0 && c === 0 && d === 0){
    tampilpas.textContent = "MINIMAL KETENTUANYA DI CENTANG!"
    keamanan.textContent = "Centang dulu bree!! 🤡"
  }
  else{
    tampilpas.textContent = password;
    if(panjangKarakter < 10){
      keamanan.textContent = "Kurang 😓";
    }
    if(panjangKarakter >= 10 && panjangKarakter <= 20){
      keamanan.textContent = "Sedang 😐";
    }
    if(panjangKarakter >= 20 && panjangKarakter <= 40){
      keamanan.textContent = "Kuat 😁";
    }
    if(panjangKarakter >= 40 && panjangKarakter <= 50){
      keamanan.textContent = "Sangat Kuat 😎";
    }
  }

}
let copyBtn = document.getElementById("copyBtn");
copyBtn.addEventListener("click", function() {
  let password = tampilpas.textContent;
  
  // Buat elemen textarea sementara untuk menyalin teks
  let textarea = document.createElement("textarea");
  textarea.value = password;
  
  // Tambahkan textarea ke dalam dokumen
  document.body.appendChild(textarea);
  
  // Pilih dan salin teks dari textarea
  textarea.select();
  document.execCommand("copy");
  
  // Hapus textarea dari dokumen
  document.body.removeChild(textarea);

  // Tampilkan notifikasi bahwa teks berhasil disalin
  document.getElementById("alert").style.display = "block";
  setTimeout(function(){
      document.getElementById("alert").style.display = "none";
  }, 1000);
});
