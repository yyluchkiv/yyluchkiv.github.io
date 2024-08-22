import Script from "next/script";

export default function Home() {
  return (
    <div className="any-page">
      <p>
        I am a software engineer (since 2011) and a husband (since 2014) and a father (since 2016).
        As long as I can remember, I have always been curious about how things work.
        I currently work at Tech1.
        I enjoy building apps and delivering ideas to the market.
      </p>
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
