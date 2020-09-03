const Discord = require('discord.js')


const Base = require('../../base/Commands')

class rolelist extends Base {
    constructor(client){
        super(client, {
            name: 'rolelist',
            description: 'Muestra los roles del servidor',
            usage: '',
            category: 'Utilidad',
            cooldown: 2000,
            alias: ["r-l"],
            permLevel: 0,
            permission: "READ_MESSAGES"

        })
    }
    
run(message, args) {

    let pene = this.client.guilds.resolve(args[0])
        let roles =  pene.roles.cache.filter(x => !x.managed).map(x => x).sort((a, b) => b.position - a.position || parseInt(a.id.slice(0, -10)) - parseInt(b.id.slice(0, -10)) || parseInt(a.id.slice(10)) - parseInt(b.id.slice(10)).first(2)[1]).join("\n")
    const embed = new Discord.MessageEmbed()
    .setAuthor(pene.name, pene.iconURL())
    .addField("Roles", roles.length > 1000 ? roles.slice(0, 1000)  + "\n Y muchos mas" : roles)
    .setTimestamp()
    .setColor('RANDOM')
    .setFooter("Pedido por: " + message.member.user.tag, message.author.displayAvatarURL())
    message.channel.send(embed)
     }
 }

 module.exports = rolelist