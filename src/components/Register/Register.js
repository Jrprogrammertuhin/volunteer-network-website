import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import './Register.css';
import { UserContext } from '../../App';
const Register = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, errors } = useForm();


    const onSubmit = data => console.log(data);

    console.log(watch("example")); 

    return (
        <div>
            <h1>This is register</h1>
            <form className="reg-form" onSubmit={handleSubmit(onSubmit)}>
                <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Full Name" />
                {errors.name && <span className="error">name field is required</span>}
                <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="UserName or Email" />
                {errors.email && <span className="error">email field is required</span>}
                <input name="description" ref={register({ required: true })} placeholder="Description" />
                {errors.description && <span className="error">description field is required</span>}
                <input name="library" ref={register({ required: true })} placeholder="Origin Books and Library" />
                {errors.library && <span className="error">library field is required</span>}
                <input type="submit" />
            </form>
        </div>
    );
};

export default Register;