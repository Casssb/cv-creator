import React, { Component } from 'react';
import Form from './modules/form/Form';
import Display from './modules/display/Display';
import { reset, demo } from './modules/form/utils/StateData';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personal: {
        name: '',
        role: '',
        statement: '',
        email: '',
        phone: '',
        location: '',
        github: '',
        site: '',
      },
      skills: [],
      projects: [],
      experience: [],
      courses: [],
      education: [],
      isVisible: {
        personal: true,
        skills: false,
        projects: false,
        experience: false,
        courses: false,
        education: false,
      },
    };

    this.handlePersonalInput = this.handlePersonalInput.bind(this);
    this.handleOtherInput = this.handleOtherInput.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleVisible = this.toggleVisible.bind(this);
    this.resetStateData = this.resetStateData.bind(this);
    this.appendDemoData = this.appendDemoData.bind(this);
  }

  handlePersonalInput(event, stateKey) {
    const text = event.target.value;
    this.setState({
      personal: {
        ...this.state.personal,
        [stateKey]: text,
      },
    });
  }

  handleOtherInput(event, stateKey, stateId, index) {
    const text = event.target.value;
    let category = [...this.state[stateId]];
    let elemToUpdate = {
      ...category[index],
      [stateKey]: text,
    };
    category[index] = elemToUpdate;
    this.setState({
      [stateId]: category,
    });
  }

  chooseTemplate(stateKey) {
    switch (stateKey) {
      case 'skills':
        return { skill: '', subSkill: '' };
      case 'projects':
        return { title: '', repo: '', live: '', description: '' };
      case 'experience':
        return { role: '', company: '', dates: '', description: '' };
      case 'courses':
        return { course: '', description: '' };
      case 'education':
        return { qualification: '', school: '', location: '', dates: '' };
    }
  }

  handleAdd(event, stateKey) {
    event.preventDefault();
    this.setState({
      [stateKey]: [...this.state[stateKey], this.chooseTemplate(stateKey)],
    });
  }

  handleDelete(event, stateKey, index) {
    event.preventDefault();
    const filtered = this.state[stateKey].filter((elem, i) => i !== index);
    this.setState({
      [stateKey]: filtered,
    });
  }

  toggleVisible(event, stateKey) {
    event.preventDefault();
    this.setState({
      isVisible: {
        ...this.state.isVisible,
        [stateKey]: !this.state.isVisible[stateKey],
      },
    });
  }

  resetStateData(event) {
    event.preventDefault();
    this.setState({ ...reset });
  }

  appendDemoData(event) {
    event.preventDefault();
  }

  render() {
    return (
      <main className="container min-h-screen flex justify-between gap-2 p-4 mx-auto bg-zinc-100 dark:bg-zinc-900">
        <Form
          details={this.state}
          handlePersonalInput={this.handlePersonalInput}
          handleOtherInput={this.handleOtherInput}
          toggleVisible={this.toggleVisible}
          handleAdd={this.handleAdd}
          handleDelete={this.handleDelete}
          resetStateData={this.resetStateData}
          appendDemoData={this.appendDemoData}
        />
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
