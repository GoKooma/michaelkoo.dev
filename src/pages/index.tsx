/* eslint-disable */
import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Seo from '../components/seo';

const IndexPage = () => (
  <>
    <Seo title="Home" />
    <div className="">
      <div className="flex flex-col-reverse m-auto md:flex-row pt-12 pb-8">
        <div className="md:w-2/3 md:min-w-[450px]">
          <h1 className="text-[5rem] mb-0">Hi, I am</h1>
          <h1 className="text-theme-pop text-[5rem] mb-[80px]">Michael Koo.</h1>
          <p className="text-xl mb-4">I am a <span className="font-bold text-theme-pop">Full Stack Developer.</span></p>
          <p className="text-xl">
            I build websites with <strong>JAM Stack</strong>, REST APIs with <strong>Node.js</strong>, and engineer infrastructure with <strong>Kubernetes and Docker</strong> during my day job.
          </p>
        </div>
        <div className="py-12 m-auto md:ml-4">
          <StaticImage
            src="../images/coding-michael-crop.jpg"
            alt="Michael Coding at Cafe"
            className="rounded-full"
            placeholder="tracedSVG"
            layout="fixed"
            width={300}
          />
        </div>
      </div>
      <section>
        <div className="hidden">
          <h2 className="text-center">
            Projects
          </h2>
          <hr className="w-[3rem] h-[2px] mx-auto" />
        </div>
      </section>
    </div>
  </>
)

export default IndexPage;
