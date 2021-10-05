import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../redux/authReducer';
import classes from './Login.module.css';
import logoIcon from '../../assets/icons/logo.png'
import Preloader from '../Common/Preloader';


export const Login = (props) => {
    const [error, setError] = useState(null)
    const [isFetching, setIsFetching] = useState(false)
    const onSubmit = (e) => {
        setIsFetching(true)
        props.login(e.email, e.password, e.captcha).then((error) => {
            if (error) {
                setError(error)
                setIsFetching(false)
            } else {
                setIsFetching(false)
            }

        })
    }
    const validate = (e) => {
        const errors = {};
        if (e.email && e.email.length < 5) {
            errors.email = 'Enter a valid email';
        }
        if (e.password && e.password.length < 3) {
            errors.password = 'Password incorrect'
        }
        return errors;
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }
    return (<div className={classes.wrapper}>
        <div className={classes.logoContainer}>
            <img className={classes.logoImage} src={logoIcon} alt="" />
            <div className={classes.logoTitle}>Social Network</div>
        </div>
        <div className={classes.formContainer}>
            <Form
                onSubmit={onSubmit}
                validate={validate}
                render={({ handleSubmit }) => (
                    <form className={classes.loginForm} onSubmit={handleSubmit}>
                        <Field
                            initialValue={props.initialValues.demoEmail}
                            name="email"
                            render={({ input, meta }) => (
                                <div className={classes.field}>
                                    <label>Email</label>
                                    <input className={classes.input} {...input} placeholder='Email' />
                                    {meta.touched && meta.error && <span className={classes.error}>{meta.error}</span>}
                                </div>
                            )}
                        />
                        <Field
                            initialValue={props.initialValues.demoPassword}
                            name="password"
                            render={({ input, meta }) => (
                                <div className={classes.field}>
                                    <label>Password</label>
                                    <input className={classes.input} {...input} placeholder='Password' type='password' />
                                    {meta.touched && meta.error && <span className={classes.error}>{meta.error}</span>}
                                </div>
                            )}
                        />

                        {props.captchaUrl && <img src={props.captchaUrl} alt=''></img>}
                        {props.captchaUrl &&
                            <Field
                                name="captcha"
                                render={({ input, meta }) => (
                                    <div className={classes.field}>
                                        <label>Enter the symbols...</label>
                                        <input className={classes.input} {...input} />
                                        {meta.touched && meta.error && <span className={classes.error}>{meta.error}</span>}
                                    </div>
                                )}
                            />}

                        <div className={classes.buttonContainer}>
                            <button disabled={isFetching} className={isFetching ?
                                classes.disabledButton
                                : classes.submitButton} type="submit">{isFetching ?
                                    <div className={classes.preloader}><Preloader /></div>
                                    : <span>Log in</span>}</button>
                        </div>
                        {error && <div className={classes.error}>{error}</div>}
                    </form>
                )} />
        </div>
    </div>
    )
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
    initialValues: state.auth.initialValues
})

export default connect(mapStateToProps, { login })(Login);



