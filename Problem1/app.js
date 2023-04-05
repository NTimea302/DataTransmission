var app = new Vue({
    el: '#app',
    data: {
        message: '',
        result: ''
    },
    methods: {
        process: function () {
            if (this.message === '123') {
                console.log(this.message);
                this.result = "Message is equal to: " + this.message;
            }
        }
    }
})
