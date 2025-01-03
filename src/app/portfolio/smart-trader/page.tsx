import SmartTraderImage from '@/public/assets/pngs/smart-trader.png';
import Image from "next/image";
import Java from '@/public/assets/pngs/java.png';
import Docker from '@/public/assets/pngs/docker.png';
import Mongo from '@/public/assets/pngs/mongodb.png';
import Spring from '@/public/assets/pngs/spring.png';
import Vue from '@/public/assets/pngs/vue.png';
import Postgre from '@/public/assets/pngs/postgre.png';

export default function SmartTrader () {
    return (
        <div className='page-container'>
            <a href="/">← Back to home</a>
            <div className='portfolio-card'>
                <h2>Smart Trader</h2>
                <p className='portfolio-card__text'>Trade simultaneously on multiple crypto exchanges</p>
                <Image className='portfolio-card__image' src={SmartTraderImage} alt='Smart Trader App Screenshot'/>
                <h3 className='portfolio-card__title'>Overview</h3>
                <div className='portfolio-card__description'>SmartTrader is an advanced solution for high-frequency cryptocurrency trading. It allows traders to execute/automate trades simultaneously on multiple exchanges: Binance, Bitfinex, and Kraken.</div>
                <h3 className='portfolio-card__title'>Features</h3>
                <ul className='portfolio-card__list'>
                    <li className='portfolio-card__list-item'>→ HFT bots</li>
                    <li className='portfolio-card__list-item'>→ Portfolio management</li>
                    <li className='portfolio-card__list-item'>→ Near real-time analytics and performance tracking</li>
                </ul>
                <h3 className='portfolio-card__title'>Technologies</h3>
                <ul className='portfolio-card__list technologies'>
                    <li className='technology'><Image className='technology-icon' src={Java} alt='Java icon'/></li>
                    <li className='technology'><Image className='technology-icon' src={Spring} alt='Spring icon'/></li>
                    <li className='technology'><Image className='technology-icon' src={Docker} alt='Docker icon'/></li>
                    <li className='technology'><Image className='technology-icon' src={Postgre} alt='PostgreSQL icon'/></li>
                    <li className='technology'><Image className='technology-icon' src={Mongo} alt='MongoDB icon'/></li>
                    <li className='technology'><Image className='technology-icon' src={Vue} alt='Vue.js icon'/></li>
                </ul>
            </div>
        </div>
    )
}
