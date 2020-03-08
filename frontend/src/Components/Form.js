import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Datepicker from "react-bootstrap-date-picker";
import { Redirect } from "react-router-dom";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      birthdate: function() {
        let birthDate = new Date().toISOString();
        return {
          birthdate: birthDate
        };
      },
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
      laptop: true,
      whyinterested: "",
      howheard: "",
      skilllevel: "",
      redirect: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, formattedValue) {
    event.preventDefault();
    this.setState({ name: event.target.value });
    this.setState({ phone: event.target.value });
    this.setState({ address: event.target.value });
    this.setState({ city: event.target.value });
    this.setState({ state: event.target.value });
    this.setState({ zip: event.target.value });
    this.setState({
      birthdate: event.target.value,
      formattedValue: formattedValue
    });
    this.setState({ ethnicity: event.target.value });
    this.setState({ linkedin: event.target.value });
    this.setState({ github: event.target.value });
    this.setState({ extralink: event.target.value });
    this.setState({ coverletter: event.target.value });
    this.setState({ education: event.target.value });
    this.setState({ collegemajor: event.target.value });
    this.setState({ collegelocation: event.target.value });
    this.setState({ isemployed: event.target.value });
    this.setState({ employer: event.target.value });
    this.setState({ military: event.target.value });
    this.setState({ income: event.target.value });
    this.setState({ laptop: event.target.value });
    this.setState({ whyinterested: event.target.value });
    this.setState({ howheard: event.target.value });
    this.setState({ skilllevel: event.target.value });
  }

  handleSubmit() {
    event.preventDefault();
    this.setState({ redirect: true });
  }

  componentDidUpdate() {
    let hiddenInputElement = document.getElementById("user-birthdate");
    console.log(hiddenInputElement.value);
    console.log(hiddenInputElement.getAttribute("data-formattedvalue"));
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name:</Form.Label>
            <Form.Control type="email" placeholder="Enter full name" />
          </Form.Group>
          <Form.Group controlId="formBasicPhone">
            <Form.Label>Phone:</Form.Label>
            <Form.Control type="phone" placeholder="(XXX) XXX-XXXX" />
          </Form.Group>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control type="street" placeholder="Enter street address" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control as="select">
                <option>Choose...</option>
                <option>CT</option>
                <option>NJ</option>
                <option>NY</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>
          <Form.Group controlId="formBirthday">
            <ControlLabel>Birthdate: </ControlLabel>
            <Datepicker
              id="user-birthdate"
              value={this.state.value}
              onChange={this.handleChange}
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
                  label="Hispanics"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  type="radio"
                  label="African American"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
                <Form.Check
                  type="radio"
                  label="Asian"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios3"
                />
                <Form.Check
                  type="radio"
                  label="Other"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios4"
                />
              </Col>
            </Form.Group>
          </fieldset>
        </Form>
      </div>
    );
  }
}

export default Form;