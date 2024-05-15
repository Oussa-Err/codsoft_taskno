import { cleanup, render } from "@testing-library/react";
import { afterEach, vi } from "vitest";
import { Provider } from "react-redux";
import { store } from "../redux/store";

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

const ProviderWrapper = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

function customRender(ui, options) {
  return render(ui, {
    wrapper: ProviderWrapper,
    ...options,
  });
}

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
export { customRender as render };
