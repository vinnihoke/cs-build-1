import React from 'react';
import Game from './ components/Game';
import { Link } from "@reach/router";

function App() {
  return (
    <main>
      <header>
        <section>
          <aside>
            <h4>
              Game of Life
              </h4>
          </aside>
          <aside className="pr-45">
            <Link to="about">About</Link>
          </aside>
        </section>
      </header>
      <section>
        <aside>
          <Game />
        </aside>
      </section>
    </main>
  );
}

export default App;
