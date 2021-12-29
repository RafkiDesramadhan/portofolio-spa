import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

export default function Button(props) {
  const className = [props.className];
  if (props.btn) className.push("btn");
  if (props.isOutlinePrimary) className.push("btn-outline-primary");
  if (props.isOutlineLight) className.push("btn-outline-light");
  if (props.isDisabled) className.push("disabled");

  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  if (props.type === "link") {
    if (props.isExternal) {
      return (
        <a
          href={props.href}
          className={className.join(" ")}
          style={props.style}
          target={props.target === "_blank" ? "_blank" : undefined}
          rel={props.target === "_blank" ? "noopener noreferrer" : undefined}
        >
          {props.children}
        </a>
      );
    } else {
      return (
        <Link
          to={props.href}
          className={className.join(" ")}
          style={props.style}
          onClick={onClick}
        >
          {props.children}
        </Link>
      );
    }
  }

  return (
    <button
      className={className.join(" ")}
      style={props.style}
      onClick={onClick}
    ></button>
  );
}

Button.propTypes = {
  btn: propTypes.bool,
  href: propTypes.string,
  type: propTypes.string,
  target: propTypes.string,
  className: propTypes.string,
  isExternal: propTypes.bool,
  onClick: propTypes.func,
  isOutlinePrimary: propTypes.bool,
  isOutlineLight: propTypes.bool,
  isDisabled: propTypes.bool,
};
