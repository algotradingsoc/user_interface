import NavBar from "./components/navbar/NavBar";
import React from "react";
import Title from "./components/title/Title";
import Research from "./components/research/Research";
import Contacts from "./components/contacts/Contacts";

function App() {
  return (
      <div>
        <NavBar/>
        <Title/>
        <Research/>
        <Contacts/>
      </div>
  );
}

export default App;
