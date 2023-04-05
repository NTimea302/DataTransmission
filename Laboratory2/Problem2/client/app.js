var app = new Vue({
    el: '#app',
    data: {
        users: [],
        usersService: null
    },
    created: function () {
        this.usersService = users();
        this.usersService.get().then(response => (this.users = response.data));
    },
    methods: {
        adduser: function() {
            const newUser = { name: "John Doe", city: "New York" };
            axios.post("http://localhost:3000/users", newUser)
              .then(response => {
                this.users.push(response.data);
                console.log("User added successfully!");
              })
              .catch(error => {
                console.error("Failed to add user:", error);
              });
        },
        deluser: function() {
            axios.delete(`http://localhost:3000/users/${index}`)
            .then(response => {
              this.users.splice(index, 1);
              console.log("User deleted successfully!");
            })
            .catch(error => {
              console.error("Failed to delete user:", error);
            });
        },
        moduser: function() {
            axios.put(`http://localhost:3000/users/${index}`, user)
            .then(response => {
              this.users.splice(index, 1, response.data);
              console.log("User updated successfully!");
            })
            .catch(error => {
              console.error("Failed to update user:", error);
            });
        }
    }
})