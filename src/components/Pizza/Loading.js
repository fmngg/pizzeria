import React from "react";
import ContentLoader from "react-content-loader"

function Loading() {
    return(
        <ContentLoader 
            style={{margin:"20px 25px 65px"}}
            speed={2}
            width={270}
            height={510}
            viewBox="0 0 270 510"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="0" y="305" rx="10" ry="10" width="270" height="24" /> 
            <rect x="0" y="345" rx="10" ry="10" width="270" height="95" /> 
            <rect x="0" y="460" rx="10" ry="10" width="95" height="45" /> 
            <rect x="110" y="460" rx="10" ry="10" width="160" height="45" /> 
            <rect x="5" y="0" rx="20" ry="20" width="260" height="260" />
        </ContentLoader>
    )
} 

export default Loading