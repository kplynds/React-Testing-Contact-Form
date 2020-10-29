import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";
import { act } from "react-dom/test-utils";

test("renders ContactForm without errors", async () => {
  render(<ContactForm />);
});

test("User can fill out and submit form", async () => {
  render(<ContactForm />);

  const firstNameI = screen.getByLabelText(/First Name/i);
  const lastNameI = screen.getByLabelText(/Last Name/i);
  const emailI = screen.getByLabelText(/email*/i);
  const messageI = screen.getByLabelText(/Message/i);

  fireEvent.change(firstNameI, {
    target: { value: "Kyle", name: "firstName" },
  });
  fireEvent.change(lastNameI, { target: { value: "Lynds", name: "lastName" } });
  fireEvent.change(emailI, {
    target: { value: "kplynds@yahoo.com", name: "email" },
  });
  fireEvent.change(messageI, {
    target: { value: "This is a sample message", name: "message" },
  });

  const button = screen.getByRole("button");
  fireEvent.click(button);

  const newFirstName = await screen.getByText(/Kyle/i);
  expect(newFirstName).toBeTruthy();
});
