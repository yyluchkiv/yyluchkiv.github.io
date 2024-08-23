import ArrowLink from "@/src/components/Links/ArrowLink/ArrowLink";

export default function About () {
  return (
    <div className="any-page">
      <p>
        <ArrowLink link={"https://dadapp.app/"} text={"dadapp.app"} imageVisible={true}/>
      </p>
      <p className="any-page-paragraph">
        Family data in your pocket. No more spreadsheets, no more notes, no more &quot;One second, I&apos;ll call my
        wife to check this&quot;.
      </p>
      <p className="any-page-paragraph">
        <ArrowLink link={"https://dadapp.app/"} text={"App Store"} imageVisible={false}/>
      </p>
      <p className="any-page-paragraph">
        <ArrowLink link={"https://dadapp.app/"} text={"Google Play"} imageVisible={false}/>
      </p>
      <br/>
      <hr/>
      <br/>
      <p className="any-page-paragraph">
        <ArrowLink link={"https://chromewebstore.google.com/detail/password-generator/nbnjbddbbcnnlceoglkfoolmknejieoi?hl=en"} text={"password generator"} imageVisible={true}/>
      </p>
      <p className="any-page-paragraph">
        Chrome Extension: Password Generator - simple, secure, one-click password generator
      </p>
    </div>
  )
}
