import { useState } from 'react';
import { Statistics } from '../components/Statistics';
import { FeedbackOptions } from '../components/FeedbackOptions';
import { Section } from '../components/Section';
import { Notification } from '../components/Notification';

export const App = () => {
  const [counts, setCounts] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleClick = option => {
    setCounts(prevCounts => ({
      ...prevCounts,
      [option]: prevCounts[option] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = counts;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = counts;
    return good !== 0 ? Math.round((good / countTotalFeedback()) * 100) : 0;
  };

  const { good, neutral, bad } = counts;
  const allFeedbacks = countTotalFeedback();
  const options = Object.keys(counts);
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onClick={handleClick} />
      </Section>
      <Section title="Statistics">
        {allFeedbacks > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
