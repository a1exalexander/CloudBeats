import React, { useState } from "react";
import {
  Tabs,
  Typography,
  Tree,
  Button,
  AutoComplete,
  Icon,
  Input,
  Popover
} from "antd";
import Devices from "../../components/tests/Devices";
import { ReactComponent as IconEdit } from "../../assets/svg/Edit.svg";
import { ReactComponent as IconRemove } from "../../assets/svg/Remove.svg";
import { ReactComponent as IconNewDoc } from "../../assets/svg/New document.svg";
import { ReactComponent as IconNewFolder } from "../../assets/svg/New folder.svg";
import { ReactComponent as IconExpand } from "../../assets/svg/Expand.svg";
import { ReactComponent as IconFolder } from "../../assets/svg/Folder.svg";
import { ReactComponent as IconDocument } from "../../assets/svg/Document.svg";
import { ReactComponent as IconActions } from "../../assets/svg/Actions.svg";

const { TabPane } = Tabs;
const { Title } = Typography;
const { TreeNode, DirectoryTree } = Tree;

const Suites = () => {
  const [state, setState] = useState({
    search: "",
    dataSearch: [],
    showProjects: true
  });

  const onSearch = searchText => {
    setState(ps => ({
      ...ps,
      dataSearch: !searchText
        ? []
        : [searchText, searchText.repeat(2), searchText.repeat(3)]
    }));
  };

  const onChangeList = () => {
    setState(ps => ({
      ...ps,
      showProjects: !ps.showProjects
    }));
  };

  const onChangeSearch = search => {
    setState(ps => ({ ...ps, search }));
  };

  const getList = () => {
    if (state.showProjects) {
      return (
        <div>
          <div className="suites__search-wrapper">
            <AutoComplete
              className="suites__search"
              onSearch={onSearch}
              value={state.search}
              onChange={onChangeSearch}
              dataSource={state.dataSearch}
              placeholder="Search..."
              filterOption={(inputValue, option) =>
                option.props.children
                  .toUpperCase()
                  .indexOf(inputValue.toUpperCase()) !== -1
              }
            >
              <Input
                suffix={<Icon type="search" className="suites__search-icon" />}
              />
            </AutoComplete>
          </div>
          <DirectoryTree className="suites__tree" multiple defaultExpandAll>
            <TreeNode title="All tests (4)" key="0-0" icon={<IconFolder/>}>
              <TreeNode title="All Calculators" key="0-0-0" isLeaf icon={<IconDocument />}/>
              <TreeNode title="Calc - passing" key="0-0-1" isLeaf icon={<IconDocument />}/>
              <TreeNode title="Test" key="0-0-2" isLeaf icon={<IconDocument />}/>
              <TreeNode title="Wiki" key="0-0-3" isLeaf icon={<IconDocument />}/>
            </TreeNode>
          </DirectoryTree>
        </div>
      );
    } else {
      return (
        <div className="suites__project-select-wrapper">
          <ul className="suites__project-list">
            <li className="suites__project-item">DotNet</li>
            <li className="suites__project-item active">Genymotion</li>
          </ul>
        </div>
      );
    }
  };

  return (
    <div className="suites">
      <div className="suites__side-bar">
        <div>
          <div className="suites__project-wrapper" onClick={onChangeList}>
            <span className="suites__project">Project</span>
            <div className="suites__project-row">
              <span className="suites__project-name">{`GENYMOTION`}</span>
              <IconExpand className="suites__down" />
            </div>
          </div>
          {getList()}
        </div>
        <div className="suites__create">
          <span className="suites__create-text">CREATE NEW</span>
          <div className="suites__create-btn-wrapper">
            <a href="/" className="suites__create-btn">
              <IconNewFolder />
            </a>
            <a href="/" className="suites__create-btn">
              <IconNewDoc />
            </a>
          </div>
        </div>
      </div>
      <div className="suites__content">
        <div className="suites__space-row">
          <Title className="suites__title" level={2}>
            All calculators #327
          </Title>
          <div className="suites__btn-wrapper">
            <Button type="primary" size="large" icon="caret-right">
              Run now
            </Button>
            <Popover
              placement="bottomRight"
              content={
                <div className="suites__btn-dropdown">
                  <a href="/" className="suites__btn">
                    <IconEdit className="suites__icon" />
                    Edit
                  </a>
                  <a href="/" className="suites__btn">
                    <IconRemove className="suites__icon" />
                    Remove
                  </a>
                </div>
              }
              trigger="click"
            >
              <Button className="suites__button-popover" type="link" size="large">
                <IconActions type="ellipsis" style={{ fill: "#fff" }} />
              </Button>
            </Popover>
          </div>
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
