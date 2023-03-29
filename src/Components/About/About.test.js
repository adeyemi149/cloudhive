import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import About from "./About";

describe("About", () => {
	test("renders About Page correctly", () => {
		render(<About />)

		//Works on div, paragraph and span
		const paragraphElement = screen.getByText(/Completion/)
		expect(paragraphElement).toBeInTheDocument()
	})
})
