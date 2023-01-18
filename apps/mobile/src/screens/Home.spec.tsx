import { render } from "@testing-library/react-native";

import { Home } from "./Home";

describe("<App />", () => {
  it("should be able to find Hello World! text", () => {
    const { getByText } = render(<Home />);
    expect(getByText("Hello World!")).toBeVisible();
  });
});
