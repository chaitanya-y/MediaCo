# Install node and git. Make sure npm and git commands are working fine.
# Go to root and install run "npm install" command. This command will install the node modules.
# Go to services > constants.js file and change the bearer token that you get from the postman.
# Go to services > Endpoints.js file and change the pegaInfinityURL to your inifity server url.
# Run "npm run start" to start the project.


# Currently, we are facing CORS Issue error with the sample app. If you get CORS error while trying out  the app, run the app in  CORS disabled chrome window. 
# To open the CORS disabled window run the below command in the cmd(windows only)

#  "C:\Program Files\Google\Chrome\Application\chrome.exe" --disable-web-security --disable-gpu --user-data-dir=%LOCALAPPDATA%\Google\chromeTemp

# Above command will open the seperate chrome window which has CORS disabled. You can try the app in this window.

# We are trying to resolve this issue. Soon, we will have the solution.