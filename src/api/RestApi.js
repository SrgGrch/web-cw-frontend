import ApiClient from "./ApiClient";
import {AuthModel} from "../models/AuthModel";
import {RegistrationModel} from "../models/RegistrationModel";

export const getEvents = async () => {
    const res = await ApiClient.get('Events/GetAll')
    console.log(res)
    return res.data
}

export const getEventById = async (id) => {
    const res = await ApiClient.get('Events/'+id)
    console.log(res)
    return res.data
}

export const isRegisteredOnEvent = async (id) => {
    const res = await ApiClient.get('Events/'+id+'/IsReg')
    console.log(res)
    return res.data
}

export const registerOnEvent  =async (id) => {
    const res = await ApiClient.get('Events/'+id+'/Reg')
    console.log(res)
    return res.data
}

export const login = async (username, password) => {
    const res = await ApiClient.post('Account/Login', new AuthModel(username, password))
    console.log(res)
    return res.data
}

export const register = async (username, password, name, email) => {
    const res = await ApiClient.post('Account/Register', new RegistrationModel(username, password, name, email))
    console.log(res)
    return res.data
}