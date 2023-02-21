import AllergyAdd from "./AllergyAdd";
import AllergyChoice from "./AllergyChoice";
import FirstName from "./FirstName";
import LastName from "./LastName";
import Login from "./Login";
import Password from "./Password";

const Profil = () => {
    return (
        <div>
            <img />

            <Login />
            <Password />
            <LastName />
            <FirstName />
            <AllergyChoice />
            <AllergyAdd />

            <button> Enregistrer </button>
        </div>
    )
};

export default Profil;