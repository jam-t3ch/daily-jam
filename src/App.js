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
      notes: [],
      weather: null
    }
  }

  postNote = async (newNote) => {
    try {
      let url = `${API_SERVER}/notes`
      let createdNote = await axios.post(url, newNote);
      console.log(createdNote.data);
      this.setState({
        notes: [...this.state.notes, createdNote.data]
      })
    } catch(error) {
      console.log('There is an error')
    }
  }

  getNotes = async () => {
    try {
      let results = await axios.get(`${API_SERVER}/notes`);
      console.log(results);
      if (Array.isArray(results)) {
      this.setState({
        notes: results.data
      })
    }
    } catch(error) {
      console.log('There is an error')
    }
  }

  deleteNote = async (id) => {
    try {
      let url = `${API_SERVER}/notes/${id}`;
      await axios.delete(url);
      let updatedNotes = this.state.notes.filter(note => note._id !== id);
      this.setState({
        notes: updatedNotes
      });
    } catch (error) {
      console.log('There is an error')
    }
  }


  putNote = async (noteToUpdate) => {
    try {
      let url = `${API_SERVER}/notes/${noteToUpdate._id}`;
      let updatedNote = await axios.put(url, noteToUpdate);
      let updatedNoteData = this.state.notes.map(currentNote => {
        return currentNote._id === noteToUpdate._id
        ? updatedNote.data
        : currentNote;
      });
      this.setState({notes: updatedNoteData});
    } catch(error) {
      console.log('There is an error');
    }
  }



  componentDidMount() {
    this.getNotes();


  // GETTING WEATHER INFO FROM MAIN.JS CHILD ******************
  locationObtained = (locationEntered) => {
    this.setState({ location: locationEntered })
  }
  weatherObtained = (weatherRetrieved) => {
    this.setState({ weather: weatherRetrieved })

  }

  render() {
    // console.log('App.js location state', this.state.location);
    // console.log('App.js weather state', this.state.weather);

    return (
      <>

        <Header
          weather={this.state.weather}
          location={this.state.location}
        />

        <NotesForm
          postNote={this.postNote}/>
            
        <NotesDisplay
          notes={this.state.notes}
          deleteNote={this.deleteNote}
          putNote={this.putNote}/>
       
        <Main
          locationObtained={this.locationObtained}
          weatherObtained={this.weatherObtained}
        />


        <Footer />

      </>
    )
  }
}

export default withAuth0(App);
