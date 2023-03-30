"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCharacter = exports.findById = exports.getAllCharacters = void 0;
const characters_json_1 = __importDefault(require("../../DB/characters.json"));
const characters = characters_json_1.default;
const getAllCharacters = () => characters;
exports.getAllCharacters = getAllCharacters;
const findById = (id) => {
    const character = characters.find((c) => c.id === id);
    return character ? character : null;
};
exports.findById = findById;
const addCharacter = (newCharacterEntry) => {
    const newCharacter = Object.assign({ id: Math.max(...characters.map((c) => c.id)) + 1 }, newCharacterEntry);
    characters.push(newCharacter);
    return newCharacter;
};
exports.addCharacter = addCharacter;
