import React from 'react'
import './BtnData.css'
import {useSelector, useDispatch} from 'react-redux'
import { fetchTodos } from '../redux/slice/todo'
const BtnData = () => {
    const dispatch = useDispatch()
    const datacome = useSelector(state=>state)
    console.log(datacome);

    if(datacome.todo.isLoading){
       return <h1>Loading....</h1> 
       
    }

    
    const onFunction = (e)=>{
      dispatch(fetchTodos());
    }
  return (
    <div className='main-page'>
      <button onClick={onFunction}>Fetch Todos</button>
      <div className='main-head'>
     {
       datacome.todo.data && datacome.todo.data.map((e,i)=>{
           return (
            
            <li>{e.title}</li>
        
            )
            
        })
     }
      </div>
    </div>
  )
}

export default BtnData
