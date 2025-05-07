import axios from "axios"
import { $domain } from "../Store"
export const getfqlresearch = async(domain)=>{
  let final =[]
  await axios.get(`${domain}/api/faqresearchs`,{
    params:{
        populate:"*"
    }
  }).then((res)=>{
    final = res.data.data || []
  }).catch((err)=>{console.log(err)})
  return final;
}