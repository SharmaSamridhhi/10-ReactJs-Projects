import React, { useState } from "react";
import List from "./Components/List";
import Data from "./Components/Data";
const App = () => {
  const [people, setPeople] = useState(Data);
  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
};

export default App;
