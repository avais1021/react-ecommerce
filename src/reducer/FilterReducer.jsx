const FilterReducer = (state, action) => {

    // console.log(state, 'state');

    switch (action.type) {

        case 'LOAD_FILTER_PRODUCT':

            //Price slider filter section
            let priceArr = action.payload.map((ele) => {
                return ele.price
            });
            console.log(priceArr, 'priceArr');

            // how to get big price 

            // 1.
            // let maxPrice = Math.max.apply(null , priceArr);
            // console.log( maxPrice , 'maxPrice')

            // 2.
            // let maxPrice = priceArr.reduce( (initialVal,ele)=>Math.max(initialVal , ele) , 0 )
            // console.log(maxPrice,'maxPrice');

            // 3


            let maxPrice = Math.max(...priceArr);
            console.log(maxPrice, 'maxPrice')


            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
                filter: {
                    ...state.filter,
                    maxPrice: maxPrice,
                    price: maxPrice,
                }
            }

        case 'SET_GRIDVIEW':
            return {
                ...state,
                grid_view: true,
            }

        case 'SET_LISTVIEW':
            return {
                ...state,
                grid_view: false,
            }
        case 'GET_SORT_VALUE':
            // let userSortValue = document.getElementById('sort');
            // let sortValue = userSortValue.options[userSortValue.selectedIndex].value;
            // console.log(sortValue,'sortValue');
            return {
                ...state,
                sorting_value: action.payload,
            }
        case 'SORTING_PRODUCT':
            let newSortProduct;

            const { filter_products, sorting_value } = state;

            let temFilterProduct = [...filter_products];

            const sortingProducts = (a, b) => {
                // return b.price-a.price;
                if (sorting_value === 'a-z') {
                    return a.name.localeCompare(b.name);
                }
                if (sorting_value === 'z-a') {
                    return b.name.localeCompare(a.name);
                }
                if (sorting_value === 'lowest') {
                    return a.price - b.price;
                }
                if (sorting_value === 'highest') {
                    return b.price - a.price;
                }
            }

            newSortProduct = temFilterProduct.sort(sortingProducts)

            return {
                ...state,
                filter_products: newSortProduct
            }

        case 'UPDATE_FILTERS_VALUES':
            const { name, value } = action.payload;
            return {
                ...state,

                filter: {
                    ...state.filter,
                    [name]: value,
                    // text : value,
                    // category : value,
                    // company : value,
                }
            }

        case 'FILTER_PRODUCTS':
            let { all_products } = state;

            let temFilterProductTwo = [...all_products];
            const { text, category, company, colors, price } = state.filter;

            if (text) {
                temFilterProductTwo = temFilterProductTwo.filter((ele) => {
                    return ele.name.toLowerCase().includes(text)
                    //   return  ele.name.toLowerCase().startsWith(text)
                })
            }

            if (category !== 'All') {
                temFilterProductTwo = temFilterProductTwo.filter((ele) => {
                    return ele.category === category;
                })
            }

            if (company !== 'All') {
                temFilterProductTwo = temFilterProductTwo.filter((ele) => {
                    return ele.company === company;
                })
            }

            if (colors !== 'All') {
                temFilterProductTwo = temFilterProductTwo.filter((ele) => {
                    return ele.colors.includes(colors);
                })
            }

            if (price) {
                temFilterProductTwo = temFilterProductTwo.filter((ele) => {
                    return ele.price <= price;
                })
            }

            return {
                ...state,
                filter_products: temFilterProductTwo,
            }

        //clear filter
        case 'CLEAR_ALL_FILTER':
            return {
                ...state,
                filter: {
                    ...state.filter,
                    text: '',
                    category: 'All',
                    company: 'All',
                    colors: 'All',
                    maxPrice: 0,
                    price: state.filter.maxPrice,
                    minPrice: state.filter.maxPrice,
                }
            }

        default:
            return state
    }
}

export default FilterReducer;