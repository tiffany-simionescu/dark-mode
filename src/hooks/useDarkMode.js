import {useState} from 'react';
import {useLocalStorage} from './useLocalStorage';

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage()
}

// Start at bullet point #5