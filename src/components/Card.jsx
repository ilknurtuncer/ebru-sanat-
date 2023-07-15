import React from "react";

const Card = ({ id, img, question, answer, icon, handleToggle }) => {
  console.log("answer", answer);

  return (
    <div className="card">
      <div className="ques-answer">
        <h5>
          {id}.{question}
        </h5>
        <button onClick={handleToggle}>{icon}</button>
      </div>
     
      {img && <img src={img} alt="Card" height="300px" width="200px" />
      }
      {answer && <p>{answer}</p>}
    </div>
  );
};

export default Card;
