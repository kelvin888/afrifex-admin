import { Route, Switch } from "react-router";
import { NotFound } from "./components/NotFound";
import { Currencies } from "./pages/Currencies";
import { FxMarkets } from "./pages/FxMarkets";
import { Rates } from "./pages/Rates";
import { States } from "./pages/States";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Rates} />
      <Route exact path="/currencies" component={Currencies} />
      <Route exact path="/states" component={States} />
      <Route exact path="/fx-market-locations" component={FxMarkets} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
