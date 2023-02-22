import usersData from 'src/data/MOCK_users.json'

import PropTypes from 'prop-types';
import { useState } from 'react'

    const Login = (
        isLogged
        ) => {
    const [login, setlogin] = useState('');

    const handleChange = (event) => {
        setlogin(event.target.value);
        }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(isEmail(login)){
            console.log('email ok')
        }else {
            console.log('erreur')
        }
    }

    return (
        <div>
            {isLogged ? ( 
            <form className='form' onSubmit={handleSubmit}>
                <label>Entrez votre Email</label>
                <input 
                type ="email" 
                name ="email" 
                placeholder ="Adresse Email" 
                value ={login} 
                onChange ={handleChange} /> 
            </form>
            ) : (console.log('Veuillez entrer un mail'))}  
        </div>
    )
};

Login.propTypes = {
    isLogged: PropTypes.bool
}


export default Login;