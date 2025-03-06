import { useRecoilValue } from "recoil"
import { $domain } from "../Store"
import axios from "axios"

export const getcategory = async (domain) => {
    let cat = []
    await axios.get(`${domain}/api/categories`, {
        params: {
            populate: "*"
        }
    }).then((res) => {
        cat = res.data.data || []
    }).catch((err) => { console.log(err) })
    return cat;
}