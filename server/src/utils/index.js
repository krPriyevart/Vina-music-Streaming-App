import jwt from "jsonwebtoken"; 

export const getToken = async (email, user) => {
    const token = jwt.sign({ identifier: user._id }, "secretHeYe");
    return token;
};
