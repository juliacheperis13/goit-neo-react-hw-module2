import css from "./Feedback.module.css";

const Feedback = ({
  feedbacks: { good, bad, neutral },
  totalFeedback,
  positiveFeedback,
}) => {
  return (
    <div className={css.feedbackWrapper}>
      <div className={css.feedbackItem}>
        <span className={css.feedbackItemTitle}>Good</span>
        <span className={css.feedbackItemStat}>{good}</span>
      </div>
      <div className={css.feedbackItem}>
        <span className={css.feedbackItemTitle}>Bad</span>
        <span className={css.feedbackItemStat}>{bad}</span>
      </div>
      <div className={css.feedbackItem}>
        <span className={css.feedbackItemTitle}>Neutral</span>
        <span className={css.feedbackItemStat}>{neutral}</span>
      </div>
      <div className={css.feedbackItem}>
        <span className={css.feedbackItemTitle}>Positive</span>
        <span className={css.feedbackItemStat}>{positiveFeedback}%</span>
      </div>
      <div className={css.feedbackItem}>
        <span className={css.feedbackItemTitle}>Total</span>
        <span className={css.feedbackItemStat}>{totalFeedback}</span>
      </div>
    </div>
  );
};

export default Feedback;
