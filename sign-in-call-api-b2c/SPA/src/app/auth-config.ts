import { LogLevel, Configuration, BrowserCacheLocation } from '@azure/msal-browser';

const isIE = window.navigator.userAgent.indexOf("MSIE ") > -1 || window.navigator.userAgent.indexOf("Trident/") > -1;
 
export const b2cPolicies = {
     names: {
         signUpSignIn: "B2C_1_sign_up",
         editProfile: "B2C_1_edit_profile"
     },
     authorities: {
         signUpSignIn: {
             authority: "https://hwangb2c.b2clogin.com/hwangb2c.onmicrosoft.com/B2C_1_sign_up",
         },
         editProfile: {
             authority: "https://hwangb2c.b2clogin.com/hwangb2c.onmicrosoft.com/B2C_1_edit_profile"
         }
     },
     authorityDomain: "hwangb2c.b2clogin.com"
 };
 
export const msalConfig: Configuration = {
     auth: {
         clientId: 'a3142eab-4e31-47f1-8624-196e5a94b548', 
         authority: b2cPolicies.authorities.signUpSignIn.authority, 
         knownAuthorities: [b2cPolicies.authorityDomain], 
         redirectUri: 'http://localhost:4200', 
     },
     cache: {
         cacheLocation: BrowserCacheLocation.LocalStorage, 
         storeAuthStateInCookie: isIE, 
     },
     system: {
         loggerOptions: {
             loggerCallback(logLevel: LogLevel, message: string) {
                 console.log(message);
             },
             logLevel: LogLevel.Verbose,
             piiLoggingEnabled: false
         }
     }
 }


export const protectedResources = {
  todoListApi: {
    endpoint: "https://localhost:44351/api/todolist",
    scopes: ["https://hwangb2c.onmicrosoft.com/31a16495-2f19-4273-973d-d85e8450cfdc/access_on_behalf_of_user"],
  },
}


export const loginRequest = {
  scopes: []
};