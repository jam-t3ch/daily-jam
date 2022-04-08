import React from 'react';
import UserNote from './UserNote';
import './NotesDisplay.css';

class NotesDisplay extends React.Component {

  render() {
    let eachUserNote = this.props.notes.map(note => {

      return (
        <UserNote
        key={note._id}
        note={note} 
        deleteNote={this.props.deleteNote}
        putNote={this.props.putNote}
        />
      )
    })
    
    // console.log(this.props.notes);
    return (
      
      <>
      {this.props.notes ? (
        <ul
        className="user-notes-display">
          {eachUserNote}
        </ul>
      ) : ('')}
      </>
    );
  }
}

export default NotesDisplay;