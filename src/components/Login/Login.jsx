import React from 'react';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../redux/authReducer';
import classes from './Login.module.css';



export const Login = (props) => {
    const onSubmit = (e) => {
        props.login(e.email, e.password, e.captcha)
    }
    const validate = (e) => {
        const errors = {};
        if (e.email && e.email.length < 5) {
            errors.email = 'Enter a valid email';
        }
        if (e.password && e.password.length < 5) {
            errors.password = 'Password incorrect'
        }
        return errors;
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    
    return (
        <div className={classes.wrapper}> 
        <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <Field
                        name="email"
                        render={({ input, meta }) => (
                            <div className={classes.field}>
                                <label>Email</label>
                                <input {...input} placeholder='Email'/>
                                {meta.touched && meta.error && <span className={classes.error}>{meta.error}</span>}
                            </div>
                        )}
                    />
                    <Field
                        name="password"
                        render={({ input, meta }) => (
                            <div className={classes.field}>
                                <label>Password</label>
                                <input {...input} placeholder='Password'/>
                                {meta.touched && meta.error && <span className={classes.error}>{meta.error}</span>}
                            </div>
                        )}
                    />
                    
                    {props.captchaUrl && <img src={props.captchaUrl}></img>}
                    {props.captchaUrl &&
                        <Field
                        name="captcha"
                        render={({ input, meta }) => (
                            <div className={classes.field}>
                                <label>Enter the symbols...</label>
                                <input {...input}/>
                                {meta.touched && meta.error && <span className={classes.error}>{meta.error}</span>}
                            </div>
                        )}
                    />}
                    
                    <div className={classes.buttonContainer}>
                        <button className={classes.submitButton} type="submit">Submit</button>
                    </div>
                </form>
            )} />
    </div>
    )
}


const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);



