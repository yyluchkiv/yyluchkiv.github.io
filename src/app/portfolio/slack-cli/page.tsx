import SlackImage from '@/public/assets/pngs/slack-cli.png';
import Image from "next/image";
import Java from '@/public/assets/pngs/java.png';
import Docker from '@/public/assets/pngs/docker.png';
import Spring from '@/public/assets/pngs/spring.png';
import Lambda from '@/public/assets/pngs/aws-lambda.png';

export default function SlackCLI () {
    return (
        <div className='page-container'>
            <a href="/">← Back to home</a>
            <div className='portfolio-card'>
                <h2>Slack CLI</h2>
                <p className='portfolio-card__text'>Streamline workflows for monitoring and collaboration</p>
                <Image className='portfolio-card__image' src={SlackImage} alt='Slack CLI App'/>
                <h3 className='portfolio-card__title'>Overview</h3>
                <div className='portfolio-card__description'>The Slack CLI is an application designed to simplify and automate workflows within development teams. By integrating multiple services into a centralized solution, it provides a seamless way for teams to manage and monitor infrastructure, handle reporting, and streamline recruitment processes directly from Slack.</div>
                <h3 className='portfolio-card__title'>Features</h3>
                <ul className='portfolio-card__list'>
                    <li className='portfolio-card__list-item'>→ Advanced infrastructure monitoring with real-time analytics</li>
                    <li className='portfolio-card__list-item'>→ Role-based access control to maintain security across teams</li>
                    <li className='portfolio-card__list-item'>→ 5+ integrated APIs for enhanced functionality</li>
                    <li className='portfolio-card__list-item'>→ User-friendly Slack chatbot interface for seamless interactions</li>
                </ul>
                <h3 className='portfolio-card__title'>Technologies</h3>
                <ul className='portfolio-card__list technologies'>
                    <li className='technology'><Image className='technology-icon' src={Java} alt='Java icon'/></li>
                    <li className='technology'><Image className='technology-icon' src={Spring} alt='Spring icon'/></li>
                    <li className='technology'><Image className='technology-icon' src={Docker} alt='Docker icon'/></li>
                    <li className='technology'><Image className='technology-icon' src={Lambda} alt='AWS Lambda icon'/></li>
                </ul>
            </div>
        </div>
    )
}
