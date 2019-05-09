import React from 'react'
import styled from 'styled-components';
import { bindActionCreators } from 'redux'
import * as actions from '../Layout/action'
import {connect} from 'react-redux';
const Container=styled.div`
background: yellow;
span{
    margin-right:20px;
}
`

const CartBar=({cart,total,actions})=>{
    console.log(total)
    console.log(cart[0])
    return(
        <div>
            <span>{JSON.stringify(cart)}</span>
            {
                cart.map((item,index)=>{
                    return(
                        <CartItem key={index} item={item} index={index}></CartItem>
                    )
                })
            }
        </div>
    )
}
const CartItem=({item,index})=>{
    return(
        <Container>
            <h1>{index}</h1>
            <div style={{width:300}}>
                <div>
                    <span>{item.name}</span>
                    <span>{item.price}</span>
                    <span>{item.account}</span>
                    <button onClick={()=>{actions.decrease(index)
                    console.log(item)}}>-</button>
                    <button  onClick={actions.increase1}>-</button>
                    <button  onClick={()=>{actions.increase(index)}}>+</button>
                </div>
                <div></div>
            </div>
        </Container>
    )
} 
// const mapStateToProps=({state})=>{
//     return{
//         "cart":state.total
//     }
// }
export default connect(
    (state)=>{
    return{
        cart:state.cart,
        total:state.total
    }
},(dispatch)=>{
    return{
        actions: bindActionCreators(actions,dispatch)
    }
})(CartBar)
