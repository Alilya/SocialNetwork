import reportWebVitals from './reportWebVitals';
import store from './redux/reduxStore';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

reportWebVitals();

let rerenderDomTree=()=>{
  root.render(
    <BrowserRouter>
    <React.StrictMode>
      <App

        store={store}
      />
    </React.StrictMode>
    </BrowserRouter>
  );
}
rerenderDomTree(store.getState());
store.subscribe(() => {
  let state = store.getState();
  rerenderDomTree(state);
});
