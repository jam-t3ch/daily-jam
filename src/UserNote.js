import React from 'react';

class UserNote extends React.Component {

  render() {

    const noteData = this.props.noteData;

    return(

      <li>{noteData.name} - {noteData.description}</li>
    )
  }
}

export default UserNote;