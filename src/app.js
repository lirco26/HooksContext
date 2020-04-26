import React from "react";
import './test.css';
import ShoppingList from "./ShoppingList";

class App extends React.Component {
    render() {
        return <div>
            <h1>Welcome! Let's shop!</h1>
            <ShoppingList/>
        </div>;
    }
}

export default App;
