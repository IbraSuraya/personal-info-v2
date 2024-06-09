import { formatNumber } from "@/Utilities/utils";
import VideoPlayer from "@/components/VideoPlayer";
import { getJikanResponse } from "@/libs/api-animeJikan";
import Image from "next/image";

export default async function Detail({ params: { id } }) {
  const { data } = await getJikanResponse({
    resource: `/anime/${id}`,
  });

  const moreDetails = [
    { title: "Rank", value: formatNumber(data.rank) },
    { title: "Score", value: data.score },
    { title: "Member", value: formatNumber(data.members) },
    { title: "Episode", value: formatNumber(data.episodes) },
    { title: "Status", value: data.status },
    { title: "Source", value: data.source },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="pt-4">
        <h3 className="text-2xl text-gray-800 font-medium">
          {data.title} - {data.year}
        </h3>
        <p className="font-light text-sm pt-0.5 italic">
          {(data.titles.find((title) => title.type === "Japanese") || {})
            .title || ""}
        </p>
      </div>
      <div className="py-2 mt-2 flex gap-3 text-gray-800 overflow-x-auto ">
        {moreDetails.map((item, index) => (
          <div
            key={index}
            className="w-36 flex flex-col justify-center items-center rounded border text-center border-gray-800 p-1.5 shadow-lg bg-gray-100 text-sm"
          >
            <h3 className="font-bold">{item.title}</h3>
            <p>{item.value}</p>
          </div>
        ))}
      </div>
      <div className="py-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-gray-800 shadow-xl bg-gray-100 mt-2">
        <Image
          src={data.images.webp.image_url}
          alt={data.images.jpg.image_url}
          width={640}
          height={640}
          className="w-full rounded object-cover"
        />
        <p className="text-justify text-sm">{data.synopsis}</p>
      </div>
      <div>
        <VideoPlayer youtubeId={data.trailer.youtube_id} title={data.title} />
      </div>
    </div>
  );
}
