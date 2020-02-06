import React from "react";
import ErrorImg from "../../assets/svg/Screenshot3.svg";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { message } from "antd";

const DrawerContentError = () => {
  const messages = [
    {
      error:
        'Validate the Result > mob.asserText("id=com.android.calculator2:id result","20")',
      result: "ASSERT_ERROR"
    },
    {
      error:
        'element("android=new UiSelector().resourceId("id=com.android.calculator2:id result","20"))',
      result: "stil not visible after 5000ms"
    }
  ];

  const info = () => {
    message.success("Copied to clipboard");
  };

  const list = messages.map(({ error, result }, idx) => {
    return (
      <CopyToClipboard text={error}>
        <li
          className="drawer-content-errors__item"
          key={error + idx}
          onClick={info}
        >
          <p className="drawer-content-errors__error">{error}</p>
          <p className="drawer-content-errors__result">{result}</p>
        </li>
      </CopyToClipboard>
    );
  });

  return (
    <div className="drawer-content-errors">
      <ul className="drawer-content-errors__list">{list}</ul>
      <img
        src={ErrorImg}
        alt="error-screen"
        class="drawer-content-errors__img"
      />
    </div>
  );
};

export default DrawerContentError;
