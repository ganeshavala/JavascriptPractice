const greeting = {
    fullname: "Avala Ganesh",
    welcome_message: function() {
        console.log(`${this.message} MR.${this.name}`);
    }

}

const Greet = Object.create(greeting);
// const Greeter =new greeting;
Greet.message ="you are an absolute genius. Please keep on try and look for the success";
Greet.name = Greet.fullname;

console.log(Greet.welcome_message());