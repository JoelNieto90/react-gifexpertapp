import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { App } from "../App";

describe("Prueba <App />", () => {
	test("Debe de mostrar el componente <App />", () => {
		const wrapper = shallow(<App />);
		expect(wrapper).toMatchSnapshot();
	});
});
