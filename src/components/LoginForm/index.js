import usersData from 'src/data/MOCK_users.json'
import Login from "./Login";
import Password from "./Password";

const LoginForm = () => {
    return (
        <div>
                <Login />
                
                <Password/>

                <input type="submit" value="Connexion"/>
        </div>
    )
}



export default LoginForm;