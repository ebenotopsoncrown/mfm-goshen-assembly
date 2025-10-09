import Image from "next/image";

export function MinistryCard({ title, image, grayscale }: { title: string; image: string; grayscale?: boolean }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-black shadow-lg">
      <Image src={image} alt={title} width={1200} height={800} className={`h-[320px] w-full object-cover transition duration-500 group-hover:scale-105 ${grayscale ? "grayscale" : ""}`} />
      <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors" />
      <img src="/logo.svg" alt="logo watermark" className="absolute left-6 top-6 h-10 w-10 opacity-80" />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <h3 className="text-2xl font-semibold text-white drop-shadow-lg">{title}</h3>
      </div>
    </div>
  );
}
