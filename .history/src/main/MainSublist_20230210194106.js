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
              <span className="w-[40px] h-[40px] border-2 border-orangeLight rounded-full flex justify-center items-center">
                <ion-icon
                  name="cloud-upload-outline"
                  className="text-orangeLight"
                ></ion-icon>
              </span>
            </div>
            <div>
              <Title text={"Title"} className=''></Title>
              <Text
                content={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet"
                }
              ></Text>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="w-[50px]">
              <span className="w-[40px] h-[40px] border-2 border-orangeLight rounded-full flex justify-center items-center">
                <ion-icon
                  name="cloud-upload-outline"
                  className="text-orangeLight"
                ></ion-icon>
              </span>
            </div>
            <div>
              <Title text={"Title"}></Title>
              <Text
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
