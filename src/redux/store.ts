import { configureStore } from "@reduxjs/toolkit";
import { currencySlice } from "./reducers/Currencies/currencySlice";
import { rateSlice } from "./reducers/Rates/rateSlice";
import { fxMarketSlice } from "./reducers/FxMarkets/fxMarketSlice";
import { stateSlice } from "./reducers/States/stateSlice";

const store = configureStore({
  reducer: {
    currencies: currencySlice.reducer,
    states: stateSlice.reducer,
    rates: rateSlice.reducer,
    fxmarkets: fxMarketSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
