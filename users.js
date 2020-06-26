const users = [];

const removeWhiteSpaceAndLowerCase = (s) => s.replace(/ /g, "").toLowerCase();

const addUser = ({ id, name, room }) => {
    name = removeWhiteSpaceAndLowerCase(name);
    room = removeWhiteSpaceAndLowerCase(room);

    const existingUser = users.find(
        (user) => user.room === room && user.name === name
    );

    if (existingUser) return { error: "Username is taken" };
    users.push({ id, name, room });
};

const removeUser = (id) => users.filter((user) => user.id !== id);

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);
