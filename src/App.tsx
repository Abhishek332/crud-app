import React, { useEffect } from 'react';
import { API } from './api';

const App = () => {

  //just testing API for resolving CORS issue
  useEffect(() => {
    API.post('/register', {
      first_name: "Dishant",
      last_name: "Mehta",
      email: "dishant.1712@gmail.com",
      password: "hello@3#",
      mobile: "7600015802",
    }).then(res => console.log("data : ", res)).catch(error => console.log("Error : ", error));
  }, []);



  return (
    <div>App</div>
  )
}

export default App