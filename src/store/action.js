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
  
