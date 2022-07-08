import React, { useState } from "react";
// import { useForm } from "react-hook-form";
import { FaStar } from "react-icons/fa";
import { BsEmojiFrown, BsEmojiSmile, BsEmojiNeutral } from "react-icons/bs";
import "./modal.style.css";

const Modal = () => {
  // const { reset } = useForm();
  const [showReating, setShowReating] = useState(false);

  const [comment, setComment] = useState("");
  const [firstActive, setFirstActive] = useState(true);
  const [secondActive, setIsSecondctive] = useState(true);
  const [thirdActive, setThirdActive] = useState(true);
  const [rating, setRating] = useState(undefined);

  const handleClick = () => setShowReating(!showReating);

  const clickOptinOne = () => {
    setFirstActive(!firstActive);
    setIsSecondctive(true);
    setThirdActive(true);
    setRating("***");
    // console.log(`first option: ${firstActive}`);
  };

  const clickOptinTwo = () => {
    setIsSecondctive(!secondActive);
    setFirstActive(true);
    setThirdActive(true);
    setRating("**");
    // console.log(`second option: ${secondActive}`);
  };

  const clickOptinThree = () => {
    setThirdActive(!thirdActive);
    setIsSecondctive(true);
    setFirstActive(true);
    setRating("*");
    // console.log(`third option: ${thirdActive}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setComment("");
    console.log(`TEXT: ${comment}  ${rating}`);
  };

  return (
    <div>
      <h2>Reatings</h2>
      <button style={{ color: "blue" }} className="reatingButton" onClick={handleClick}>
        Click me Mf
      </button>

      {showReating ? (
        <form className="comments" onSubmit={handleSubmit}>
          <div className="reatingPoints" showReating={setShowReating}>
            {/* //////////////////////////// */}

            <div className="boxies">
              <div key={"1a"} onClick={clickOptinOne} className={firstActive ? "raetingBox" : "raetingBoxClick"}>
                <div className="emoji">
                  <BsEmojiSmile />
                </div>

                <div className="stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p>(It is fucking awesome)</p>
              </div>
              {/* ///////////////////////////// */}
              <div key={"2b"} onClick={clickOptinTwo} className={secondActive ? "raetingBox" : "raetingBoxClick"}>
                <div className="emoji">
                  <BsEmojiNeutral />
                </div>
                <div className="stars">
                  <FaStar />
                  <FaStar />
                </div>
                <p>(It is awesome)</p>
              </div>
              <div key={"3c"} onClick={clickOptinThree} className={thirdActive ? "raetingBox" : "raetingBoxClick"}>
                <div className="emoji">
                  <BsEmojiFrown />
                </div>
                <div className="stars">
                  <FaStar />
                </div>
                <p>(It is fucked)</p>
              </div>{" "}
            </div>

            <textarea
              type="text"
              placeholder="feel free to write how is this app awesome"
              name="sendText"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button type="submit">Send me </button>
          </div>
        </form>
      ) : null}
    </div>
  );
};

export default Modal;
