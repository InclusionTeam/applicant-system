import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Datepicker from "react-bootstrap-date-picker";

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
      birthday: "",
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
      skilllevel: ""
    };

    // const App = React.createClass({
    //     getInitialState: function(){
    //      var value = new Date().toISOString();
    // }
  }

  render() {
    return (
      <div>
        <Form>
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
          <Form.Group controlId="formBirthday"></Form.Group>
        </Form>
      </div>
    );
  }
}

export default Form;
