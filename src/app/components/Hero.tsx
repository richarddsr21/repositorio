import Image from "next/image";
import Link from "next/link";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";

export const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="w-full h-full flex flex-col items-center pt-20 bg-primary text-white px-4 md:px-8 "
      >
        <Image
          className="rounded-full mb-12 md:w-80 md:h-80"
          src="/assets/image-hero/perfil.png"
          alt="Foto Aleatória"
          width={250}
          height={250}
        />
        <div className="flex justify-between w-20 pb-4">
          <Link href="https://github.com/RichardReisDev" target="_blank">
            <SiGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/richard-reis-b904392ab/"
            target="_blank"
          >
            <SiLinkedin />
          </Link>
          <Link href="https://mail.google.com/mail/u/2/#inbox" target="_blank">
            <SiGmail />
          </Link>
        </div>
        <span className="text-3xl md:text-6xl font-bold mb-12 ">
          Desenvolvedor FrontEnd
        </span>
        <span className="text-xl md:text-2xl">
          Meu nome é Richard Reis, tenho 21 anos e atualmente sou Desenvolvedor
          FrontEnd
        </span>
      </section>
    </>
  );
};
