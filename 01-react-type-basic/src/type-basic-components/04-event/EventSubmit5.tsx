import React from 'react'

export const EventSubmit5 = () => {

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
return (
    <div>
        <h2>FormEvent</h2>
        <p>옛날방식</p>
        <form onSubmit={handleSubmit}>
            <input type="text" />
            <button type='submit'>전송</button>
        </form>
    </div>
)
}
