let initialState = {
    productsList: [
      {_id: '5f1a51f01910080017657ed2', name: 'salamon', 'category': 'food', 'inStock': 963, 'price': 100.99},
      {_id: '5f1a51f71910080017657ed3', name: 'labtop-dell-5550', 'category': 'Electronics', 'inStock': 960, 'price': 500.99},
      {_id: '5f1a51ff1910080017657ed4', name: 'Mouse', 'category': 'Electronics', 'inStock': 976, 'price': 100.99},
     
    ],
    activeProduct: '',
  }
  
  export default function productsReducer(state = initialState, action) {
    const {type, payload} = action;
  
    switch(type) {
      case "ACTIVATED":
        const products = getProducts(payload.category);
        return {...state, products: products}
      default: 
      return state;
    }
  }
  
  export function getProducts(category){
    const products = initialState.productsList;
    const response = products.filter(product => product.category === category);
    return response;
  }
