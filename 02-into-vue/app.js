const { createApp, ref } = Vue;

const app = createApp({
    template:`
        <h1> {{message}} </h1>
        <p>Despe app {{author}}</p>
    `,
    setup(){
        console.log('setup desde vue-ciclo de vida');
        const message = ref("Im civil");
        const author = ref("noDespe");
        setTimeout(()=>{
            message.value = "Im spy";
            author.value = "Despe";
        }, 1000);
    return { message, author };
    }}
);

app.mount('#myApp');
