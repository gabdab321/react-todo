import React from 'react';
import {Button, Modal} from "@nextui-org/react";

const MyModal = ({open, onClose, onDelete, onCancel}) => {
    return (
        <Modal
            className="modal"
            onClose={onClose}
            blur
            animated
            open={open}
        >
            <p>Are you sure that you want to delete this task?</p>
            <div className="modal__button-container">
                <Button onPress={onDelete} shadow color="error" auto>Delete</Button>
                <Button onPress={onCancel} shadow color="primary" auto>Cancel</Button>
            </div>
        </Modal>
    );
};

export default MyModal;