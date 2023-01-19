import React from 'react'

export default function Contact() {
    return (
        <div className="contact">
            <main>
                <h1>Contact Us</h1>
                <form>
                    <div>
                        <label>Name :- </label>
                        <input type="text" required placeholder='Enter Your Name' />
                    </div>
                    <div>
                        <label>Email id :- </label>
                        <input type="email" required placeholder='Enter Your Email id' />
                    </div>
                    <div>
                        <label>Password :- </label>
                        <input type="password" required placeholder='Enter Your Password' />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </main>
        </div>
    )
}
