import React from "react";
import {TagList} from "./TagList";

// @ts-ignore
export const TagsComponent: React.FC<any> = ({cocktail}) => 
    <div title="tags" style={{marginLeft: '10px', width: '200px'}}>
        <TagList tags={cocktail.tags}/>
    </div>
