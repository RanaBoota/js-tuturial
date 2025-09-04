const user={
    username:"Boota",
    price:300,

    welcomeMessage:function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this)
    }
}

user.welcomeMessage()
user.username="sam"
user.welcomeMessage()