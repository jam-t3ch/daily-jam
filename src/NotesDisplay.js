import React from 'react';
import UserNote from './UserNote';

class NotesDisplay extends React.Component {

  render() {

    return (

      <section>
        <ul>
        {
          this.props.itemsList.map((note, idx) =>
                <UserNote key={note._id} noteData={note} 
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