import { InputBox } from "../components";
import { useState } from "react";

interface formState {
    [key: string]: string;
}

const Authenticator = () => {
    const [state, setState] = useState<formState>({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        mobile: "",
        device_type: "0"
    }),
        { first_name, last_name, email, password, mobile } = state,

        formFields = [
            {
                name: 'first_name',
                value: first_name,
                label: 'First Name',
            },
            {
                name: 'last_name',
                value: last_name,
                label: 'Last Name'
            },
            {
                name: 'email',
                value: email,
                label: 'Email'
            }, {
                name: 'mobile',
                value: mobile,
                label: 'Contact No.'
            },
            {
                name: 'password',
                value: password,
                label: 'Password'
            }

        ];

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    },
        handleSubmit = (e: any) => {
            e.preventDefault();
        };


    return (
        <form onSubmit={handleSubmit} className="authenticator">
            {
                formFields.map((inputData, i) => <InputBox key={`form-input-${i}`} {...inputData} handleChange={handleChange} required />)
            }
            <button>Submit</button>
        </form>
    )
}

export default Authenticator