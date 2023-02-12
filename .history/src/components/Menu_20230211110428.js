import React, { useState } from "react";

const Menu = () => {
    const [show, setShow] = useState(false);

  return (
    <nav>
      <ul className={`flex gap-[45px] text-white text-sm font-medium nav realtive ${show ? 'showMenu': ''}`}>
        <li>
          <a href="#feature">Features</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#pricing">Pricing</a>
        </li>
        <li>
          <a href="#reviews">Reviews</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <div className="iconClose" onClick={() => setShow(true)}>
          <ion-icon name="close-outline"></ion-icon>
        </div>
      </ul>
      <div className="iconMenu" onClick={() => setShow(false)}>
        <ion-icon name="menu-outline"></ion-icon>
      </div>
    </nav>
  );
};

export default Menu;