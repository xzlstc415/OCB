/** @jsxRuntime classic /
/** @jsx jsx */ jsx;
import { css, jsx } from '@emotion/react';
import Image from 'next/image';
import Fade from 'react-reveal/Fade';

const BannerSection = () => {
  return (
    <div
      css={css`
        background: url('/christian-koch-D_4R9CcYZOk-unsplash.jpg') no-repeat
          center;
        background-size: cover;
        grid-column: 1 /4;
      `}
    >
      <Fade bottom duration={1000} distance="25px">
        <div className="flex flex-col items-center mt-5 mx-auto md:mb-40 md:mt-0 lg:mt-0 md:flex-row lg:flex-row w-10/12">
          <div className="flex flex-col mb-10 items-center md:items-start lg:items-start md:mr-3 lg:mr-6 md:w-4/12 lg:w-5/12 space-y-4 my-36 bg-white-85 rounded-xl">
            <div className="m-10">
              <div className="text-2xl font-josefinSans text-center md:text-left md:text-3xl lg:text-5xl lg:leading-normal">
                Exceptional investment opportunities across Ontario.
              </div>
              <div className="text-sm font-josefinSans text-center md:text-left md:text-lg lg:text-xl lg:leading-normal mt-2">
                <b className="text-green-400">Ontario Cash Buyer</b> is a
                Ontario based real estate investing company that work with real
                estate investors on private real estate deals with various
                strategies.
              </div>
              {/* <form
                method="get"
                action="https://5i204.r.a.d.sendibm1.com/mk/cl/f/sjTJp-VUhsPfOdQFoOHZbZjgulhd7XtQA5tVZ2Ds6GE-dy6TydL5OWtvKZJhw2xsN7ITNH0Vor44c-zzM3iJ0riqt1IaTdfyFY-1kNg0f2f25Xy37LMLbmo78kfjYXkZP8xtg7b83JAEPu-eqxw0tuXB0Uig-AgTSCZmkAS2qlW_6BMZwfhgNuoX7XKZhWPtV67oMJYJox1EyGLYUfYEUK7ZIYuKAs1jCMjfZcv5MK0DpDfqzkd31kCeaRbrTWQq0c-OhYgR2yp_M415RefkXza-XMM8x2voCErnw82lvuZVo1J2MSSm3nUVicG2fIgh67HHtuvY98yhWEcyZ5TCETWbo_TNYXYxVhdQlPdKzbq5Bcj8rcKNOa605FDlLE6hT-bdLjuTSl3R_luqpj_XQyjTYufBq3nnYRfvx_NhnIX9rG3M9VStQS6DpJfrzBn-EQVN-wpGPoEJ"
              >
                <button
                  type="submit"
                  className="bg-green-400 p-4 w-50 rounded-3xl text-white-1 shadow-md mt-10"
                >
                  Subscribe to Email Newsletter
                </button>
              </form> */}
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default BannerSection;
