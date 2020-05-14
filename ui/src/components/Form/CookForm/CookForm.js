import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Form, Field, ErrorMessage, validateYupSchema } from "formik";
import { Input , Select, Button} from 'antd';
import * as Yup from 'yup';


const TextComponent = ({
    field, 
    form: { touched, errors }, 
    ...props
  }) => (
    <div style={{margin:"10px"}}>
      <Input type="text" {...field} {...props} />
      {touched[field.name] &&
        errors[field.name] && <div className="error">{errors[field.name]}</div>}
    </div>
  );
  
  const TextAreaComponent = ({
    field, 
    form: { touched, errors }, 
    ...props
  }) => (
    <div>
      <Input type="text" {...field} {...props} />
      {touched[field.name] &&
        errors[field.name] && <div className="error">{errors[field.name]}</div>}
    </div>
  );

const CookForm = props => {
    return (
        <Formik
        initialValues={{first_name:"", last_name:"", email:"", passwprd:"", country:"", city:""}}
        onSubmit={(values, actions)=>{
          console.log(values)
          actions.setSubmitting(false)
        }}
        validationSchema= {Yup.object({
          first_name: Yup.string()
          .max(20, "First Name can not be that long")
          .required("First name is mandatory"),
          last_name: Yup.string()
          .max(20, "Last Name can not be that long")
          .required("Last name is mandatory"),
          description: Yup.string()
          .max(200, "Description should be less than 200 characters")
          .required("Description is mandatory"),
          category: Yup.string()
          .required("Category is mandatory")
        })}
      >
        {({isSubmitting})=>(
        <Form>
          <Field name="first_name" placeholder="First Name" component={TextComponent}/>
          <Field name="last_name" placeholder="Last Name" component={TextComponent}/>
          <Field name="email" placeholder="E-mail" component={TextComponent}/>
          <Field name="password" placeholder="Password" component={TextComponent}/>
          <Field name="country" placeholder="Country" component={TextComponent}/>
          <Field name="city" placeholder="City" component={TextComponent}/>
          <button disabled={isSubmitting} type="submit">Submit</button>
        </Form>
        )}
      </Formik>
    )
}

CookForm.propTypes = {

}

export default CookForm
