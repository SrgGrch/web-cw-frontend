import ApiClient from "./ApiClient";

export const getEvents = async () => {
    const res = await ApiClient.get('Events/GetAll')
    console.log(res)
    return res.data
}