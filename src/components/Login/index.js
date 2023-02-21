import LoginForm from './LoginForm'
import InscriptionForm from './InscriptionForm'

const Login = () => {
    return(
    <div>
        <div>
            <h3>Se connecter</h3>
            <LoginForm />
        </div>

        <div>
            <h3>S'inscrire</h3>
            <InscriptionForm />
        </div>
    </div>
    )   
};

export default Login;