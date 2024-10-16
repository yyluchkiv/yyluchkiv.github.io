import ArrowLink from "@/src/components/ArrowLink";
import { Outfit } from "next/font/google";

const titleFont = Outfit({
    weight: ['400', '600', '700'],
    subsets: ['latin']
})

export default function About () {
  return (
    <div className="page-container">
      {/*<p>*/}
      {/*  <ArrowLink link={"https://dadapp.app/"} text={"dadapp.app"} imageVisible={true}/>*/}
      {/*</p>*/}
      {/*<p className="any-page-paragraph">*/}
      {/*  Family data in your pocket. No more spreadsheets, no more notes, no more &quot;One second, I&apos;ll call my*/}
      {/*  wife to check this&quot;.*/}
      {/*</p>*/}
      {/*<p className="any-page-paragraph">*/}
      {/*  <ArrowLink link={"https://dadapp.app/"} text={"App Store"} imageVisible={false}/>*/}
      {/*</p>*/}
      {/*<p className="any-page-paragraph">*/}
      {/*  <ArrowLink link={"https://dadapp.app/"} text={"Google Play"} imageVisible={false}/>*/}
      {/*</p>*/}
      {/*<br/>*/}
      {/*<hr/>*/}
      {/*<br/>*/}
      <div className="app-card">
        <h3 className={`${titleFont.className} app-card-title`}>DadApp</h3>
        <p>mobile app to securely store family data</p>
        <a className="link" target={'_blank'}
           href={"https://dadapp.app"}>→
          dadapp.app</a>
      </div>
      <div className="app-card">
        <h3 className={`${titleFont.className} app-card-title`}>Password Generator</h3>
        <p>simple, secure, one-click chrome extension</p>
        <a className="link" target={'_blank'}
           href={"https://chromewebstore.google.com/detail/password-generator/nbnjbddbbcnnlceoglkfoolmknejieoi?hl=en"}>→
          password generator</a>
      </div>
    </div>
  )
}
