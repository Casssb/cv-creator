import React, { Component } from 'react';
import Form from './modules/form/Form';
import Display from './modules/display/Display';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      role: '',
      statement: '',
      email: '',
      phone: '',
      location: '',
      github: '',
      site: '',
      skills: [],
      experience: [],
      courses: [],
      education: [],
    };

    this.handleTextInput = this.handleTextInput.bind(this);
  }

  handleTextInput(event, stateKey) {
    const text = event.target.value;
    this.setState({
      [stateKey]: text,
    });
  }

  render() {
    return (
      <main className="container flex justify-between p-4 mx-auto bg-zinc-100">
        <Form details={this.state} handleTextInput={this.handleTextInput} />
        <Display details={this.state} />
      </main>
    );
  }
}

export default App;

/* layer 1: form -- display 
form: personal details, skills, employment, projects, education
display: "" "" "" "" ""
form components: input (they can all be text/textarea inputs to make typing styles more flexible)
form header: name, job title, profile statement, links:  (email, phone, location, github, (optional: personal website, discord))
form skills: skill category (e.g 'Javascript), skill selection (e.g. 'OOP', 'ES6')
form professional experience: role, company, dates (from & to), location, job description
form courses: course name, organisation, description
form education: qualification, university/school, location, dates, description
Display components: main sections for header, skills, proffesional, courses & education
header will be compulsory but the other 4 can render conditionally since they will depend on a stateful array
(so if there are no skills entered that section will not render)*/
