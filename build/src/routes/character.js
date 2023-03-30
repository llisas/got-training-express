"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.charactersRouter = void 0;
const express_1 = require("express");
const characterService = __importStar(require("../services/characterServices"));
const validations_1 = require("../validations");
//console.log(req.headers.authorization === '');
exports.charactersRouter = (0, express_1.Router)();
exports.charactersRouter.get("/", (_req, res) => {
    res.status(200).json(characterService.getAllCharacters());
});
exports.charactersRouter.get("/:id", (req, res) => {
    const character = characterService.findById(+req.params.id);
    if (!character)
        return res.status(404).send("Character not found 😢");
    res.status(200).json(character);
});
exports.charactersRouter.post("/", (req, res) => {
    try {
        const newCharacterEntry = (0, validations_1.toNewCharacterEntry)(req.body);
        const newCharacter = characterService.addCharacter(newCharacterEntry);
        res.status(200).json(newCharacter);
    }
    catch (e) {
        res.status(400).send(e.message);
    }
});
