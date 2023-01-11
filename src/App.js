import React, { useState } from "react";
import { Input } from "./Components/Input";
import "./style.css";

function App() {
  // const [imageUrl, setImageUrl] = useState(null);

  // const onChange = (e) => {
  //   const { files } = e.target;
  //   setImageUrl(URL.createObjectURL(files[0]));
  // };

  return (
    <div className="App">
      <Input />
      {/* <input
        type="file"
        accept="image/png, image/jpeg"
        onChange={(e) => onChange(e)}
      />
      <img src={imageUrl} alt="file" /> */}
    </div>
  );
}

export default App;
