import React from "react";
import { useGlobalContext } from "./context";

import SetupForm from "./SetupForm";
import Modal from "./Modal";
import Loading from "./Loading";

function App() {
  const { waiting, loading, questions, index, correct } = useGlobalContext();
  if (waiting) {
    return <SetupForm />;
  }

  if (loading) {
    return <Loading />;
  }

  const { question, incorrect_answers, correct_answer } = questions[index];
  let answers = [...incorrect_answers];
  const tempIndex = Math.floor(Math.random() * 4);
  if (tempIndex === 3) {
    answers.push(correct_answer);
  } else {
    answers.push(answers[tempIndex]);
    answers[tempIndex] = correct_answer;
  }

  /*
  
  A)1
  B)2
  C)3
  D)4
  */

  return (
    <main>
      <Modal />
      <section className="quiz">
        <p>
          {" "}
          correct answers: {correct}/{index}{" "}
        </p>

        <article className="container">
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          <div className="btn-container"></div>
        </article>
      </section>
    </main>
  );
}

export default App;
