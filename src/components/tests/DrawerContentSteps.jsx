import React, { useState } from "react";
import { Radio, Tooltip, Modal, message } from "antd";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ReactComponent as IconTop } from "../../assets/svg/Interface/Sort down.svg";
import { ReactComponent as IconOk } from "../../assets/svg/Interface/Check in circle.svg";
import { ReactComponent as IconError } from "../../assets/svg/Interface/Close in circle.svg";
import { ReactComponent as IconExpandRight } from "../../assets/svg/Interface/Expand right.svg";
import { ReactComponent as IconTimer1 } from "../../assets/svg/Interface/Timer/1.svg";
import { ReactComponent as IconTimer2 } from "../../assets/svg/Interface/Timer/2.svg";
import { ReactComponent as IconTimer3 } from "../../assets/svg/Interface/Timer/3.svg";
import { ReactComponent as IconTimer4 } from "../../assets/svg/Interface/Timer/4.svg";
import { ReactComponent as IconPlus } from "../../assets/svg/Interface/Plus.svg";
import { ReactComponent as IconMinus } from "../../assets/svg/Interface/Minus.svg";
import { ReactComponent as IconCopy } from "../../assets/svg/Interface/Copy.svg";
import ErrorImg from "../../assets/svg/Screenshot3.svg";

const TreeNode = ({ data, child }) => {
  const [visibility, setVisibility] = useState(false);
  const [expand, setExpand] = useState(false);
  const [modalVisibility, setModalVisibility] = useState(false);
  const changeVisibility = () => {
    visibility ? setVisibility(false) : setVisibility(true);
  };
  const handleCancel = () => {
    setModalVisibility(false);
  };
  const showModal = () => {
    setModalVisibility(true);
  };
  const info = () => {
    message.success("Copied to clipboard");
  };
  const plusIcon = expand ? (
    <IconMinus
      className="drawer-content-steps__tree-expand-last"
      onClick={() => setExpand(false)}
    />
  ) : (
    <IconPlus
      className="drawer-content-steps__tree-expand-last"
      onClick={() => setExpand(true)}
    />
  );
  const expandText =
    !data.childrens.length && data.status ? (
      <div className="drawer-content-steps__expanded-block">
        <div className="drawer-content-steps__wrapper-expand">
          <IconTimer2 className="drawer-content-steps__timer-first" />
          <span className="drawer-content-steps__timer">
            {data.expand_info.first}s
          </span>
        </div>
        <div className="drawer-content-steps__wrapper-expand">
          <IconTimer3 className="drawer-content-steps__timer-first" />
          <span className="drawer-content-steps__timer">
            {data.expand_info.second}s
          </span>
        </div>
        <div className="drawer-content-steps__wrapper-expand">
          <IconTimer4 className="drawer-content-steps__timer-first" />
          <span className="drawer-content-steps__timer">
            {data.expand_info.third}s
          </span>
        </div>
      </div>
    ) : !data.childrens.length && !data.status ? (
      <div>
        <div className="drawer-content-steps__expanded-block drawer-content-steps__expanded-block--error">
          <Radio.Group defaultValue="a">
            <Radio.Button value="a">Error</Radio.Button>
            <Radio.Button value="b" onClick={showModal}>
              Screenshot
            </Radio.Button>
          </Radio.Group>
          <div className="drawer-content-steps__time-row">
            <div className="drawer-content-steps__wrapper-expand">
              <IconTimer2 className="drawer-content-steps__timer-first" />
              <span className="drawer-content-steps__timer">
                {data.expand_info.first}s
              </span>
            </div>
            <div className="drawer-content-steps__wrapper-expand">
              <IconTimer3 className="drawer-content-steps__timer-first" />
              <span className="drawer-content-steps__timer">
                {data.expand_info.second}s
              </span>
            </div>
            <div className="drawer-content-steps__wrapper-expand">
              <IconTimer4 className="drawer-content-steps__timer-first" />
              <span className="drawer-content-steps__timer">
                {data.expand_info.third}s
              </span>
            </div>
          </div>
        </div>
        <CopyToClipboard text={data.expand_info.error_mesage}>
          <div className="drawer-content-steps__error-text" onClick={info}>
            <p className="drawer-content-steps__error-message">
              {data.expand_info.error_mesage}
            </p>
            <Tooltip title="Copy">
              <IconCopy className="drawer-content-steps__copy-icon" />
            </Tooltip>
          </div>
        </CopyToClipboard>
        <Modal visible={modalVisibility} onCancel={handleCancel} footer={null}>
          <div className="drawer-content-steps__modal">
            <h4 class="drawer-content-steps__modal-message">{`some error message`}</h4>
            <img src={ErrorImg} alt="error" />
          </div>
        </Modal>
      </div>
    ) : null;

  return (
    <div className="drawer-content-steps__tree">
      <div
        className={`drawer-content-steps__tree-item ${child ? "child" : ""} ${
          data.level === "third" ? "third" : ""
        }`}
      >
        {!!data.childrens.length && (
          <IconExpandRight
            className={`drawer-content-steps__expand ${
              visibility ? "expanded" : ""
            } ${data.alone ? "grey" : ""}`}
            onClick={changeVisibility}
          />
        )}
        {data.status ? (
          <IconOk className="drawer-content-steps__result-icon" />
        ) : (
          <IconError className="drawer-content-steps__result-icon drawer-content-steps__result-icon--error" />
        )}
        <p className="drawer-content-steps__info">{data.name}</p>
        <div className="drawer-content-steps__wrapper">
          <IconTimer1 className="drawer-content-steps__timer-first" />
          <span className="drawer-content-steps__timer">{data.duration}s</span>
        </div>
        {!data.childrens.length && plusIcon}
        {!data.childrens.length && expand && expandText}
      </div>
      {!!data.childrens.length &&
        visibility &&
        data.childrens.map((item, index) => {
          return <TreeNode data={item} child={true} key={item.name + index} />;
        })}
    </div>
  );
};

