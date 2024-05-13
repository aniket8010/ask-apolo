import axios from "axios"
import { baseUrl } from "../../lib/Helper"

export const doctorsList = async (query) => {
    try {
        const { data } = await axios.get(`${baseUrl}/doctors?populate=doctor_categories&fields[0]=name${query || ""}`)
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
export const doctorsDetailsServiceList = async (query) => {

    try {
        const { data } = await axios.get(`${baseUrl}/doctors?fields[0]=name&fields[1]=experience&fields[2]=education&populate[avatar][fields][0]=url&populate[languages][fields][0]=name&populate[hospitals][fields][0]=name&populate[doctor_categories][fields][0]=name${query || ""}`)
        return data

    } catch (error) {
        console.log(error.response)
    }
}