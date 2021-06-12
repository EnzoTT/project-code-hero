import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './app/pages/Home'
import Detail from './app/pages/Detail'


const Routes = () => {
    return (
      <BrowserRouter>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/detail" component={Detail} />

        </Switch>
      </BrowserRouter>
    );
  };

export default Routes;
