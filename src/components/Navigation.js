import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const topics = [
    "Flowers",
    "Buildings",
    "Sports",
    "Food",
    "Nature",
    "People",
    "Technology",
    "Objects",
    "Animals",
    "Fashion",
    "Travel",
    "Backgrounds",
    "Science",
    "Education",
    "Feelings",
    "Health",
    "Places",
    "Animals",
    "Industry",
    "Computer",
    "Food",
    "Sports",
    "Transportation",
    "Travel",
    "Buildings",
    "Business",
    "Music",
  ];

  const location = useLocation();
  console.log(location);
console.log(location.pathname);

  return (
    <span className="navigation">
      {topics.map((topic, index) => (
        <li className={`li ${location.pathname === `/topic/${topic}` ? "active-li" : ""}`} key={topic}>
          <Link className={`link ${location.pathname === `/topic/${topic}` ? "active-link" : ""}`}
            to={`/topic/${topic}`}>{topic}</Link>
        </li>
      ))}
    </span>
  );
};

export default Navigation;
