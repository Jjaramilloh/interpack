import './App.css';
//importamos los componenetes
import CompShowsenders from "./Components/senders/CompShowsenders";
import CreateSender from './Components/senders/CreateSenders';
import EditSender from './Components/senders/EditSenders';
import ExampleComponent from './Components/senders/prueba';

//importamos el router
import { BrowserRouter,Route ,Routes } from 'react-router-dom'

function App() {


  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path ='/' element= {<CompShowsenders/>}/>
            <Route path='/create' element= {<CreateSender/>}/>
            <Route path='/edit/:id' element= {<EditSender/>}/>
            <Route path='/prueba' element= {<ExampleComponent/>}/>
          </Routes>
        
        </BrowserRouter>
    </div>
    
  );
}

export default App;
