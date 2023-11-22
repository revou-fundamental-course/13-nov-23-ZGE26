document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("loginForm");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
  
      if (username === "user" && password === "password") {
        alert("Login berhasil!");

      } else {
        alert("Login gagal. Mohon cek kembali username dan password.");
      }
    });
  });
  