import { Router } from "express";
import * as characterService from "../services/characterServices";
import { Character, NewCharacterEntry } from "../types";
import { toNewCharacterEntry } from "../validations";
//console.log(req.headers.authorization === '');

export const charactersRouter = Router();

charactersRouter.get("/", (_req, res) => {
  res.status(200).json(characterService.getAllCharacters());
});

charactersRouter.get("/:id", (req, res) => {
  const character = characterService.findById(+req.params.id);

  if (!character) return res.status(404).send("Character not found 😢");

  res.status(200).json(character);
});

charactersRouter.post("/", (req, res) => {
  try {
    const newCharacterEntry: NewCharacterEntry = toNewCharacterEntry(req.body);
    const newCharacter: Character = characterService.addCharacter(newCharacterEntry);
    res.status(200).json(newCharacter);
  } catch (e: any) {
    res.status(400).send(e.message);
  }
});
