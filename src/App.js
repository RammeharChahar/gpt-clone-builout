import './App.css';
import MainChatArea from './Components/MainChatArea';
import PastConversation from './Components/PastConversation';
import { MyContextProvider } from './Components/MyContext';
import {Routes,Route} from 'react-router-dom'
import MainContainer from './Components/MainContainer';
import AllConversations from './Components/AllConversations';

function App() {
  return (
    <MyContextProvider>
      <Routes>
        <Route path='/' element={<MainContainer />}>
        <Route path='' element={<MainChatArea />}>
          </Route>
        <Route path='allConversations' element={<AllConversations />}>
          </Route>
        </Route>
      </Routes>
    </MyContextProvider>
  );
}

export default App;
