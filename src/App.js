
import { Provider } from 'react-redux';
import './App.css';
import Body from './component/Body';
import Head from './component/Head';

import store from './utils/store';

function App() {
  return (
    <Provider store ={store}>
    <div className="App">
      
      <Head/>
      <Body/>
  
    
  
    </div>
    </Provider>
  );
}

export default App;
