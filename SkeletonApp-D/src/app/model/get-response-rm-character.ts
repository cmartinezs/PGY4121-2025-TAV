import { RMCharacter } from "./rm-character";
import { RMInfo } from "./rm-info";

export interface ResponseRMCharacter {
    info: RMInfo;
    results: RMCharacter[];
}