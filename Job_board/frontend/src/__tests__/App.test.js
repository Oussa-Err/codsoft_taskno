import { describe, expect, it } from 'vitest'
import { render, screen } from "../utils/test-utils";
import App from "../App";
import Home from "../routes/Home"

describe("home", () => {

  it('checking title \'Find Your Dream Job\' ', () => {
    render(<Home />)
    expect(screen.getByText("Find Your Dream Job")).toBeDefined()
  })
})
