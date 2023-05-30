import React from 'react';

import EditorTabContainer from './EditorTabContainer';
import './styles/App.css';
import { CVProvider } from '../CVContext';
import PreviewContainer from './PreviewContainer';

function App() {
	return (
		<div className="App">
			<CVProvider>
				<EditorTabContainer />
				<PreviewContainer />
			</CVProvider>
		</div>
	);
}

export default App;
