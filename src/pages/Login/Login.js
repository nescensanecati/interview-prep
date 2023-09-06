import './Login.scss';
import Input from "../../components/Input/Input";
import axios from 'axios';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login({isLoggedIn, setIsLoggedIn}) {
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

		axios.post("https://database-backend-brainstation-70fdd396b787.herokuapp.com/api/users/login", {
            email: event.target.email.value,
            password: event.target.password.value
        })
		.then((response) => {
            console.log(response.data);
			sessionStorage.setItem('token', response.data.token)
            setIsLoggedIn(true)
			navigate('/')
		})
        .catch((response) => {setError(response.response.data)})
    };

    return (
        <main className="login-page">
            <form className="login" onSubmit={handleSubmit}>
                <h1 className="login__title">Log in</h1>

                <Input type="text" name="email" label="Email" />
                <Input type="password" name="password" label="Password" />

                <button className="login__button">
                    Log in
                </button>
                {error && <div className="login__message">{error}</div>}
                <p className='login__p'>
                Need an account? <Link to="/signup">Register</Link>
            </p>
            </form>

        </main>
    );
}

export default Login;
