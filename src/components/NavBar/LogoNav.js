import Image from "next/image";

export default function LogoNav({}) {
  return (
    <>
      <div className="flex flex-shrink-0 md:flex-row flex-col items-center">
        <Image
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=gray&shade=300"
          width={20}
          height={20}
          priority
          alt="logo-personal-info"
        />
        <h1 className="text-gray-300 ml-1 font-bold italic">personalInfo</h1>
      </div>
    </>
  );
}
