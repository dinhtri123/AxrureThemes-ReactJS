import React from "react";
import Text from "../components/Text";
import Title from "../components/Title";

const MainSublist = () => {
  return (
    <div className="py-[100px]">
      <div className="container flex gap-10">
        <div>
          <img src="../img2.png" alt="" />
        </div>
        <div>
          <Title text={"Sub list section"}></Title>
          <span></span>
          <div>
            <ion-icon name="cloud-upload-outline"></ion-icon>
            <div>
              <Title text={"Title"}></Title>
              <Text
                content={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet"
                }
              ></Text>
            </div>
            
          </div>
          <div>
            <ion-icon name="cloud-upload-outline"></ion-icon>
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
