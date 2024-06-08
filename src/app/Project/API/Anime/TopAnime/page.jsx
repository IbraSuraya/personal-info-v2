"use client";

import Loading from "@/app/loading";
import AnimeList from "@/components/AnimeList";
import Pagination from "@/components/Pagination";
import { topAnimeData } from "@/data/AnimeData";
import { useEffect, useState } from "react";

export default function TopAnime() {
  const targetTop = topAnimeData[4];
  const limit = 12;
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}${targetTop.href}?page=${page}&limit=${limit}`
      );
      const data = await response.json();
      setTopAnime(data);
    } catch (err) {
      console.error("Error fetching top anime:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <div className="pt-6">
        <h3 className="text-center text-2xl font-medium">Top Anime</h3>
        <p className="text-center font-light text-md">#{page}</p>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <AnimeList api={topAnime} />
          <Pagination data={topAnime.pagination} currPage={page}/>
        </>
      )}
    </>
  );
}
