import React, { Component } from 'react';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Form } from './App.styled';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  giveFeedback = event => {
    const { id } = event.target;
    this.setState(prevState => {
      return { [id]: prevState[id] + 1 };
    });
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    let result = good + neutral + bad;
    return result;
  };

  countPositiveFeedbackPercentage = () => {
    const result = this.countTotalFeedback();
    const { good } = this.state;
    const percentage = (good * 100) / result;
    return Math.round(percentage);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const objKey = Object.keys(this.state);

    return (
      <Form>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={objKey}
            onLeaveFeedback={this.giveFeedback}
          />
        </Section>

        {total === 0 ? (
          <Notification message="No feedback yet" />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          </Section>
        )}
      </Form>
    );
  }
}
