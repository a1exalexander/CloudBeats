import React, { useState, useMemo } from "react";
import CloudBadge from "../common/CloudBadge";
import { Divider, Radio } from "antd";
import DrawerContentErrors from "./DrawerContentErrors";
import DrawerContentSteps from "./DrawerContentSteps";

const DrawerContent = () => {
  const [view, setView] = useState("Steps");

  const handleViewChange = ({ target: { value: changeView } }) =>
    setView(changeView);

  const tabs = useMemo(() => {
    switch (true) {
      case view === "Data":
        return <h1>Data</h1>;
      case view === "Logs":
        return <h1>Logs</h1>;
      case view === "Errors":
        return <DrawerContentErrors />;
      default:
        return <DrawerContentSteps />;
    }
  }, [view]);

  return (
    <div className="drawer-content">
      <header className="drawer-content__header">
        <div className="drawer-content__header-wrapper">
          <h2 className="drawer-content__title">
            Iteration #{"1"} - {"Calculator"}
          </h2>
          <CloudBadge>passed</CloudBadge>
        </div>
        <div className="drawer-content__header-wrapper">
          <p className="drawer-content__device">
            <span>Device: </span>
            <span>{"Google Pixel 3 (Genymotion)"}</span>
          </p>
          <p className="drawer-content__device">
            <span>Version:</span>
            <span>{"Android"}</span>
          </p>
        </div>
      </header>
      <Divider />
      <div className="drawer-content__radios">
        <Radio.Group onChange={handleViewChange} defaultValue={view}>
          <Radio.Button value="Steps">Steps(6)</Radio.Button>
          <Radio.Button value="Data">Test Data (0)</Radio.Button>
          <Radio.Button value="Logs">Logs (27)</Radio.Button>
          <Radio.Button value="Errors">Errors (1)</Radio.Button>
        </Radio.Group>
      </div>
      {tabs}
    </div>
  );
};

export default DrawerContent;
