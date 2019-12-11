import React, { useState } from 'react';
import {
  Icon,
  Layout,
  Breadcrumb,
  AutoComplete,
  Badge,
  Avatar,
  Popover,
  Button,
  Typography,
  Input,
} from "antd";

const { Text } = Typography;
const { Header } = Layout;

const TheHeader = () => {
  
  const [state, setState] = useState({
    search: "",
    dataSearch: []
  });
  
  const onSearch = searchText => {
    setState(ps => ({
      ...ps,
      dataSearch: !searchText
        ? []
        : [searchText, searchText.repeat(2), searchText.repeat(3)]
    }));
  };

  const onChangeSearch = search => {
    setState(ps => ({ ...ps, search }));
  };

  return (
    <Header className="the-header">
          <Breadcrumb className="the-header__breadcrumbs">
            <Breadcrumb.Item>
              <a href="/">Test Suites</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="/">All Tests</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="/">All Calculators</a>
            </Breadcrumb.Item>
          </Breadcrumb>
          <div className="the-header__header-bar">
            <AutoComplete
              className='the-header__search'
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
              <Input suffix={<Icon type="search" />} />
            </AutoComplete>
            <Badge count={2}>
              <a href="/" className="the-header__alert-button">
                <Icon type="bell" theme="twoTone" className="the-header__alert-icon" />
              </a>
            </Badge>
            <Avatar src="https://i.pravatar.cc/300" />
            <Popover
              placement="bottomRight"
              title="Title"
              content={
                <div>
                  <p>link 1</p>
                  <p>link 2</p>
                </div>
              }
              trigger="hover"
            >
              <Button className='the-header__button-popover' type='link'><Text>Name <Icon type="down" style={{ fontSize: '11px' }}/></Text></Button>
            </Popover>
          </div>
        </Header>
  )
}

export default TheHeader;
