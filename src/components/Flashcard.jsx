import React from "react";

function Flashcard() {
  return (
    <div class="card">
      <div class="card__inner">
        <div class="card__face card__face--front">
          <h2>Word</h2>
        </div>
        <div class="card__face card__face--back">
          <div class="card__content">
            <div class="card__header">
              <img src="pp.jpg" alt="" class="pp" />
              <h2>Word</h2>
            </div>
            <div class="card__body">
              <h3>Card topic + Transcription</h3>
              <p>Explanation + Translation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;
