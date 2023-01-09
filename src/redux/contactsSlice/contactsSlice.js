import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { fetchContacts, addContact, deleteContact } from 'redux/operations';

const { createSlice } = require('@reduxjs/toolkit');

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialStateContacts = {
  contacts: [],
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialStateContacts,
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts.push(action.payload);
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contacts.splice(index, 1);
    },
  },
});

//  reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(incrementBy, (state, action) => {
//         // action is inferred correctly here if using TS
//       })
//       // You can chain calls, or have separate `builder.addCase()` lines each time
//       .addCase(decrement, (state, action) => {})
//       // You can match a range of action types
//       .addMatcher(
//         isRejectedAction,
//         // `action` will be inferred as a RejectedAction due to isRejectedAction being defined as a type guard
//         (state, action) => {}
//       )
//       // and provide a default case if no other handlers matched
//       .addDefaultCase((state, action) => {})
//   },

const persistConfig = {
  key: 'contacts',
  storage,
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);