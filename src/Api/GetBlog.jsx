import axios from 'axios'
import { $domain } from "../Store"
export const getblog = async (domain,page,pageSize) => {
    let allbolgs = []
    let totalPages = 1;
    await axios.get(`${domain}/api/blogs`, {
        params: {
            populate: "*",
            'pagination[page]': page,
            'pagination[pageSize]': pageSize
        }
    }).then((res) => {
        allbolgs = res.data.data || []
        totalPages = res.data.meta.pagination.pageCount;
    }).catch((err)=>{console.log(err)})
    return {allbolgs,totalPages};
}   