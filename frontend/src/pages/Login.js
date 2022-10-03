import { useRef, useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import AuthContext from "../context/AuthProvider";

const Login = () => {
    // context
    const { auth, setAuth } = useContext(AuthContext);
    //reff
    const userRef = useRef();
    const errRef = useRef();
    //state
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState(null);
    // navigation
    const navigate = useNavigate()

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user, pwd)
        const checkCredentials = await fetch('/login', {
            "method": 'POST',
            "body": JSON.stringify({ username: user, password: pwd }),
            "headers": { "Content-Type": "application/json" }
        })
        const json = await checkCredentials.json()
        if (json.authenticated) {
            setAuth(json.authenticated);
            setUser('');
            setPwd('');
            navigate('/');
        } else {
            setUser('');
            setPwd('');
            setErrMsg("auth failed")
        }
    }

    return (
        <div className="login-form">
            <div className="form-section">
                <img className="form-img login-img" src="https://res.cloudinary.com/dsdekztdq/image/upload/v1660931519/blog-website/PXL_20210130_121404879_er3jfs.jpg" alt="img" />
                <form className="login" onSubmit={handleSubmit}>
                    <p ref={errRef} className={errMsg ? "errmsg" : "hidden"} aria-live="assertive">{errMsg}</p>
                    <h2>Sign In</h2>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        autoComplete="off"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                    />
                    <button>Sign In</button>
                </form>
            </div>
        </div>
    );
}

export default Login;