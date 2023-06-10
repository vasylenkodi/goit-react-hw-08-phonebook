const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getUserEmail = state => state.auth.user.email;
const getToken = state => state.auth.token;
const getIsLoading = state => state.auth.isLoading;

const authSelectors = {
    getIsLoggedIn,
    getUserName,
    getUserEmail,
    getToken,
    getIsLoading,
}

export default authSelectors;