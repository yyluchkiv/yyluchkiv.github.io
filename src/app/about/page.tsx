import ImageGallery from "@/src/components/ImageGallery";
import Face from "@/public/assets/jpgs/face.jpg";

const Gallery = [
  {
    ratio: 100,
    images: [
      {
        source: Face,
        ratio: 100,
        alt: 'Mountains'
      }
    ]
  }
]

export default function About() {
  return (
    <div className="page-container about">
      <a href="/">← Back to home</a>
      <div className="any-page-gallery about-main-image">
        <ImageGallery gallery={Gallery} gap={15} imageBorderRadius={2} orientation={'h'} preview={false} />
      </div>
      <p className="any-page-paragraph">
        I have been a software engineer (since 2011) and have spent a decade building a software development agency.
        Starting in 2024, I want to realize my ideas and potential.
        My focus is on building apps and supporting my wife (married in 2014) and three children (born in 2016, 2019, 2024).
      </p>
      <p className="any-page-paragraph">
        When I was young I wasn&apos;t sure I should become a software engineer.
        However, I started my professional education when I was 12 years old in Lviv Physics and
        Mathematics Lyceum and completed it at the age of 21 in the Applied Mathematics and Informatics department at
        Lviv Ivan Franko National University.
        I had some viable options in the non-software development area (or at least I thought they were viable at that
        time).
        But then I tried to start a professional career as a software engineer. It worked, and I liked it.
      </p>
      <p className="any-page-paragraph">
        Right now I am a mostly Java/JavaScript software engineer.
        In the early days of my career, I wanted to be a full-stack developer to be able to complete apps individually.
        Or at least in the early stages.
        Later on, I understood that to be a really good full-stack developer you need to be a backend developer during
        your work time and be a frontend developer in your spare time.
      </p>
      <p className="any-page-paragraph">
        Overall, I like working closely with decision-makers, teaching and mentoring young people in our industry.
      </p>
    </div>
  )
}
