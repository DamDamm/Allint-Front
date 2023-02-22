const LoginForm = () => {
    return (
        <div>
            <form>
                <input type="text" id="emailLogin" name="Email"/>
                
                <input type="text" id="passwordLogin" name="Mot de passe"/>

                <input type="submit" value="Connexion"/>
            </form>
        </div>
    )
}

export default LoginForm;