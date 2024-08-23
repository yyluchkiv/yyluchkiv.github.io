import ArrowLink from "@/src/components/Links/ArrowLink/ArrowLink";

export default function About () {
  return (
    <div className="any-page">
      <p className="any-page-paragraph">
        <ArrowLink link={"https://dadapp.app/"} text={"dadapp.app"}/>
      </p>
      <p className="any-page-paragraph">
        Family data in your pocket. No more spreadsheets, no more notes, no more &quot;One second, I&apos;ll call my wife to check this&quot;.
      </p>
    </div>
  )
}
