import React from "react";

const Panel = ({ panelTitle, panelContent, activePanel, change ,index }) => {

    return (
        <>
            <h2>{panelTitle}</h2>
            <button onClick={() => change(index)}>Click</button>
            { (activePanel==index
            ?
                <>
                    <p>{panelContent}</p>
                </>
                :null
            )}
        </>
    );
};

export default Panel;
