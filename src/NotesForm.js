import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';

class NotesForm extends React.Component {

  handleNoteSubmit = (e) => {
    e.preventDefault();
    let newNote = {
      name: e.target.name.value,
      description: e.target.description.value,
      user: `test@email.com`
    }
    this.props.postNote(newNote);
    e.target.name.value = '';
    e.target.description.value = '';

  }

  render() {

    return (
      <Form
        onSubmit={this.handleNoteSubmit}>
        <Card>
          <Card.Header>Don't spread yourself thin. Add a note to yourself to stay organized.</Card.Header>
          <Card.Body>
            <Form.Group>
              <Form.Control type="text" placeholder="Note"  name="name"/>
            </Form.Group>
            <Form.Group>
              <Form.Control type="text" placeholder="Details" name="description"/>
            </Form.Group>
            <Button variant="outline-primary" type="submit">Add Note</Button>
          </Card.Body>
        </Card>
      </Form>
    );
  }
}

export default NotesForm;