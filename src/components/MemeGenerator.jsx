import { React, useState, useEffect } from "react";
import "../styles/memeGenerator.css";

function MemeGenerator() {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [randomImg, setRandomImg] = useState("http://i.imgflip.com/1bij.jpg");
  const [allMemeImgs, setAllMemeImgs] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        setAllMemeImgs(memes);
        console.log(memes[0]);
      });
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.value 
    console.log('working')
  }

  return (
    <div>
      <form className="memeForm">
        <input
          type="text"
          name="topText"
          placeholder="Top Text"
          value={topText}
          onChange={handleChange}
        />
        <input
          type="text"
          name="bottomText"
          placeholder="Bottom Text"
          value={bottomText}
          onChange={handleChange}
        />
        <button>Gen</button>
      </form>
    </div>
  );
}

export default MemeGenerator;
