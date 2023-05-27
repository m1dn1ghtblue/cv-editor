import React from 'react';

import EditorTabContainer from './EditorTabContainer';
import Preview from './Preview';
import './styles/App.css';
import CV from '../CVdata/CV';
import { CVProvider } from '../CVContext';

function App() {
	return (
		<div className="App">
			<CVProvider value={new CV()}>
				<EditorTabContainer />
				<Preview />
			</CVProvider>
		</div>
	);
}

export default App;
