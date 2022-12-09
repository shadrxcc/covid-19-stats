import renderer from "react-test-renderer";
import Homenavbar from "../components/homenavbar";

describe("homenavbar component", () => {
  test("Snapshot test", () => {
    const homenav = renderer.create(<Homenavbar />).toJSON();
    expect(homenav).toMatchSnapshot();
  });
});
