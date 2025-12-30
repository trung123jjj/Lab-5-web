import React, { useReducer, useEffect } from 'react';

// Initial state
const initialState = {
  status: 'idle', // idle | loading | resolved | rejected
  data: null,
  error: null
};

// Reducer (Finite State Machine)
function userReducer(state, action) {
  switch (action.type) {
    case 'FETCH_INIT':
      if (state.status !== 'idle' && state.status !== 'rejected') {
        return state;
      }
      return {
        status: 'loading',
        data: null,
        error: null
      };

    case 'FETCH_SUCCESS':
      if (state.status !== 'loading') {
        return state;
      }
      return {
        status: 'resolved',
        data: action.payload,
        error: null
      };

    case 'FETCH_FAILURE':
      if (state.status !== 'loading') {
        return state;
      }
      return {
        status: 'rejected',
        data: null,
        error: action.payload
      };

    default:
      return state;
  }
}

export default function UserProfile() {
  const [state, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    dispatch({ type: 'FETCH_INIT' });

    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then((res) => {
        if (!res.ok) throw new Error('Fetch failed');
        return res.json();
      })
      .then((data) =>
        dispatch({ type: 'FETCH_SUCCESS', payload: data })
      )
      .catch((err) =>
        dispatch({ type: 'FETCH_FAILURE', payload: err.message })
      );
  }, []);

  return (
    <div>
      {state.status === 'idle' && <p>Idle...</p>}
      {state.status === 'loading' && <p>Loading...</p>}
      {state.status === 'rejected' && (
        <p style={{ color: 'red' }}>Error: {state.error}</p>
      )}
      {state.status === 'resolved' && (
        <>
          <h2>User Profile</h2>
          <p>Name: {state.data.name}</p>
          <p>Email: {state.data.email}</p>
        </>
      )}
    </div>
  );
}
