import Image from "next/image";
import Link from "next/link";

export default function AnimeList({ api, headerTitle, hrefSeeAll }) {
  return (
    <div className="pb-4">
      <div className="flex justify-between p-4 items-center">
        <h1 className="text-xl font-bold">{headerTitle}</h1>
        {/Top/.test(headerTitle)? (
          <Link
            href={`/Project/API/Anime${hrefSeeAll}`}
            className="md:text-md text-sm underline hover:text-gray-700 transition-all"
          >
            See All
          </Link>
        ) : null}
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4 ">
        {api.data?.map((data) => {
          return (
            <Link
              key={data.mal_id}
              className="cursor-pointer shadow-xl bg-gray-100 font-medium hover:font-bold transition-all"
              href={`/Project/API/Anime/Detail/${data.mal_id}`}
            >
              <Image
                src={data.images.webp.image_url}
                alt={data.images.jpg.image_url}
                width={400}
                height={400}
                priority
                className="w-full max-h-64 object-cover"
              />
              <h3 className="md:text-lg text-md p-4 text-center">
                {data.title}
              </h3>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
