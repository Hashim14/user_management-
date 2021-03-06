// import React from "react";
// import { Form, Input, Button } from "antd";

// const signUp = () => {
//   const [form] = Form.useForm();

//   const onFinish = (values) => {
//     console.log("Received values of form: ", values);
//   };
//   return (
//     <div>
//       <Form
//         {...formItemLayout}
//         form={form}
//         name="register"
//         onFinish={onFinish}
//         initialValues={{
//           residence: ["zhejiang", "hangzhou", "xihu"],
//           prefix: "86",
//         }}
//         scrollToFirstError
//       >
//         <Form.Item
//           name="email"
//           label="E-mail"
//           rules={[
//             {
//               type: "email",
//               message: "The input is not valid E-mail!",
//             },
//             {
//               required: true,
//               message: "Please input your E-mail!",
//             },
//           ]}
//         >
//           <Input />
//         </Form.Item>

//         <Form.Item
//           name="password"
//           label="Password"
//           rules={[
//             {
//               required: true,
//               message: "Please input your password!",
//             },
//           ]}
//           hasFeedback
//         >
//           <Input.Password />
//         </Form.Item>

//         <Form.Item
//           name="confirm"
//           label="Confirm Password"
//           dependencies={["password"]}
//           hasFeedback
//           rules={[
//             {
//               required: true,
//               message: "Please confirm your password!",
//             },
//             ({ getFieldValue }) => ({
//               validator(_, value) {
//                 if (!value || getFieldValue("password") === value) {
//                   return Promise.resolve();
//                 }

//                 return Promise.reject(
//                   new Error("The two passwords that you entered do not match!")
//                 );
//               },
//             }),
//           ]}
//         >
//           <Input.Password />
//         </Form.Item>

//         <Form.Item
//           name="nickname"
//           label="Nickname"
//           tooltip="What do you want others to call you?"
//           rules={[
//             {
//               required: true,
//               message: "Please input your nickname!",
//               whitespace: true,
//             },
//           ]}
//         >
//           <Input />
//         </Form.Item>
//         <Form.Item {...tailFormItemLayout}>
//           <Button type="primary" htmlType="submit">
//             Register
//           </Button>
//         </Form.Item>
//       </Form>
//     </div>
//   );
// };

// export default signUp;
