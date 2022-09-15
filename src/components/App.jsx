import { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handelButtonGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };
  handelButtonNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };
  handelButtonBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return Math.round((100 / total) * this.state.good);
  };

  render() {
    return (
      <div>
        <section>
          <h1>Please leave feedback</h1>
          <button type="button" onClick={this.handelButtonGood}>
            Good
          </button>
          <button type="button" onClick={this.handelButtonNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.handelButtonBad}>
            Bad
          </button>
          <h2>Statistics</h2>
          {this.countTotalFeedback() !== 0}
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad:{this.state.bad}</p>
          <p>Total: {this.countTotalFeedback()}</p>
          <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
        </section>
      </div>
    );
  }
}

export default App;
