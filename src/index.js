import reportWebVitals from './reportWebVitals';
import store from './redux/reduxStore';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter} from 'react-router-dom';
import { Provider } from './storeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
reportWebVitals();

let rerenderDomTree=()=>{
  root.render(
    <BrowserRouter>
      <Provider store={store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Provider>
    </BrowserRouter>
  );
}

rerenderDomTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderDomTree(state);
});
