import React from 'react';
import {Form, Container, Button} from 'react-bootstrap';

class NoteModalUpdate extends React.Component {

  handleNoteUpdate = (e) => {
    e.preventDefault();
    let editedNote = {
      name: e.target.name.value || this.props.note.name,
      description: e.target.description.value || this.props.note.description,
      user: this.props.note.user,
      _id: this.props.note._id,
      __v: this.props.note.__v
    }
    this.props.putNote(editedNote);
    this.props.onHide();
  }

  render () {
    return (
      <Container>
        <Form onSubmit={this.handleNoteUpdate}>
          <Form.Group>
            <Form.Control name="name" type="text" placeholder={this.props.note.name}/>
          </Form.Group>
          <Form.Group>
            <Form.Control name="description" type="text" placeholder={this.props.note.description}/>
          </Form.Group>
          <Button type="submit">Update Note</Button>
        </Form>
      </Container>
    )
  }
}

export default NoteModalUpdate;