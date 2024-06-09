import AnimeList from "@/components/AnimeList";
import SearchBar from "@/components/SearchBar";
import { topJinkanData } from "@/data/JinkanData";
import { getJikanResponse } from "@/libs/api-animeJikan";

export default async function Anime() {
  const targetAPI = topJinkanData[0];
  const topAnime = await getJikanResponse({
    resource: targetAPI.href,
    query: { limit: 12 },
  });

  return (
    <>
      <section className="container mx-auto">
        <SearchBar allCategories={topJinkanData} />
        <AnimeList
          api={topAnime}
          headerTitle={`Top ${targetAPI.name}`}
          hrefSeeAll={"/TopAnime"}
        />
      </section>
    </>
  );
}
