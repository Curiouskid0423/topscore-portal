import React from "react";
import Dashboard from "../../components/Home";
import { shallow } from "enzyme";

describe("Dashboard Component", () => {
    it("Should render a Dashboard object w/o knowing how " +
        "nested components have changed.", () => {
       const wrapper = shallow(<Dashboard />);
       expect(wrapper).toMatchSnapshot();
    });
})