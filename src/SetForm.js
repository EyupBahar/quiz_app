import React from "react";
import { useGlobalContext } from "./context";

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit } = useGlobalContext();
  return (
    <main>
      <section className="quiz quiz-section">
        <form className="clarusway-quiz">
          <h2>Clarusway Quiz</h2>

          <div className="form-control">
            <label htmlFor="amount">Number of Questions</label>
            <input
              type="number"
              name="amount"
              id="amount"
              value={quiz.amount}
              onChange={handleChange}
              className="form-input"
              min={5}
              max={20}
            />
          </div>

          <div className="form-control">
            <label htmlFor="category">Category</label>
            <select
              name="category"
              id="category"
              className="form-input"
              value={quiz.category}
              onChange={handleChange}
            >
              <option value="sports">Sports</option>
              <option value="mythology">Mythology</option>
              <option value="entertainment">Entertainment</option>
            </select>
          </div>

          <div className="form-control">
            <label htmlFor="difficulty">Difficulty</label>
            <select
              name="difficulty"
              id="difficulty"
              className="form-input"
              value={quiz.difficulty}
              onChange={handleChange}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>

          <button type="submit" onClick={handleSubmit} className="submit-btn">
            Let's Go!
          </button>
        </form>
      </section>
    </main>
  );
};

export default SetupForm;
