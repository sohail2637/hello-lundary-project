import logo from './logo.svg';
import './App.css';
import Main from './Main';
import { Provider } from "react-redux";
import Store from './redux/Store';


function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <Main />
      </Provider>
    </div>
  );
}

export default App;
