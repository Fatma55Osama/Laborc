import axios from "axios"
import { $domain } from "../Store"
export const getfaq =async(domain)=>{
    let questions =[]
    await axios.get(`${domain}/api/faqs`).then((res)=>{
        console.log(res)
      questions =res.data.data|| []
    }).catch((err)=>{
        console.log(err)
    })
    return questions;
}