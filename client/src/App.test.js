import React from "react";
import { mount, shallow } from "enzyme";
import App from "./App";

describe("App", () => {
  it("should match snapshot", () => {
    const app = shallow(<App />);

    expect(app).toMatchSnapshot();
  });

  test("showActive is false by default", () => {
    const app = shallow(<App />);
    expect(app.find("#showActive-button").at(0).text()).toEqual(
      "Show connected"
    );
  });

  test("showActive is changed when the button is clicked", () => {
    const app = mount(<App />);
    app.find("#showActive-button").at(0).simulate("click");
    expect(app.find("#showActive-button").at(0).text()).toEqual("Show all");
  });

  test("Connect button is disconnected by default", () => {
    const app = mount(<App />);
    expect(app.find(".connectButton").at(0).text()).toEqual("Connect");
  });
});
