import React, { Component } from 'react';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Form } from './App.styled';
import { Section } from 'components/Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  giveFeedback = () => {};
  countTotalFeedback = () => {};
  countPositiveFeedbackPercentage = () => {};

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Form>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.giveFeedback}
          />
        </Section>

        <Section title="Statistics">
          <Statistics />
        </Section>
      </Form>
    );
  }
}
