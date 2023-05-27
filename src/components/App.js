import React from 'react';

import EditorTabContainer from './EditorTabContainer';
import Preview from './Preview';
import './styles/App.css';
import { CVProvider } from '../CVContext';

function App() {
	return (
		<div className="App">
			<CVProvider>
				<EditorTabContainer />
				<Preview />
			</CVProvider>
		</div>
	);
}

export default App;
