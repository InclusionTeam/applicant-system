import React, { Component } from "react";
import { Form, Button, FormControl, Row, Col, InputGroup } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//import Datepicker from "react-bootstrap-date-picker";
// import ControlLabel from "react-bootstrap/InputGroup";
// import FormCheck from "react-bootstrap/FormCheck";
// import ControlLabel from "react-bootstrap/lib/ControlLabel";
// import { Redirect } from "react-router-dom";

class Forms extends Component {
  state = {
    name: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    birthdate: '',
    ethnicity: "",
    linkedin: "",
    github: "",
    extralink: "",
    coverletter: "",
    education: "",
    collegemajor: "",
    collegelocation: "",
    isemployed: false,
    employer: "",
    military: false,
    income: "",
    laptop: false,
    whyinterested: "",
    howheard: "",
    skilllevel: "",
    redirect: false,
    startDate: new Date()
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleCheckboxes = (event) => {
    this.setState({ [event.target.name]: event.target.checked });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ redirect: true });
  }

  handleEthnicity = (event) => {
    this.setState({ ethnicity: event.target.value })
  }

  handleDate = (date) => {
    let dbFriendlyDate = date.toISOString();
    this.setState({
      birthdate: dbFriendlyDate
    });
  };

  render() {

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name:</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter full name" value={this.state.name} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="formBasicPhone">
            <Form.Label>Phone:</Form.Label>
            <Form.Control type="phone" name="phone" placeholder="(XXX) XXX-XXXX" value={this.state.phone} onChange={this.handleChange} />
          </Form.Group>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" name="address" placeholder="Enter street address" value={this.state.address} onChange={this.handleChange} />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control name="city" value={this.state.city} onChange={this.handleChange} />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control as="select" name="state" value={this.state.state} onChange={this.handleChange}>
                <option>Choose...</option>
                <option>CT</option>
                <option>NJ</option>
                <option>NY</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control name="zip" value={this.state.zip} onChange={this.handleChange} />
            </Form.Group>
          </Form.Row>
          <Form.Group controlId="formBirthday">
            <Form.Label>Birthdate: </Form.Label>
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleDate}
            />
          </Form.Group>
          <fieldset>
            <Form.Group as={Row} controlId="formEthinicity">
              <Form.Label as="legend" column sm={2}>
                Ethnicity:
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  label="Hispanic"
                  value="Hispanic"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                  onChange={this.handleEthnicity}
                />
                <Form.Check
                  type="radio"
                  label="African American"
                  Value="African American"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                  onChange={this.handleEthnicity}
                />
                <Form.Check
                  type="radio"
                  label="Asian"
                  Value="Asian"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios3"
                  onChange={this.handleEthnicity}
                />
                <Form.Check
                  type="radio"
                  label="Other"
                  value="Other"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios4"
                  onChange={this.handleEthnicity}
                />
              </Col>
            </Form.Group>
          </fieldset>
          <Form.Group controlId="formLinkedin">
            <Form.Label>Linked In:</Form.Label>
            <Form.Control type="url" placeholder="Enter your LinkedIn url" name="linkedin" value={this.state.linkedin} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="formGitHub">
            <Form.Label>GitHub:</Form.Label>
            <Form.Control type="url" placeholder="Enter your GitHub url" name="github" value={this.state.github} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="formExtralink">
            <Form.Label>Personal Website:</Form.Label>
            <Form.Control type="url" placeholder="Enter your personal website url" name="extralink" value={this.state.extralink} onChange={this.handleChange} />
          </Form.Group>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>Cover Letter: </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl name="coverletter" value={this.state.coverletter} onChange={this.handleChange} as="textarea" aria-label="With textarea" />
          </InputGroup>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEducation">
              <Form.Label>Degree: </Form.Label>
              <Form.Control placeholder="Enter your highest degree" name="education" value={this.state.education} onChange={this.handleChange} />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridMajor">
              <Form.Label>Major: </Form.Label>
              <Form.Control placeholder="Enter your major" name="collegemajor" value={this.state.collegemajor} onChange={this.handleChange} />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCollege">
              <Form.Label>University: </Form.Label>
              <Form.Control placeholder="Enter your University/College" name="collegelocation" value={this.state.collegelocation} onChange={this.handleChange} />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formIsEmployed">
              <Col sm={{ span: 10, offset: 2 }}>
                <Form.Check label="Employed?" name="isemployed" value={this.state.isemployed} onChange={this.handleCheckboxes} />
              </Col>
            </Form.Group>
            <Form.Group as={Col} controlId="formEmployer">
              <Form.Label>Employer: </Form.Label>
              <Form.Control placeholder="Enter your employer" name="employer" value={this.state.employer} onChange={this.handleChange} />
            </Form.Group>
            <Form.Group as={Col} controlId="formIsVeteran">
              <Col sm={{ span: 10, offset: 2 }}>
                <Form.Check label="Veteran?" name="military" value={this.state.military} onChange={this.handleCheckboxes} />
              </Col>
            </Form.Group>
            <Form.Group as={Col} controlId="formIncome">
              <Form.Label>Income: </Form.Label>
              <Form.Control as="select" name="income" value={this.state.income} onChange={this.handleChange}>
                <option>Choose...</option>
                <option>Under $30,000</option>
                <option>$30,001 - $65,000</option>
                <option>$65,001 - $100,000</option>
                <option>Above $100,000</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <fieldset>
            <Form.Group as={Row} controlId="formLaptop">
              <Form.Label as="legend" column sm={2}>
                Do you own a laptop?
              </Form.Label>
              <Col sm={10}>
                <Form.Check label="Do you have a laptop?" name="laptop" value={this.state.military} onChange={this.handleCheckboxes} />
              </Col>
            </Form.Group>
          </fieldset>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>Why did you choose Inclusion: </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl as="textarea" aria-label="With textarea" label="Veteran?" name="whyinterested" value={this.state.whyinterested} onChange={this.handleChange} />
          </InputGroup>
          <Form.Group controlId="formHowHeard">
            <Form.Label>How did you hear about Inclusion?</Form.Label>
            <Form.Control placeholder="Enter your source" name="howheard" value={this.state.howheard} onChange={this.handleChange} />
          </Form.Group>

          <Form.Group controlId="formSkillLevel">
            <Form.Label>Skill Level: </Form.Label>
            <Form.Control as="select" name="skilllevel" value={this.state.skilllevel} onChange={this.handleChange}>
              <option>Choose...</option>
              <option>Beginner</option>
              <option>Mid-level</option>
              <option>Advanced</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
export default Forms;
