import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';

class NotesForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      notes: {}
    };
  }

  handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const notesData = this.state.notesData;
    notesData[field] = value;
    this.setState({ notesData });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddNote(this.state.notesData)
  }

  render() {

    return (
      <Form onSubmit={this.handleSubmit}>
        <Card style={{ width: '18rem' }}>
          <Card.Header>Add a note to yourself.</Card.Header>
          <Card.Body>
            <Form.Group>
              <Form.Label>Note:</Form.Label>
              <Form.Control type="text" placeholder="ex. Pick up kids from school"  name="name" onChange={this.handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Details:</Form.Label>
              <Form.Control type="text" placeholder="3pm, 22 W Highland Dr" name="description" onChange={this.handleChange} />
            </Form.Group>
            <Button variant="dark" type="submit">Add Item</Button>
          </Card.Body>
        </Card>
      </Form>
    );
  }
}

export default NotesForm;