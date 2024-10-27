import * as admin from "firebase-admin";
import * as serviceAccount from "../mobile-ecom-auth-firebase-adminsdk-prusm-b6000a06cd.json";

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  });
  
  export const auth=admin.auth();