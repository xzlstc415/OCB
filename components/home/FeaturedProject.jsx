/** @jsxRuntime classic /
/** @jsx jsx */ jsx;
import { jsx } from "@emotion/react";
import Image from "next/image";
import Fade from "react-reveal/Fade";
import LeftAlignedProject from "./LeftAlignedProject";
import RightAlignedProject from "./RightAlignedProject";

const FeaturedProject = ({
  alignment = "left",
  imageUrl,
  children
}) => {
  return (
    <Fade bottom duration={1000} distance="25px">
      <div className="flex mt-20 mx-auto w-11/12 lg:w-full mb-20 md:relative">
        {alignment === "left" ? (
          <LeftAlignedProject imageUrl={imageUrl}>{children}</LeftAlignedProject>
        ) : (
          <RightAlignedProject imageUrl={imageUrl}>{children}</RightAlignedProject>
        )}
      </div>
    </Fade>
  );
};

export default FeaturedProject;
