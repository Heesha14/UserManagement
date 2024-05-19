import { Request, Response } from "express";import { users } from "./sampledata";

const getAllUsers = (req: Request, res: Response) => {
    return res.json({
        message: "Users retrieved successfully!",
        data: users,
    });
};

const getUserById = (req: Request, res: Response) => {
    const { id } = req.params;

    const user = users.find((user) => user.id === parseInt(id));

    if (!user)
        return res.json({
            message: "User not found!",
        });

    return res.json({
        message: "User retrieved successfully!",
        data: user,
    });
};

const addUser = (req: Request, res: Response) => {
    const { name, email } = req.body;

    if (!name || !email) {
        res.status(500);
        return res.json({
            message: "Name and email is required",
        });
    }

    return res.json({
        message: "User added successfully",
        data: {
            id: users.length + 1,
            name,
            email,
        },
    });
};

export default {
    addUser,
    getAllUsers,
    getUserById,
};
