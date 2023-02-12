import React from "react";
import Text from "../components/Text";
import Title from "../components/Title";

const MainSublist = () => {
  return (
    <div className="py-[100px]">
      <div className="container flex gap-[80px]">
        <div className="w-[50%]">
          <img src="../img2.png" alt="" />
        </div>
        <div className="w-[50%] flex flex-col gap-[30px]">
          <Title text={"Sub list section"}></Title>
          <span className="w-[60px] h-[2px] bg-orangeLight rounded-lg"></span>
          <Text
            content={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo."
            }
          ></Text>
          <div className="flex gap-6">
            <div className="w-[50px]">
              <span className="w-[40px] h-[40px] border-2 border-orangeLight rounded-full flex justify-center items-center text-orangeLight">
              <ion-icon name="cloud-upload"></ion-icon>
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <Title text={"Title"} className="text-sm"></Title>
              <Text
                className="text-sm"
                content={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet"
                }
              ></Text>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="w-[50px]">
              <span className="w-[40px] h-[40px] border-2 border-orangeLight rounded-full flex justify-center items-center text-orangeLight">
              <ion-icon name="cloud-download"></ion-icon>
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <Title className={"text-sm"} text={"Title"}></Title>
              <Text
                className="text-sm"
                content={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet"
                }
              ></Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSublist;
