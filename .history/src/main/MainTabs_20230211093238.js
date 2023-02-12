import React, { useState } from "react";
import Button from "../components/Button";
import TabContent from "../components/TabContent";
import Text from "../components/Text";
import Title from "../components/Title";
const tabs = ["TAB 1", "TAB 2", "TAB 3"];
const tabsContent = ["Tabs 1 with soft transitioning effect.", "Tabs 2 with soft transitioning effect." , "Tabs 3 with soft transitioning effect."]
const MainTabs = () => {
  const [show, setShow] = useState(false)
  
  function handleTab(index){
    if(index === 0){
      setShow(index)
    }
  }
  return (
    <div className="pt-[145px] pb-[115px] bg-[#f5f5f5] w-full" id="feature">
      <div className="container flex gap-10">
        <div className="flex gap-16">
          <div className="flex flex-col">
            {tabs.map((tab,index) => (
              <p className="w-[110px] h-[110px] flex justify-center items-center text-base text-white bg-[#333333] border border-b-white cursor-pointer font-semibold" onClick={handleTab(index)} key={index}>
                {tab}
              </p>
            ))}
          </div>
          {show === 0 && <TabContent title={""}></TabContent>}
        </div>
        <div className="w-full h-full">
            <img src="../img.png" alt="" className="object-cover w-[90%]"/>
        </div>
      </div>
    </div>
  );
};

export default MainTabs;
