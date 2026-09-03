const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '../data/tour.json');

// Get all users
const getAllUsers = () => {
    const data = fs.readFileSync(dataFilePath, 'utf-8');
    return JSON.parse(data).users;
};

// Get user by ID
const getUserById = (id) => {
    const users = getAllUsers();

    return users.find(user => user.id === id);
};

// Search users by travel preference
const getUsersByPreference = (preference) => {
    const users = getAllUsers();

    return users.filter(user =>
        user.travelPreference.toLowerCase() === preference.toLowerCase()
    );
};

// Add new user
const saveUser = (newUser) => {
    const data = JSON.parse(
        fs.readFileSync(dataFilePath, 'utf-8')
    );

    data.users.push(newUser);

    fs.writeFileSync(
        dataFilePath,
        JSON.stringify(data, null, 2),
        'utf-8'
    );
};

// Update user
const updateUser = (id, updatedUser) => {
    const data = JSON.parse(
        fs.readFileSync(dataFilePath, 'utf-8')
    );

    const index = data.users.findIndex(
        user => user.id === id
    );

    if (index !== -1) {
        data.users[index] = {
            ...data.users[index],
            ...updatedUser
        };

        fs.writeFileSync(
            dataFilePath,
            JSON.stringify(data, null, 2),
            'utf-8'
        );

        return data.users[index];
    }

    return null;
};

// Delete user
const deleteUser = (id) => {
    const data = JSON.parse(
        fs.readFileSync(dataFilePath, 'utf-8')
    );

    const index = data.users.findIndex(
        user => user.id === id
    );

    if (index !== -1) {
        const deletedUser = data.users.splice(index, 1)[0];

        fs.writeFileSync(
            dataFilePath,
            JSON.stringify(data, null, 2),
            'utf-8'
        );

        return deletedUser;
    }

    return null;
};

module.exports = {
    getAllUsers,
    getUserById,
    getUsersByPreference,
    saveUser,
    updateUser,
    deleteUser
};