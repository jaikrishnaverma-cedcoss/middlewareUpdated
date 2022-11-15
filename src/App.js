import './App.css';
import Main from './component/Main';
import { Provider } from 'react-redux'
import store from './component/redux/store';
function App() {
  return (
    <Provider store={store}>
  <Main/>
  </Provider>
  );
}

export default App;
