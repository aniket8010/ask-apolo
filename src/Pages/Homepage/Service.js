import axios from "axios"
import { baseUrl } from "../../lib/Helper"

export const doctorsList = async (query) => {
    try {
        const { data } = await axios.get(`${baseUrl}/doctors?populate=doctor_categories&${query || ""}`)
        return data?.data

    } catch (error) {
        console.log(error.response)
    }
}

export const hospitalsList = async (query) => {
    
    try {
        const { data } = await axios.get(`${baseUrl}/hospitals?fields[0]=name${query || ""}`)
        return data?.data

    } catch (error) {
        console.log(error.response)
    }
}