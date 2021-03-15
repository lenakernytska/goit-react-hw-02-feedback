import React, { Component } from 'react';
import Statistics from "./components/Statistics"
import FeedbackOptions from "./components/FeedbackOptions"
import Section from "./components/Section";
import Notification from "./components/Notification"

class App extends Component{
state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  
 handleClick = event => {
    const name = event.currentTarget.name;
    this.setState(prevState => ({
      ...prevState,
      [name]: this.state[name] + 1
    }));
  };
   

  render() {
     const { good, neutral, bad } = this.state;
      const countTotalFeedback = () =>
        good + neutral + bad;


     const countPositiveFeedbackPercentage = ()=>
    good
      ? Math.round((good/countTotalFeedback())*100)
        : 0;
    
        return (
            
                 <Section title="Please leave feedback">
            <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleClick} />
            {countTotalFeedback() > 0
              ? <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={countTotalFeedback()}
                positivePercentage={countPositiveFeedbackPercentage()} />
              : <Notification message="No feedback given" />
            }
               </Section>
          )
    }
}

export default App;