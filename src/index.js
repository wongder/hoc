import React from 'react';
import { render } from 'react-dom';

const Hello = ({ name, title }) => <h1>Hello {title} {name}!</h1>;

// Wrap component by taking it in as argument WrappedComponent
function simpleHOC(WrappedComponent) {
	// And return a new anonymous component
	return class extends React.Component {
		render() {
			return <WrappedComponent {...this.props}/>;
		}
	}
}

const NewComponent = simpleHOC(Hello);

const App = () =>
	<div>
		<NewComponent name="CodeSandbox" title="Butler"/>
	</div>;

render(<App />, document.getElementById('root'));
