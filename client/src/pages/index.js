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
};