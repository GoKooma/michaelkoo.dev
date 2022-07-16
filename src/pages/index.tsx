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
      <div className="flex flex-col-reverse m-auto md:flex-row pt-12 pb-8">
        <div className="md:w-2/3 md:min-w-[450px]">
          <h1 className="text-[5rem] mb-0">Hi, I am</h1>
          <h1 className="text-theme-pop text-[5rem] mb-[20px]">Michael Koo.</h1>
          <ul className="flex justify-start m-0 mb-[50px]">
            <li className="mr-2 w-[35px]">
              <a
                href="https://github.com/kooma93"
                className="w-full h-full"
              >
                <FiGithub className="w-full text-2xl" />
              </a>
            </li>
            <li className="w-[35px]">
              <a
                href="https://linkedin.com/in/kweonkoo"
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
              Full Stack Developer.
            </span>
          </p>
          <p className="text-xl mb-4">
            I build websites with
            {' '}
            <strong>
              JAM Stack
            </strong>
            , REST APIs with
            {' '}
            <strong>
              Node.js
            </strong>
            , and engineer infrastructure with
            {' '}
            <strong>
              Kubernetes and Docker
            </strong>
            {' '}
            during my day job.
          </p>
          <p className="text-xl">
            I
            {' '}
            <em>enjoy</em>
            {' '}
            building web apps and learning new technologies everyday.
            {' '}
            I like working as a team; I regularly attend hackathons
            {' '}
            to build fun apps with friends and people I meet at hackathons.
          </p>
          <p className="text-base text-gray-400">
            <em>This site is a work in progress. So check back often!</em>
          </p>
        </div>
        <div className="py-12 m-auto md:ml-4">
          <StaticImage
            src="../images/happy-michael-crop.jpg"
            alt="Michael Coding at Cafe"
            className="rounded-full"
            placeholder="tracedSVG"
            layout="fixed"
            width={300}
          />
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
            // infinite
            keyBoardControl
            // removeArrowOnDeviceType="desktop"
            // centerMode
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
