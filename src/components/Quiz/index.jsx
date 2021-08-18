import React, { useState } from 'react';
import { questions } from '../../questions';
import styles from './Quiz.module.scss';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = isCorrect => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuestions = currentQuestion + 1;
    if (nextQuestions < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className={styles.quizContainer}>
      <div className={styles.questionContainer}>
        {showScore ? (
          <div className={styles.scoreSection}>
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <>
            <div className={styles.questionSection}>
              <div className={styles.questionCount}>
                <span>Question {currentQuestion + 1}</span>
                {questions.length}
              </div>
              <div className={styles.questionText}>
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className={styles.answerSection}>
              {questions[currentQuestion].answerOptions.map(answerOptions => (
                <button
                  onClick={() =>
                    handleAnswerButtonClick(answerOptions.isCorrect)
                  }
                >
                  {answerOptions.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;
