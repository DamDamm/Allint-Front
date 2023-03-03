import Header from "../Header";
import Search from "../Search";
import Result from "../Results";

//On n'oublie pas de destructurer les props pour les utiliser
const Home = ({product, setProduct, productResult, setProductResult}) => {
  return (
    <div>

      <Header />

      <Search product={product}
          setProduct={setProduct}
          productResult={productResult}
          setProductResult={setProductResult}/>

      <Result productResult={productResult} />

    </div>
  );
};
  
  export default Home;