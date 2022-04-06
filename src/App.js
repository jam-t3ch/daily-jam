import {useState} from 'react';
import axios from 'axios';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import NotesForm from './NotesForm';
import NotesDisplay from './NotesDisplay';
import './App.css';
import { withAuth0, useAuth0 } from '@auth0/auth0-react';

const API_SERVER = process.env.REACT_APP_SERVER;

const App = () => {
  const [email, setEmail] = useState(null)
  const [notes, setNotes] = useState([])
  const [location, setLocation] = useState('Seattle')
  const [weather, setWeather] = useState(null)
  const {user, isAuthenticated, getIdTokenClaims } = useAuth0()
  
  
  getIdTokenClaims().then(async (res) => {
  let jwt = res.__raw
  console.log(jwt)
  axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`
})


 const postNote = async (newNote) => {
    try {
      let url = `${API_SERVER}/notes`
      let createdNote = await axios.post(url, newNote);
      console.log(createdNote.data);
      setNotes([...notes, createdNote.data])
    } catch(error) {
      console.log('There is an error')
    }
  }

 const getNotes = async () => {
    try {
      let results = await axios.get(`${API_SERVER}/notes`);
      console.log(results);
      if (Array.isArray(results)) {
      setNotes(results.data)
    }
    } catch(error) {
      console.log('There is an error')
    }
  }

 const deleteNote = async (id) => {
    try {
      let url = `${API_SERVER}/notes/${id}`;
      await axios.delete(url);
      let updatedNotes = notes.filter(note => note._id !== id);
      setNotes(updatedNotes);
    } catch (error) {
      console.log('There is an error')
    }
  }


 const putNote = async (noteToUpdate) => {
    try {
      let url = `${API_SERVER}/notes/${noteToUpdate._id}`;
      let updatedNote = await axios.put(url, noteToUpdate);
      let updatedNoteData = notes.map(currentNote => {
        return currentNote._id === noteToUpdate._id
        ? updatedNote.data
        : currentNote;
      });
      setNotes(updatedNoteData);
    } catch(error) {
      console.log('There is an error');
    }
  }

getNotes();



  // GETTING WEATHER INFO FROM MAIN.JS CHILD ******************
  const locationObtained = (locationEntered) => {
    setLocation(locationEntered)
  }
  const weatherObtained = (weatherRetrieved) => {
    setWeather(weatherRetrieved)

  }

    return (
      <>

        <Header
          weather={weather}
          location={location}
        />

        <NotesForm
          postNote={()=>postNote()}/>
            
        <NotesDisplay
          notes={notes}
          deleteNote={()=>deleteNote()}
          putNote={()=>putNote()}/>
       
        <Main
          locationObtained={()=>locationObtained()}
          weatherObtained={()=>weatherObtained()}
        />


        <Footer />

      </>
    )
  }


export default withAuth0(App);
