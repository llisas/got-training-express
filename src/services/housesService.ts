import housesData from "../../DB/houses.json";
import { House } from "../types";

const houses: House[] = housesData as House[];

//read all houses
export const getAllHouses = () => houses;

//real by id
export const findById = (id: number): House | undefined => {
  return houses.find((house) => house.id === id);
};

export const editHouseName = (
  id: number,
  newTittle: string
): House | null => {
  const houseIndex = houses.findIndex((house) => house.id === id);
  if (houseIndex !== -1) {
    houses[houseIndex].title = newTittle;
    return houses[houseIndex];
  }
  return null;
};
