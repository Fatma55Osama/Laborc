import axios from "axios"

export const ShowDetailsResearch = async (domain, id) => {
    let final = {}
    await axios.get(`${domain}/api/categories/${id}`,{
        params: {
            populate: {
                research: {populate: "*" },
                imge_category: {populate: "*" },
                // faqresearchs :{populate:"*"}
                // research:{populate:{category:{populate:"*"}}}
            }}
    }).then((res) => {
        final = res.data.data
        console.log(final)
    }).catch((err) => console.log(err))
    return final
}