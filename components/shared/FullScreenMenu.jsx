/** @jsxRuntime classic /
/** @jsx jsx */ jsx;
import { css, jsx } from '@emotion/react';
import Link from 'next/link';
import NavLink from './NavLink';
import Fade from 'react-reveal/Fade';

const BigNavLink = ({ href, children, offset }) => (
  <a href={href}>
    <h2 className="text-4xl font-josefinSans">{children}</h2>
  </a>
);

const FullScreenMenu = ({ toggleMenu }) => (
  <div className="z-50 absolute w-screen h-screen bg-white">
    <div className="flex mb-14 items-center px-4">
      <Link href="/">
        <a
          css={css`
            height: 120px;
            width: 120px;
            background: url('/Logo.jpg') no-repeat center;
            background-size: contain;
          `}
          className="my-5 cursor-pointer"
        />
      </Link>
      <div
        className="ml-auto text-3xl font-josefinSans cursor-pointer"
        onClick={() => toggleMenu()}
      >
        Close
      </div>
    </div>
    {/* <div className="px-8">
      <Fade duration={500} cascade>
        <ul className="flex flex-col space-y-5 mb-14">
          <li>
            <BigNavLink offset={1} href="/about">
              About Us
            </BigNavLink>
          </li>
          <li>
            <form
              method="get"
              action="https://5i204.r.a.d.sendibm1.com/mk/cl/f/sjTJp-VUhsPfOdQFoOHZbZjgulhd7XtQA5tVZ2Ds6GE-dy6TydL5OWtvKZJhw2xsN7ITNH0Vor44c-zzM3iJ0riqt1IaTdfyFY-1kNg0f2f25Xy37LMLbmo78kfjYXkZP8xtg7b83JAEPu-eqxw0tuXB0Uig-AgTSCZmkAS2qlW_6BMZwfhgNuoX7XKZhWPtV67oMJYJox1EyGLYUfYEUK7ZIYuKAs1jCMjfZcv5MK0DpDfqzkd31kCeaRbrTWQq0c-OhYgR2yp_M415RefkXza-XMM8x2voCErnw82lvuZVo1J2MSSm3nUVicG2fIgh67HHtuvY98yhWEcyZ5TCETWbo_TNYXYxVhdQlPdKzbq5Bcj8rcKNOa605FDlLE6hT-bdLjuTSl3R_luqpj_XQyjTYufBq3nnYRfvx_NhnIX9rG3M9VStQS6DpJfrzBn-EQVN-wpGPoEJ"
            >
              <button
                type="submit"
                className="bg-green-400 p-3 w-50 rounded-3xl text-white-1 shadow-md"
              >
                Subscribe to Email Newsletter
              </button>
            </form>
          </li>
          <li>
            <BigNavLink offset={2} href="/projects">
              Projects
            </BigNavLink>
          </li>
          <li>
            <BigNavLink offset={3} href="/process">
              Process
            </BigNavLink>
          </li>
          <li>
            <BigNavLink offset={4} href="/blog">
              Blog
            </BigNavLink>
          </li>
          <li>
            <BigNavLink offset={5} href="/contact">
              Contact Us
            </BigNavLink>
          </li>
        </ul>
      </Fade>

      <hr
        style={{
          color: 'black',
          backgroundColor: 'black',
          height: 3,
        }}
      />
      <div className="space-y-5 mt-10">
        <a href="tel:6478981510">Telephone: 647-694-1529</a>
        <div>Email: info@paradiseawaits.ca</div>
        <div>
          Address: 180 Northfield Dr W 1st Floor, Unit 4, Waterloo, ON N2L 0C7
        </div>
      </div>
    </div> */}
  </div>
);

export default FullScreenMenu;
