
import superagent from 'superagent';
 const api = 'https://run.mocky.io/v3/86db0ece-4dea-44d6-9913-3fd9c13b03aa';

export const getRemoteData = function (api) {
  console.log('step 2: actions first', api);
  return (dispatch) => {
    console.log('step 3: actions second', dispatch);
    return superagent
      .get(api)
      .then((res) => {
        console.log('step 4: actions third', res.body.products);
        dispatch(getProducts({ results: res.body.products }));
      })
      .catch((e) => {
        console.log('error', e.message);
      });
  };
};


export const getProducts = (products) => {
  console.log('step 5: products action', products);
  return {
    type: 'GET',
    payload: products,
  };
};






export const active = (name) => {
    return {
      type: 'ACTIVE',
      payload: name,
    };
  };
  
  export const increment = (product) => {
    return {
      type: 'INCREMENT',
      payload: product,
    };
  };
  
