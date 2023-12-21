"use server";

import AnimeCard, {AnimeProp} from "@/components/AnimeCard";
import {log} from "console";

export const fetchAnime = async (page: number) => {
  const res = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`);

  const data = await res.json();

  return (
    <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
      {data.map((item: AnimeProp, index: number) => (
        <AnimeCard key={item.id} anime={item} index={index} />
      ))}
    </section>
  );
};
