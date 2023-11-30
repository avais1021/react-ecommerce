const CartReducer = (state, action) => {

    if (action.type === 'ADD_TO_CART') {
        let { id, checkColor, amount, product } = action.payload;
        //    const {image=[0]} = product
        console.log(product, 'product_cart');

        // existing product 
        let existingProduct = state.cart.find(
            (ele) => ele.id === id + checkColor
        )
        console.log(existingProduct, 'existingProduct');

        if (existingProduct) {

            let updateCartItem = state.cart.map((ele) => {
                if (ele.id === id + checkColor) {

                    let newAmount = ele.amount + amount;
                    if (newAmount >= ele.max) {
                        newAmount = ele.max;
                    }

                    return {
                        ...ele,
                        amount: newAmount,
                    }
                } else {
                    return ele;
                }
            })

            return {
                ...state,
                cart: updateCartItem,
            }

        } else {

            let cartProduct = {
                id: id + checkColor,
                name: product.name,
                checkColor,
                amount,
                // Image : product.Image[0].url,
                image: product.image[0].url,
                price: product.price,
                max: product.stock,
            };

            return {
                ...state,
                cart: [...state.cart, cartProduct],
            }
        }

    }

    if (action.type === "CART_ITEM_INCREAMENT") {
        let cartItemId = action.payload;
        let updateCartItem = state.cart.map((ele) => {
            if (ele.id === cartItemId) {
                console.log(ele, 'ele updateCartItem');
                let uIncrAmount = ele.amount + 1;
                if (uIncrAmount >= ele.max) {
                    uIncrAmount = ele.max;
                }

                return {
                    ...ele,
                    amount: uIncrAmount,
                }
            } else {
                return ele;
            }
        })
        // console.log(updateCartItem,'updateCartItem');
        return {
            ...state,
            cart: updateCartItem,
        }
    }
    if (action.type === "CART_ITEM_DECREAMENT") {
        let cartItemId = action.payload;
        let updateCartItem = state.cart.map((ele) => {

            if (ele.id === cartItemId) {
                console.log(ele, 'ele DECREAMENT');

                let uDecrAmount = ele.amount - 1;
                if (uDecrAmount <= 1) {
                    uDecrAmount = 1;
                }
                return {
                    ...ele,
                    amount: uDecrAmount
                }
            } else {
                return ele;
            }
        })
        return {
            ...state,
            cart: updateCartItem,
        }
    }

    if (action.type === "REMOVE_CART_ITEM") {
        let { cartItemId } = action.payload;
        let { cart } = state;
        let filterRemoveCartItem = cart.filter((ele) => {
            return ele.id !== cartItemId;
        })
        console.log(filterRemoveCartItem, 'filterRemoveCartItem');


        return {
            ...state,
            cart: filterRemoveCartItem,
        }

    }

    if (action.type === "CLEAR_ALL_CART") {
        return {
            ...state,
            cart: [],
        }
    }

    if (action.type === "ICON_CART_ITEM") {

        let cartIconTotal = state.cart.reduce((initialVal, ele) => {
            let { amount } = ele;
            initialVal = initialVal + amount;

            return initialVal;
        }, 0)

        return {
            ...state,
            total_cartIconItem: cartIconTotal,
        }
    }

    if (action.type === "ALL_PRODUCT_SUBTOTAL") {
        let AllItemSUbTotal = state.cart.reduce((initialVal, ele) => {
            let { price } = ele;
            initialVal = initialVal + (price * ele.amount);
            return initialVal;
        }, 0)
        console.log(AllItemSUbTotal, 'AllItemSUbTotal');
        return {
            ...state,
            All_product_subTotal: AllItemSUbTotal,
        }
    }

    // if (action.type === "ICON_CART_ITEM_AND_ALL_PRODUCT_SUBTOTAL") {
    //     let { cartIconTotal, all_item_subTotal } = state.cart.reduce((accum, ele) => {
    //         let { amount, price } = ele;
    //         accum.cartIconTotal = accum + amount;
    //         accum.all_item_subTotal = accum + price * amount;
    //         return accum;
    //     }, 0);

    //     return {
    //         ...state,
    //         total_cartIconItem: cartIconTotal,
    //         All_product_subTotal: all_item_subTotal,
    //     }
    // }


    return state
}

export default CartReducer; 