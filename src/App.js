import React from 'react';
import axios from 'axios';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import NotesForm from './NotesForm';
import NotesDisplay from './NotesDisplay';
import './App.css';
import { withAuth0 } from '@auth0/auth0-react';

const API_SERVER = process.env.REACT_APP_SERVER;

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: null,
      location: "seattle",
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

        <Header />
        <NotesForm
          handleAddNote={this.addNote}/>
        <NotesDisplay
          notesList={this.state.notes}
          deleteNote={this.deleteNote}/>
        <Main />
        <Footer />

      </>
    )
  }
}

export default withAuth0(App);
