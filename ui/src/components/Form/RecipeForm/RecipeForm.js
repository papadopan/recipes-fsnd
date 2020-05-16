import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import { Input, Button } from "antd";
import * as Yup from "yup";

import { connect } from "react-redux";
import { addRecipe } from "../../../actions/recipe";
import { getAllCooks } from "../../../actions/cook";

const TextComponent = ({ field, form: { touched, errors }, ...props }) => (
  <div>
    <Input type="text" {...field} {...props} />
    {touched[field.name] && errors[field.name] && (
      <div className="error">{errors[field.name]}</div>
    )}
  </div>
);

const RecipeForm = (props) => {
  useEffect(() => {
    props.getAllCooks();
  }, []);

  if (props.cooks.length === 0) {
    return <div>Please add first a cook</div>;
  }
  return (
    <Formik
      initialValues={
        props.recipe
          ? props.recipe
          : {
              cook_id: "",
              title: "",
              description: "",
              category: "",
              portions: "",
              time: "",
              ingredients: [{ name: "", quantity: "", measurement: "" }],
            }
      }
      onSubmit={(values, actions) => {
        props.updateRecipe
          ? props.updateRecipe(values)
          : props.addRecipe(values);
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
            <option value="breakfast"> breakfast</option>
            <option value="brunch"> Brunch</option>
            <option value="lunch"> Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snack">Snack</option>
          </Field>
          <label>Created By:</label>
          <Field name="cook_id" as="select" placeholder="Select Cook">
            <option> Select Cook</option>
            {props.cooks.map((cook, index) => (
              <option value={cook.id}>
                {cook.first_name} {cook.last_name}
              </option>
            ))}
          </Field>
          <ErrorMessage name="category" component="div" />
          <Field
            name="portions"
            placeholder="Portions"
            component={TextComponent}
          />
          <Field
            name="time"
            placeholder="Time in mins"
            component={TextComponent}
          />
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
  cooks: state.cook.cooks,
});

const mapDispatchToProps = (dispatch) => ({
  addRecipe: (recipe) => dispatch(addRecipe(recipe)),
  getAllCooks: () => dispatch(getAllCooks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeForm);
