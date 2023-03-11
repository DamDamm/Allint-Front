// == Import
import "./styles.scss"

const Results = ({productResult}) => {
  
  return (
    <div className="results__div">
        <h1 className="results__title">Résultats</h1>
        <ul>
            <li className="results__card">
              <img src={productResult.product_picture} className="results__card-img"></img>
              <div>
                <h2 className="results__card-name">{productResult.name}</h2>
                <h3 className="results__card-brand">{productResult.brand}</h3>
              </div>
            </li>
        </ul>
    </div>
    )   
};

export default Results;
