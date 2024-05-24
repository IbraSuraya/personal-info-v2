import Image from "next/image";
import Link from "next/link";

export default function AnimeList({titles, images, id}) {
  return (
    <Link className="cursor-pointer" href={`/${id}`}>
      <Image
        src={images}
        alt={titles}
        width={350}
        height={350}
        priority
      />
      <h3 className="font-bold md:text-xl text-md p-4">{titles}</h3>
    </Link>
  );
}
