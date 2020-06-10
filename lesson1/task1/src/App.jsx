import React from "react";
import ReactDOM from "react-dom";
import ThemedButton from "./ThemedButton";

const App = () => {
  return (
    <div>
      <ThemedButton>Dynamic Theme</ThemedButton>
      <ThemedButton>Default Theme</ThemedButton>
    </div>
  );
};
export default App;
