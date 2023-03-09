import { useRef } from 'react';
import Typewriter from 'typewriter-effect';
import './styles.scss';

const Introduction = () => {
  const sectionRef = useRef(null);

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="introduction__container">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString('Allergiques')
            .pauseFor(1000)
            .deleteAll()
            .typeString('Intolérants')
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
      <div className="container">
        <h2>Nous vous aidons à faire vos courses en triant les produits que vous pouvez consommer</h2>
        <p>renseignez vos allergies, entrez le produit, triez</p>
        <button type="button" onClick={scrollToSection}>Testez la recherche</button>
        <div className="ici" ref={sectionRef}>
          <h2>Section</h2>
          <p>Contenu de la section</p>
        </div>
      </div>

    </div>
  );
};

export default Introduction;
