import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Logo from "../components/Logo";
import Text from "../components/Text";

const Banner = () => {
  return (
    <div className="relative w-full max-h-[640px] h-[640px] bg-black">
      <div className="absolute inset-0 z-0 bg-black opacity-50">
        <img
          src="../banner.jpeg"
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
      <div className="container z-10 grid justify-center w-full h-full grid-cols-2 gap-10 isolate">
        <div className="flex flex-col gap-[35px] justify-center text-white">
          <Logo className="text-[60px]"></Logo>
          <p className="text-semibold text-[36px] leading-[1.2]">
            MODERN AXURE TEMPLATE FOR BEAUTIFUL PROTOTYPES
          </p>
          <span className="w-[70px] h-[3px] bg-white rounded-lg"></span>
          <Text
            className="opacity-70"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
euismod bibendum laoreet. Proin gravida dolor sit amet lacus
accumsan et viverra justo commodo."
          ></Text>
          <Button></Button>
        </div>
        <div className="flex items-center justify-center">
            <div className="w-[360px] h-[362px] bg-white rounded-sm">
                <p className="w-full h-[55px]">Try Your <span className="bg-orangeLight">FREE</span> Trial Today</p>
                <div className="w-full px-[35px]">
                    <Input type="text" name={"name"} placeholder={"Name"}></Input>
                    <Input type="email" placeholder={"Name"}></Input>
                    <Input type="text" placeholder={"Name"}></Input>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
