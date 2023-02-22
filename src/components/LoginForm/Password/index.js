import PropTypes from 'prop-types';

import { useState } from 'react'

    const Password = (password) => {
    const [Password, setPassword] = useState('');

    const handleChange = (event) => {
        setPassword(event.target.value);
        }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Entrez votre mot de passe</label>
                <input type="Password" placeholder="Mot de Passe" value={Password} onChange={handleChange} /> 
            </form>        
        </div>
    )
};

 //Password.propTypes = {
   // password: PropTypes.string.isRequired
// }

export default Password;