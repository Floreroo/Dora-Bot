


module.exports = {
    nombre: "setwelcome",
    alias:  ["sw"],
    run: async (client, message, args) => {
        let Bienvenida = require('../database/models/bienvenidas')

if(!message.member.hasPermission("MANAGE_GUILD")){
    message.channel.send('No tienes permisos para usar este Comando.\n`Gestionar Servidor`') //Si no tiene permisos.
}

if(!args[0]) return message.channel.send('Debes mencionar un Canal.')//Si no escribe nada, retorna el mensaje

let canal = message.mentions.channels.first()//La mencion del canal
let NewWelcome = await Bienvenida.findOne({guildID: message.guild.id}).exec()//Vemos si ya hay algo guardado
if(NewWelcome){ 
await NewWelcome.updateOne({guildID: message.guild.id, channelID: canal.id, guildName: message.guild.name})// Si ya hay alguna bienvenida guardada

let embed = new MessageEmbed()
.setDescription(`El canal de Bienvenidas es**${canal.name}**`)
.setColor('RANDOM')
.setFooter(message.guild.name, message.guild.iconURL({size: 2048, dynamic: true}))
message.channel.send(embed)

} else {

let NewBienvenida2 = new Bienvenida({guildID: message.guild.id, channelID: canal.id}) //Colocamos los datos
await NewBienvenida2.save()

let embed2 = new MessageEmbed()
.setDescription(`El canal de Bienvenidas es **${canal.name}**`)
.setColor('RANDOM')
.setFooter(message.guild.name, message.guild.iconURL({size: 2048, dynamic: true}))
message.channel.send(embed2)}
    }
}