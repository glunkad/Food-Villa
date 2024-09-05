import Body from "../Body";
import {render, waitFor, fireEvent} from "@testing-library/react";
import {Provider} from "react-redux";
import store from "../../utils/store";
import {MENU_DATA} from "../../mocks/data";
import {StaticRouter} from "react-router-dom/server";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MENU_DATA);
        }
    })
});

test("Add items to Cart", async () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
                <RestaurantMenu />
            </Provider>
        </StaticRouter>
    );

    await waitFor(() => expect(body.getByTestId("menu")));

    const addBtn = body.getAllByTestId("addBtn");

    fireEvent.click(addBtn[0]);

    const cart = body.getByTestId("cart");

    expect(cart.innerHTML).toBe("Cart - 1 Items");

})