import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';

const defaultState = {
  all: {},
  users: {}, // It should be empty during store init
  pindata: {},
  namedata: {},
  subjdata: {},
  tutdata: {},
  isDataInitialized: false, // You can add additional property to denote, that data is not fetched for the first time
  tutor: 'Tutor',
  subject: 'Subject',
  class: 'Class',
  currentUser: '',
  email: '',
  loggedin: false,
  registeredUser: false,
  registeredUserData: {},
};

function rootReducer(state = defaultState, action) {
  switch (action.type) {
    case 'DATA_INITIALIZED':
      return {
        ...state,
        all: action.all.data,
        users: action.all.data,
        pindata: action.all.data,
        namedata: action.all.data,
        subjdata: action.all.data,
        tutdata: action.all.data,
        isDataInitialized: true,
      };

    case 'REGISTERED_USER':
      return {
        ...state,
        registeredUserData: action.userData.data,
        registeredUser: true,
      };

    case 'CLR':
      return {
        ...state,
        users: state.all,
        tutdata: state.all,
        pindata: state.all,
        namedata: state.all,
        subjdata: state.all,
        subject: 'Subject',
        class: 'Class',
        tutor: 'Tutor',
      };

    case 'PIN':
      const newArray0 = state.all.filter(
        user => user.pin.toString() === action.pin
      );
      return {
        ...state,
        pindata: newArray0,
        tutdata: newArray0,
        namedata: newArray0,
        subjdata: newArray0,
        users: newArray0,
        subject: 'Subject',
        tutor: 'Tutor',
        class: 'Class',
      };

    case 'NAME':
      const newArray5 = state.pindata.filter(user =>
        user.username.toLowerCase().includes(action.username.toLowerCase())
      );
      return {
        ...state,
        namedata: newArray5,
        tutdata: newArray5,
        users: newArray5,
        subjdata: newArray5,
        subject: 'Subject',
        tutor: 'Tutor',
        class: 'Class',
      };

    case 'ALLTUT':
      return {
        ...state,
        users: state.namedata,
        subjdata: state.namedata,
        tutdata: state.namedata,
        subject: 'Subject',
        tutor: 'All',
        class: 'Class',
      };
    case 'HOME':
      const newArray6 = state.namedata.filter(
        user => user.tutor === 'Home Tutor'
      );
      return {
        ...state,
        subjdata: newArray6,
        tutdata: newArray6,
        users: newArray6,
        tutor: 'Home',
        subject: 'Subject',
        class: 'Class',
      };
    case 'EXE':
      const newArray7 = state.namedata.filter(
        user => user.tutor === 'External Tutor'
      );
      return {
        ...state,
        subjdata: newArray7,
        tutdata: newArray7,
        users: newArray7,
        tutor: 'External',
        subject: 'Subject',
        class: 'Class',
      };

    case 'ALLSUB':
      return {
        ...state,
        users: state.tutdata,
        subjdata: state.tutdata,
        tutdata: state.tutdata,
        subject: 'All',
        class: 'Class',
      };
    case 'PHY':
      const newArray1 = state.tutdata.filter(
        user => user.subject === 'physics'
      );
      return {
        ...state,
        subjdata: newArray1,
        users: newArray1,
        subject: 'Physics',
        class: 'Class',
      };
    case 'CHE':
      const newArray2 = state.tutdata.filter(
        user => user.subject === 'chemistry'
      );
      return {
        ...state,
        subjdata: newArray2,
        users: newArray2,
        subject: 'Chemistry',
        class: 'Class',
      };
    case 'MAT':
      const newArray3 = state.tutdata.filter(
        user => user.subject === 'mathematics'
      );
      return {
        ...state,
        subjdata: newArray3,
        users: newArray3,
        subject: 'Maths',
        class: 'Class',
      };

    case 'ALLCLS':
      return {
        ...state,
        users: state.subjdata,
        class: 'All',
      };

    case 'C9':
    case 'C10':
    case 'C11':
    case 'C12':
      const newArray4 = state.subjdata.filter(user => {
        const b1 = user.class1
          ? user.class1.toString() === action.type.slice(1)
          : false;
        const b2 = user.class2
          ? user.class2.toString() === action.type.slice(1)
          : false;
        const b3 = user.class3
          ? user.class3.toString() === action.type.slice(1)
          : false;
        const b4 = user.class4
          ? user.class4.toString() === action.type.slice(1)
          : false;
        return b1 || b2 || b3 || b4;
      });
      return {
        ...state,
        users: newArray4,
        class: action.type.slice(1),
      };

    case 'LOGIN':
      return {
        ...state,
        loggedin: true,
        email: action.data.email,
        currentUser: action.data.name,
      };

    case 'LOGOUT':
      return {
        ...state,
        loggedin: false,
        email: '',
        currentUser: '',
      };

    default:
      return state;
  }
}

export const getInitalData = () => async dispatch => {
  try {
    let all = await axios.get('/users/');
    // You're dispatching not only the metadata, but also setting isDataInitialized to true, to denote, that data has been loaded
    dispatch({ type: 'DATA_INITIALIZED', all, isDataInitialized: true });
  } catch (error) {
    console.log(error);
  }
};

export const getregisteredUserData = data => async dispatch => {
  try {
    dispatch({ type: 'LOGIN', data });
    let userData = await axios.get(`/users/${data.email}`);
    if (userData.data !== null) {
      dispatch({ type: 'REGISTERED_USER', userData, registeredUser: true });
    }
  } catch (error) {
    console.log(error);
  }
};

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
