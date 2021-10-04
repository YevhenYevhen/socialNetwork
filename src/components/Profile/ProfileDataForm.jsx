import { Form, Field } from 'react-final-form';
import classes from './ProfileDataForm.module.css';
import { useEffect, useState } from 'react';
import Preloader from '../Common/Preloader';


const ProfileDataForm = (props) => {

    const [isSaving, setIsSaving] = useState(false)
    const [savingSuccess, setSavingSuccess] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setSavingSuccess(false)
        }, 3000)
        return () => clearTimeout(timer)
    }, [savingSuccess])

    const onSubmit = (e) => {
        setIsSaving(true);
        e.LookingForAJobDescription = 'null';
        props.saveProfile(e).then((res) => {
            if (res === 0) {
                setSavingSuccess(true);
                setIsSaving(false);
            } else {
                setSavingSuccess(false);
                setIsSaving(false);
            }
        });

    }

    return (<>
        <div className={classes.profileFormWrapper}>
            <div className={classes.preloaderContainer}>
                {isSaving && <Preloader />}
            </div>
            <div className={classes.savedContainer}>
                {savingSuccess && <div className={classes.saved}>Saved</div>}
            </div>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit }) => (
                    <form className={classes.profileForm} onSubmit={handleSubmit}>
                        <Field
                            initialValue={props.initialValue.fullName}
                            name="fullName"
                            render={({ input, meta }) => (
                                <div className={classes.inputContainer}>
                                    <label className={classes.label}>Full Name</label>
                                    <textarea className={classes.input} {...input} placeholder='Full Name' />
                                </div>
                            )}
                        />
                        <Field
                            initialValue={props.initialValue.aboutMe}
                            name="AboutMe"
                            render={({ input, meta }) => (
                                <div className={classes.inputContainer}>
                                    <label className={classes.label}>About me</label>
                                    <textarea className={classes.input}  {...input} placeholder='About me' />
                                </div>
                            )}
                        />
                        <div>{Object.keys(props.profile.contacts)
                            .filter(key => key !== 'mainLink' && key !== 'vk' && key !== 'website')
                            .map(key => {
                                return <Field
                                    initialValue={props.initialValue.contacts[key]}
                                    key={key}
                                    name={`contacts.${key}`}
                                    render={({ input, meta }) => (
                                        <div className={classes.inputContainer}>
                                            <label className={classes.label}>{key}</label>
                                            <textarea className={classes.input}  {...input} placeholder={key} />
                                        </div>
                                    )}
                                />
                            })}
                        </div>
                        <div>
                            <button disabled={isSaving} className={isSaving ?
                                classes.disabledButton
                                : classes.saveButton} type="submit">Save</button>
                        </div>
                    </form>
                )} />
        </div>
    </>
    )
}

export default ProfileDataForm;