"use client";

import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import Pagination from "@mui/material/Pagination";
import { getCharacters } from "@/apis/character.api";
import { Character } from "@/Interfaces/character.interface";

const Demo: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    getCharacters(page)
      .then((res) => {
        setCharacters(res.data.results);
        setTotalPage(res.data.info.pages);
        setIsLoading(false);
        
      })
      .catch((err) => console.warn(err));
  }, [page]);

  function handlePageChange (event: React.ChangeEvent<unknown>, page: number) {
    setPage(page);
  }

  return (
    <section>
      <div className="flex flex-wrap justify-center gap-4 ">
        {isLoading
          ? "Loading..."
          : characters.map((char : Character) => {
              return <CharacterCard char={char} />;
            })}
      </div>
      <Pagination className="flex justify-center mt-2" count={totalPage} onChange={handlePageChange} />
    </section>
  );
};

export default Demo;
