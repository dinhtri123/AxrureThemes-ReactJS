import React from "react";
import Button from "../components/Button";
import Text from "../components/Text";
import Title from "../components/Title";
const tabs = ["TAB 1", "TAB 2", "TAB 3"];
const MainTabs = () => {
  return (
    <div className="pt-[145px] pb-[115px] bg-[#f5f5f5] w-full">
      <div className="container flex gap-10">
        <div className="flex gap-16">
          <div className="flex flex-col">
            {tabs.map((tab) => (
              <p className="w-[110px] h-[110px] flex justify-center items-center text-base text-white bg-[#333333] border border-b-white cursor-pointer font-semibold">
                {tab}
              </p>
            ))}
          </div>
          <div className="flex flex-col">
            <Title text={"Tabs with soft transitioning effect."} className="mb-[50px] text-sm"></Title>
            <Text className="mb-[25px]"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod 
bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra 
justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque 
penatibus et magnis dis parturient montes."
            ></Text>
            <Text
              content="
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod 
bibendum laoreet."
            ></Text>

            <Button
              className={"bg-orangeLight border-none rounded-md mt-[50px]"}
            ></Button>
          </div>
        </div>
        <div className="w-full h-full">
            <img src="../img.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default MainTabs;
