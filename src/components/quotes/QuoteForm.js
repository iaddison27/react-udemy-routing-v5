import React, { useRef, useState } from 'react';
import {Prompt} from "react-router-dom";

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
  const [formFocussed, setFormFocussed] = useState(false);
  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const focusHandler = () => {
    // Use in conjunction with <Prompt> to display message if user tries to navigate away without saving
    setFormFocussed(true);
  };

  const resetFocusHandler = () => {
    setFormFocussed(false);
  }

  return (
      <React.Fragment>
        <Prompt when={formFocussed} message="Are you sure you want to navigate away? You will lose unsaved data"></Prompt>
        <Card>
          <form onFocus={focusHandler} className={classes.form} onSubmit={submitFormHandler}>
            {props.isLoading && (
              <div className={classes.loading}>
                <LoadingSpinner />
              </div>
            )}
            <div className={classes.control}>
              <label htmlFor='author'>Author</label>
              <input type='text' id='author' ref={authorInputRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor='text'>Text</label>
              <textarea id='text' rows='5' ref={textInputRef}></textarea>
            </div>
            <div className={classes.actions}>
              <button onClick={resetFocusHandler} className='btn'>Add Quote</button>
            </div>
          </form>
        </Card>
      </React.Fragment>
  );
};

export default QuoteForm;
