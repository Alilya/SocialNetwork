import React from "react";
import ProfileStatus from "../Components/Profile/MainTextProfile/ProfileStatus";
import { create } from "react-test-renderer";

describe("ProfileStatus component", () => {
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="TEST" />);
    const instance = component.getInstance();
    expect(instance.state.profile.status).toBe("TEST");
  });

//   test("status from props should be in the state", () => {
//     const component = create(<ProfileStatus status="TEST" />);
//     const instance = component.getInstance();
//     expect(instance.state.status).toBe("TEST");
//   });
});