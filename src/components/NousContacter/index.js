import PropTypes from 'prop-types';
import Page from "../Page";
import Header from "../Header";
import './styles.scss'

const NousContacter = ( {isLogged, isConnected, isDisconnected }) => {
    return (
        <Page>
            <Header isLogged={isLogged} isConnected={isConnected} isDisconnected={isDisconnected}/>
            <div className='nouscontacter'>
                <p className='card'>
                    Nous serions ravis de recevoir vos commentaires, vos suggestions ou vos questions. Si vous avez des questions sur notre site ou sur les informations que nous fournissons, ou si vous souhaitez simplement nous faire part de vos commentaires, veuillez nous envoyer un e-mail directement à l'adresse [InsererUneEmail@gmail.com].
                </p>
            </div>
        </Page>
    )
};

export default NousContacter;