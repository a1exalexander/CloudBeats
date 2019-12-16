import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Divider,
  Select,
  Collapse,
  Icon,
  Popover
} from "antd";

const { Panel } = Collapse;
const { Option } = Select;


const Devices = () => {
  const [state, setState] = useState({
    indeterminate: false,
    checkAll: false
  });

  const onCheckAllChange = e => {
    setState(ps => ({ ...ps, checkAll: e.target.checked }));
  };

  const customPanelStyle = {
    background: "#FAFBFC",
    borderRadius: 4,
    marginBottom: 12,
    border: 0,
    overflow: "hidden"
  };

  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );

  const genHeader = el => (
    <div className="devices__item">
      <ul className="devices__options">
        <li className="devices__option">
          <Checkbox onClick={(e) => e.stopPropagation()} className="devices__checkbox"/>
          <Icon type="mobile" className='devices__icon-device'/>
          <span>{`Item #${el}`}</span>
        </li>

        <li className="devices__option">
          <Icon type="android" theme='filled' className='devices__icon-os'/>
          <span>{`9.${el}`}</span>
        </li>
        <li className="devices__option">
          <span>Genymotion</span>
        </li>
        <li className="devices__option">
          <Icon type="global" className='devices__icon-status' />
          <span>Online</span>
        </li>
      </ul>
      <Popover placement="leftTop" title={`Item ${el}`} content={content} trigger="click">
        <Icon
          type="ellipsis"
          className='devices__extra'
          onClick={event => {
            // If you don't want click extra trigger collapse, you can prevent this:
            event.stopPropagation();
          }}
        />
      </Popover>
      
    </div>
  );

  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(el => {
    return (
      <Panel header={genHeader(el)} key={el} style={customPanelStyle}>
        <ul className="devices__main-list">
          <li>
            OS
            <ul className="devices__sub-list">
              <li>Android 9.0 (Pie), upgradable to Android 10;</li>
              <li>EMUI 10</li>
            </ul>
          </li>
          <li>
            Resolution
            <ul className="devices__sub-list">
              <li>1080 x 2340 pixels, 19.5:9 ratio (~398 ppi density)</li>
              <li>DCI-P3</li>
            </ul>
          </li>
          <li>
            CPU
            <ul className="devices__sub-list">
              <li>
                Octa-core (2x2.6 GHz Cortex-A76 & 2x1.92 GHz Cortex-A76 & 4x1.8
                GHz Cortex-A55)
              </li>
            </ul>
          </li>
          <li>
            GPU
            <ul className="devices__sub-list">
              <li>Mali-G76 MP10</li>
            </ul>
          </li>
        </ul>
      </Panel>
    );
  });

  return (
    <div className="devices">
      <div className="devices__row">
        <div className="devices__toolbar">
          <Button type="link" icon="redo" />
          <Divider type="vertical" />
          <Checkbox
            indeterminate={state.indeterminate}
            onChange={onCheckAllChange}
            checked={state.checkAll}
          >
            Select all
          </Checkbox>
        </div>
        <div className="devices__select-wrapper">
          <Select
            className="devices__select"
            placeholder="OS"
            style={{ width: 65 }}
          >
            <Option value="1">Option 1</Option>
            <Option value="2">Option 2</Option>
            <Option value="3">Option 3</Option>
            <Option value="4">Option 4</Option>
          </Select>
          <Select
            className="devices__select"
            placeholder="Version"
            style={{ width: 100 }}
          >
            <Option value="1">Option 1</Option>
            <Option value="2">Option 2</Option>
            <Option value="3">Option 3</Option>
            <Option value="4">Option 4</Option>
          </Select>
          <Select
            className="devices__select"
            placeholder="Status"
            style={{ width: 100 }}
          >
            <Option value="1">Option 1</Option>
            <Option value="2">Option 2</Option>
            <Option value="3">Option 3</Option>
            <Option value="4">Option 4</Option>
          </Select>
          <Select
            className="devices__select"
            placeholder="Device name"
            style={{ width: 130 }}
          >
            <Option value="1">Option 1</Option>
            <Option value="2">Option 2</Option>
            <Option value="3">Option 3</Option>
            <Option value="4">Option 4</Option>
          </Select>
          <Select
            className="devices__select"
            placeholder="Location"
            style={{ width: 100 }}
          >
            <Option value="1">Option 1</Option>
            <Option value="2">Option 2</Option>
            <Option value="3">Option 3</Option>
            <Option value="4">Option 4</Option>
          </Select>
        </div>
      </div>
      <Divider />
      <Collapse className="devices__collapse" bordered={false}>
        {list}
      </Collapse>
    </div>
  );
};

export default Devices;
