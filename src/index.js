const dotenv = require('dotenv');
dotenv.config();
const Discord = require('discord.js');
const client = new Discord.Client();

async function mock(content){
    let contentMocked = "";
    for(let i = 0; i < content.length; i++){
        let rand = Math.floor(Math.random() * 2);
        if(rand == 0)
            contentMocked += content.charAt(i).toUpperCase();
        else
            contentMocked += content.charAt(i).toLowerCase();
    }
    return contentMocked;
}

/* CLIENT CONNECTION */
client.once('ready', () => {
    console.log('Mocking Spongebob is ready !');
});

client.login(process.env.TOKEN);

/* MESSAGE RECEIVED */
client.on('message', async message => {
    let messageReceived = message.content.trim();
    if(messageReceived.startsWith('-mock ')){
        let content = messageReceived.substring(6);
        let contentMocked = await mock(content);
        message.channel.send(contentMocked, {files: ['assets/images/Mocking_SpongeBob.png']}); //Mocking_SpongeBob.png
    }
});