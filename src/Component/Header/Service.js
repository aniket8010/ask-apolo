import axios from "axios"
import { baseUrl, modifyResult } from "../../lib/Helper"

export const LocationsList = async () => {
    try {
        const { data } = await axios.get(`${baseUrl}/locations?populate=icon`)
        return modifyResult(data?.data)
    }
    catch (error) {
        console.log(error.responce)
    }
}