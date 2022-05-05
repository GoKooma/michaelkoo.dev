/* eslint-disable */
import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Seo from '../components/seo';
import * as styles from '../components/index.module.css';

const IndexPage = () => (
  <>
    <Seo title="Home" />
    <div className="">
      <div className="flex flex-col-reverse m-auto md:flex-row py-12">
        <div className="md:w-2/3 md:min-w-[450px]">
          <h1 className="text-[5rem] mb-0">Hi, I am</h1>
          <h1 className="text-pink text-[5rem] mb-[80px]">Michael Koo.</h1>
          <p className="text-xl mb-4">I am a <span className="font-bold text-pink">Full Stack Developer.</span></p>
          <p className="text-xl">
            I build websites with <strong>JAM Stack</strong> (Gatsby, Next.js, Tailwind CSS, Storyblok, etc). I am familiar with REST API development using Node.js and Python.
          </p>
        </div>
        <div className="py-12 m-auto md:ml-4">
          <StaticImage
            src="../images/coding-michael-crop-tinified.png"
            placeholder="tracedSVG"
            layout="fixed"
            width={300}
          />
        </div>
      </div>
    </div>
  </>
)

export default IndexPage;
