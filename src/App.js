import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CountrySelect from "./component/country-select"
const App = () => {
    return(
        <div>
            <CountrySelect onSelect={(e) => {console.log(e)}}/>
        </div>
    );
};

export default App;