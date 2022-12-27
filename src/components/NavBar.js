import React from 'react'
import { CartWidget } from './CartWidget';


export const NavBar = () => {
  return (
    <>
        <div class="barraNav">
        <h1>Tienda de Articulos</h1>
        <nav>
            <a href="#">Marroquinería</a>
            <a href="#">Accesorios</a>
            <a href="#">Verano 2023</a>
        </nav>
    </div>
    <CartWidget/>
    </>

  
    )
}
