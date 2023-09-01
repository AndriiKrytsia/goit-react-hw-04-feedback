import { Component } from 'react';
import { Statistics } from '../components/Statistics';
import { FeedbackOptions } from '../components/FeedbackOptions';
import { Section } from '../components/Section';
import { Notification } from '../components/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return good !== 0
      ? Math.round((good / this.countTotalFeedback()) * 100)
      : 0;
  };

  render() {
    const allFeedbacks = this.countTotalFeedback();
    const options = Object.keys(this.state);
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} onClick={this.handleClick} />
        </Section>
        <Section title="Statistics">
          {allFeedbacks > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
