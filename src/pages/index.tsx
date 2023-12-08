import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import Carousel from 'react-multi-carousel';
import ContactForm from '../components/ContactForm';
import Seo from '../components/seo';
import 'react-multi-carousel/lib/styles.css';

import works from '../data/works.json';
import WorkShowCase from '../components/WorkShowCase';

const responsive = {
  largeDesktop: {
    breakpoint: { max: 4000, min: 2880 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 2880, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const IndexPage = () => (
  <>
    <Seo title="Home" />
    <div className="">
      <div className="flex flex-col-reverse m-auto md:flex-row pt-12 pb-4">
        <div className="md:w-2/3 md:min-w-[450px]">
          <h1 className="text-[5rem] mb-0">Hi, I am</h1>
          <h1 className="text-theme-pop text-[5rem] mb-[20px]">Michael Koo.</h1>
          <ul className="flex justify-start m-0 mb-[50px]">
            <li className="mr-2 w-[35px]">
              <a
                href="https://github.com/GoKooma"
                className="w-full h-full"
              >
                <FiGithub className="w-full text-2xl" />
              </a>
            </li>
            <li className="w-[35px]">
              <a
                href="https://linkedin.com/in/gokooma"
                className="w-full h-full"
              >
                <FiLinkedin className="w-full text-2xl" />
              </a>
            </li>
          </ul>
          <p className="text-xl mb-4">
            I am a
            {' '}
            <span className="font-bold text-theme-pop">
              Software Development Engineer
            </span>
            {' '}
            <a className="underline hover:underline hover:text-theme-pop-highlight" href="amazon.com">&#64; Amazon</a>
          </p>
          <p className="text-xl mb-4">
            I am adept at full stack development with extensive background
            {' '}
            in TypeScript, Java, and infrastructure management via IaC.
          </p>
          <p className="text-xl">
            Aside from work, I
            {' '}
            <em>enjoy</em>
            {' '}
            building web apps and learning new technologies during my free time.
            {' '}
            I love collaboration to build something awesome! I regularly attend hackathons
            {' '}
            to build fun apps with people I come across at hackathons.
          </p>
        </div>
        <div className="py-4 md:py-12 m-auto md:ml-4">
          <StaticImage
            src="../images/Michael_with_coffee.jpeg"
            alt="Michael with coffee"
            className="rounded-lg"
            placeholder="tracedSVG"
            layout="fixed"
            width={300}
          />
        </div>
      </div>
      <div className="flex flex-col m-auto md:flex-row pb-4 md:pb-8">
        <div className="pb-4 md:py-4 m-auto md:ml-4 md:mr-16">
          <StaticImage
            src="../images/Churri.JPG"
            alt="My puppy, Churri"
            className="rounded-lg"
            placeholder="tracedSVG"
            layout="constrained"
            width={500}
          />
        </div>
        <div className="py-4 md:py-12">
          <p className="text-xl mb-4">
            I am a coffee lover (my life elixir...☕️), passionate tennis player 🎾,
            {' '}
            and a dog lover 🐶. I start my day with a cup of latte, code in zen mode,
            {' '}
            play some tennis rallies if the evening is free, and go for a walk
            {' '}
            with my wife and my 10 months old puppy, Churri 🐶
          </p>
          <p className="text-xl">
            The picture on the
            {' '}
            <span className="md:hidden">top</span>
            <span className="hidden md:inline">left</span>
            {' '}
            was taken by my best friend when my family visited
            {' '}
            Point Reyes in NorCal. Although Churri could not enter the trail, he enjoyed the view!
          </p>
        </div>
      </div>
      <section className="mb-8">
        <div className="mb-4">
          <h2 className="">
            Projects
          </h2>
          <hr className="w-[4rem] h-[2px]" />
          <p className="text-gray-400">
            Feel free to check out some works I have done:
          </p>
        </div>
        <div>
          <Carousel
            swipeable
            draggable
            responsive={responsive}
            keyBoardControl
          >
            {works.works.map((work) => (<WorkShowCase work={work} />))}
          </Carousel>
        </div>
      </section>
      <section className="my-20 mx-auto w-full md:min-w-[500px] md:w-[60%] text-center">
        <div className="mb-4">
          <h2 className="">
            Say hi
          </h2>
          <hr className="w-[4rem] h-[2px] mx-auto" />
          <p className="">
            Have some questions? Let me know!
          </p>
        </div>
        <ContactForm />
      </section>
    </div>
  </>
);

export default IndexPage;
