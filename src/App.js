import { useRef, useState } from 'react';
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
  const hasBeenFetched = useRef(false)
  const [notes, setNotes] = useState([])
  const [location, setLocation] = useState(null)
  const [weather, setWeather] = useState(null)
  const [news, setNews] = useState(null)
  const { user, isAuthenticated, getIdTokenClaims } = useAuth0()

  const postNote = async (newNote) => {
    if (isAuthenticated) {
      const res = await getIdTokenClaims();
      const jwt = res.__raw;
      try {
        const config = {
          headers: { "Authorization": `Bearer ${jwt}` },
        };
        let url = `${API_SERVER}/notes`
        let createdNote = await axios.post(url, newNote, config);
        setNotes([...notes, createdNote.data])
      } catch (error) {
        console.log('There is an error')
      }
    }
  }

  const getNotes = async () => {
    if (isAuthenticated) {
      const res = await getIdTokenClaims();
      const jwt = res.__raw;
      try {
        const config = {
          method: 'get',
          baseURL: process.env.REACT_APP_SERVER,
          url: '/notes',
          headers: { "Authorization": `Bearer ${jwt}` },
          params: { email: user.email }
        };
        let results = await axios(config);
        if (results.data && !hasBeenFetched.current) {
          setNotes(results.data)
          hasBeenFetched.current = true;
        }
      } catch (error) {
        console.log('There is an error')
      }
    }
  }

  const deleteNote = async (id) => {
    if (isAuthenticated) {
      const res = await getIdTokenClaims();
      const jwt = res.__raw;
      try {
        const config = {
          headers: { "Authorization": `Bearer ${jwt}` },
        };
        let url = `${API_SERVER}/notes/${id}`;
        await axios.delete(url, config);
        let updatedNotes = notes.filter(note => note._id !== id);
        setNotes(updatedNotes);
      } catch (error) {
        console.log('There is an error')
      }
    }
  }


  const putNote = async (noteToUpdate) => {
    if (isAuthenticated) {
      const res = await getIdTokenClaims();
      const jwt = res.__raw;
      try {
        const config = {
          headers: { "Authorization": `Bearer ${jwt}` },
        };
        let url = `${API_SERVER}/notes/${noteToUpdate._id}`;
        let updatedNote = await axios.put(url, noteToUpdate, config);
        let updatedNoteData = notes.map(currentNote => {
          return currentNote._id === noteToUpdate._id
            ? updatedNote.data
            : currentNote;
        });
        setNotes(updatedNoteData);
      } catch (error) {
        console.log('There is an error')
      }
    }
  }

  getNotes();

  const getNews = async (city) => {
    try {
      let news = await axios.get(`${API_SERVER}/news?search=${city}&locale=us`)
      let useableNews = news.data;
      setNews(useableNews);
    } catch {
      console.log('There is an error')
    }
  }


  // GETTING WEATHER INFO FROM MAIN.JS CHILD ******************
  const locationObtained = (locationEntered) => {
    setLocation(locationEntered)
  }
  const weatherObtained = (retrievedWeather) => {
    setWeather(retrievedWeather)
  }

  return (
    <>

      <Header
        weather={weather}
        location={location}
        news={news}
      />

      <NotesForm
        postNote={(something) => postNote(something)}
        user={user}
      />

      {isAuthenticated

        ?
        <NotesDisplay
          notes={notes}
          deleteNote={(something) => deleteNote(something)}
          putNote={(something) => putNote(something)} />
        :
        null}

      <Main
        locationObtained={(something) => locationObtained(something)}
        weatherObtained={(retrievedWeather) => weatherObtained(retrievedWeather)}
        getNews={(city) => getNews(city)}
      />

      <Footer />

    </>
  )
}

export default withAuth0(App);
