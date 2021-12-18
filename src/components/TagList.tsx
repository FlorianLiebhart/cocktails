import React from "react";

const tagMap: any = [
    "sauer",
    "bitter",
    "süß"
]
// @ts-ignore
export const TagList = ({tags}) => 
  <div style={{display: 'inline-grid'}}>
    {
      tags.map((t: any) => {
        const lctag = t.toLowerCase();

        return <div style={{
          padding: 4, 
          textAlign: 'center', 
          border: '1px', 
          borderStyle: 'solid', 
          borderRadius: '10px', 
          margin: '2px',
          background:
            lctag.includes("sour") &&
              lctag.includes("sweet") &&
              lctag.includes("bitter") ? "repeating-radial-gradient(circle, pink 0px,greenyellow 15px,rebeccapurple 20px)": // radial
              "none",
          backgroundColor: 
            lctag == "sweet" ||
            lctag == "fruity" ||
            lctag.includes("too sweet") ? '#ffc0cb': // pink
            lctag == "sour" ? '#adff2f': // greenyellow
            lctag == "bitter" ? '#663399': // rebeccapurple
            lctag == "salty" ||
            lctag == "savory" ? '#b0c4de': // lightsteelblue
            lctag == "coffee" ? '#8b4513': // saddlebrown
            lctag.includes("refreshing") || 
              lctag == "light" || 
              lctag.includes("low-proof") ? '#ffffe0': // lightyellow
            lctag.includes("tart") ||
            lctag.includes("dry") ? '#556b2f': // darkolivegreen
            lctag.includes("strong") || 
              lctag.includes("spirit-forward") ? '#8b0000': // darkred
            lctag.includes("spicy") || 
              lctag.includes("hot") ? '#ff7645': // orangered
            lctag == "wow" || 
              lctag == "amazing" ||
              lctag == "favorite" ||
              lctag == "love it" ||
              lctag == "divine" ? '#ffd700': // gold
            '#ffffff'
          
        }}>
          {t}
        </div>
      })
    }
  </div>;