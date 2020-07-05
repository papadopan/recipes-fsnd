import React from "react";
import PropTypes from "prop-types";
import { Modal } from "antd";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";

const Modals = (props) => {
  // specify upload params and url for your files
  const getUploadParams = ({ meta }) => {
    return { url: `http://127.0.0.1:5000/api/image/recipe/${props.id}` };
  };

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => {
    console.log(status, meta, file);
  };

  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files) => {
    console.log(files.map((f) => f.meta));
  };
  return (
    <Modal
      title={props.title}
      visible={props.visible}
      onCancel={props.updateModal}
      footer={null}
    >
      <Dropzone
        getUploadParams={getUploadParams}
        onChangeStatus={handleChangeStatus}
        onSubmit={handleSubmit}
        accept="image/*"
      />
      {/* <form
        method="POST"
        enctype="multipart/form-data"
        action={`http://127.0.0.1:5000/api/image/recipe/${props.id}`}
      >
        <input id="file" name="recipe_cover" type="file" />
        <input type="submit" />
      </form> */}
    </Modal>
  );
};

Modals.propTypes = {};

export default Modals;
