const users = [];

const addUser = (user) => [...users, user];

const removeUser = (id) => users.filter((user) => user.id !== id);

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);
