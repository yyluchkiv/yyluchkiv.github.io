import Script from "next/script";
import ArrowLink from "@/src/components/Links/ArrowLink/ArrowLink";
import ImageGallery from "@/src/components/ImageGallery/ImageGallery";
import Avatar from "@/public/assets/pngs/avatar.png";

const Gallery = [
  {
    ratio: 100,
    images: [
      {
        source: Avatar,
        ratio: 100,
        alt: 'Avatar'
      }
    ]
  }
]

export default function Home() {
  return (
    <div className="any-page">
      {/*<p className="any-page-gallery">*/}
      {/*  <ImageGallery gallery={Gallery} gap={15} imageBorderRadius={2} orientation={'h'} preview={false}/>*/}
      {/*</p>*/}
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
        <p>→ I provide services <ArrowLink link={"https://tech1.agency"} text={"HERE"}/></p>
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
