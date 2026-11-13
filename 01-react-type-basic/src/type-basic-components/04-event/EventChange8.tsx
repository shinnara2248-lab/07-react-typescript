import React, { useState } from 'react'


export const EventChange8 = () => {
    const [gender, setGender] = useState<string>("남자");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGender(e.target.value)
    }
    return (
        <div>
            <h2>changeEvent - radio</h2>
            <p>선태한 성별: {gender}</p>
            <div>
                <label>
                    <input type="radio" name="gender" value="남자" checked={gender === "남자"} onChange={handleChange} />남자
                </label>
                <label>
                    <input type="radio" name="gender" value="여자" onChange={handleChange} />여자
                </label>
            </div>
        </div>
    )
}
