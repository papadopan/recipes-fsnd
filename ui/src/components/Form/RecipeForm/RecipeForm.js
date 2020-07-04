import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import { Button } from "antd";
import * as Yup from "yup";
import styled from "styled-components";
import empty from "../../../utils/images/empty.svg";

import { connect } from "react-redux";
import { addRecipe } from "../../../actions/recipe";
import { getAllCooks, cooksFail } from "../../../actions/cook";

import {
  TextComponent,
  TextAreaComponent,
  SelectComponent,
  NumberComponent,
} from "../../common/FormComponents";

const options = [
  { value: "vegeterian", label: "Vegeterian" },
  { value: "vegan", label: "Vegan" },
  { value: "chicken", label: "Chicken" },
  { value: "porc", label: "Porc" },
  { value: "beef", label: "Beef" },
  { value: "pasta", label: "Pasta" },
  { value: "salad", label: "Salad" },
  { value: "sweet", label: "Sweet" },
];

const Img = styled.img`
  width: 200px;
  height: 200px;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const P = styled.p`
  font-size: 2em;
  margin: 1em;
`;
const RecipeForm = (props) => {
  useEffect(() => {
    // props.getAllCooks();
  }, []);

  return (
    <StyledDiv>
      <Formik
        initialValues={
          props.recipe
            ? props.recipe
            : {
                title: "",
                description: "",
                category: "",
                portions: "",
                time: "",
                ingredients: [{ name: "", quantity: "", measurement: "" }],
                sections: [{ name: "" }],
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
            .required("There is no recipe without a title"),
          description: Yup.string().max(
            200,
            "Description should be less than 200 characters"
          ),
          category: Yup.string().required("Category is mandatory"),
          time: Yup.string().required("Time is a required field"),
          portions: Yup.number()
            .min(1, "Recipe should be at least for one person")
            .required("Portions is a required field"),
          sections: Yup.array().of(
            Yup.object().shape({
              name: Yup.string()
                .min(1, "Step is very short")
                .required("Required"),
            })
          ),
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
        {({ isSubmitting, handleSubmit, values, setFieldValue }) => (
          <Form>
            <Field name="title" placeholder="Title" component={TextComponent} />
            <Field
              name="description"
              placeholder="Give some details about the recipe and its history ..."
              component={TextAreaComponent}
            />
            <Field
              name="category"
              fieldPlaceholder="I would cook this recipe for"
              placeholder="e.x. Lunch"
              component={SelectComponent}
              onChange={(value) => setFieldValue("category", value)}
              options={options}
            />
            <Field
              name="portions"
              placeholder="e.x 4"
              fieldPlaceholder="I would cook this recipe for"
              followingPlaceholder="people"
              component={NumberComponent}
              onChange={(value) => {
                if (parseInt(value)) {
                  setFieldValue("portions", value);
                }
              }}
            />
            <Field
              name="time"
              placeholder="e.x 60"
              fieldPlaceholder="I would cook this recipe in"
              followingPlaceholder="minutes"
              component={NumberComponent}
              onChange={(value) => setFieldValue("time", value)}
            />
            <h2>Ingredients List</h2>
            <FieldArray
              name="ingredients"
              render={(arrayHelpers) => (
                <div style={{ marginBottom: "50px" }}>
                  {values.ingredients.map((ingredient, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ marginRight: "5px" }}>
                        <Field
                          index={index}
                          name={`ingredients[${index}].name`}
                          placeholder="Name"
                          component={TextComponent}
                          margin="0 0 5px 0 "
                        />
                        <ErrorMessage name={`ingredients[${index}].name`} />
                      </div>
                      <div style={{ marginRight: "5px" }}>
                        <Field
                          index={index}
                          name={`ingredients[${index}]quantity`}
                          placeholder="Quantity"
                          component={TextComponent}
                          margin="0 0 5px 0 "
                        />
                        <ErrorMessage name={`ingredients[${index}].quantity`} />
                      </div>
                      <div>
                        <Field
                          index={index}
                          name={`ingredients[${index}]measurement`}
                          placeholder="Measurement"
                          component={TextComponent}
                          margin="0 0 5px 0 "
                        />
                        <ErrorMessage
                          name={`ingredients[${index}].measurement`}
                        />
                      </div>
                      <Button
                        size="medium"
                        style={{ marginLeft: "5px" }}
                        onClick={() => arrayHelpers.remove(index)}
                      >
                        x
                      </Button>
                    </div>
                  ))}
                  <div>
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
                </div>
              )}
            />

            <h2>Steps to Cook</h2>
            <FieldArray
              name="sections"
              render={(arrayHelpers) => (
                <div style={{ marginBottom: "50px" }}>
                  {values.sections.map((section, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ marginRight: "5px", width: "100%" }}>
                        <Field
                          index={index}
                          name={`sections[${index}].name`}
                          placeholder="Explain the recipe step by step"
                          component={TextAreaComponent}
                          margin="0 0 5px 0 "
                          rows={4}
                        />
                        <ErrorMessage name={`ingredients[${index}].name`} />
                      </div>

                      <Button
                        size="medium"
                        style={{ marginLeft: "5px" }}
                        onClick={() => arrayHelpers.remove(index)}
                      >
                        x
                      </Button>
                    </div>
                  ))}
                  <div>
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
                      Add new step
                    </Button>
                  </div>
                </div>
              )}
            />

            <Button
              onClick={handleSubmit}
              disabled={isSubmitting}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </StyledDiv>
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
