import React, {useState} from 'react';
import '../Scss/Header.scss';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import {Route,Link} from 'react-router-dom';

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
                <Link to="/"><div className = "title">DoDong</div></Link>
                <div className = "menu">                
                    <Link to ="/Intro"><div>Intro</div></Link>                    
                    <a href="https://github.com/qkrdkwl9090" target="_blank"><div>Git</div></a>                  
                    <a href="https://blog.naver.com/qkrdkwl9090" target="_blank"><div>Blog</div></a>    
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