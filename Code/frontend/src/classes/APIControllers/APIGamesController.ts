import {IAPIController} from "../../Interfaces/APIControllers/IAPIController";
import axios from "axios";

export class APIGamesController implements IAPIController {
    url = "https://localhost:7167/api/Games/";

    /**
     * Get games data from API
     * @param path
     */
    getData(path: string) {
        return axios.get('https://localhost:7167/api/Games/getAllGames')
            .then((resp) => {
                    return resp.data;
                }
            )
    }
}