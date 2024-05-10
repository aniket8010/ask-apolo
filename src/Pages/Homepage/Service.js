import axios from "axios"
import { baseUrl, modifyResult } from "../../lib/Helper"

export const doctorsList = async () => {
    try {
        const { data } = await axios.get(`${baseUrl}/doctors?populate=doctor_categories`)
        return modifyResult(data?.data).map(({ doctor_categories, ...rest }) => {
            return { ...rest, doctorCategory: modifyResult(doctor_categories?.data)[0] }
        })

    } catch (error) {
        console.log(error.response)
    }
}