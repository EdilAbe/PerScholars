import React from 'react'
import { useParams } from 'react-router-dom'
import {useState, useEffect} from "react"

const Price = () => {
  const[coin,setCoin] = useState(null)
  const apiKey = "2BAAC883-F10F-4C96-AB8A-A4B3411A34EE"
  //return an object with the matching URL params 
  const params = useParams()
  useEffect(()=>{getCoin()},[])
  console.log(params)
  const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${params.symbol}/USD?apiKey=${apiKey}`
  
  const getCoin = async() => {
    try{
      //make a fetch request
      const res =await fetch(url)
      const data = await res.json()
      console.log("data", data)
      //set the data in state 
      setCoin(data)
    }catch(error){
      console.log(error)
    }
  }

//render If the data is loaded
const loaded =() =>{
  return(
    <div>
      <h1>{coin.asset_id_base}/{coin.asset_id_qoute}</h1>
      <h2>{coin.rate}</h2>
    </div>
  )
}

//If the data is still loading
const isLoading = () => {
  return(
    <div>
      Loading ...
    </div>
  )
}
  return (
    <div>
      <h2>price</h2>
    {coin && coin.rate ? loaded() :isLoading()}

    </div>
  )
}

export default Price