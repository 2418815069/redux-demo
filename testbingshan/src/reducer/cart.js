export default (state,action)=>{
    if(state == undefined){
        state = {
            "cart":[
                {
                    "name":"电脑1",
                    "price":1000,
                    "account":0
                },{
                    "name":"电脑2",
                    "price":2000,
                    "account":0
                },{
                    "name":"电脑3",
                    "price":3000,
                    "account":0
                },{
                    "name":"电脑4",
                    "price":4000,
                    "account":0
                }
            ],
            "total":0
        }
        if(action.type =="ZENGJIA"){
            var s=state;
            s.cart[action.index].price++
            return s
        }
        if(action.type =="ZENGJIA1"){
            var s=state;
            s.total++
            return s
        }
        if(action.type =="JIANSHAO"){
            var s=state;
            s.cart[action.index].price--
            return s
        }
        return state
    }
}
// const 
// const cart= (state=state1,action) =>{
//     const newState=JSON.parse(JSON.stringify(state1))
//     switch (action.type) {
//         case 'ADD_':
//           return {
//               ...newState
//           }
//         case 'ADD_':
//           return {
//               ...newState
//           }
//         default:
//           return newState
//     }
   
// }
// export default cart
