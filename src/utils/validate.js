export const CheckValidation = (email, password) => {
    const emailValidation = /^((?!\.)[\w-_.]*[^.])@(\w+)(\.\w+(\.\w+)?[^.\W])$/gim.test(email);
    const passwordValidation = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);
  
    if (!emailValidation) return "Invalid email format";
    if (!passwordValidation) return "Password must be 8-16 characters and include upper, lower, number, and special character";
  
    return null;
  };
  