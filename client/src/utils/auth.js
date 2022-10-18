// use this to decode a token and get the user's information out of it
import decode from 'jwt-decode';

// create a new class to instantiate for a user
class AuthService {
    // get user data
    getProfile() {
        return decode(this.getToken());
    }
    //this function is checking to see if the token and it's still valid
    loggedIn() {
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token);
    }
    //checking if the token is still valid or expired.
    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) {
                return true;
            } else return false;
            
        } catch (err) {
        return false
     }
    }
    //this function grabs the JSON Web token from the local storage
    getToken() {
        return localStorage.getItem('id_token');
    }

    //the property that this function is taking is the name of the token that is stored in the localstorage.
    login(idToken) {
        //id_token is coming from the Server and when the user logs in or signs up it provides a token where then we set that in the localStorage. 
        localStorage.setItem('id_token', idToken);
        //After login, we will take the user back to the home/about page
        window.location.assign('/');
    }

    logout() {
        // Clear user token and profile data from localStorage
        localStorage.removeItem('id_token');
        // this will reload the page and reset the state of the application
        window.location.assign('/');
    }
}

export default new AuthService();