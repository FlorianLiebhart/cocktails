import React, {CSSProperties} from "react";
import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'
import cartpicture from "../domain/images/recommendation.png";


const CartItem: React.FC<any> = ({cartitem}) => 
    <li className="pic" title="cartitem picture" style={{float: "left", paddingLeft: "15px", paddingBottom: "15px"}}>
        <a href={cartitem}><img src={cartpicture} alt={cartitem} style={{maxHeight: '50px', maxWidth:'50px'}}/></a>
        <a href="" style={{textDecoration: 'none', position: 'relative', bottom: '60px', left: '50px'}}><div>x</div></a>
    </li>;

// @ts-ignore
export const CartList: React.FC<any> = ({cart}) => 
    <ul title="cart" style={{listStyle: 'none'}}>
      {
        cart.map(
          (cartitem: any) => <CartItem cartitem={cartitem}/>
        )
      }
    </ul>;

