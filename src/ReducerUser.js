import React from "react";
import { createAction } from "redux-actions";
const SET_USER = "SET_USER";
export const setUser = (payload) => {
  return {
    type: SET_USER,
    payload,
  };
};

const initialState = [];

const ReducerUser = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return [...state, action.payload]

    default:
      return state;
  }
};

export default ReducerUser;
