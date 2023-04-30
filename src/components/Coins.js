import React from 'react';
import styles from "../css/coins.module.css";
const Coin = ({coin}) => {
    return (
        <div className={styles.coin}>
            <span>{coin.market_cap_rank}</span>
            <img alt='icon' src={coin.image}/>
            <span>{coin.name}</span>
            <span>{coin.symbol.toUpperCase()}</span>
            <span>${coin.current_price.toLocaleString()}</span>
            <span className={coin.market_cap_change_percentage_24h>0?styles.green:styles.red}>{coin.market_cap_change_percentage_24h.toFixed(2)}%</span>
            <span>${coin.market_cap.toLocaleString()}</span>          
        </div>
    );
};

export default Coin;