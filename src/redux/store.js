import { configureStore } from "@reduxjs/toolkit";
import { SliceReducers } from "./contactsSlice";
import { filterReducers } from "./filtersSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "contacts",
  version: 1,
  storage,
};

 
const persistedContactsReducer = persistReducer(persistConfig, SliceReducers);



export const store = configureStore({
    reducer: {
        iteams: persistedContactsReducer,
        filters: filterReducers,
    },
     middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})




export const persistor = persistStore(store);





