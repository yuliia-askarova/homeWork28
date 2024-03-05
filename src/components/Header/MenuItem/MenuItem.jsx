import React from "react";
const config = [
  { link: "/", text: "Головна" },
  { link: "/", text: "Питання" },
  { link: "/", text: "Матерали" },
  { link: "/", text: "Контакти" },
];

const MenuItem = () => {
  return (
    <nav className="menuItem">
      <ul>
        {config.map((item) => (
          <li key ={item.text} className="btn">
            <a href={item.link}>{item.text}</a>
          </li>
        ))}

      </ul>
    </nav>
  );
};

export default MenuItem;
