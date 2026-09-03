const userModel = require('../model/userModel');

// Get all users
const getAllUsers = (req, res) => {
    const users = userModel.getAllUsers();

    res.json(users);
};

// Get user by ID
const getUserById = (req, res) => {
    const id = parseInt(req.params.id);

    const user = userModel.getUserById(id);

    if (!user) {
        return res.status(404).json({
            message: 'User not found'
        });
    }

    return res.json(user);
};

// Search users by travel preference
const getUsersByPreference = (req, res) => {
    const preference = req.query.preference;

    const users = userModel.getUsersByPreference(preference);

    if (users.length === 0) {
        return res.status(404).json({
            message: 'No users found matching the preference'
        });
    }

    return res.json(users);
};

// Create new user
const createUser = (req, res) => {
    const newUser = req.body;

    userModel.saveUser(newUser);

    return res.status(201).json({
        message: 'User created successfully'
    });
};

// Update user
const updateUser = (req, res) => {
    const id = parseInt(req.params.id);

    const updatedUser = req.body;

    const user = userModel.updateUser(id, updatedUser);

    if (!user) {
        return res.status(404).json({
            message: 'User not found'
        });
    }

    return res.json(user);
};

// Delete user
const deleteUser = (req, res) => {
    const id = parseInt(req.params.id);

    const deletedUser = userModel.deleteUser(id);

    if (!deletedUser) {
        return res.status(404).json({
            message: 'User not found'
        });
    }

    return res.json({
        message: 'User deleted successfully',
        deletedUser
    });
};

module.exports = {
    getAllUsers,
    getUserById,
    getUsersByPreference,
    createUser,
    updateUser,
    deleteUser
};