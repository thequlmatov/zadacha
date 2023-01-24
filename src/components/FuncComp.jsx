import React, { useEffect, useState } from 'react'
import Item from './Item';

const FuncComp = () => {


  const [api , setApi ] = useState([])
  const [xatolik, setXatolik] = useState("");

  useEffect( () => {
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(response => {
      if( response.ok)
      {
        return response.json();
      }
      else
      {
        throw new Error("API olishda xatolik sodir bo`ldi. Tekshirib qaytadan harakat qilib ko`ring")
      }
    })
    .then(javob => {
      return setApi(javob.data)
    })
    .catch(error => {
      console.log(error)
      setXatolik("API da xatolik bor")
    })
  } ,[])

  return (
    <>

    <h1> {xatolik} </h1>

    {
      api.map( user => {
        return <Item id={user.id} name={user.name} email={user.email} body={user.body} />
      })
    }


    </>
  )
}

export default FuncComp