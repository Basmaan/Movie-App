import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
import { Home } from "./home/Home";
import AntFramework from "./AntFramework/AntFramework.js";

const Popular = lazy(() => import('./home/Popular'));
const Upcoming = lazy(() => import('./home/Upcoming'));
const NowPlaying = lazy(() => import('./home/NowPlaying'));

export function App() {
  return (
    <main>
      <Router>
        <Suspense fallback={<div style={{color:"black",fontWeight: 500}}>Loading...</div>}>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/ant_framework" component={AntFramework} />
            <Route path="/popular_movie" component={Popular} />
            <Route path="/upcoming_movie" component={Upcoming} />
            <Route path="/now_playing" component={NowPlaying} />
          </Switch>
        </Suspense>
      </Router>
    </main>
  );
}

export default App;






