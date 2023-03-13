// == Import
import './styles.scss';
import Divider from '@mui/material/Divider';

const Results = ({ productResult }) => (

  <div className="results__div">
    <Divider>Résultats</Divider>
    <ul>
      <li className="results__card">
        <img src={productResult.product_picture} className="results__card-img" />
        <div>
          <h2 className="results__card-name">{productResult.name}</h2>
          <h3 className="results__card-brand">{productResult.brand}</h3>
        </div>
      </li>
    </ul>
  </div>
);

export default Results;
