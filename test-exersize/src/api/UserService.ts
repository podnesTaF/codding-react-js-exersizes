import {IUser} from "../models/IUser";
import axios, {AxiosResponse} from "axios";

export default class UserService {
    static async getUsers(): Promise<AxiosResponse<IUser[]>> {
        return axios.get<IUser[]>('./users.json')
    }
}