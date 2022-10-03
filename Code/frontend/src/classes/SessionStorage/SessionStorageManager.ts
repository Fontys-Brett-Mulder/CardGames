import {ISessionStorageManagers} from "../../Interfaces/SessionStorage/ISessionStorageManagers";
import {IPlayerGuest} from "../../Interfaces/Player/IPlayerGuest";

export class SessionStorageManager implements ISessionStorageManagers{
    /**
     * Add item to SessionStorage
     * @param key
     * @param data
     */
    addItem(key: string, data: string){
        sessionStorage.setItem(key, data)
    }

    /**
     * Getting the value of player from SessionStorage
     * @param key
     */
    getItem(key: string){
        return sessionStorage.getItem(key);
    }

    /**
     * Delete item from localstorage
     * @param key
     */
    deleteItem(key: string){
        sessionStorage.removeItem(key)
    }

    /**
     * Update item in localstorage
     * @param key
     * @param data
     */
    updateItem(key: string, data: string){
        sessionStorage.setItem(key, data)
    }
}