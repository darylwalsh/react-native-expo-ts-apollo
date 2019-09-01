// // components/__tests__/Hello.tsx
// // import React, {Component} from 'react'
// import * as React from 'react';
// import * as TestRenderer from 'react-test-renderer';

// import {Hello} from '../Hello'

// //const TestRenderer = require("react-test-renderer");
// //const Hello = require('../Hello')
// // import * as renderer from "react-test-renderer";

// // import { Hello } from "../Hello";

// let renderer: TestRenderer.ReactTestRenderer;

// describe("Test Component state change without HOC", () => {
// it("renders correctly with defaults", () => {
//   renderer = TestRenderer.create(<Hello />);
//   const button = renderer
//     .create(<Hello name="World" enthusiasmLevel={1} />)
//     .toJSON();
//   expect(button).toMatchSnapshot();
// });
// }

// components/__tests__/Hello.tsx
import * as React from 'react'
import * as TestRenderer from 'react-test-renderer'

import { Hello } from '../Hello'

// let renderer: TestRenderer
it('renders correctly with defaults', () => {
  const button = TestRenderer.create(
    <Hello name="World" enthusiasmLevel={1} />
  ).toJSON()
  expect(button).toMatchSnapshot()
})
