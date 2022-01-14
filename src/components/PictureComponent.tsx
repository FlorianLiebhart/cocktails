import React from "react";

// @ts-ignore
export const PictureComponent: React.FC<any> = ({cocktail, onClick}) => 
    <div className="pic" title={`Add ${cocktail.name} to cart`}
        style={{minHeight: '150px', maxHeight: '150px', minWidth: '150px', maxWidth: '150px'}}>
      <img onClick={onClick} src={cocktail.picture} alt={cocktail.name} style={{maxHeight: '150px', maxWidth: '150px', cursor: 'copy'}}/>
    </div>
