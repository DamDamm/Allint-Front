// == Import
import "./styles.scss"

const Results = async ({productResult, setProductResult}) => {
  return (
    <div>
        <h1 className="results__title">Résultats</h1>
        <ul>
        {await Promise.all(productResult.map(el => { // error "productResult.map is not a function"
            <li className="results__card">
              <img src={el.product_picture} className="results__card-img"></img>
              <div>
                <h2 className="results__card-name">{el.name}</h2>
                <h3 className="results__card-brand">{el.brand}</h3>
              </div>
            </li>
        }))} 
        </ul>
    </div>
    )};

export default Results;
