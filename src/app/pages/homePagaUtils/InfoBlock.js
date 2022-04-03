import React, { useCallback, useState, useEffect } from 'react';
import { infoBlock } from "../../InfoStore";

const InfoBlock = () => {
    const [infoBlocks, setColorInBlockText] = useState(infoBlock);
    const styleBlock = {
        backgroundColor: 'whitespace',
        height: 300,
        fontSize: 12,
        lineHeight: 'normal',
    };
    const updateColor = useCallback((color, index, styleColor) => {
        setColorInBlockText((info) => {
            const clone = [...info];
            clone.splice(index, 1, { ...info[index], style: { color }, color: styleColor });
            setColorInBlockText(clone);
        })
    }, []);

    return (
        <div style={styleBlock} className='row'>
            {infoBlocks?.map((block, index) =>
                <div key={block.id} className='col-md-3'>
                    <h1>{'Номер ' + block.id}</h1>
                    <p style={block.style}>{block.description}</p>
                    <button
                        onClick={() => updateColor(block.color, index, block.style.color)}
                        type='button'
                        className='btn'
                    >
                        { block.btnName }
                    </button>
                </div>
            )}
        </div>
    );
};

export default InfoBlock;