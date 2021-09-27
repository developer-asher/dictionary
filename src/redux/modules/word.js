import { db } from '../../firebase';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';

const LOADING = 'word/LOADING';
const LOAD = 'word/LOAD';
const CREATE = 'word/CREATE';

const initialState = {
  is_loading: true,
  list: [],
};

export const isLoading = (loading) => {
  return { type: LOADING, loading };
};

export const loadWord = (word_list) => {
  return { type: LOAD, word_list };
};

export const createWord = (word_list) => {
  return { type: CREATE, word_list };
};

export const loadWordFB = () => {
  return async function (dispatch) {
    const query = await getDocs(collection(db, 'word'));
    let word_list = [];

    query.forEach((doc) => {
      word_list.push({ id: doc.id, ...doc.data() });
    });

    dispatch(loadWord(word_list));
  };
};

export const createWordFB = (word_obj) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, 'word'), word_obj);
    const word_list = { id: docRef.id, ...word_obj };

    dispatch(createWord(word_list));
  };
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'word/LOADING':
      return { ...state, is_loading: action.loading };

    case 'word/LOAD':
      return { ...state.is_loading, list: action.word_list };

    case 'word/CREATE':
      const word_list = [...state.list, action.word_list];

      return { ...state, list: word_list };

    default:
      return state;
  }
}
