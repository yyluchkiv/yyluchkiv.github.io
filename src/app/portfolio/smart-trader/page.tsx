import SmartTraderImage from '@/public/assets/pngs/smart-trader.png';
import Image from "next/image";
import Java from '@/public/assets/pngs/java.png';
import AWS from '@/public/assets/pngs/aws.png';
import Docker from '@/public/assets/pngs/docker.png';
import Mongo from '@/public/assets/pngs/mongodb.png';
import Spring from '@/public/assets/pngs/spring.png';
import Vue from '@/public/assets/pngs/vue.png';
import Postgre from '@/public/assets/pngs/postgre.png';

export default function Portfolio () {
    return (
        <div className='page-container'>
            <a href="/">← Back to home</a>
            <div className='portfolio-card'>
                <h2>Smart Trader</h2>
                <p className='portfolio-card__text'>Revolutionizing cryptocurrency trading across multiple exchanges</p>
                <Image className='portfolio-card__image' src={SmartTraderImage} alt='Smart Trader App Screenshot'/>
                <h3 className='portfolio-card__title'>Overview</h3>
                <div className='portfolio-card__description'>Smart Trader is an advanced solution for high-frequency cryptocurrency trading. It allows traders to execute trades simultaneously on multiple exchanges like Binance, Bitfinex, and Kraken.</div>
                <h3 className='portfolio-card__title'>Features</h3>
                <ul className='portfolio-card__list'>
                    <li className='portfolio-card__list-item'>→ High-Frequency Trading bots</li>
                    <li className='portfolio-card__list-item'>→ Real-time analytics and performance tracking</li>
                    <li className='portfolio-card__list-item'>→ Security measures</li>
                    <li className='portfolio-card__list-item'>→ Supported exchanges and technologies</li>
                </ul>
                <h3 className='portfolio-card__title'>Technologies</h3>
                <ul className='portfolio-card__list technologies'>
                    <li className='technology'><Image className='technology-icon' src={Java} alt='Java icon'/></li>
                    <li className='technology'><Image className='technology-icon' src={Docker} alt='Docker icon'/></li>
                    <li className='technology'><Image className='technology-icon' src={Postgre} alt='PostgreSQL icon'/></li>
                    <li className='technology'><Image className='technology-icon' src={Vue} alt='Vue.js icon'/></li>
                    <li className='technology'><Image className='technology-icon' src={Mongo} alt='MongoDB icon'/></li>
                    <li className='technology'><Image className='technology-icon' src={Spring} alt='Spring icon'/></li>
                    <li className='technology'><Image className='technology-icon' src={AWS} alt='AWS icon'/></li>
                </ul>
                <a className='portfolio-card__button' href='https://tech1.agency/showcases/smart-trader' target='_blank' rel='noopener noreferrer'>Explore</a>
            </div>
        </div>
    )
}
