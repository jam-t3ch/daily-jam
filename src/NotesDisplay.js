import React from 'react';
import UserNote from './UserNote';
import './NotesDisplay.css';

class NotesDisplay extends React.Component {

  render() {

    return (

      <section>
        <ul>
          <li>Pick up kids from school - 22 W. Hawthorne Ave</li>
          <li>MarioKart Tournament - Saturday @ 8pm</li>
        {
          this.props.notesList.map((note) =>
            <UserNote
            key={note._id}
            noteData={note} 
            deleteNote={this.props.deleteNote}
            />
          )
        }
        </ul>
      </section>
    );
  }
}

export default NotesDisplay;