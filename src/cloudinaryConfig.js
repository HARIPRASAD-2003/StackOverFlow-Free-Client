import { CloudinaryContext } from 'cloudinary-react';

const cloudinaryConfig = {
  cloudName: 'dalle2',
  apiKey: '444668288941939',
  apiSecret: 'a9kjuDUM2msD1vyM0_agRbIn23E',
};

const CloudinaryContextProvider = ({ children }) => (
  <CloudinaryContext {...cloudinaryConfig}>{children}</CloudinaryContext>
);

export default CloudinaryContextProvider;
