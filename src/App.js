import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ThemeContextProvider from './Contexts/ThemeContext';
import ThemeToggleButton from './components/ThemeToggle';



function App() {
  return (
    <div className="App">
    <ThemeContextProvider>
      <Navbar />
      <BookList />
      <ThemeToggleButton/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
