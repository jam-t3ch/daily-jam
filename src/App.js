import React from 'react';
import axios from 'axios';
import NotesDisplay from './NotesDisplay';
import NotesForm from './NotesForm';
import './App.css'; 

const API_SERVER = process.env.REACT_APP_API;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      notes: []
    }
  }

  addNote = async (note) => {
    await axios.post(`${API_SERVER}/notes`, note);
    this.getNotes();
  }

  getNotes = async () => {
    const response = await axios.get(`${API_SERVER}/notes`);
    const notes = response.data;
    this.setState({ notes });
  }

  deleteNote = async (id) => {
    try {
      let url = `${API_SERVER}/notes/${id}`
      await axios.delete(url);
      let updatedNotes = this.state.notes.filter(note => note._id !== id);
      this.setState({
        notes: updatedNotes
      });
    } catch(error) {
      console.log('There is an error')
    }
  }

  async componentDidMount() {
    await this.getNotes();
  }

  render() {
    return (
      <>
        <h1>Your Notes</h1>
        <NotesForm
          handleAddNote={this.addNote}
        />
        <NotesDisplay
          notesList={this.state.notes}
          deleteNote={this.deleteNote}
        />
      </>
    );
  }
}

export default App;