const DrawerContentError = () => {
  const testData = [
    {
      status: true,
      name: "Init",
      duration: 3.0,
      level: "first",
      alone: false,
      childrens: [
        {
          status: true,
          name: 'mob.init({"autoName":"UIAuthor2"})',
          duration: 3.0,
          level: "second",
          alone: true,
          childrens: [
            {
              status: true,
              name: 'mob.waitVisible({"autoName":"UIAuthor2"})',
              duration: 3.0,
              level: "third",
              alone: true,
              childrens: [],
              expand_info: {
                first: 3.4,
                second: 2.2,
                third: 3.0
              }
            },
            {
              status: true,
              name: 'mob.waitVisible({"autoName":"UIAuthor2"})',
              duration: 3.0,
              level: "third",
              alone: true,
              childrens: [],
              expand_info: {
                first: 3.4,
                second: 2.2,
                third: 3.0
              }
            }
          ]
        },
        {
          status: true,
          name: 'mob.init({"autoName":"UIAuthor2"})',
          duration: 3.0,
          level: "second",
          alone: true,
          childrens: [
            {
              status: true,
              name: 'mob.waitVisible({"autoName":"UIAuthor2"})',
              duration: 3.0,
              level: "third",
              alone: true,
              childrens: [],
              expand_info: {
                first: 3.4,
                second: 2.2,
                third: 3.0
              }
            }
          ]
        }
      ]
    },
    {
      status: false,
      name: "Press'8'",
      duration: 3.0,
      level: "first",
      alone: true,
      childrens: [
        {
          status: false,
          name: 'mob.waitVisible({"autoName":"UIAuthor2"})',
          duration: 3.0,
          level: "second",
          childrens: [],
          expand_info: {
            first: 3.4,
            second: 2.2,
            third: 3.0,
            error_mesage:
              '{"arguments":["ERROR =>  => ",{"message":"Unexpected input given to normalize. Expected type to be "object", found "string".","name":"Error","stack":"Error: Unexpected input given to normalize. Expected type to be "object", found "string".\n at Oe (https://fundname.fundplatform.space/js/chunk-vendors.5f4bb646.js'
          }
        }
      ]
    }
  ];

  return (
    <div className="drawer-content-steps">
      <div className="drawer-content-steps__head">
        <button className="drawer-content-steps__btn">
          <span>NAME</span>
          <IconTop className="drawer-content-steps__up" />
        </button>
        <button className="drawer-content-steps__btn">
          <span>DURATION</span>
          <IconTop className="drawer-content-steps__up" />
        </button>
      </div>
      {testData.map(item => {
        return <TreeNode data={item} key={item.name} />;
      })}
    </div>
  );
};

export default DrawerContentError;
