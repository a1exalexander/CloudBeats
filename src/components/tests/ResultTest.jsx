import React from "react";
import { ReactComponent as IconError } from '../../assets/svg/Interface/Close in circle.svg'
import { ReactComponent as IconOk } from '../../assets/svg/Interface/Check in circle.svg'
import { ReactComponent as IconAndroid } from '../../assets/svg/Interface/Android.svg'
import { Button, Progress } from "antd";
import DoughnutChart from './DoughnutChart';

const ResultTest = () => {

  const device = [1, 2, 3].map((el, idx) => {
    return (
      <li className="result-test__device">
        {idx % 2 === 0 ? <IconOk class="result-test__ok-icon"/> : <IconError class="result-test__error-icon"/>}
        <Button type="link" className="result-test__name">{`Device name`}</Button>
        <span className="result-test__system">
          <IconAndroid className="result-test__android-icon"/>
          {`Android 9.${idx}`}
        </span>
          {idx % 2 === 0 ?  <span className="result-test__result">Passed</span> : <span className="result-test__result error">Failed</span>}
      </li>
    )
  }) 

  const caseItem = [1, 2, 3].map((el, idx) => {
    return (
      <li className="result-test__device result-test__device--case">
        <Button type="link" className="result-test__name result-test__name--case">{`Operation ${idx}`}</Button>
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
        <Progress strokeWidth={5} percent={25} strokeColor="#E53934" className="result-test__progress"/>
      </li>
    )
  })


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
      <ul className="result-test__devices">
        {device}
      </ul>
      <h4 className="result-test__title">CASE SUMMARY</h4>
      <ul className="result-test__devices result-test__devices--case">
        {caseItem}
      </ul>
    </div>
  );
};

export default ResultTest;
