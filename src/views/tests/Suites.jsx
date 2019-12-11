import React from "react";
import { Tabs, Typography, Tree, Button } from "antd";
import Devices from "../../components/tests/Devices";

const { TabPane } = Tabs;
const { Title } = Typography;
const { TreeNode, DirectoryTree } = Tree;

const Suites = () => {
  return (
    <div className="suites">
      <DirectoryTree className="suites__tree" multiple defaultExpandAll>
        <TreeNode title="All tests" key="0-0">
          <TreeNode title="All Calculators" key="0-0-0" isLeaf />
          <TreeNode title="Calc - passing" key="0-0-1" isLeaf />
          <TreeNode title="Test" key="0-0-2" isLeaf />
          <TreeNode title="Wiki" key="0-0-3" isLeaf />
        </TreeNode>
      </DirectoryTree>
      <div className="suites__content">
        <div className="suites__space-row">
          <Title className="suites__title" level={2}>
            All calculators #327
          </Title>
          <Button type="primary" size="large" icon="caret-right">
            Run now
          </Button>
        </div>
        <div className="suites__tabs-wrapper">
          <Tabs className="suites__tabs" defaultActiveKey="4">
            <TabPane tab="Results" key="1">
              Results
            </TabPane>
            <TabPane tab="Settings" key="2">
              Settings
            </TabPane>
            <TabPane tab="Cases" key="3">
              Cases
            </TabPane>
            <TabPane tab="Devices" key="4">
              <Devices />
            </TabPane>
            <TabPane tab="Parameters" key="5">
              Parameters
            </TabPane>
            <TabPane tab="Schedule" key="6">
              Schedule
            </TabPane>
            <TabPane tab="Notifications" key="7">
              Notifications
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Suites;
