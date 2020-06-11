import ApiClient from "./ApiClient";
import {AuthModel} from "../models/AuthModel";

export const getEvents = async () => {
    const res = await ApiClient.get('Events/GetAll')
    console.log(res)
    return res.data
}

export const login = async (username, password) => {
    const res = await ApiClient.post('Account/Login', new AuthModel(username, password))
    console.log(res)
    return res.data
}