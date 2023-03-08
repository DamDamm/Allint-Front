import productData from '../../../data/MOCK_products.json';

const CategoryInput = ({handleChange, product}) => {
    return (

        <div>
            <label>Categories</label>
            <select value={product} onChange={handleChange} className='search__form_product-select'>
                {productData.map(el => {
                  return(
                    <option key={el.category}>{el.category}</option> // issue : creates multiple options of same category
                  )})}
                </select>
        </div>
    )
};

export default CategoryInput;
