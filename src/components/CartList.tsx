import React from "react";
import {getCocktail} from "../domain/cocktails";


const CartItem: React.FC<any> = ({cartitem, onRemoveClicked}) => {
    const cocktail = getCocktail(cartitem.id);

    return <li className="pic" title="cartitem picture"
               style={{float: "left", paddingLeft: "15px", paddingBottom: "15px"}}>
        <a href={`#${cocktail.id}`}><img src={cocktail.picture} alt={cocktail.name}
                                         style={{maxHeight: '50px', maxWidth: '50px'}}/></a>
        <div onClick={onRemoveClicked}
             style={{
                 cursor: "pointer", position: 'relative', bottom: '60px', left: '50px'
             }}>
            x
        </div>
    </li>;
}

// @ts-ignore
export const CartList: React.FC<any> = ({cart, onItemRemoved}) =>
    <ul title="cart" style={{listStyle: 'none'}}>
        {
            cart.map(
                (cartitem: any, idx: number) => <CartItem cartitem={cartitem}
                                                          onRemoveClicked={() => onItemRemoved(idx)}/>
            )
        }
    </ul>;

