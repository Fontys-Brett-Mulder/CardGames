import {IPlayerGuest} from "../Player/IPlayerGuest";

export interface ISessionStorageManagers {
    addItem(key : string, data: string) : void
    getItem(key: string) : any
    deleteItem(key : string) : void
    updateItem(key : string, data: string) : void
}