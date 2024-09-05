import Body from "../Body";
import {render, waitFor, fireEvent} from "@testing-library/react";
import {Provider} from "react-redux";
import store from "../../utils/store";
import {RESTAURANT_DATA} from "../../mocks/data";
import {StaticRouter} from "react-router-dom/server";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(RESTAURANT_DATA);
        }
    })
});

test("Search Results on Homepage", () => {

    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    );

    const searchBtn = body.getByTestId("search-btn");

    console.log(searchBtn);

});

test("Restaurants should load on Homnepage", async () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    );

    await waitFor(() => expect(body.getByTestId("search-btn")));

    const resList = body.getByTestId("res-list");

    expect(resList.children.length).toBe(10);

    console.log(shimmer);
});

test("Search for string(food) on Homnepage", async () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    );

    await waitFor(() => expect(body.getByTestId("search-btn")));

    const input = body.getByTestId("search-input");

    fireEvent.change(input, {
        target: {
            value: "taste",
        }
    })

    const searchBtn = body.getByTestId("search-btn")

    fireEvent.click(searchBtn);

    const resList = body.getByTestId("res-list");

    expect(resList.children.length).toBe(1);

    console.log(shimmer);
});