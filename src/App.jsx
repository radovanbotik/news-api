import { useState } from "react";
import "./App.css";
import { useGlobalContext } from "./utils/Context";
import Stories from "./components/Stories";
import Form from "./components/Form";
import Buttons from "./components/Buttons";

function App() {
  return (
    <div className="App">
      <Form></Form>
      <Buttons></Buttons>
      <Stories></Stories>
    </div>
  );
}

export default App;
