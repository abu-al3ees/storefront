let initialState = {
    categories: [
      {
        name: 'food',
        display_name: 'Food',
        description: 'Good food make a good mood',
      },
      {
        name: 'electronics',
        display_name: 'Electronics',
        description: 'Making your life easier',
      },
      {
        name: 'clothing',
        display_name: 'Clothing',
        description: 'You are what you wear',
      },
    ],
    activeCategories: {},
  };
  
  const categories = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
      case 'ACTIVE':
        let activeCategories = initialState.categories.find((category)=>category.name === payload);
        // console.log('activeCategories',activeCategories)
        return { categories: initialState.categories, activeCategories};
      default:
        return state;
    }
  };
  
  export default categories;
  
  export function inactive () {
    return {
      type: 'INACTIVE',
    }
  }
  export const active = (name) => {
    return {
      type: 'ACTIVE',
      payload: name,
    };
  };