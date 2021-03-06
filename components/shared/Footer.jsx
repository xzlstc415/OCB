/** @jsxRuntime classic /
/** @jsx jsx */ jsx;
import { css, jsx } from '@emotion/react';

const Footer = () => (
  <div
    className="flex flex-col justify-between w-full items-center mb-10"
    css={css`
      max-width: 1500px;
      margin: 0 auto;
      @media (min-width: 1900px) {
        padding: 0 30px;
      }
    `}
  >
    <div
      className="w-3/5 float-left flex mb-14 justify-evenly flex-wrap mt-10"
      css={css`
        & > * {
          max-width: 140px;
          word-break: break-word;
          @media (max-width: 1240px) {
            margin-right: 4%;
          }
        }

        h4 {
          font-size: 0.9rem;
          letter-spacing: 1.5px;
          line-height: 1;
          text-transform: uppercase;
          margin-bottom: 2em;
        }
        p {
          font-size: 0.95rem;
          letter-spacing: 0;
          line-height: 2;
        }
      `}
    >
      <div>
        <h4>Hours</h4>
        <p>Mondays to Fridays 9:00am - 6:00pm</p>
      </div>
      <div>
        <h4>Inquiries</h4>
        <p>
          <a href="tel:6476941529">647-694-1529</a>
          <br />
          <a href="mailto:info@paradiseawaits.ca">info@ontariocashbuyers.ca</a>
        </p>
      </div>
    </div>
    <div className="flex justify-between clear-both mb-10">
      <span className="light-grey">
        <span>┬ęCopyright 2021 Ontario Cash Buyers.</span>
      </span>
    </div>
  </div>
);

export default Footer;
