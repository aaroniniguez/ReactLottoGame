import React from 'react';
import './App.css';
import Lotto from './Lotto';
import WiseSquare from './WiseSquare';
import Flag from './Flag';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
export const ThemeContext = React.createContext('dark');


function App() {
  return (
    <div className="App">
		<ThemeContext.Provider value="dark">
			<Flag />
			<ClickCounter/>
			<HoverCounter/>
			<WiseSquare />
			<Lotto title="Lotto" balls={4}/>
			<Lotto title="Mini Daily" balls={3}/>
			<Lotto balls={3}/>
		</ThemeContext.Provider>
    </div>
  );
}

export default App;
