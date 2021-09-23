import React from "react";
import { Modal, Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { addUser, loadUser } from "../Redux/actions";

const Login = () => {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    console.log("Received values of form: ", values.id);
    dispatch(loadUser(values.id));
  };

  const [form] = Form.useForm();
  const [visible, setVisible] = React.useState(false);

  const onCreate = (user) => {
    console.log("Received user of form: ", user);
    setVisible(false);
    dispatch(addUser(user));
  };

  return (
    <div>
      <Form
        name="normal_login"
        className="L-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="id"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="id"
            placeholder="ID"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or{" "}
          <Button
            type="primary"
            className="login-form-button"
            onClick={() => {
              setVisible(true);
            }}
          >
            Sign up
          </Button>
        </Form.Item>
      </Form>

      <Modal
        visible={visible}
        title="Create a new user"
        okText="Create"
        cancelText="Cancel"
        onCancel={() => setVisible(false)}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
      >
        <Form
          form={form}
          layout="vertical"
          name="form_in_modal"
          initialValues={{
            modifier: "public",
          }}
        >
          <Form.Item
            name="username"
            label="username"
            rules={[
              {
                required: true,
                message: "Please input the title of collection!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="id" label="ID">
            <Input type="textarea" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Login;
