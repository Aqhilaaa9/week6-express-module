const express = require("express");
const app = express();
const port = 3000;

const { tambah, kali, bagi, kurang } = require("./utils/math");
const profileRouter = require("./routes/profile");

// Route utama
app.get("/", (req, res) => {
  res.send("Nama: Qhaulan Syaqhila <br>NIM: F1D022152");
});


app.get("/hitung/tambah", (req, res) => {
  const hasil = tambah(10, 5);
  res.send(`Hasil penjumlahan 10 + 5 = ${hasil}`);
});


app.get("/hitung/perkalian", (req, res) => {
  const hasil = kali(4, 6);
  res.send(`Hasil perkalian 4 x 6 = ${hasil}`);
});


app.get("/hitung/pembagian", (req, res) => {
  const hasil = bagi(20, 5);
  res.send(`Hasil bagi 20 / 5 = ${hasil}`);
});

app.get("/hitung/kurang", (req,  res) =>{
  const hasil = kurang(15, 3);
  res.send(`Hasil pengurangan 15 - 3 = ${hasil}`);
});

// route profil
app.use("/profile", profileRouter);

// Jalankan server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
