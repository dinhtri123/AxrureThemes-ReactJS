import React from 'react';
import Text from '../components/Text';

const MainAwesome = () => {
    return (
        <div className='bg-white py-[100px]'>
            <div className="container flex flex-col gap-[30px]">
             <h3>WHY THIS IS AWESOME</h3>
             <span className="w-[60px] h-[2px] bg-orangeLight rounded-lg"></span>
             <Text content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}></Text>
             <div>

             </div>
            </div>
        </div>
    );
};
function Content(){
    return(<div>
        
    </div>)
}
export default MainAwesome;