
import React ,{Component} from 'react';
import {ThemeContext} from '../Contexts/ThemeContext';


class ThemeToggle extends Component{

    static contextType=ThemeContext;

    render()
    {

        return (
            <div>
            <button onClick={this.context.onToggleTheme} >
            Toggle the UI
            </button>
            </div>
        )
    }

}

export default ThemeToggle;
