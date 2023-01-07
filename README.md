# __📖Redux Library Account__
🔐 A Library Account to add and rate books implementing `Redux Toolkit` with `httpOnly` `JWT` Authentication

## __🔑Users need to signup before adding books to their library__

<img src="https://github.com/trial-pyth/Redux-Library-Account-JWT/blob/master/img/register-login.gif?raw=true" alt="signup" width=750 height=400/>

## __Once a user logd in to their account a JWT token is stored as a `cookie`. This cookie is used to verify the users id and authorize actions__

<img src="https://raw.githubusercontent.com/trial-pyth/Redux-Library-Account-JWT/master/img/login-jwt-token.PNG" alt="" width=600 height=300 />

## __User can login and logout with their creentials and their `JWT Access Token` is stored until they are logged out__

<img src="https://raw.githubusercontent.com/trial-pyth/Redux-Library-Account-JWT/master/img/login-logout.gif" alt="" width=600 height=300 />

## __💽 User database is stored in a `MongoDB` Server__

<img src="https://raw.githubusercontent.com/trial-pyth/Redux-Library-Account-JWT/master/img/mongodb-user.PNG" alt="" width=400/>

## __Registering multiple account with the same name denies signup__

<img src="https://raw.githubusercontent.com/trial-pyth/Redux-Library-Account-JWT/master/img/user-exists.gif" alt="" width=600 height=300/>

## __All data added by the user is managed by Redux State Management Toolkit__

<img src="https://raw.githubusercontent.com/trial-pyth/Redux-Library-Account-JWT/master/img/redux-devtools.PNG" alt="" width=500/>

## __Users can add and delete books as long as they are not logged out and `JWT Token` is present__

<img src="https://raw.githubusercontent.com/trial-pyth/Redux-Library-Account-JWT/master/img/add-delete.gif" alt="add-delete" width=600 height=300 />

## __If users try to edit books without logging in or without a `JWT Token` they will be redirected__

<img src="https://raw.githubusercontent.com/trial-pyth/Redux-Library-Account-JWT/master/img/illegal-changes.gif" alt="illegal" width=600 height=300/>

## __Accessing Protected routes without a `JWT Token` will be redirected__

<img src="https://raw.githubusercontent.com/trial-pyth/Redux-Library-Account-JWT/master/img/home-direct.gif" alt="home-direct" width=500 height=300 />
