// Fungsi untuk mengaktifkan mode gelap
function aktifkanModeGelap() {
    // Set kelas untuk body
    document.body.classList.remove("bg-body-tertiary");
    document.body.classList.add("bg-secondary");
  
    // Set kelas untuk elemen-elemen dengan kelas "isi"
    const elemenIsi = document.getElementsByClassName("isi");
    for (let i = 0; i < elemenIsi.length; i++) {
      elemenIsi[i].classList.remove("bg-info-subtle", "text-dark");
      elemenIsi[i].classList.add("bg-black", "text-white");
    }
  
    // Set kelas untuk elemen card-body
    const cardBodies = document.querySelectorAll(".card-body");
    cardBodies.forEach((cardBody) => {
      cardBody.classList.remove("bg-info-subtle", "text-dark");
      cardBody.classList.add("bg-dark", "text-white");
    });
  }
  
  // Fungsi untuk mengaktifkan mode terang
  function aktifkanModeTerang() {
    // Set kelas untuk body
    document.body.classList.remove("bg-secondary");
    document.body.classList.add("bg-body-tertiary");
  
    // Set kelas untuk elemen-elemen dengan kelas "isi"
    const elemenIsi = document.getElementsByClassName("isi");
    for (let i = 0; i < elemenIsi.length; i++) {
      elemenIsi[i].classList.remove("bg-dark", "text-white");
      elemenIsi[i].classList.add("bg-info-subtle", "text-dark");
    }
  
    // Set kelas untuk elemen card-body
    const cardBodies = document.querySelectorAll(".card-body");
    cardBodies.forEach((cardBody) => {
      cardBody.classList.remove("bg-dark", "text-white");
      cardBody.classList.add("bg-light", "text-dark");
    });
  }
  
  // Fungsi untuk menampilkan jam dan tanggal
  function tampilWaktu() {
    var waktu = new Date();
    var bulan = waktu.getMonth() + 1; // Menambahkan 1 karena bulan mulai dari 0
  
    // Menampilkan tanggal dan jam
    document.getElementById("tanggal").innerHTML =
      waktu.getDate() + "/" + bulan + "/" + waktu.getFullYear(); // Perbaiki sintaksis
    document.getElementById("jam").innerHTML =
      waktu.getHours() +
      ":" +
      String(waktu.getMinutes()).padStart(2, "0") + // Menambahkan nol di depan jika kurang dari 10
      ":" +
      String(waktu.getSeconds()).padStart(2, "0"); // Menambahkan nol di depan jika kurang dari 10
  
    // Set timeout untuk memanggil fungsi ini setiap detik
    setTimeout(tampilWaktu, 1000);
  }
  
  // Tetapkan event listener untuk tombol dark mode dan light mode
  window.onload = function () {
    document.getElementById("darkButton").onclick = aktifkanModeGelap;
    document.getElementById("lightButton").onclick = aktifkanModeTerang;
    tampilWaktu(); // Panggil fungsi tampilWaktu saat halaman dimuat
  };
  