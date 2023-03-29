import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Hero from "./Hero";

describe("Hero", () => {
	test("renders correct alt text", () => {
		render(<Hero />)

		const altText = screen.getByAltText("/")
		expect(altText).toBeInTheDocument()
	})

	test("renders button text", () => {
		render(<Hero />)
		
		const buttonText = screen.getByRole("button", {
			name: "Get Started"
		})
		expect(buttonText).toBeInTheDocument()
	})
})