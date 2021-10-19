import { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from './component/dashboard/Dashboard';
// const HomePage = lazy(() => import('./component/header/Header'))
const Drawer = lazy(()=> import ('./component/drawer/Drawer'))
const dashboardSample = lazy(()=> import ('./component/dashboardSample/Dashboard'))
const SignUp = lazy (()=>import ('./component/signIn/signIn'))

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>} >
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/drawer" component={Drawer} />
          <Route path="/dashboardSample" component={dashboardSample} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/signIn" component={SignUp}/>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
