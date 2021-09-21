import { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
const HomePage = lazy(() => import('./component/header/Header'))
const Drawer = lazy(()=> import ('./component/drawer/Drawer'))

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>} >
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/drawer" component={Drawer} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
