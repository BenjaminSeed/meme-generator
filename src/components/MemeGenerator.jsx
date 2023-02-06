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
    const { name, value } = event.target;
    if (name === "topText") {
      setTopText(value);
    } else if (name === "bottomText") {
      setBottomText(value);
    }
    console.log("working");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const randNum = Math.floor(Math.random() * allMemeImgs.length);
    const randMemeImg = allMemeImgs[randNum].url;
    setRandomImg(randMemeImg);
  };

  return (
    <div>
      <form className="memeForm">
        <input
          className="topForm"
          type="text"
          name="topText"
          placeholder="Top Text"
          value={topText}
          onChange={handleChange}
        />
        <input
          className="bottomForm"
          type="text"
          name="bottomText"
          placeholder="Bottom Text"
          value={bottomText}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>
          Generate
        </button>
        <div className="meme">
          <img src={randomImg} alt="" />
          <h2 className="top">{topText}</h2>
          <h2 className="bottom">{bottomText}</h2>
        </div>
      </form>
    </div>
  );
}

export default MemeGenerator;
