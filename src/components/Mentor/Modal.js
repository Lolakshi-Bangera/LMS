import React, { useState } from 'react'

function Modal({open}) {
    if (!open) return null
   
  return (
    <div>
       <button onClick={onClose}> Close </button>
    </div>
  )
}

export default Modal
const LocalizedModal = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Change Password
      </Button>
      <Modal
        title="Change status"
        visible={visible}
        onOk={hideModal}
        onCancel={hideModal}
        okText="Submit"
        cancelText="Cancel"
      >
  <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  <Form.Label>Batch Name</Form.Label>
  <Form.Select aria-label="Default select example">
  <option> </option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
  </Form.Select>
 </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Batch ID</Form.Label>
    <Form.Select aria-label="Default select example">
  <option> </option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
</Form.Select>
  </Form.Group>
</Form>
      </Modal>
    </>
  );
};
