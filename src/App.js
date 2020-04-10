import React from 'react';

// Creating element using React.Component
class App extends React.Component {

    render () {
        return (
            // Creating element using React.createElement
            React.createElement("div",null, <h1>Hallo world (React.CreateElement)</h1>, <PureComp/>, <FuncComp />) 
        )
    }
}

// Creating element using React.PureComponent
class PureComp extends React.PureComponent {

    render() {
        return (
            <div>
                <h1>Hallo world (React.PureComponent)</h1>
            </div>
        )
    }
}

// Creating element using functional component
const FuncComp = (props) => {
    return (
        <h1>Hallo world (FunctionalComponent)</h1>
    )
}


export default App;