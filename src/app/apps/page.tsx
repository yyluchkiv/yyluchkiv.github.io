import ArrowLink from "@/src/components/ArrowLink";
import { Outfit } from "next/font/google";

const titleFont = Outfit({
  weight: ['400', '600', '700'],
  subsets: ['latin']
})

export default function About() {
  return (
    <div className="page-container">
      <div className="app-card">
        <h3 className={`${titleFont.className} app-card-title`}>DadApp, 140 users</h3>
        <p>mobile app to securely store family data</p>
        <a className="link" target={'_blank'} href={"https://dadapp.app"}>
          → dadapp.app
        </a>
      </div>
      <div className="app-card">
        <h3 className={`${titleFont.className} app-card-title`}>Password Generator, 3k+ users</h3>
        <p>simple, secure, one-click chrome extension</p>
        <a className="link" target={'_blank'} href={"https://chromewebstore.google.com/detail/password-generator/nbnjbddbbcnnlceoglkfoolmknejieoi?hl=en"}>
          → password generator
        </a>
      </div>
    </div>
  )
}
