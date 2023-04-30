import axios from "axios"
const Url="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en";

const GetData=async()=>{
 

        try {
            let res=[]
            res=(await axios.get(Url)).data
               return res
        } catch (error) {
            let res=[]
            return res
        }
}




export {GetData}