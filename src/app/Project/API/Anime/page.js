import AnimeList from "@/components/AnimeList";
import SearchBar from "@/components/SearchBar";
import { topAnimeData } from "@/data/AnimeData";

export default async function Anime() {
  const targetTop = topAnimeData[4];
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}${targetTop.href}`
  );
  const anime = await response.json();

  return (
    <>
      <section className="container mx-auto">
        <SearchBar allCategories={topAnimeData} />
        <AnimeList api={anime} targetTop={targetTop} headerTitle={`Top ${targetTop.name}`} limit={8}/>
      </section>
    </>
  );
}
