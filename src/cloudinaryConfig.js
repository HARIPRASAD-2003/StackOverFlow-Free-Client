import { CloudinaryContext } from 'cloudinary-react';

const cloudinaryConfig = {
  cloudName: 'Tech',
  apiKey: '344914161581168',
  apiSecret: 'GTFYlVInT7dA9V1_29YF_LCQhNI',
};

const CloudinaryContextProvider = ({ children }) => (
  <CloudinaryContext {...cloudinaryConfig}>{children}</CloudinaryContext>
);

export default CloudinaryContextProvider;
