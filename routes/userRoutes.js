const express = require('express');

const router = express.Router();

const userController = require('../controller/userController');

// Get all users
router.get('/users', userController.getAllUsers);

// Search users by travel preference
router.get('/users/search', userController.getUsersByPreference);

// Get a specific user by ID
router.get('/users/:id', userController.getUserById);

// Create a new user
router.post('/users', userController.createUser);

// Update a user
router.put('/users/:id', userController.updateUser);

// Delete a user
router.delete('/users/:id', userController.deleteUser);

module.exports = router;