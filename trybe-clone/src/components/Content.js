import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Calendar from '../pages/Calendar';
import LiveLectures from '../pages/LiveLectures';
import Solutions from '../pages/Solutions';
import TrybeTalks from '../pages/TrybeTalks';

class Content extends React.Component {
  render() {
    return (
      <main className="Content">
        <Switch>
          <Route exact path="/calendar" component={ Calendar } />
          <Route path="/calendar" component={ LiveLectures } />
          <Route path="/live-lectures" component={ LiveLectures } />
          <Route path="/trybe-talks" component={ TrybeTalks } />
          <Route path="/solutions" component={ Solutions } />
        </Switch>
      </main>
    );
  }
}

export default Content;
