"use client";

import Loading from "@/app/loading";
import AnimeList from "@/components/AnimeList";
import Pagination from "@/components/Pagination";
import { topJinkanData } from "@/data/JinkanData";
import { getJikanResponse } from "@/libs/api-animeJikan";
import { useEffect, useState } from "react";

export default function TopAnime() {
  const targetTop = topJinkanData[0];
  const [currPage, setCurrPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const data = await getJikanResponse({
        resource: targetTop.href,
        query: { page: currPage, limit: 12 },
      });
      setTopAnime(data);
    } catch (err) {
      console.error("Error fetching top anime:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currPage]);

  return (
    <div className="container mx-auto">
      <div className="pt-6">
        <h3 className="text-center text-2xl font-medium">Top Anime</h3>
        <p className="text-center font-light text-md">#{currPage}</p>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <AnimeList api={topAnime} />
          <Pagination
            currPage={currPage}
            setCurrPage={setCurrPage}
            lastPage={topAnime.pagination.last_visible_page}
            itemPage={topAnime.pagination.items.per_page}
            itemTotal={topAnime.pagination.items.total}
          />
        </>
      )}
    </div>
  );
}
