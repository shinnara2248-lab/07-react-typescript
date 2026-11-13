import React from 'react'

interface MulProps {
    id: number;
    title: string;
    imgSize: number;
    imgSrc: string;
}
export const Props6 = ({ sendItem }: { sendItem: MulProps }) => {
    return (
        <div>
            <h3>통째로 자식에게 넘기기</h3>
            <div>
                <img src={sendItem.imgSrc} alt="" />
                <h3>{sendItem.title}</h3>
            </div>
        </div>
    )
}
