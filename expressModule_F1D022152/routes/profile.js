const express = require("express");
const router = express.Router();


const profiles = [
  {
    nim: "F1D022152",
    nama: "Qhaulan Syaqhila",
    jurusan: "Teknik Informatika",
    angkatan: 2022
  }
];


router.get("/", (req, res) => {
  res.json(profiles);
});


router.get("/:nim", (req, res) => {
  const { nim } = req.params;
  const profile = profiles.find((p) => p.nim === nim);

  if (profile) {
    res.json(profile);
  } else {
    res.status(404).json({ message: "Profile tidak ditemukan" });
  }
});

module.exports = router;
