import React, { useState } from "react";
import { ReactComponent as IconError } from "../../assets/svg/Interface/Close in circle.svg";
import { ReactComponent as IconOk } from "../../assets/svg/Interface/Check in circle.svg";
import { ReactComponent as IconAndroid } from "../../assets/svg/Interface/Android.svg";
import { ReactComponent as IconFullEnter } from "../../assets/svg/Interface/Full screen/Enter.svg";
import { ReactComponent as IconFullLeave } from "../../assets/svg/Interface/Full screen/Exit.svg";
import { Button, Progress, Drawer } from "antd";
import DoughnutChart from "./DoughnutChart";
import DrawerContent from './DrawerContent';

const ResultTest = () => {
  const [visibility, setVisibility] = useState(false);
  const [width, setWidth] = useState(720);

  const showDrawer = () => {
    setVisibility(true);
  };

  const onClose = () => {
    setVisibility(false);
    setWidth(720);
  };

  const changeWidth = () => {
    width === 720 ? setWidth('calc(100% - 440px)') : setWidth(720);
  };

  const drawerIcon = width === 720 ? <IconFullEnter /> : <IconFullLeave />

  const device = [1, 2, 3].map((el, idx) => {
    return (
      <li key={el} className="result-test__device" onClick={showDrawer}>
        {idx % 2 === 0 ? (
          <IconOk className="result-test__ok-icon" />
        ) : (
          <IconError className="result-test__error-icon" />
        )}
        <Button
          type="link"
          className="result-test__name"
        >{`Device name`}</Button>
        <span className="result-test__system">
          <IconAndroid className="result-test__android-icon" />
          {`Android 9.${idx}`}
        </span>
        {idx % 2 === 0 ? (
          <span className="result-test__result">Passed</span>
        ) : (
          <span className="result-test__result error">Failed</span>
        )}
      </li>
    );
  });

  const caseItem = [1, 2, 3].map((el, idx) => {
    return (
      <li key={el} className="result-test__device result-test__device--case">
        <Button
          type="link"
          className="result-test__name result-test__name--case"
        >
          {idx % 2 === 0 ? `Calculator - Failed` : `Calculator - Passed`}
        </Button>
        <div className="result-test__statistic">
          <p className="result-test__value">
            {`Total: `}
            <span>1</span>
          </p>
          <p className="result-test__value green">
            {`Passed: `}
            <span>2</span>
          </p>
          <p className="result-test__value red">
            {`Failed: `}
            <span>3</span>
          </p>
        </div>
        <Progress
          strokeWidth={5}
          percent={25}
          strokeColor={idx % 2 === 0 ? `#E53934` : `#66BB69`}
          className={
            idx % 2 === 0
              ? `result-test__progress`
              : `result-test__progress failed`
          }
        />
      </li>
    );
  });

  return (
    <div className="result-test">
      <div className="result-test__row-chart">
        <div className="result-test__col-chart">
          <h4 className="result-test__title">TESTS (2)</h4>
          <div className="result-test__chart">
            <DoughnutChart />
          </div>
        </div>
        <div className="result-test__col-chart">
          <h4 className="result-test__title">BROWSERS / DEVICES (3)</h4>
          <div className="result-test__chart">
            <DoughnutChart />
          </div>
        </div>
        <div className="result-test__col-chart">
          <h4 className="result-test__title">CASES (2)</h4>
          <div className="result-test__chart">
            <DoughnutChart />
          </div>
        </div>
      </div>
      <h4 className="result-test__title">Devices / Browsers</h4>
      <ul className="result-test__devices">{device}</ul>
      <h4 className="result-test__title">CASE SUMMARY</h4>
      <ul className="result-test__devices result-test__devices--case">
        {caseItem}
      </ul>
      <Drawer
        placement="right"
        closable={true}
        width={width}
        onClose={onClose}
        visible={visibility}
      >
        <button className="result-test__drawer-expand" onClick={changeWidth}>
          {drawerIcon}
        </button>
        <DrawerContent />
      </Drawer>
    </div>
  );
};

export default ResultTest;
