const InscriptionForm = () => {
    return (
        <div>
            <form>
                <input type="text" id="nameInscription" name="Nom de famille"/>

                <input type="text" id="firstnameInscription" name="Prénom"/>

                <input type="text" id="emailInscription" name="Email"/>
                
                <input type="text" id="passwordInscription" name="Mot de passe"/>

                <input type="submit" value="Inscription"/>
            </form>
        </div>
    )
}

export default InscriptionForm;