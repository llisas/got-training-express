import housesData from "../../DB/houses.json";
import { House } from "../types";

const houses: House[] = housesData as House[];

//read all houses
export const getAllHouses = () => houses;

//real by id
export const findById = (id: number):House =>{

}

export const editHouseName = (id:number, newName: string): House =>{
    
}
