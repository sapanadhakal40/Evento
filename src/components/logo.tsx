import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="https://bytegrad.com/course-assets/react-nextjs/evento.png"
      alt="Evento Logo"
      width={50}
      height={12}
    />
  );
}
