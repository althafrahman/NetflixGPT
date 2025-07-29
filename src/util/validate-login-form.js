export function validateLoginForm(isSignIn, fullname, email, password) {
    let errors = '';

    // Check if the user is signing up and validate fullname
    if ((!fullname || !fullname.trim()) && !isSignIn) {
        errors = "Fullname is required.";
    }

    // Validate email and password
    if (!email || !email.trim()) {
        errors = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors = "Email format is invalid.";
    }

    if (!password || !password.trim()) {
        console.log("this is pass", password);

        errors = "Password is required.";
    } else if (password.length < 8 || password.length > 15) {
        errors = "Password must be between 8 and 15 characters.";
    }

    return errors;
}