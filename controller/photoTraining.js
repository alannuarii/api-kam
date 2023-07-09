const fs = require("fs");
const path = require("path");

const convertBase64ToFile = (base64Data, targetDir, fileName) => {
  const base64Image = base64Data.split(";base64,").pop();

  const targetPath = path.join(targetDir, fileName);

  fs.writeFile(targetPath, base64Image, { encoding: "base64" }, (err) => {
    if (err) {
      console.error("Gagal menyimpan file:", err);
    } else {
      console.log("File berhasil disimpan:", targetPath);
    }
  });
};

const savePhotos = async (req, res) => {
  try {
    const { foto, label } = req.body;
    const targetDir = path.join(__dirname, "..", "statis", "img", "training", "security");
    const randomNumber = Math.floor(Math.random() * 90000) + 10000;
    const fileName = `${label}_${randomNumber}.jpeg`;

    convertBase64ToFile(foto, targetDir, fileName);

    res.status(200).json({ message: "Data berhasil dikirim" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Gagal input data" });
  }
};

const getPhotos = async (req, res) => {
  try {
    const targetDir = path.join(__dirname, "..", "statis", "img", "training", "security");

    fs.readdir(targetDir, (err, files) => {
      if (err) {
        console.error("Gagal membaca direktori", err);
        res.status(500).json({ message: "Gagal membaca direktori", data: [] });
      } else {
        const photos = files.map((file) => ({
          filename: file,
          url: `/statis/img/training/security/${file}`,
          label: file.split("_")[0],
        }));
        res.status(200).json({ message: "Berhasil mengambil data", data: photos });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Gagal mendapatkan data", data: [] });
  }
};

module.exports = { savePhotos, getPhotos };
