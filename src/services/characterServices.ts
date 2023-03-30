import charactersData from "../../DB/characters.json";
import { Character, NewCharacterEntry } from "../types";

const characters: Character[] = charactersData as Character[];

export const getAllCharacters = (): Character[] => characters;

export const findById = (id: Number): Character | null => {
  const character = characters.find((c) => c.id === id);
  return character ? character : null;
};

export const addCharacter = (newCharacterEntry: NewCharacterEntry): Character => {
  const newCharacter: Character = {
    id: Math.max(...characters.map((c) => c.id)) + 1,
    ...newCharacterEntry,
  };
  characters.push(newCharacter);
  return newCharacter;
}; 
