import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Counter.module.css';
import Section from '../Section/Section';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';

class Counter extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = e => {
    const name = e.target.dataset.name;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const goodPercent = Math.round((good / total) * 100);
    return (
      <div className="Counter">
        <Section title="Please leave feedback" />
        <FeedbackOptions onIncrement={this.handleIncrement} />
        <Section title="Statistics" />
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            goodPercent={goodPercent}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}

Counter.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  goodPercent: PropTypes.number,
};

export default Counter;
