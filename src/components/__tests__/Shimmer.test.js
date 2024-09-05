import {StaticRouter} from "react-router-dom/server";
import {render,waitFor} from "@testing-library/react";
import {Provider} from "react-redux";
import store from "../../utils/store";
import Body from "../Body";
import "@testing-library/jest-dom";

test("Shimmer should load on Homnepage", () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    );


    const shimmer = body.getByTestId("shimmer");

    expect(shimmer.children.length).toBe(10);

    console.log(shimmer);
})