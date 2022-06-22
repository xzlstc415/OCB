import Layout from '../components/shared/Layout';
import Image from 'next/image';
import AboutCard from '../components/about/AboutCard';
import Fade from 'react-reveal/Fade';

const About = () => (
  <Layout>
    <div className="mb-10">
      <div className=" mx-auto my-10 lg:mt-24 lg:h-60v">
        <Fade bottom duration={1000} distance="25px">
          <div className="flex flex-col items-center justify-center lg:flex-row">
            <div className="md:mr-6 w-12/13 md:w-9/13 lg:w-7/13">
              <h2 className="text-4xl mb-10 font-josefinSans">About Us</h2>
              <p className="font-roboto mb-5">
                Ontario Cash Buyers. was co-founded in the summer of 2020 by two
                Ontario entrepreneurs, Lee Xing and Vince Traina. Both with a
                passion for all things Real Estate and Investing. Paradise
                Awaits Inc. focuses on areas across Ontario such as the GTA,
                Toronto, Simcoe, and South Western Ontario from Windsor all the
                way East to Kingston.
              </p>
              <p className="mb-5">
                The beauty of Real Estate is whether you’re buying, selling, or
                investing, with the right guidance you can achieve your
                financial goals the safe and secure way.
              </p>
              <p className="mb-5">
                Check out some of our recent projects and see how we can be the
                right fit for you!
              </p>

              <p className="mb-5">
                Welcome to Paradise, your first step awaits...
              </p>
            </div>
            <Image src="/team.jpg" width={600} height={458} />
          </div>
        </Fade>
      </div>

      <div className="mx-auto w-12/13 lg:w-full">
        <AboutCard
          name="Zhiliang Xing aka Lee"
          title="Co-founder/CEO"
          description="As CEO of Ontario Cash Buyers. Lee brings a diverse set of skills to the company. With a background in computer programming, Lee has a keen eye to analyzing and interpreting data. A few of Lee’s daily activities include analyzing property, overlooking teams for flip projects, property management, and short-term rentals such as AirBnB."
        />
      </div>
    </div>
  </Layout>
);

export default About;
