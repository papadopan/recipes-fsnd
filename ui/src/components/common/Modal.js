import React from "react";
import PropTypes from "prop-types";
import { Modal } from "antd";

const Modals = (props) => {
  return (
    <Modal
      title={props.title}
      visible={props.visible}
      onCancel={props.updateModal}
      footer={null}
    >
      <form
        method="POST"
        enctype="multipart/form-data"
        action={`http://127.0.0.1:5000/api/image/recipe/${props.id}`}
      >
        <input id="file" name="recipe_cover" type="file" />
        <input type="submit" />
      </form>
    </Modal>
  );
};

Modals.propTypes = {};

export default Modals;
