const MyNameApp = {
    data(){
        return{
            name: "",
            age: 15,
            input_name: ""
        }
    },
    methods: {
        submitForm(e){

            e.preventDefault()
            
            console.log("Caiu Aqui")
        
            this.name = this.input_name
        }
    }
}
Vue.createApp(MyNameApp).mount("#app")