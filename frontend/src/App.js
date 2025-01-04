import React, { useEffect, useState} from 'react';
import axios from 'axios';

function App() {

  const [id, setSenders] = useState('');

  useEffect(()=>{
    axios.get('http://localhost:9000/senders')
          .then(response => setSenders(response.data.id))
          .catch(error => console.error(error))
  }, []);

  return (
    <div>
        <h1>{id || "Loading..."}</h1>
    </div>
    
  );
}

export default App;
