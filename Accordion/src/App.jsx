import React, { useState } from "react";
import Data from "./Data";
import SingleQuestion from "./Components/Questions";
function App() {
  const [questions, setQuestions] = useState(Data);
  return (
    <main>
      <div className='container'>
        <h3>Questions</h3>
        <section className='info'>
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
