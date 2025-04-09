import axios from "axios"
import { $domain } from "../Store"

export const indexservice = async (domain) => {
    let final = []
    await axios.get(`${domain}/api/services`, {
        params: {
            populate: "*"
        }
    }).then((res) => {
        final = res.data.data
    }).catch((err)=>{console.log(err)})
    return final
}