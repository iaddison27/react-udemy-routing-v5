import {Redirect, Route, Switch} from 'react-router-dom';
import Quotes from "./pages/Quotes";
import NewQuote from "./pages/NewQuote";
import Quote from "./pages/Quote";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

function App() {
  // Upgrading to react-router-dom v6:
  // * replace <Switch> with <Routes>
  // * replace <Route path="/" exact><Redirect to="/quotes"></Route> with <Route path="/ element={<Navigate replace to="/quotes" />} />
  // * replace <Route path="/quotes"><Quotes /></Route> with <Route path="/quotes" element={<Quotes />} />
  // * can remove exact attribute. If you only want to match the start of a path use * e.g. path="quote/*"
  // * order of routes doesn't matter anymore
  // * activeClassName attribute on <Link> and <NavLink> removed. Need to use a function that accesses "navData.isActive" within className attribute
  // * If using nested <Route> in child component, wrap with <Routes> - even if just a single <Route>
  // * Paths of nested routes in child components (<Link> and <Route>), the paths are now relative to the parent, so only add extra bit (e.g. /parent/child => /child)
  // * Can define nested routes in main route definition rather than child components
  // * replace useHistory with useNavigate: history.push('/url'); => navigate('/url', {replace: true/false});
  // * <Prompt> was removed, need to implement your own but may come back in the future
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes">
          <Quotes />
        </Route>
          <Route path="/quote/:id">
            <Quote />
          </Route>
          <Route path="/new-quote">
            <NewQuote />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
      </Switch>
    </Layout>
  );
}

export default App;
