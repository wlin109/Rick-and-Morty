import Axios, { AxiosResponse } from "axios";
import { CharacterResponse } from "@/Interfaces/character.interface";

export function getCharacters(page: number): Promise<AxiosResponse<CharacterResponse>> {
  return Axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
}
