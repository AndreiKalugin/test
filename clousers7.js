function createUserManager (){
    const users = {};
    return {
        addUser: function (id, name) {
            users[id] = name;
        },
        getUser: function (id) {
            return users[id]
        },
        updateUser: function (id, name) {
            users[id] = name;
        },
        deleteUser: function (id) {
            delete users[id]
        }
    };

}

const manager = createUserManager()