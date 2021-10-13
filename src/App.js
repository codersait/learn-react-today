import React, { useState } from 'react'
import Counter from "./Counter";
import CounterHooks from "./CounterHooks";
export const ThemeContext = React.createContext()

function App() {
  console.log('App Rendered');
  const [theme, setTheme] = useState('red')
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      Counter
      <Counter initialCount={100} />
      Counter Hooks
      <CounterHooks initialCount={10} />
      <button onClick={() => setTheme(prevTheme => {
        return prevTheme === 'red' ? 'tomato' : 'red'
      })}>Toggle Theme</button>
    </ThemeContext.Provider>
  );
}

export default App;
