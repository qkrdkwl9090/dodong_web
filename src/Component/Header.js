import React, {useState} from 'react';
import '../Scss/Header.scss';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

function Header(){
//     const [state, setState] = useState({
//         checked: true,
//       });
      
//   const handleChange = (event) => {
//       console.log(state.checked);
//     setState({ ...state, [event.target.name]: event.target.checked });
//   };
    return (
        <header>
            <div className="headerContent">
                <a href="/"><div className = "title">DoDong</div></a>
                <div className = "menu">                
                    <a href="/Intro"><div>Intro</div></a>                    
                    <a href="https://github.com/qkrdkwl9090"><div>Git</div></a>                  
                    <a href="https://blog.naver.com/qkrdkwl9090"><div>Blog</div></a>    
                </div>
                {/* <div className="darkMode">
                    <FormControlLabel
                        control={<Switch checked={state.checked} onChange={handleChange} color="primary"name="checked" />}
                        label="Mode"
                    />
                </div> */}

            </div>
        </header>

    )
}
export default Header;