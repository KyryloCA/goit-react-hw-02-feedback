import React from 'react';
import css from '../App.module.css';
import PropTypes from 'prop-types';
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

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
