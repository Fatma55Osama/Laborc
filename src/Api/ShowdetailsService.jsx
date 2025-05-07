import axios from "axios"
import { $domain } from "../Store"
export const ShowdetailsService = async (domain, id) => {
  let final = {}
  await axios.get(`${domain}/api/services/${id}`, {
    params: {
     
      populate: {
        details_servic: {
          populate: "*"
        },
        img_card: {
          populate: "*"
        },
      }
    }
  }).then((res) => {
    final = res.data.data
    console.log(" this is final " + res.data.data)
  }).catch((err) => {
    console.log(err)
  })
  return final
}