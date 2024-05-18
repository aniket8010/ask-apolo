import React, { useState } from 'react';
import { Modal} from 'antd';
import { SignUpForm } from './SignUpForm';
import { SignInForm } from './SignInForm';

function ModalComponent({ onClose }) {
  const [isSignUp, setIsSignUp] = useState(false);




  return (
    <Modal
      title={isSignUp ? "Sign Up" : "Sign In"}
      visible={true}
      onCancel={onClose}
      footer={null}
    >
      {isSignUp ? (
        <SignUpForm onSwitch={() => setIsSignUp(false)}  />
      ) : (
        <SignInForm onClose={onClose} onSwitch={() => setIsSignUp(true)} />
      )}
    </Modal>
  );
}



export default ModalComponent;