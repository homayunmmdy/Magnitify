import { render, screen } from "@testing-library/react";
import StatusDisplay from "../../../components/tickets/StatusDisplay";
import React from 'react'

describe("StatusDisplay Components", () => {
  it.each([
    { status: "default", color: /slate/i },
    { status: "done", color: /green/i },
    { status: "started", color: /yellow/i },
    { status: "not started", color: /red/i },
    { status: "delay", color: /orange/i },
  ])("should display $color when status is $status", ({ status, color }) => {
    render(<StatusDisplay status={status} />);

    expect(screen.queryByText(status)).toHaveClass(color);
  });
});
