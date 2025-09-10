// renameImages.js
const fs = require("fs");
const path = require("path");

const imagesDir = path.join(__dirname, "public/images/works");

function padNumber(num, size) {
  return num.toString().padStart(size, "0");
}

function renameImages() {
  const files = fs.readdirSync(imagesDir)
    .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file));

  files.forEach((file, index) => {
    const ext = path.extname(file);
    const newName = `${padNumber(index + 1, 4)}${ext}`;
    const oldPath = path.join(imagesDir, file);
    const newPath = path.join(imagesDir, newName);

    if (file !== newName) {
      fs.renameSync(oldPath, newPath);
      console.log(`Renamed: ${file} → ${newName}`);
    }
  });
}

renameImages();
