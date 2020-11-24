import React from "react";
import ParticlesBg from "particles-bg";
import SignUp from "./SignUp";
import "../index.css";

export default function SignRender() {
return (
      <div>
        <SignUp/>
        <ParticlesBg type="lines" color="#ffb4da" bg={true}/>
      </div>
    );
}


// STARTING EXAMPLE. MAY NEED TO REVISIT LATER.
// =============================
 
// import { render } from "react-dom";
// { Component }

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "React"
//     };
//   }

//   render() {
//     return (
//       <div>
//         <SignUp/>
//         <ParticlesBg type="lines" color="#ffb4da" bg={true}/>
//       </div>
//     );
//   }
// }

// render(<App />, document.getElementById("root"));