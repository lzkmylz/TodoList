import React from 'react';
import { connect } from 'react-redux';
import {
  sortByLevel,
  sortByTitletext,
  sortByExpireDate,
  sortByStartDate,
  sortByIsFinish,
} from '../actions/filters';
import Dropdown from 'antd/lib/dropdown';
import 'antd/lib/dropdown/style/css';
import Menu from 'antd/lib/menu';
import 'antd/lib/menu/style/css';
import Button from 'antd/lib/button';
import 'antd/lib/button/style/css';
import Icon from 'antd/lib/icon';
import 'antd/lib/icon/style/css';
import Input from 'antd/lib/input';
import 'antd/lib/input/style/css';
import Switch from 'antd/lib/switch';
import 'antd/lib/switch/style/css';

export class TodoListFilter extends React.Component {

  onTextChange = (e) => {
    this.props.sortByTitletext(e.target.value);
  }

  onChangeSwitch = (e) => {
    this.props.sortByIsFinish(!e);
  }

  onMenuChange = (e) => {
    switch(e.key) {
      case "0":
        this.props.sortByStartDate();
        break;
      case "1":
        this.props.sortByExpireDate();
        break;
      case "2":
        this.props.sortByLevel();
        break;
      default:
        return undefined
    }
  }

  render() {
    const menu = (
      <Menu>
        <Menu.Item key="0" onClick={this.onMenuChange}>
          <span>按创建日期排序</span>
        </Menu.Item>
        <Menu.Item key="1" onClick={this.onMenuChange}>
          <span>按Deadline日期排序</span>
        </Menu.Item>
        <Menu.Item key="2" onClick={this.onMenuChange}>
          <span>按优先级排序</span>
        </Menu.Item>
      </Menu>
    );

    const mapSortBy = {
      level: '按优先级排序',
      expireDate: '按Deadline日期排序',
      startDate: '按创建日期排序',
    }
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <Input 
              size="large"
              placeholder="搜索待办事项"
              type="text"
              value={this.props.filters.titleText} 
              onChange={this.onTextChange}
            />
          </div>
          <div className="input-group__item">
            <Dropdown overlay={menu}>
              <Button size="large">
                {mapSortBy[this.props.filters.sortBy]} <Icon type="down" />
              </Button>
            </Dropdown>
          </div>
          <div className="input-group__item">
            <Switch
              size="default"
              checkedChildren="显示所有待办事项"
              unCheckedChildren="仅显示未完成事项"
              defaultChecked={!this.props.filters.isFinishFilter}
              onChange={this.onChangeSwitch}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      filters: state.filters
  }
};

const mapDispatchToProps = (dispatch) => ({
  sortByLevel: () => dispatch(sortByLevel()),
  sortByTitletext: (titleText) => dispatch(sortByTitletext(titleText)),
  sortByExpireDate: () => dispatch(sortByExpireDate()),
  sortByStartDate: () => dispatch(sortByStartDate()),
  sortByIsFinish: (isFinishFilter) => dispatch(sortByIsFinish(isFinishFilter))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListFilter);
