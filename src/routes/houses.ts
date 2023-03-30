import { Router } from "express";
import * as housesService from "../services/housesService";

export const housesRouter = Router();

housesRouter.get("/", (_req, res) => {
  res.status(200).json(housesService.getAllHouses());
});

housesRouter.get("/:id", (req, res) => {});

housesRouter.patch("/:id", (req, res) => {});

//HASNC12MNS90K -> token
//req.headers.authorization -> obtener auth de la request
//Bearer HASNC12MNS90K -> El auth de la request tiene que ser igual a esta cadena
