import axios from "axios"
import { $domain } from "../Store"
export const getteam = async(domain)=>{
  let team =[]
  await axios.get(`${domain}/api/teams`,{
    params:{
        populate:"*"
    }
  }).then((res)=>{
    team = res.data.data || []
  }).catch((err)=>{console.log(err)})
  return team;
}