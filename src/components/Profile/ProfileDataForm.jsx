import { Form, Field } from 'react-final-form';
import classes from './ProfileDataForm.module.css';


const ProfileDataForm = (props) => {
    const onSubmit = (e) => {
        console.log(e);
        e.LookingForAJobDescription = 'null';
        props.saveProfile(e);
        props.deactivateEditMode(false)
    }
    const validate = (e) => {
        const errors = {};
        if (10 === 1) {
            errors.email = 'Enter a valid email';
        }
        return errors;
    }
    return (
        <div className={classes.form}>
            <Form
                onSubmit={onSubmit}
                validate={validate}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <Field
                            name="fullName"
                            render={({ input, meta }) => (
                                <div>
                                    <label className={classes.label}>Full Name</label>
                                    <input className={classes.input} {...input} placeholder='Full Name' />
                                    {meta.touched && meta.error && <span>{meta.error}</span>}
                                </div>
                            )}
                        />
                        <Field
                            name="AboutMe"
                            render={({ input, meta }) => (
                                <div>
                                    <label className={classes.label}>About me</label>
                                    <textarea className={classes.input}  {...input} placeholder='About me' />
                                    {meta.touched && meta.error && <span >{meta.error}</span>}
                                </div>
                            )}
                        />
                        <Field
                            name="lookingForAJob"
                            type='checkbox'
                            render={({ input, meta }) => (
                                <div>
                                    <label className={classes.label}>Looking for a job</label>
                                    <input type='checkbox' className={classes.input}  {...input} placeholder='Website' />
                                    {meta.touched && meta.error && <span >{meta.error}</span>}
                                </div>
                            )}
                        />
                       <div>Contacts:{Object.keys(props.profile.contacts).map(key => {
                           return  <Field
                           name={`contacts.${key}`}
                           render={({ input, meta }) => (
                               <div>
                                   <label className={classes.label}>{key}</label>
                                   <textarea className={classes.input}  {...input} placeholder={key} />
                                   {meta.touched && meta.error && <span >{meta.error}</span>}
                               </div>
                           )}
                       />
                       })}
                        </div>
                        <div>
                            <button type="submit">Save</button>
                        </div>
                    </form>
                )} />
        </div>
    )
}

export default ProfileDataForm;