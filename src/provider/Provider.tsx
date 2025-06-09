import React from "react";
import * as ReactRedux from "react-redux";

import { GoogleOAuthProvider } from "@react-oauth/google";
import envConfig from "../config/env.config";
import { Toaster } from "sonner";
type TProvider = {
  children: React.ReactNode;
};

export default function Provider({ children }: TProvider) {
  return (
 
      <GoogleOAuthProvider clientId={""}>
    {
        children
    }
     <Toaster />
      </GoogleOAuthProvider>
     
   
  );
}
