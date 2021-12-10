import React, { createContext, useContext, useReducer } from "react";
import { Iusers, userData } from "../users";

interface ContextType {
  state: Iusers[];
  useDispatcher: React.Dispatch<action>;
}

const UsersContext = createContext<ContextType>({} as ContextType);

type action =
  | { type: "ADD_USER"; payload: Iusers }
  | { type: "REMOVE_USER"; payload: { id: number } }
  | { type: "UPDATE_USER"; payload: Iusers };

const userReducer = (state: Iusers[], action: action) => {
  switch (action.type) {
    case "ADD_USER": {
      const newState: Iusers[] = [action.payload, ...state];
      return newState;
    }
    case "REMOVE_USER": {
      const newState: Iusers[] = [...state];
      const filtredUser: Iusers[] = newState.filter(
        (user) => user.id !== action.payload.id
      );
      return filtredUser;
    }
    case "UPDATE_USER": {
      const newState: Iusers[] = [];
      // deepclone
      state.map((value) => newState.push({ ...value }));
      const index: number = newState.findIndex((user) => {
        return user.id === action.payload.id;
      });
      // reassign keys
      Object.assign(newState[index], action.payload);
      return newState;
    }
    default:
      return state;
  }
};

export const useUserContext = () => {
  return useContext(UsersContext);
};

export const UsersProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [state, useDispatcher] = useReducer(userReducer, userData);

  return (
    <UsersContext.Provider value={{ state, useDispatcher }}>
      {children}
    </UsersContext.Provider>
  );
};
