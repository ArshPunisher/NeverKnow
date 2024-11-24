// Function for validate username
export const isValidUsername = (username: string): boolean => {
    const usernameRegex = /^[A-Za-z0-9_]+$/;
    return usernameRegex.test(username);
  };
  
// Function of validate email
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Function to validate a password based on length (e.g., at least 8 characters)
export const isValidPassword = (password: string): boolean => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_])(?=.{8,})/.test(password);
};

// Function to check if the password contains at least one number
export const isPasswordContainNumber = (password: string): boolean => {
    const numberRegex = /[0-9]/;
    return numberRegex.test(password);
};

// Function to check if the password contains at least one special character
export const isPasswordContainSpecialChar = (password: string): boolean => {
    return /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(
        password,
      );
};

// Function to check if the password contains at least one capital letter
export const isPasswordContainCapitalChar = (password: string): boolean => {
    const capitalCharRegex = /[A-Z]/;
    return capitalCharRegex.test(password);
};
