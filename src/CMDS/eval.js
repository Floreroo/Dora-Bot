const Discord = require('discord.js')
const { Kasake, Melphi, ZorGame} = require('../../util/devs')

const Base = require('../../base/Commands')

class Eval extends Base {

    constructor(client){
        super(client, {
            name: 'eval',
            description: 'Evalua el codigo',
            usage: 'eval <code>',
            category: 'Dev',
            cooldown: 2000,
            alias: ["e"],
            permLevel: 0,
            permission: "READ_MESSAGES"

        })
    }
    
async run (message, args) {


 //embed de token falso xd//
const tokenfalso = new Discord.MessageEmbed()
 .setTitle(`Evaluado en ` + client.ws.ping +"ms")
 .addField("Tipo", `\`\`\`js\n${'Trolieado'}\`\`\``)
 .addField("Entrada", `\`\`\`js\n${args.join(' ')}\`\`\``)
 .addField("Salida", `\`\`\`js\n${'ljcnkdjcnkfvnflejnfe.2dfndffefn :D'}\`\`\``)
 .setTimestamp()
 .setFooter(message.member.user.tag,  message.author.displayAvatarURL())
 .setColor('RANDOM')


    //embed de token falso xd//


   if(![Kasake, Melphi, ZorGame].includes(message.author.id)) return
  

  let code = args.join(' ')
  if(!code) return message.channel.send('Necesitas evaluar algo').then(m => m.delete({timeout: 4000}))

  const util = require('util');
        
  function clean(text) {
  if (typeof text === 'string')
  return text
  .replace(/`/g, '`' + String.fromCharCode(8203))
  .replace(/@/g, '@' + String.fromCharCode(8203))
  else return text
          
  }
          
  
  try {
          
  let output = clean(await eval(code));
  let type = typeof output;
  if (typeof output !== 'string') {
  output = util.inspect(output, { depth: 0 });
          
  }
          
  if (output.length >= 1020) {
  console.log(output)
  let long = new Discord.MessageEmbed()
  .setDescription(`\`\`\`fix\nLímites del Embed excedidos: verifique la consola. (${output.length} caracteres)\n\`\`\``)
  .setColor('RANDOM')
  message.channel.send(long)
  }
          
  while (true) {
          
  if (!output.toLowerCase().includes("token")) {
  
  break
          
  }
          
  output = output.replace(process.env.DISCORD_TOKEN, "A alguien que le gusta chupar pingo quiere ver mi token.")
          
  }
       
const embed1 = new Discord.MessageEmbed()
.setTitle(`Evaluado en ` + this.client.ws.ping +"ms")
.addField("Tipo", `\`\`\`prolog\n${type.substring(0, 1).toUpperCase() + type.substring(1)}\`\`\``)
.addField("Entrada", `\`\`\`js\n${args.join(' ')}\`\`\``)
.addField("Salida", `\`\`\`js\n${output}\`\`\``)
.setTimestamp()
.setFooter(message.member.user.tag,  message.author.displayAvatarURL())
.setColor('RANDOM')
message.channel.send(embed1)

  } catch(err) {
    const embed2 = new Discord.MessageEmbed()
     .setTitle('Error')
     .setTimestamp()
        .setColor('ff0000')
        .addField("Tipo", `\`\`\`js\n${err.name}\`\`\``)
        .addField("Codigo", `\`\`\`js\n${code}\`\`\``)
        .setFooter(message.member.user.tag,  message.author.displayAvatarURL())
    .addField("Error", `\`\`\`js\n${err.message}\`\`\``)
    message.channel.send(embed2)
    
     }
}};


module.exports = Eval