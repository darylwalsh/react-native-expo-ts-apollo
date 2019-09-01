import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';

import { Hello } from '../src/components/Hello';

let renderer: TestRenderer.ReactTestRenderer
it("renders correctly with defaults", () => {
  const button = TestRenderer.create(<Hello name="World" enthusiasmLevel={1} />).toJSON()
  expect(button).toMatchSnapshot()
})
// import TestRenderer from "react-test-renderer";
// import * as React from "react";
// const React = require("react");
// const TestRenderer = require("react-test-renderer");

// function Link(props: any) {
//   return <a href={props.page}>{props.children}</a>;
// }

// const tesngt = TestRenderer.create(
//   <Link page="https://www.facebook.com/">Facebook</Link>,
// );

// console.log(tesngt.toJSON());
// import * as React from "react";
// // import { renderer } from "react-test-renderer";
// const ReactTestRenderer = require("react-test-renderer");
// import App from "../App";

// describe("App", () => {
//   it("renders", () => {
//     const component = ReactTestRenderer.create(<App />);
//     const tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });
