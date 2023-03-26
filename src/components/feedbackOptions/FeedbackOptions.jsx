import React from 'react';
import css from '../App.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.buttonContainer}>
      <button
        name="good"
        onClick={evt => {
          onLeaveFeedback(evt.target.name);
        }}
      >
        Good
      </button>
      <button
        name="neutral"
        onClick={evt => {
          onLeaveFeedback(evt.target.name);
        }}
      >
        Neutral
      </button>
      <button
        name="bad"
        onClick={evt => {
          onLeaveFeedback(evt.target.name);
        }}
      >
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
