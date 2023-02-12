import React from "react";
import Text from "../components/Text";
import Title from "../components/Title";

const MainAwesome = () => {
  return (
    <div className="bg-white py-[100px]">
      <div className="container flex flex-col gap-[30px] items-center">
        <h3 className="text-xl font-bold">WHY THIS IS AWESOME</h3>
        <span className="w-[60px] h-[2px] bg-orangeLight rounded-lg"></span>
        <Text
          content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        ></Text>
        <div className="grid grid-cols-3 gap-5">
          <Content
            title="Thounghtfull Design"
            icon={<ion-icon name="sunny"></ion-icon>}
          ></Content>
          <Content
            title="Well Crafted"
            icon={<ion-icon name="radio"></ion-icon>}
          ></Content>
          <Content
            title="Easy to Customer"
            icon={<ion-icon name="flash"></ion-icon>}
          ></Content>
        </div>
      </div>
    </div>
  );
};
const Content = ({ icon, title }) => {
  return (
    <div className="flex flex-col gap-[25px] items-center">
      <div className="w-[70px] h-[70px] border-2 border-orangeLight text-orangeLight text-3xl rounded-full flex justify-center items-center">
        {icon}
      </div>
      <Title text={title}></Title>
      <Text className="text-center"
        content={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra.nt"
        }
      ></Text>
    </div>
  );
};
export default MainAwesome;
