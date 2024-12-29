import React, { useEffect, useState} from 'react';
import axios from 'axios';

function App() {

  const [message, setMessage] = useState('');

  useEffect(()=>{
    axios.get('http://192.168.1.11:5000/api')
          .then(response => setMessage(response.data.message))
          .catch(error => console.error(error))
  }, []);

  return (
    <div>
        <h1>{message || "Loading..."}</h1>
    </div>
    
  );
}

export default App;
