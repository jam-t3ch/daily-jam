import {useAuth0} from '@auth0/auth0-react';
import axios from 'axios';

const GetNotes = async (props) => {
  const { user, isAuthenticated, getIdTokenClaims } = useAuth0()
  if (isAuthenticated) {
    const res = await getIdTokenClaims();
    const jwt = res.__raw;
    console.log(user.email)
    try {
      const config = {
        method: 'get',
        baseURL: process.env.REACT_APP_SERVER,
        url: '/notes',
        headers: { "Authorization": `Bearer ${jwt}` },
        params: {email: user.email}
      };
      console.log(config);
      let results = await axios(config);
      console.log(results);
      if (Array.isArray(results.data)) {
        props.setNotes([results.data])
      }
    } catch (error) {
      console.log('There is an error')
    }
  }
}

export default GetNotes;
