import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import { Input, Button, InputNumber, Select } from "antd";
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
} from "../../common/FormComponents";

const { TextArea } = Input;
const { Option } = Select;

const options = [
  { value: "breakfast", label: "Breakfast" },
  { value: "lunch", label: "Lunch" },
  { value: "brunch", label: "Brunch" },
  { value: "Dinner", label: "Dinner" },
  { value: "snack", label: "Snack" },
];

const NumberComponent = ({ field, form: { touched, errors }, ...props }) => (
  <StyledInput>
    <label>{props.placeholder}:</label>
    <InputNumber
      {...field}
      {...props}
      onChange={(value) => props.onChange(value)}
    />
    {touched[field.name] && errors[field.name] && (
      <Error>{errors[field.name]}</Error>
    )}
  </StyledInput>
);

// const SelectComponent = ({ field, form: { touched, errors }, ...props }) => (
//   <StyledInput>
//     <label>{props.fieldPlaceholder}:</label>
//     <Select
//       style={{ marginLeft: "5px" }}
//       placeholder={props.placeholder}
//       onChange={(value) => props.onChange(value)}
//     >
//       {props.options.map((option, index) => (
//         <Option key={index} value={option.value}>
//           {option.label}
//         </Option>
//       ))}
//     </Select>
//     {touched[field.name] && errors[field.name] && (
//       <Error>{errors[field.name]}</Error>
//     )}
//   </StyledInput>
// );

const Img = styled.img`
  width: 200px;
  height: 200px;
`;

const StyledInput = styled.div`
  margin: 0.5em 0;
`;

const Error = styled.div`
  color: var(--color-error);
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
    props.getAllCooks();
  }, []);

  if (props.cooks.length === 0) {
    return (
      <StyledDiv>
        <Img src={empty} />
        <P>There is no cook, try to add a new one first...</P>
      </StyledDiv>
    );
  }
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
              fieldPlaceholder="This food would be an excellent choice as"
              placeholder="e.x. Lunch"
              component={SelectComponent}
              onChange={(value) => setFieldValue("category", value)}
              options={options}
            />
            <Field
              name="portions"
              placeholder="Portions"
              component={NumberComponent}
              onChange={(value) => setFieldValue("portions", value)}
            />
            <Field
              name="time"
              placeholder="Time in mins"
              component={NumberComponent}
              onChange={(value) => setFieldValue("time", value)}
            />
            <label>Ingredients</label>
            <FieldArray
              name="ingredients"
              render={(arrayHelpers) => (
                <div>
                  {values.ingredients.map((ingredient, index) => (
                    <div
                      key={index}
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <div>
                        <Field
                          index={index}
                          name={`ingredients[${index}].name`}
                          placeholder="Name"
                          component={TextComponent}
                        />
                        <ErrorMessage name={`ingredients[${index}].name`} />
                      </div>
                      <div>
                        <Field
                          index={index}
                          name={`ingredients[${index}]quantity`}
                          placeholder="Quantity"
                          component={TextComponent}
                        />
                        <ErrorMessage name={`ingredients[${index}].quantity`} />
                      </div>
                      <div>
                        <Field
                          index={index}
                          name={`ingredients[${index}]measurement`}
                          placeholder="Measurement"
                          component={TextComponent}
                        />
                        <ErrorMessage
                          name={`ingredients[${index}].measurement`}
                        />
                      </div>
                      <Button
                        size="medium"
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
