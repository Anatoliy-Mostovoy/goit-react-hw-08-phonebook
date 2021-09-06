// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions';

const contactsReducer = createReducer([], {
  [actions.fetchContactSuccess]: (_, action) => {
    return action.payload;
  },
  [actions.addContactSuccess]: (state, action) => {
    // if (
    //   state.find(
    //     state => state.name.toLowerCase() === action.payload.name.toLowerCase(),
    //   )
    // ) {
    //   toast.error('Hey, this name always here!');
    //   return [...state];
    // }
    return [...state, action.payload];
  },

  [actions.deleteContactSuccess]: (state, action) => {
    return state.filter(state => state.id !== action.payload);
  },
});

const filterReducer = createReducer('', {
  [actions.changeFilterValue]: (_, action) => {
    return action.payload;
  },
});

// eslint-disable-next-line import/no-anonymous-default-export
export default { contactsReducer, filterReducer };

// import actionTypes from './contacts-types';
// const contacts = [];
// const contactsReducer = (state = contacts, action) => {
//   switch (action.type) {
// case actionTypes.SUBMIT:
//   if (
//     state.find(
//       state =>
//         state.name.toLowerCase() === action.payload.name.toLowerCase(),
//     )
//   ) {
//     toast.error('Hey, this name always here!');
//     return [...state];
//   }
//   return [...state, action.payload];

//     case actionTypes.DELETE:
//       return state.filter(state => state.id !== action.payload);

//     default:
//       return state;
//   }
// };

// const filter = '';

// const filterReducer = (state = filter, action) => {
//   switch (action.type) {
//     case actionTypes.FILTER:
//       return action.payload;
//     default:
//       return state;
//   }
// };
