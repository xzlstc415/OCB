/** @jsxRuntime classic /
/** @jsx jsx */ jsx;
import { css, jsx } from '@emotion/react';
import Link from 'next/link';
import NavLink from './NavLink';

const Navbar = ({ toggleMenu }) => {
  return (
    <div className="px-4">
      <div
        className="flex justify-between w-100 items-center"
        css={css`
          max-width: 1500px;
          margin: 0 auto;
          @media (min-width: 1900px) {
            padding: 0 30px;
          }
        `}
      >
        <Link href="/">
          <a
            css={css`
              height: 120px;
              width: 120px;
              background: url('/Logo.jpg') no-repeat center;
              background-size: contain;
            `}
            className="my-5 cursor-pointer"
          ></a>
        </Link>
        {/* <div>
          <ul
            className="list-none p-0 hidden md:flex lg:flex"
            css={css`
              margin: 0 0 1em 0;
            `}
          >
            <NavLink href="/about">About Us</NavLink>
            <div>
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
            </div>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/process">Process</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/contact">Contact Us</NavLink>
          </ul>
          <div
            className="flex cursor-pointer text-xl md:hidden lg:hidden"
            onClick={() => toggleMenu()}
          >
            Menu
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
