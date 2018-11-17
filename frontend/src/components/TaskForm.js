import React from 'react';
import moment from 'moment';
import DatePicker from 'antd/lib/date-picker';
import 'antd/lib/date-picker/style/css';
import Form from 'antd/lib/form';
import 'antd/lib/form/style/css';
import Input from 'antd/lib/input';
import 'antd/lib/input/style/css';
import Radio from 'antd/lib/radio';
import 'antd/lib/radio/style/css';
import Button from 'antd/lib/button';
import 'antd/lib/button/style/css';

export class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: props.task ? moment(props.task.startDate) : moment(),
      expireDate: props.task ? moment(props.task.expireDate) : null,
      level: props.task ? props.task.level : '0',
      title: props.task ? props.task.title : '',
      description: props.task ? props.task.description : '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.onSubmit({
          startDate: moment(values['起始时间']),
          expireDate: moment(values['结束时间']),
          level: values['优先级'],
          title: values['待办事项标题'],
          description: values['待办事项内容'],
          isFinish: "0",
        })
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const FormItem = Form.Item;
    const { TextArea } = Input;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 6,
        },
      },
    };

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label="待办事项标题"
        >
          {getFieldDecorator('待办事项标题', {
            initialValue: this.state.title,
            rules: [{
              required: true, message: '必须设定一个标题',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="待办事项内容"
        >
          {getFieldDecorator('待办事项内容', {
            initialValue: this.state.description,
          })(
            <TextArea />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="起始时间"
        >
          {getFieldDecorator('起始时间', {
            initialValue: this.state.startDate,
            rules: [{
              required: true, message: '必须选择一个起始时间',
            }],
          })(
            <DatePicker />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="结束时间"
        >
          {getFieldDecorator('结束时间', {
            initialValue: this.state.expireDate,
            rules: [{
              required: true, message: '必须选择一个结束时间',
            }],
          })(
            <DatePicker />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="优先级"
        >
          {getFieldDecorator('优先级', {
            initialValue: this.state.level,
            rules: [{
              required: true, message: '必须选择一个优先级',
            }],
          })(
            <Radio.Group buttonStyle="solid">
              <Radio.Button value="0">普通</Radio.Button>
              <Radio.Button value="1">重要</Radio.Button>
              <Radio.Button value="2">紧急</Radio.Button>
            </Radio.Group>
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">添加事项</Button>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(TaskForm);
