import reportWebVitals from './reportWebVitals';
import {rerenderDomTree} from './render';
import state from './redux/state';

rerenderDomTree(state);
reportWebVitals();
