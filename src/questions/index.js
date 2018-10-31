import React, { Component } from 'react';
import './styles.css';

class Question extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [{
        "question": "Is micromanagement really that bad?",
        "upvotes": 10
      }, {
        "question": "Is micromanagement really that bad?",
        "upvotes": 10
      },{
        "question": "Is micromanagement really that bad?",
        "upvotes": 10
      }, {
        "question": "Is micromanagement really that bad?",
        "upvotes": 10
      }, {
        "question": "Is micromanagement really that bad?",
        "upvotes": 10
      }, {
        "question": "Is micromanagement really that bad?",
        "upvotes": 10
      }]
    };
  }

  renderQuestions = () => {
    return (
      <table>
        {this.renderTableBody()}
      </table>
    );
  }

  renderTableBody = () => {
    let questions = this.state.questions;
    let tableBody = questions.map((question) => {
      return (
        <tr>
          <td> Question:</td>
          <td> {question.question} </td>
          <td> {question.upvotes} </td>
        </tr>
      );
    });
    return tableBody;
  }

  render() {
    return (
      <div className="">
        <header className="header">
          {this.renderQuestions()}
        </header>
      </div>
    );
  }
}

export default Question;
