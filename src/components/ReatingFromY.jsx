import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const colors = { orange: "#FFBA5A", grey: "#a9a9a9" };
const ReatingFromY = () => {
  const stars = Array(3).fill(0);

  const [currentValue, setCurentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);

  const handleClick = (value) => {
    setCurentValue(value);
  };

  const handleMouseOver = (value) => {
    setHoverValue(value);
  };

  const handleMouseLeav = (value) => {
    setHoverValue(undefined);
  };

  return (
    <div>
      <h2>Reatings</h2>
      <div>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              style={{ marginRight: 10, cursor: "pointer" }}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={() => handleMouseLeav(index)}
            />
          );
        })}
      </div>
      <textarea placeholder="Write here" />
      <button>Sumbit</button>
    </div>
  );
};

export default ReatingFromY;
