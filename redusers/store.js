import {createStore} from 'redux'

import modalReduser from './modalReduser'


export const store = createStore(modalReduser, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__())


