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
    <div>
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

const RecipeForm = props => {
    return (
        <Formik
        initialValues={{title:"", description:"", category:""}}
        onSubmit={(values, actions)=>{
          console.log(values)
          actions.setSubmitting(false)
        }}
        validationSchema= {Yup.object({
          title: Yup.string()
          .max(50, "Title must be less than 50 characters")
          .required("Title is mandatory"),
          description: Yup.string()
          .max(200, "Description should be less than 200 characters")
          .required("Description is mandatory"),
          category: Yup.string()
          .required("Category is mandatory")
        })}
      >
        {({isSubmitting})=>(
        <Form>
          <Field name="title" placeholder="Title" component={TextComponent}/>
          <Field name="description" placeholder="description" component={TextAreaComponent}/>
          <Field name="category" as="select" placeholder="Category" >
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </Field>
          <ErrorMessage name="category" component="div" />
          <button disabled={isSubmitting} type="submit">Submit</button>
        </Form>
        )}
      </Formik>
    )
}

RecipeForm.propTypes = {

}

export default RecipeForm
