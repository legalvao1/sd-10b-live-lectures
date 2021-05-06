import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Calendar from '../pages/Calendar';
import LiveLectures from '../pages/LiveLectures';
import Solution from '../pages/Solution';
import Solutions from '../pages/Solutions';
import TrybeTalks from '../pages/TrybeTalks';

class Content extends React.Component {
  constructor() {
    super();

    this.state = {
      solutions: [
        {
          id: 'hello-world-no-react',
          name: '11.1 - Hello World no React',
        },
        {
          id: 'componentes-react',
          name: '11.2 - Componentes React',
        },
      ],
    };
  }

  render() {
    const { solutions } = this.state;
    return (
      <main className="Content">
        <Switch>
          <Route path="/calendar" component={ Calendar } />
          <Route path="/live-lectures" component={ LiveLectures } />
          <Route path="/trybe-talks" component={ TrybeTalks } />
          <Route
            exact
            path="/solutions"
            render={ (reactRouterProps) => (
              <Solutions { ...reactRouterProps } solutions={ solutions } />
            ) }
          />
          <Route path="/solutions/:exerciseId" component={ Solution } />

        </Switch>
      </main>
    );
  }
}

export default Content;
