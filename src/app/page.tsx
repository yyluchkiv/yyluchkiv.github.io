import Script from "next/script";
import ArrowLink from "@/src/components/Links/ArrowLink/ArrowLink";

export default function Home() {
  return (
    <div className="any-page">
      <p className="any-page-paragraph">
        👋 Hi
      </p>
      <p className="any-page-paragraph">
        I am Yurii Luchkiv
      </p>
      <p className="any-page-paragraph">
        <p>→ 💻 I am a software engineer</p>
        <p>→ ⏳ I have been a software engineer since 2011</p>
        <p>→ 🏁 I plan to continue to be a software engineer</p>
      </p>
      <p className="any-page-paragraph">
        What do I do?
      </p>
      <p className="any-page-paragraph">
        <p>→ I build apps here <a href="/apps">HERE</a></p>
        <p>→ I build apps here <ArrowLink link={"/apps"} text={"HERE"}</p>
        <p>→ ⏳ I have been a software engineer since 2011</p>
        <p>→ 🏁 I plan to continue to be a software engineer</p>
      </p>
      <br/>
      <br/>
      <br/>
      <p className="any-page-paragraph">
        That&apos;s all Folks 🙃
      </p>

      {/*Google Analytics*/}
      <div className="container">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-MGGJJG58LQ"/>
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-MGGJJG58LQ');
          `}
        </Script>
      </div>
    </div>
  )
}
