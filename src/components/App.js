import React, { Component } from 'react';

import EditorTabContainer from './EditorTabContainer';
import Preview from './Preview';
import './styles/App.css';
import CV from '../CVdata/CV';

class App extends Component {
	state = {
		cv: new CV(),
	};

	render() {
		return (
			<div className="App">
				<EditorTabContainer></EditorTabContainer>
				<Preview cv={this.state.cv}></Preview>
			</div>
		);
	}
}

export default App;
