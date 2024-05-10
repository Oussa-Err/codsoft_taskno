import { render, screen, cleanup } from "../utils/test-utils";
import { Navbar } from "../components";
import { describe, it, afterEach, expect } from "vitest";


describe("navbar behaviour", () => {    
    
    
    afterEach(cleanup);

    it("should render navbar component", () => {
        render(<Navbar />);

        expect(screen.getByTestId("navbar")).toBeInTheDocument();
    })
})