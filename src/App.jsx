import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import Options from "./components/Options/Options";
import { useState, useEffect } from "react";

const App = () => {
  const feedbackOptions = [
    { type: "good", name: "Good" },
    { type: "neutral", name: "Neutral" },
    { type: "bad", name: "Bad" },
  ];
  const defaultFeedbackState = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const getTotalFeedback = (feedback) => {
    return Object.values(feedback).reduce((val, acc) => val + acc, 0);
  };

  const getFeedbackPercentage = (feedback, totalFeedback) =>
    Math.round((feedback / totalFeedback) * 100);

  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem("feedback");
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
    return defaultFeedbackState;
  });

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedback = getTotalFeedback(feedback);
  const positiveFeedback = getFeedbackPercentage(feedback.good, totalFeedback);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => {
      return {
        ...prevFeedback,
        [feedbackType]: prevFeedback[feedbackType] + 1,
      };
    });
  };

  const resetHandler = () => {
    setFeedback(defaultFeedbackState);
  };

  return (
    <>
      <Description
        name="Sip Happens Café"
        description="Please leave your feedback about our service by selecting one of the options below."
      />

      <Options
        feedbackTypes={feedbackOptions}
        feedbacks={totalFeedback}
        clickHandler={updateFeedback}
        resetHandler={resetHandler}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedbacks={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </>
  );
};

export default App;
