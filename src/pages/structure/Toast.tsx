import React from 'react';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface CustomToastProps {
  message: string;
}

const CustomToast: React.FC<CustomToastProps> = ({ message }) => {
  return (
    <div>
      {message}
    </div>
  );
};

const CustomToastNotification: React.FC<CustomToastProps> = ({ message }) => {
  return toast(<CustomToast message={message} />);
};

export default CustomToastNotification;
