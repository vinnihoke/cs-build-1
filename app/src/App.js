import React from 'react';
import Game from './ components/Game';

function App() {
  return (
    <main>
      <header>
        <section>
          <aside>
            <figure>
              Game of Life
            </figure>
          </aside>
          <aside class="pr-45">
            In Memoriam: John Conway
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
