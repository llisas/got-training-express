"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toNewCharacterEntry = void 0;
const types_1 = require("./types");
const isString = (param) => typeof param === "string";
const isHouseName = (houseNameFromRequest) => Object.values(types_1.HouseName).includes(houseNameFromRequest);
const isGender = (genderFromRequest) => Object.values(types_1.Gender).includes(genderFromRequest);
const parseStringParams = (stringParam, paramName) => {
    if (!isString(stringParam))
        throw new Error(`Incorrect or missing ${paramName}`);
    return stringParam;
};
const parseHouseName = (houseNameFromRequest) => {
    if (!isHouseName(houseNameFromRequest))
        throw new Error("Incorrect or missing house");
    return houseNameFromRequest;
};
const parseGender = (genderFromRequest) => {
    if (!isGender(genderFromRequest))
        throw new Error("Incorrect or missing gender");
    return genderFromRequest;
};
const toNewCharacterEntry = (characterFromRquest) => {
    const newCharacter = {
        firstName: parseStringParams(characterFromRquest.firstName, "firstName"),
        lastName: parseStringParams(characterFromRquest.lastName, "lastName"),
        fullName: parseStringParams(characterFromRquest.fullName, "fullName"),
        title: parseStringParams(characterFromRquest.title, "title"),
        gender: parseGender(characterFromRquest.gender),
        house: parseHouseName(characterFromRquest.house),
        sentence: parseStringParams(characterFromRquest.sentence, "sentence"),
        playedBy: parseStringParams(characterFromRquest.playedBy, "playedBy"),
    };
    return newCharacter;
};
exports.toNewCharacterEntry = toNewCharacterEntry;
