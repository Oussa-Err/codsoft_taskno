import reducer, { todoAdded } from "./authSlice";
import { describe, it, expect } from "vitest";
import { render, screen } from "../utils/test-utils";

describe("auth in navbar", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, { type: "unknown" })).toEqual([
      { userInfo: "dono", isAuthenticated: false, error: "" },
    ]);
  });

  it("should handle a todo being added to an empty list", () => {
    const previousState = [];

    expect(reducer(previousState, todoAdded("Run the tests")))  .toEqual([
      { text: "Run the tests", completed: false, id: 0 },
    ]);
  });

  it("should handle a todo being added to an existing list", () => {
    const previousState = [{ text: "Run the tests", completed: true, id: 0 }];

    expect(reducer(previousState, todoAdded("Use Redux"))).toEqual([
      { text: "Run the tests", completed: true, id: 0 },
      { text: "Use Redux", completed: false, id: 1 },
    ]);
  });
});
