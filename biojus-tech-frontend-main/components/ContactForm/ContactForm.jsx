import { useState } from "react";
import { StyledContactForm } from "./styles";

const ContactForm = () => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [message, setMessage] = useState()
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log('sending')

        let data = {
            name, 
            email,
            message
        }

        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log('Response received')
            if(res.status === 200){
                console.log('succeeded!')
                setName('')
                setEmail('')
                setMessage('')
            }
        })

        setSubmitted(true)
    }

    return (
        <StyledContactForm>
            <form>
                <input type="text" placeholder="Full name" onChange={(e) =>{setName(e.target.value)}} value={name}/>

                <input type="email" field="email" prefix="Email" placeholder="email" onChange={(e) => {setEmail(e.target.value)}} value={email}/>

                <textarea name="" id="" cols="30" rows="5" placeholder="message" onChange={(e) =>{setMessage(e.target.value)}} value={message}></textarea>

                <button type="submit" onClick={(e) => handleSubmit(e)}>submit</button>
            </form>
        </StyledContactForm>
    );
}
 
export default ContactForm;