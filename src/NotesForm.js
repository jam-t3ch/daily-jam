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
        <Card>
          <Card.Header>Don't spread yourself thin. Add a note to yourself to stay organized.</Card.Header>
          <Card.Body>
            <Form.Group>
              <Form.Control type="text" placeholder="Note"  name="name" onChange={this.handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Control type="text" placeholder="Details" name="description" onChange={this.handleChange} />
            </Form.Group>
            <Button variant="outline-primary" type="submit">Add Note</Button>
          </Card.Body>
        </Card>
      </Form>
    );
  }
}

export default NotesForm;