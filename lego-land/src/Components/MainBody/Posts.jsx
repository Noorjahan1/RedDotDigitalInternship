import React from "react";

const Posts=({posts,loading})=>{
  
    if(loading){
        return <h2>Loading...</h2>
    }
  
    
     
    return (
        <>

        { 
            posts
        }
        </>
    )
    
}
export default Posts;