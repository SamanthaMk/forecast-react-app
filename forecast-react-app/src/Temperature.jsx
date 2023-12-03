import React from "react";
import Header from "./Header";
import "./Temperature.css";

export default function Temperature(props) {
  return (
    <div className="Temperature">
      <Header />
      <ul>
        {props.day}| {props.date} Dec| {props.icon} | {props.temp}°C{" "}
      </ul>
    </div>
  );
}
