import css from "./Button.module.css";
import clsx from "clsx";

const Button = ({ name, clickHandler, type }) => {
  return (
    <button
      className={clsx(css[type], css.button)}
      onClick={() => clickHandler(name.toLowerCase())}
    >
      {name}
    </button>
  );
};

export default Button;
