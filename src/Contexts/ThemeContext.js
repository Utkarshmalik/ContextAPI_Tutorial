import React ,{createContext}  from 'react';

export const ThemeContext= createContext();


class ThemeContextProvider extends React.Component
{

    constructor()
    {
        super();

        this.state={
            isLightTheme:true,
            light:{syntax:'#555' ,bg:'#ddd',ui:'#eee'},
            dark:{syntax:'#ddd', ui:'#333', bg:'#555' }
        }
    }

    onToggleTheme()
    {

        this.setState({isLightTheme:!this.state.isLightTheme});
    }


    render()
    {
        return(
        <ThemeContext.Provider  value={{...this.state,onToggleTheme:this.onToggleTheme.bind(this)}}>
        {this.props.children}
        </ThemeContext.Provider>
       )
    }

}

export default ThemeContextProvider;
