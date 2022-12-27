import React from 'react'
import { ItemListConteiner } from './ItemListConteiner'

export const CartWidget = () => {

  const isItem = true

  return (
    
      <main>


        <div class = "objeto">
          <img src="img/carrito.png"></img>
          <ItemListConteiner isItem = {isItem}
            greeting = "https://http2.mlstatic.com/D_NQ_NP_888460-MLA51720230198_092022-W.jpg"
            cantidad = "1"
      />    

          

        </div>

           
   
    
      </main>


  )
}


