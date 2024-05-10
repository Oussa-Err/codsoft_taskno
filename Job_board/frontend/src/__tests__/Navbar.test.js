import { render, screen, cleanup } from "@testing-library/react";
import { Navbar } from "../components";

describe("navbar behaviour", () => {    
    
    afterEach(cleanup);

    it("should render navbar component", () => {
        render(<Navbar />);

        const navbar = screen.getByTestId("navbar");

        expect(navbar).toBeInTheDocument();
    })
})