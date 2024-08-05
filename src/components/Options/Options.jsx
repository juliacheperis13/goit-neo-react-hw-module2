import Button from "../Button/Button";
import css from "./Options.module.css";

const Options = ({ feedbacks, clickHandler, resetHandler, feedbackTypes }) => {
  return (
    <div className={css.optionsWrapper}>
      {feedbackTypes.map((feedbackType) => {
        return (
          <Button
            key={feedbackType.type}
            clickHandler={clickHandler}
            name={feedbackType.name}
            type={feedbackType.type}
          />
        );
      })}

      {feedbacks > 0 ? (
        <Button clickHandler={resetHandler} name="Reset" type="reset" />
      ) : null}
    </div>
  );
};

export default Options;
