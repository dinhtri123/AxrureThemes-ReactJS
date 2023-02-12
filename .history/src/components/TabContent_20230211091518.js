import React from 'react';

const TabContent = () => {
    return (
        <div className="flex flex-col">
            <Title text={"Tabs with soft transitioning effect."} className="mb-[50px] "></Title>
            <Text className="mb-[20px] text-sm"
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
    );
};

export default TabContent;