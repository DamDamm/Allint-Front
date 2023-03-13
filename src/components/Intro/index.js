import { useRef } from 'react';
import Typewriter from 'typewriter-effect';
import './styles.scss';

const Introduction = () => {
  const sectionRef = useRef(null);

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app" id="Intro">
      <div className="introduction__container">
        <div className="introduction__container-catch">
          <h2 className="introduction__catch-title">Allint, l'application qui vous fait gagner du temps.</h2>
          <p className="introduction__catch-text">Nous vous aidons à faire vos courses en vous indiquant les produits que vous pouvez consommer.<br />Renseignez vos allergies, entrez le produit, gagnez du temps.</p>
          <button type="button" onClick={scrollToSection}>Rechercher un produit</button>
        </div>
        <div className="introduction__container-typewriter">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString('Allergies')
                .pauseFor(1000)
                .deleteAll()
                .typeString('Intolérances')
                .pauseFor(1000)
                .deleteAll()
                .typeString('Allint')
                .pauseFor(2000)
                .start();
            }}
            options={{
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="ici" ref={sectionRef} />
    </div>
  );
};

export default Introduction;
