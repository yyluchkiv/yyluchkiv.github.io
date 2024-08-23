import Script from "next/script";
import ArrowLink from "@/src/components/Links/ArrowLink/ArrowLink";

export default function Home() {
  return (
    <div className="any-page">
      <p>
        👋 Hi
      </p>
      <p className="any-page-paragraph">
        I am Yurii Luchkiv
      </p>
      <div className="any-page-paragraph">
        <p>→ 💻 I am a software engineer</p>
        <p>→ ⏳ I have been a software engineer since 2011</p>
        <p>→ 🏁 I plan to continue to be a software engineer</p>
      </div>
      <p className="any-page-paragraph">
        What do I do?
      </p>
      <div className="any-page-paragraph">
        <p>→ I provide services <ArrowLink link={"https://tech1.io/"} text={"HERE"}/></p>
        <p>→ I build apps <ArrowLink link={"/apps"} text={"HERE"}/></p>
      </div>
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
