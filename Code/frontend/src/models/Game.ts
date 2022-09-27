export class GameModel {
    id: string;
    name: string;
    difficulty: string;
    minPlayers: number;
    maxPlayers: number;

    constructor(id: string, name: string, difficulty: string, minPlayers: number, maxPlayers: number,) {
        this.id = id;
        this.name = name;
        this.difficulty = difficulty;
        this.minPlayers = minPlayers;
        this.maxPlayers = maxPlayers;
    }

}