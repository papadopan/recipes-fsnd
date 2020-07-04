import React from "react";
import PropTypes from "prop-types";
import { Modal } from "antd";
import RecipeForm from "../RecipeForm";

const EditModal = (props) => {
  return (
    <Modal
      title="Edit Recipe"
      visible={props.visible}
      onCancel={props.updateModal}
      footer={null}
    >
      <RecipeForm
        recipe={props.recipe}
        updateRecipe={props.updateRecipe}
        id={props.id}
      />
    </Modal>
  );
};

EditModal.propTypes = {};

export default EditModal;
