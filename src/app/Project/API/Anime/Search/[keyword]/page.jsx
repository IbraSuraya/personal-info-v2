import { capitalizeEachWord } from "@/Utilities/utils";
import AnimeList from "@/components/AnimeList";
import SearchBar from "@/components/SearchBar";
import { topJinkanData } from "@/data/JinkanData";
import { getJikanResponse } from "@/libs/api-animeJikan";

export default async function Search({ params }) {
  const { keyword } = params;
  const targetTop = topJinkanData[0];
  const searchAnime = await getJikanResponse({
    resource: "/anime",
    query: { q: keyword },
  });

  return (
    <>
      <section className="container mx-auto">
        <SearchBar allCategories={topJinkanData} />
        <AnimeList
          api={searchAnime}
          targetTop={targetTop}
          headerTitle={`Result ${capitalizeEachWord(
            decodeURIComponent(keyword)
          )} ...`}
        />
      </section>
    </>
  );
}
