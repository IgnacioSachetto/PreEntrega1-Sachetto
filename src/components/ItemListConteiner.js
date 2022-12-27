import React from 'react'

export const ItemListConteiner = (props) => {
    if (props.isItem)
        return (
            <><a target="_blank" href={props.greeting}>Link de Compra</a>
            <p>Cantidad: {props.cantidad}</p>
            </>

       
        )
}
