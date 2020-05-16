import React from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import { Input, Select, Button, InputNumber } from "antd";
import * as Yup from "yup";

import { connect } from "react-redux";
import { addRecipe } from "../../../actions/recipe";

const TextComponent = ({ field, form: { touched, errors }, ...props }) => (
  <div>
    <Input type="text" {...field} {...props} />
    {touched[field.name] && errors[field.name] && (
      <div className="error">{errors[field.name]}</div>
    )}
  </div>
);

const RecipeForm = (props) => {
  return (
    <Formik
      initialValues={{
        cook_id: "1",
        title: "",
        description: "",
        category: "",
        portions: "",
        time: "",
        ingredients: [{ name: "", quantity: "", measurement: "" }],
      }}
      onSubmit={(values, actions) => {
        props.addRecipe(values);
        actions.setSubmitting(false);
      }}
      validationSchema={Yup.object({
        title: Yup.string()
          .max(50, "Title must be less than 50 characters")
          .required("Title is mandatory"),
        description: Yup.string()
          .max(200, "Description should be less than 200 characters")
          .required("Description is mandatory"),
        category: Yup.string().required("Category is mandatory"),
        time: Yup.string().required("Time is a required field"),
        portions: Yup.string()
          .min(1, "Recipe should be at least for one person")
          .max(15, "Seems that a recipe can be up to 15 people")
          .required("Portions is a required field"),
        ingredients: Yup.array()
          .of(
            Yup.object().shape({
              name: Yup.string()
                .min(1, "Name is very short")
                .required("Required"),
              quantity: Yup.string().required("Quantity is required"),
              measurement: Yup.string()
                .min(1, "Measurement is really short")
                .max(20, "Very long measurement")
                .required("Quantity is required"),
            })
          )
          .required("Required"),
      })}
    >
      {({ isSubmitting, handleSubmit, values }) => (
        <Form>
          <Field name="title" placeholder="Title" component={TextComponent} />
          <Field
            name="description"
            placeholder="description"
            component={TextComponent}
          />
          <label>Category:</label>
          <Field name="category" as="select" placeholder="Category">
            <option> Fill in Category</option>
            <option value="breakfast"> Breakfast</option>
            <option value="brunch"> Brunch</option>
            <option value="lunch"> Lunch</option>
            <option value="dinner"> Dinner</option>
            <option value="snak"> snak</option>
          </Field>
          <ErrorMessage name="category" component="div" />
          <Field
            name="portions"
            placeholder="Portions"
            component={TextComponent}
          />
          <Field name="time" placeholder="Time" component={TextComponent} />
          <label>Ingredients</label>
          {console.log("Values", values)}
          <FieldArray
            name="ingredients"
            render={(arrayHelpers) => (
              <div>
                {values.ingredients.map((ingredient, index) => (
                  <div key={index}>
                    <Field
                      index={index}
                      name={`ingredients[${index}].name`}
                      placeholder="Name"
                    />
                    <ErrorMessage name={`ingredients[${index}].name`} />
                    <Field
                      index={index}
                      name={`ingredients[${index}]quantity`}
                      placeholder="Quantity"
                    />
                    <ErrorMessage name={`ingredients[${index}].quantity`} />
                    <Field
                      index={index}
                      name={`ingredients[${index}]measurement`}
                      placeholder="Measurement"
                    />
                    <ErrorMessage name={`ingredients[${index}].measurement`} />
                    <Button
                      type="button"
                      onClick={() => arrayHelpers.remove(index)}
                    >
                      x
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  onClick={() =>
                    arrayHelpers.push({
                      name: "",
                      quantity: "",
                      measurement: "",
                    })
                  }
                >
                  Add new ingredient
                </Button>
              </div>
            )}
          />
          <button onClick={handleSubmit} disabled={isSubmitting} type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

RecipeForm.propTypes = {};

const mapStateToProps = (state) => ({
  categories: state.recipe.categories,
});

const mapDispatchToProps = (dispatch) => ({
  addRecipe: (recipe) => dispatch(addRecipe(recipe)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeForm);
