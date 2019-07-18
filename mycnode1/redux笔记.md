# redux
## 1). redux理解
    1. 什么?: redux是专门做状态管理的独立第3方库, 不是react插件
    2. 作用?: 对应用中状态进行集中式的管理(写/读)
    3. 开发: 与react-redux, redux-thunk等插件配合使用

## 2). redux相关API
    1. redux中包含: createStore(), applyMiddleware(), combineReducers()
    2. store对象: getState(), dispatch(), subscribe()
    3. react-redux: <Provider>, connect()()

## 3). redux核心概念(3个)
    1. action与actionCreator: 
        action默认是对象(同步action), {type: 'xxx', data: value}, 需要通过对应的actionCreator产生, 
        它的值也可以是函数(异步action), 需要引入redux-thunk才可以
    2. reducer
        回调函数
        根据老的state和指定的action, 返回一个新的state
        不能修改老的state
    3. store
        redux最核心的管理对象
        内部管理着: state和reducer
        提供方法: getState(), dispatch(action), subscribe(listener)

## 4). redux工作流程
![](https://i.imgur.com/RFFX4fd.png)

## 5). 使用redux及相关库编码
    1. 需要引入的库: 
        redux
        react-redux
        redux-thunk
        redux-devtools-extension(这个只在开发时需要)
    2. redux文件夹: 
        action-types.js
        actions.js
        reducers.js
        store.js
    3. 组件分2类: 
        ui组件(components): 不使用redux相关PAI
        容器组件(containers): 使用redux相关API
