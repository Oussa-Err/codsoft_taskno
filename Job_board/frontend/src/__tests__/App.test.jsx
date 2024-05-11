import { render, screen, userEvent } from "../utils/test-utils";
import { describe, expect, it } from "vitest";
import { Home, Notfound } from "../routes";
import { Footer, Navbar } from "../components";
import { MemoryRouter, Routes, Route } from "react-router-dom";

export class IntersectionObserver {
  root = null;
  threshold = 0
  entries = [];

  observe() {
    return null;
  }
}
global.IntersectionObserver = IntersectionObserver;

describe("home", () => {
  it("checking title 'Find Your Dream Job' in home  ", () => {
    render(<Home />);
    expect(screen.getByText(/Find Your Dream Job/i)).toBeDefined();
  });

  it("should render navbar component", () => {
    render(<Navbar />);
    expect(screen.getByText(/jobify/i)).toBeDefined();
  });

  it("should check if footer is defined", () => {
    render(<Footer />);
    expect(screen.getByText(/All Rights Reserved./i)).toBeDefined();
  });

  screen.debug()
  it("should show error page on nonexisting page", () => {
    const badRoute = "/bad/route";
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </MemoryRouter>
    );
    
    expect(screen.getByText(/Page not found/i)).toBeDefined();
  });
});
