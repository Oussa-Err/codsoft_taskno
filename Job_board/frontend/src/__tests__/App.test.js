import { render, screen } from "../utils/test-utils";
import Home from "../routes/Home";
import { describe, expect, it } from 'vitest'

describe("App", () => {

  it('checking title \'Find Your Dream Job\' ', () => {
    render(<Home />)
    const text = screen.getByText("Find Your Dream Job")
    screen.debug()
    expect(text).toBeInTheDocument()
  })
})
