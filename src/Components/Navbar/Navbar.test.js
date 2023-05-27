import { render, screen, logRoles } from "@testing-library/react";
import '@testing-library/jest-dom'
import { Navbar } from "./Navbar";

describe("Navbar", () => {
	test("renders correct sitename", () => {
		//Creates a Virtual DOM
		render(<Navbar />);
		
		expect(screen.getByRole("list")).toBeInTheDocument();

		const pageHeading = screen.getByRole("heading", {
			name: "CloudHive",
			level: 1
		});
		expect(pageHeading).toBeInTheDocument()

		const button1 = screen.getByRole("button", {
			name: "Sign In"
		});
		expect(button1).toBeInTheDocument()

		const nameElement = screen.getByLabelText("name", {
			selector: 'input',
			exact: false
		})
		expect(nameElement).toBeInTheDocument()

		const nameElement2 = screen.getByPlaceholderText("Fullname")
		expect(nameElement2).toBeInTheDocument()

		//Returns the input, textarea or select element 
		const nameElement3 = screen.getByDisplayValue("testing")
		expect(nameElement3).toBeInTheDocument()

		const closeElement = screen.getByTitle("close")
		expect(closeElement).toBeInTheDocument();

		const dataId = screen.getByTestId("custom-element");
		expect(dataId).toBeInTheDocument()

	})

	test("renders list navigations", () => {
		render(<Navbar />)
		const listItemElements = screen.getAllByRole("listitem")
		expect(listItemElements).toHaveLength(listItemElements.length)
	})

	test("Welcome is not rendered", () => {
		render(<Navbar />)
		const welcomeParagraph = screen.queryByRole("paragraph", {
			name: "Welcome"
		})
		expect(welcomeParagraph).not.toBeInTheDocument()
	})

})