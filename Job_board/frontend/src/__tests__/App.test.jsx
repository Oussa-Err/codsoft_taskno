import { render, screen } from "./mockedStoreWrapper";
import { describe, expect, it } from "vitest";
import {
  AdminDashboard,
  Dashboard,
  History,
  Home,
  Information,
  Job,
  Jobs,
  Login,
  Notfound,
  Signup,
} from "../routes";
import { AdminRoute, UserRoute } from "../components";
import { MemoryRouter, Routes, Route } from "react-router-dom";


export class IntersectionObserver {
  root = null;
  threshold = 0;
  entries = [];

  observe() {
    return null;
  }
}
global.IntersectionObserver = IntersectionObserver;

describe("home", () => {
  it("should show error page on nonexisting page", () => {
    let badRoute = "/bad/Route";
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <RoutesAndRouteWithElements />
      </MemoryRouter>
    );
    expect(screen.getByText(/Page not found/i)).toBeDefined();
  });
});




const RoutesAndRouteWithElements = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/jobs" element={<Jobs />} />
    <Route path="/search/:keyword" element={<Jobs />} />
    <Route path="/job/:id" element={<Job />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    <Route element={<AdminRoute />}>
      <Route path="/recruiter/dashboard" element={<AdminDashboard />} />
    </Route>
    <Route
      path="/user/dashboard"
      element={
        <UserRoute>
          <Dashboard />
        </UserRoute>
      }
    />
    <Route
      path="/history"
      element={
        <UserRoute>
          <History />
        </UserRoute>
      }
    />
    <Route
      path="/information"
      element={
        <UserRoute>
          <Information />
        </UserRoute>
      }
    />
    <Route path="/*" element={<Notfound />} />
  </Routes>
);
