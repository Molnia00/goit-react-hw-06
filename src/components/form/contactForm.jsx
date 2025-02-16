import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import { nanoid } from 'nanoid/non-secure';
import s from './IAmSoLazy.module.css'

const FeedbackSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),

  number: Yup.string().matches(
      /^\d{3}-\d{2}-\d{2}$/,
    'Phone number must be in the format XXX-XX-XX').required('Required'),
});



function ContactForm({ onPlus }) {
  
    const nameFieldId = useId();
    const phoneFieldId = useId();

    const initialValues = {
    name: '',
    number: '',
  };

    const handleSumbit = (values, actions) => {
      onPlus({
        id: nanoid(),
        name: values.name,
        number: values.number,
      });
      actions.resetForm();
    };

    return (

      <Formik
        initialValues={ initialValues } 
        validationSchema={FeedbackSchema}
        onSubmit={handleSumbit}
      >

        <Form >
          <div className={s.fckForm}>
            <label className={s.titleLabel} htmlFor={phoneFieldId}>Name</label>
            <Field className={s.fieldInput} id={phoneFieldId} type="text" name="name" />
            <ErrorMessage
              name="name"
              component="span"
            />
            
            <label className={s.titleLabel} htmlFor={nameFieldId}>Phone</label>
            <Field className={s.fieldInput} id={nameFieldId} type="tel" name="number" />
            <ErrorMessage
              name="number"
              component="span"
            />
            
            
            
            <button className={s.btnSubForm} type="submit" >Add contact</button>
          </div>
        </Form>


      </Formik>
    );
  };


export default ContactForm