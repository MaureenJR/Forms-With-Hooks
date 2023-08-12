import React, { useState } from "react";

const Form = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [madeSubmit, setMadeSubmit] = useState (false);
    const [errorFirstName, setErrorFirstName] = useState ("");
    const [errorLastName, setErrorLastName] = useState ("");
    const [errorEmail, setErrorEmail] = useState ("");
    const [errorPassword, setErrorPassword] = useState ("");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

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

    const firstNameCharacterValidation = e => {
        setFirstName(e);
        if(e.length < 2){
            if(e == ""){
                setErrorFirstName("");
            }
            else if(e.length < 2){
                setErrorFirstName('First name must be at least 2 characters');
            }
        } 
        else {
            setErrorFirstName("");
        }
    }

    const lastNameCharacterValidation = e => {
        setLastName(e);
        if (e.length < 2){
            if(e == ""){
                setErrorLastName ("");
            }
            else if(e.length < 2){
                setErrorLastName('Last name must be at least 2 characters');
            }
            
        }else {
            setErrorLastName ("");
        }
    }

    const emailCharacterValidation = e => {
        setEmail (e);
        if (e.length < 5){
            if(e == ""){
                setErrorEmail ("");
            }
            else if(e.length < 5){
                setErrorEmail("This space must have at least 5 characters.");
            }
        }else{
            setErrorEmail("");
        }
    }

    const passwordValidation = e => {
        setPassword(e);
        if (e.length < 8){
            if(e == ""){
                setErrorPassword ("");
            } else {
                setErrorPassword ("Your password must have at least 8 characters");
            }
        }else{
            setErrorPassword ("");
        }
    }

    const confirmPasswordValidation = e => {
        setConfirmPassword(e);
        if (e.length < 8){
            if(e == ""){
                setErrorConfirmPassword ("");
            } else {
                setErrorConfirmPassword ("This must have at least 8 characters");
            }
            
        } else if (password != e) {
            setErrorConfirmPassword ("Passwords do not match, please try again");
            setErrorPassword ("Passwords do not match");
        } else{
            setErrorConfirmPassword ("");
            setErrorPassword ("");
        }
    }

    return(
        <div className="m-auto mt-3 mb-3 w-50 p-3 card col-3"> 
            <h1 className="text-center">Create Account</h1>
            <h5>
                {madeSubmit ? "Thanks! Your account is ready to use" : "Please, fill in all the spaces"}
            </h5>
            <form onSubmit={makeAccount} className="">
                <div>
                    <label>First Name:</label>
                    <input type="text" className="form-control" onChange={ e => firstNameCharacterValidation(e.target.value) } value={firstName}/>
                    {
                        errorFirstName && <p className="text-danger">{errorFirstName}</p>
                    }
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" className="form-control" onChange={ e => lastNameCharacterValidation(e.target.value) } value={lastName}/>
                    {
                        errorLastName && <p className="text-danger">{errorLastName}</p>
                    }
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" className="form-control" onChange={ e => emailCharacterValidation(e.target.value) } value={email}/>
                    {
                        errorEmail && <p className="text-danger">{errorEmail}</p>
                    }
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" className="form-control" onChange={ e => passwordValidation(e.target.value) } value={password}/>
                    {
                        errorPassword && <p className="text-danger">{errorPassword}</p>
                    }
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="password" className="form-control" onChange={ e => confirmPasswordValidation(e.target.value) } value={confirmPassword}/>
                    {
                        errorConfirmPassword && <p className="text-danger">{errorConfirmPassword}</p>
                    }
                </div>
                
                <div className="mt-2">
                    <input type="submit" className="btn btn-success" value="Create Account"/>
                </div>
                
            </form>

            
            <div className="col-auto card mt-4 p-3">
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
