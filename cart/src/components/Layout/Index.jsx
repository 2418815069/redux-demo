import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// import todoApp from '../../reducers/index'
import CartBar from '../test/CartBar'
import cart from '../../reducer/cart'
let store = createStore(cart)
const Layout=()=>{
    return (
        <Provider store={store}>
            <CartBar />
            <div>{JSON.stringify(store.getState())}dd</div>
        </Provider>
    )
}
export default Layout