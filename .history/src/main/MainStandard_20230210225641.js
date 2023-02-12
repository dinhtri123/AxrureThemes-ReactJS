import React from "react";
import Text from "../components/Text";
import Title from "../components/Title";

const MainStandard = () => {
  return (
    <div className="bg-[#f5f5f5]">
      <div className="container flex gap-10">
        <div className="w-[50%] flex flex-col gap-[30px]">
          <Title text={"Standard Picture Section"} className="text-lg"></Title>
          <span className="w-[60px] h-[2px] bg-orangeLight rounded-lg"></span>
          <Text
            content={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes."
            }
          ></Text>
        </div>
      </div>
    </div>
  );
};

export default MainStandard;
