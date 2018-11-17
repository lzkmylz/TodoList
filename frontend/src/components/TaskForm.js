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
      startDate: props.task ? props.task.startDate : moment(),
      expireDate: props.task ? props.task.expireDate : moment(),
      level: props.task ? props.task.level : '0',
      title: props.task ? props.task.title : '',
      description: props.task ? props.task.description : '',
    };
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
      <Form>
        <FormItem
          {...formItemLayout}
          label="待办事项标题"
        >
          {getFieldDecorator('待办事项标题', {
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
          {getFieldDecorator('待办事项内容', {})(
            <TextArea />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="起始时间"
        >
          {getFieldDecorator('起始时间', {
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
            rules: [{
              required: true, message: '必须选择一个优先级',
            }],
          })(
            <Radio.Group defaultValue="a" buttonStyle="solid">
              <Radio.Button value="a">普通</Radio.Button>
              <Radio.Button value="b">重要</Radio.Button>
              <Radio.Button value="c">紧急</Radio.Button>
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

export default Form.create()(TaskForm);;
