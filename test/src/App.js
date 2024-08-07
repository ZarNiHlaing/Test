import React from 'react';
import User from "./components/users/User";


// import Haynow from "./components/Haynow"

function App() {
  return (
   <div> {
    // // [0,1,2,3,4,5,6,7,8].map( ele => <Haynow key={ele} />)
    // <Haynow />
    <div className="container my-5 ">
          <User />
    </div>

}
   </div>
  
  );
}

export default App;
