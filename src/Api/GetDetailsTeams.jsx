import axios from "axios"
import { $domain } from "../Store"
import { useParams } from "react-router-dom"

export const getdetailsteams = async (domain,id) => {
    let singledetail = {}
    await axios.get(`${domain}/api/teams/${id}`,{
        params:{
            populate:"*"
        }
    }).then((res)=>{
        singledetail=res.data.data || {};
    }).catch((err)=>{console.log(err.reponse)})
    return singledetail
}