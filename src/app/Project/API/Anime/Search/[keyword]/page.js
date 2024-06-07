import { capitalizeEachWord } from "@/Utilities/utils";
import AnimeList from "@/components/AnimeList";
import SearchBar from "@/components/SearchBar";
import { topAnimeData } from "@/data/AnimeData";

export default async function Search({ params }) {
  const { keyword } = params;
  const targetTop = topAnimeData[4];
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`
  );
  const searchAnime = await response.json();

  return (
    <>
      <section className="container mx-auto">
        <SearchBar allCategories={topAnimeData} />
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
