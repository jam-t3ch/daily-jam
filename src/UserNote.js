import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import NoteModalUpdate from './NoteModalUpdate';


class UserNote extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      noteUpdateModal: false
    }
  }

    showUpdateForm = () => {
      this.setState({
        noteUpdateModal: true
      })
    }

    onHide = () => {
      this.setState({
        noteUpdateModal: false
      })
    }

  render() {

    const note = this.props.note;

    return(

      <li>{note.name} - {note.description}
        <Button
        variant="outline-info"
        className="update-button"
        onClick={() => this.showUpdateForm()}
        >Edit</Button>
        <Button
        variant="outline-danger"
        className="delete-button"
        onClick={() => this.props.deleteNote(note._id)}
        >Delete</Button>
        <Modal show={this.state.noteUpdateModal} onHide={this.onHide}>
          <NoteModalUpdate
          note={this.props.note}
          putNote={this.props.putNote}
          onHide={this.onHide}/>
        </Modal>
      </li>
    )
  }
}

export default UserNote;