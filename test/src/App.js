import React from 'react';
import User from "./components/users/User";


// import Haynow from "./components/Haynow"

function App() {
  let image = "https://th.bing.com/th/id/OIP.Q50A1jwXSoOLSteU4QiVgwAAAA?w=256&h=256&rs=1&pid=ImgDetMain";
  return (
   <div> {
    // // [0,1,2,3,4,5,6,7,8].map( ele => <Haynow key={ele} />)
    // <Haynow />
    <div className="container my-5 ">
          <User image={image} phone="0987654321" cell="0987878787" />
          <User image={image} phone="0912345678" cell="0987654328" />
    </div>

}
   </div>
  
  );
}

export default App;
