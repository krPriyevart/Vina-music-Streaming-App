// import jwt from "jsonwebtoken"; 

// export const getToken = async (email, user) => {
//     const token = jwt.sign({ identifier: user._id }, "secretHeYe");
//     return token;
// };

import jwt from "jsonwebtoken"; 

export const getToken = async (email, user) => {
    const token = jwt.sign(
        { sub: user._id, email },    // 'sub' field for the user ID and optional email in payload
        "secretHeYe",                // Replace with a more secure secret in production
        { expiresIn: "1h" }          // Token expires in 1 hour (adjust as needed)
    );
    return token;
};

