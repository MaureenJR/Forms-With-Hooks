import React, { useState } from "react";

const Form = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [madeSubmit, setMadeSubmit] = useState (false);

    const makeAccount = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password, confirmPassword};
        console.log (newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setMadeSubmit ("true");
    }

    return(
        <div className="m-auto w-50 p-3"> 
            <h1 className="text-center">Create Account</h1>
            <h5>
                {madeSubmit ? "Thanks! Your account is ready to use" : "Please, fill in all the spaces"}
            </h5>
            <form onSubmit={makeAccount} className="">
                <div>
                    <label>First Name:</label>
                    <input type="text" className="form-control" onChange={ e => setFirstName(e.target.value)} value={firstName}/>
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" className="form-control" onChange={ e => setLastName(e.target.value)} value={lastName}/>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" className="form-control" onChange={ e => setEmail(e.target.value)} value={email}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" className="form-control" onChange={ e => setPassword(e.target.value)} value={password}/>
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="password" className="form-control" onChange={ e => setConfirmPassword(e.target.value)} value={confirmPassword}/>
                </div>
                
                <div className="mt-2">
                    <input type="submit" className="btn btn-success" value="Create Account"/>
                </div>
                
            </form>

            
            <div className="col-auto card mt-4 p-3 border-black">
                <h1 className="text-center">Results</h1>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </div>
    )
}

export default Form;
