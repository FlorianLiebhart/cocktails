import React from "react";

const tagMap: any = [
    "sauer",
    "bitter",
    "süß"
]
// @ts-ignore
export const TagList = ({tags}) => <div style={{display: 'inline-grid'}}>
    {
      tags.map((tag: any) => 
        <div style={{padding: 4, width: 'min-content', border: '1px', borderStyle: 'solid', borderRadius: '10px', margin: '2px'}}>
          {tag}
        </div>
      )
    }
</div>;