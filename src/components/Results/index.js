import productData from "../../data/MOCK_products.json";


const Results = ({productResult}) => {
  
  return (
    <div>
        <h3>Résultats</h3>
        <ul>
            <li>
              <img src={productResult.product_picture}></img>
              <p>{productResult.name}</p>
              <p>{productResult.category}</p>
              <p>{productResult.brand}</p>
              <p>{productResult.ingredients}</p>
            </li>
        </ul>
    </div>
    )   
};

export default Results;
