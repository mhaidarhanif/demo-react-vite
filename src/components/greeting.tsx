import React from "react";
import PropTypes from "prop-types";

export const Greeting = (props: GreetingProps) => {
  return <h1>Hello, {props.name}</h1>;
};

Greeting.propTypes = {
  name: PropTypes.string,
};

type GreetingProps = {
  name: string;
};
