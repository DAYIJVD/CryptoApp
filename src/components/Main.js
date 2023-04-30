import React,{useEffect,useState} from "react";
import { GetData } from "../services/api";
import Coin from "./Coins";
import styles from "../css/Main.module.css";
const Main = () => {
    const [erorr,setErorr]=useState("")
    const [search,setSearch]=useState("")
    const [data,setData]= useState([])
    useEffect(()=>{
     const FetchAPI=async()=>{
       setData(await GetData())
     }
     FetchAPI()
    },[])
    const changeHand=(e)=>{
        setSearch(e.target.value)
    }
    const SearchClient=data.filter(coin=>coin.name.toUpperCase().includes(search.toUpperCase()));
    setTimeout(() => {
    setErorr("The system has a problem, please login to the site in 10 minutes ,  Make sure you are connected to the Internet : (")
    }, 5000);
    return (
      
        <div className={styles.conteiner}>
          <h2>CRYPTO MARKET</h2>
        <input type="text" placeholder="Search Name" value={search} onChange={changeHand}/>
        <div className={styles.Coins}>
        {data.length?SearchClient.map((coin)=><Coin key={coin.id} coin={coin}/>):<>
       <div className={styles.simple_spinner}>
       {erorr.length?"": <span></span>}
     </div>
     <p>{erorr}</p>
     </>
}
        </div>
        </div>
    );
};

export default Main;