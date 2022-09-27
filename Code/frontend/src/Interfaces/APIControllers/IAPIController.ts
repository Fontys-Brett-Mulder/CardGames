export interface IAPIController {
    url: string,
    getData(path: string) : any
}