import React,{useState} from 'react'

const TwoSlider = () => {  
    const [toggled, setToggled] = useState(true);
    let img = "https://cdn.shopify.com/s/files/1/0054/6665/2718/files/1200x399_1_59ab296a-15d5-4e1c-84dd-bd35b002e4ce_1500x.png?v=1654536568";
    
    return (
        <>
        {toggled
            ? <img src={img} />
            : <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/1200x399_2_1500x.png?v=1654766303" />
        }
        <button>Toggle</button>
      </>
    );
  };
  export default TwoSlider
  
  /* Usage 
  <ToggleDivImage />
  */