import React,{useContext} from 'react'
import { AppContext } from '../context/AppContext'

const useInitialState = () => {
const initialState = useContext(AppContext)

  return initialState
  
}

export default useInitialState