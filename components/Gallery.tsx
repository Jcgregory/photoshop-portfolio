// components/Gallery.tsx
import Image from "next/image";

const imageCount = 10; // total images
const images = Array.from({ length: imageCount }, (_, i) => `/images/${String(i + 1).padStart(4, "0")}.jpg`);

export default function Gallery() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((src, idx) => (
        <Image key={idx} src={src} alt={`Image ${idx + 1}`} width={400} height={400} />
      ))}
    </div>
  );
}
