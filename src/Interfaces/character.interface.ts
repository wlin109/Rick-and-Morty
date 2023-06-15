interface CharacterLocation {
  name: string;
  url: string;
}

interface CharacterOrigin {
  name: string;
  url: string;
}

export interface Character {
  name: string;
  image: string;
  created: string;
  episode: Array<string>;
  gender: string;
  id: number;
  location: CharacterLocation;
  origin: CharacterOrigin;
  species: string;
  status: string;
  type: string;
  url: string;
}

export interface CharacterProps {
  char: Character;
}

interface CharacterResponseInfo{
    count: number,
    next: string,
    pages: number,
    prev: string,
}

export interface CharacterResponse {
    info: CharacterResponseInfo,
    results: Character[]
}