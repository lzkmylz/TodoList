import React from 'react';
import { connect } from 'react-redux';
import TaskForm from './TaskForm';
import { startEditTask, startRemoveTask } from '../actions/tasks';
import Button from 'antd/lib/button';
import 'antd/lib/button/style/css';
import Col from 'antd/lib/col';
import 'antd/lib/col/style/css';

export class EditTaskPage extends React.Component {

  onSubmit = (task) => {
    this.props.startEditTask({
      id: this.props.task.id,
      ...task
    });
    this.props.history.push('/');
  }

  onClick = (e) => {
    this.props.startRemoveTask({ id: this.props.task.id });
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
              <h1 className="page-header__title">编辑待办事项</h1>        
          </div>
        </div>
        <div className="content-container">
          <TaskForm 
            onSubmit={this.onSubmit}
            task={this.props.task}
          />
          <Col xs={{ span:24, offset:0 }} sm={{ span:16, offset:6 }}>
            <Button
              type="primary"
              onClick={this.onClick}
            >
              删除事项
            </Button>
          </Col>  
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
      task: state.tasks.find((task) => task.id.toString() === props.match.params.id.toString()),
  };
};

const mapDispatchToProps = (dispatch) => ({
  startEditTask: (task) => dispatch(startEditTask(task)),
  startRemoveTask: ({ id }) => dispatch(startRemoveTask({ id })),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTaskPage);
