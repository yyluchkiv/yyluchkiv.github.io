import {Outfit, Roboto_Mono} from "next/font/google";

const titleFont = Outfit({
    weight: ['400', '700'],
    subsets: ['latin']
})

const appFont = Roboto_Mono({
    weight: '400',
    subsets: ['latin']
})

export default function Newsletter () {
    return (
        <div className="page-container">
            <div className="app-card">
                <h3 className={`${titleFont.className} app-card-title`}>Newsletter</h3>
                <p>Sign up below to receive monthly updates from me straight in your inbox.</p>
                <form className="newsletter-form" action="">
                    <input className="newsletter-input" type="email" placeholder="Email" />
                    <button className={`${appFont.className} newsletter-button`}>Sign Up</button>
                </form>
            </div>
        </div>
    )
}

