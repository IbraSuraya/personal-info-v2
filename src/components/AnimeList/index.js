import Image from "next/image";
import Link from "next/link";

export default function AnimeList({ api, targetTop}) {
  return (
    <div className="">
      <div className="flex justify-between p-4 items-center">
        <h1 className="text-xl font-bold">Top {targetTop.name}</h1>
        <Link
          href={targetTop.href}
          className="md:text-xl text-md underline hover:text-gray-700 transition-all"
        >
          See All
        </Link>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
        {api.data.slice(0, 8).map((data) => {
          return (
            <Link key={data.mal_id} className="cursor-pointer shadow-xl" href={`/${data.mal_id}`}>
              <Image
                src={data.images.webp.image_url}
                alt={data.title}
                width={400}
                height={400}
                priority
                className="w-full max-h-64 object-cover"
              />
              <h3 className="font-light md:text-lg text-md p-4 text-center">{data.title}</h3>
            </Link>
          );
        })}
      </div>
    </div>
  );
}