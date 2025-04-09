import axios from "axios"
import { $domain } from "../Store"
export const ShowDetailsBlog = async(domain,id)=>{
    let final ={}
    await axios.get(`${domain}/api/blogs/${id}`,{
        params: {
        populate: {
            details_blog: {
              populate: "*" 
            },
            img_card: {
              populate: "*" 
            },}}
    }).then((res)=>{
      final = res.data.data
      console.log(" this is final " + final)
    }).catch((err)=>{
        console.log(err)
    })
    return final
}