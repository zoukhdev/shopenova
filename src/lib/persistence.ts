// Persistence utilities for Redux store
import { RootState } from './store';
export const loadState = () => {
  // Check if we're on the client side
  if (typeof window === 'undefined') {
    return undefined;
  }
  
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch {
    return undefined;
  }
};

export const saveState = (state: RootState) => {
  // Check if we're on the client side
  if (typeof window === 'undefined') {
    return;
  }
  
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch {
    // Handle errors silently
  }
};
