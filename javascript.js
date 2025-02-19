//menu
var tombolMenu = $(".tombol-menu");
var menu = $("nav .menu ul");

function klikMenu() {
    tombolMenu.click(function () {
        menu.toggle();
    });
    menu.click(function () {
        menu.toggle();
    });
}

$(document).ready(function () {
    var width = $(window).width();
    if (width < 990) {
        klikMenu();
    }
})

//check lebar
$(window).resize(function () {
    var width = $(window).width();
    if (width > 989) {
        menu.css("display", "block");
        //display:block
    } else {
        menu.css("display", "none");
    }
    klikMenu();
});

//efek scroll 
$(document).ready(function () {
    var scroll_pos = 0;
    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 0) {
            $("nav").addClass("putih");
            $("nav img.hitam").show();
            $("nav img.putih").hide();
        } else {
            $("nav").removeClass("putih");
            $("nav img.hitam").hide();
            $("nav img.putih").show();
        }
    })
});
function showAlert() {
    alert("Halo! Kamu berhasil menjalankan website di localhost.");
}
const express = require("express");
const app = express();
const PORT = 3000;

// Menyajikan file statis dari folder 'public'
app.use(express.static("public"));

// Jalankan server di port 3000
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});

function showBio(name, country, bio) {
    document.getElementById("bioName").innerText = name;
    document.getElementById("bioCountry").innerText = country;
    document.getElementById("bioText").innerText = bio;
    document.getElementById("bioModal").style.display = "block";
}

function closeBio() {
    document.getElementById("bioModal").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("bioModal");
    var closeButton = document.createElement("span");
    closeButton.innerHTML = "&times;";
    closeButton.style.position = "absolute";
    closeButton.style.top = "10px";
    closeButton.style.right = "15px";
    closeButton.style.fontSize = "20px";
    closeButton.style.cursor = "pointer";
    closeButton.style.color = "black";
    
    closeButton.onclick = closeBio;
    
    if (modal) {
        modal.style.position = "relative";
        modal.appendChild(closeButton);
    }
});
  
    // Logout Function
    document.getElementById("logout").addEventListener("click", function () {
      localStorage.clear(); // Hapus data login
      window.location.href = "login.html"; // Redirect ke login page
    });

  // Fungsi Registrasi
function register() {
    var newUsername = document.getElementById('new-username').value;
    var newPassword = document.getElementById('new-password').value;

    // Simpan data akun baru di localStorage
    if (newUsername && newPassword) {
        localStorage.setItem('username', newUsername);
        localStorage.setItem('password', newPassword);
        alert('Akun berhasil dibuat!');
        
        // Pindah ke form login setelah registrasi berhasil
        document.getElementById('register-form').style.display = 'none';
        document.getElementById('login-form').style.display = 'block';
    } else {
        alert('Harap isi username dan password!');
    }
}

// Fungsi Login
function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Ambil data akun dari localStorage
    var storedUsername = localStorage.getItem('username');
    var storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        // Login berhasil, alihkan ke halaman utama (home.html)
        window.location.href = 'home.html'; // Halaman utama
    } else {
        alert("Username atau Password salah.");
    }
}
 // Cek apakah user sudah login
 const isLoggedIn = localStorage.getItem("isLoggedIn");

 if (isLoggedIn === "true") {
     // Ambil data pengguna dari localStorage
     const username = localStorage.getItem("username");
     const photoUrl = localStorage.getItem("photoUrl");

     // Tampilkan profil di halaman index.html
     document.body.innerHTML = `
         <div style="text-align:center; padding:20px;">
             <img src="${photoUrl}" alt="Profil" width="100" style="border-radius:50%;">
             <h2>Selamat datang, ${username}!</h2>
             <button onclick="logout()">Logout</button>
         </div>
     `;
 } else {
     // Jika belum login, arahkan ke halaman login
     window.location.href = "login.html";
 }

 function logout() {
     localStorage.clear();
     window.location.href = "login.html";
 }
