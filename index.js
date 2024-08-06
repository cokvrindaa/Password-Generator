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
let tampilslider = document.getElementById("tampilslider");
slider.addEventListener("input", function () {
  tampilslider.textContent = slider.value;
  panjangKarakter = slider.value;
  bikin()
});
let panjangKarakter = slider.value;
// pengecekan check box huruf besar
chekHurufbesar.addEventListener("click", function () {
  if (chekHurufbesar.checked == true) {
    a += 1;
    console.log("a" + a);
  } else {
    a = 0;
    console.log(a);
  }
  bikin()
});
checkHurufkecil.addEventListener("click", function () {
  if (checkHurufkecil.checked == true) {
    b += 1;
    console.log("b" + b);
  } else {
    b = 0;
    console.log(b);
  }
  bikin()
});
checkAngka.addEventListener("click", function () {
  if (checkAngka.checked == true) {
    c += 1;
    console.log("c" + c);
  } else {
    c = 0;
    console.log(c);
  }
  bikin()
});
checkSimbol.addEventListener("click", function () {
  if (checkSimbol.checked == true) {
    d += 1;
    console.log("d" + d);
  } else {
    d = 0;
    console.log(d);
  }
  bikin()
});

function bikin() {
  let password = "";
  // a = ab, ac, ad
  if (a === 1 && b === 1) {
    password += hurufBesar[Math.floor(Math.random() * hurufBesar.length)];
    password += hurufKecil[Math.floor(Math.random() * hurufKecil.length)];
  }
  if (a === 1 && c === 1) {
    password += hurufBesar[Math.floor(Math.random() * hurufBesar.length)];
    password += hurufKecil[Math.floor(Math.random() * hurufKecil.length)];
  }
  if (a === 1 && d === 1) {
    password += hurufBesar[Math.floor(Math.random() * hurufBesar.length)];
    password += simbol[Math.floor(Math.random() * simbol.length)];
  }
  // b = bc, bd
  if (b === 1 && c === 1) {
    password += hurufKecil[Math.floor(Math.random() * hurufKecil.length)];
    password += nomor[Math.floor(Math.random() * nomor.length)];
  }
  if (b === 1 && d === 1) {
    password += hurufKecil[Math.floor(Math.random() * hurufKecil.length)];
    password += simbol[Math.floor(Math.random() * simbol.length)];
  }
  // c = cd.
  if (c === 1 && d === 1) {
    password += nomor[Math.floor(Math.random() * nomor.length)];
    password += simbol[Math.floor(Math.random() * simbol.length)];
  }
  //huruf besar
  else if (a === 1) {
    password += hurufBesar[Math.floor(Math.random() * hurufBesar.length)];
  }
  //hurufkecil
  else if (b === 1) {
    password += hurufKecil[Math.floor(Math.random() * hurufKecil.length)];
  }
  //angka
  else if (c == 1) {
    password += nomor[Math.floor(Math.random() * nomor.length)];
  }
  //simbol
  else if (d == 1) {
    password += simbol[Math.floor(Math.random() * simbol.length)];
  } else {
    password += hurufKecil[Math.floor(Math.random() * hurufKecil.length)];
    password += nomor[Math.floor(Math.random() * nomor.length)];
    password += simbol[Math.floor(Math.random() * simbol.length)];
    password += hurufBesar[Math.floor(Math.random() * hurufBesar.length)];
  }

  while (panjangKarakter > password.length) {
    // a = ab, ac, ad
    if (a === 1 && b === 1) {
      password += hurufBesar[Math.floor(Math.random() * hurufBesar.length)];
      password += hurufKecil[Math.floor(Math.random() * hurufKecil.length)];
    }
    if (a === 1 && c === 1) {
      password += hurufBesar[Math.floor(Math.random() * hurufBesar.length)];
      password += nomor[Math.floor(Math.random() * nomor.length)];
    }
    if (a === 1 && d === 1) {
      password += hurufBesar[Math.floor(Math.random() * hurufBesar.length)];
      password += simbol[Math.floor(Math.random() * simbol.length)];
    }
    // b = bc, bd
    if (b === 1 && c === 1) {
      password += hurufKecil[Math.floor(Math.random() * hurufKecil.length)];
      password += nomor[Math.floor(Math.random() * nomor.length)];
    }
    if (b === 1 && d === 1) {
      password += hurufKecil[Math.floor(Math.random() * hurufKecil.length)];
      password += simbol[Math.floor(Math.random() * simbol.length)];
    }
    // c = cd.
    if (c === 1 && d === 1) {
      password += nomor[Math.floor(Math.random() * nomor.length)];
      password += simbol[Math.floor(Math.random() * simbol.length)];
    }
    //huruf besar
    else if (a === 1) {
      password += hurufBesar[Math.floor(Math.random() * hurufBesar.length)];
    }
    //huruf kecil
    else if (b === 1) {
      password += hurufKecil[Math.floor(Math.random() * hurufKecil.length)];
    }
    //angka
    else if (c === 1) {
      password += nomor[Math.floor(Math.random() * nomor.length)];
    }
    //simbol
    else if (d === 1) {
      password += simbol[Math.floor(Math.random() * simbol.length)];
    } else {
      password +=
        semuaKarakter[Math.floor(Math.random() * semuaKarakter.length)];
    }
  }
  console.log("password = " + password);
  tampilpas.textContent = password;
}
