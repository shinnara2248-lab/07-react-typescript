import React from 'react'

interface MulProps {
    sId: number;
    sTitle: string;
    imgSize: number;
    imgUrl: string;
}
export const Props5 = (props: MulProps) => {
    return (
        <div>
            <h3>대표속성으로 받기</h3>
            <div>
                <img src={props.imgUrl} width={props.imgSize} alt="" />
                <h3>{props.sTitle}</h3>
            </div>
        </div>
    )
}
