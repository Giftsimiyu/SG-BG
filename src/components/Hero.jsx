import Image from "next/image";

export default function Hero() {
  return (
    <Image
      src="/Blog banner.svg"
      alt="hero image"
      width={700}
      height={500}
      className="w-full h-50 lg:w-100 lg:h-100 object-cover object-center"
    />
  );
}
