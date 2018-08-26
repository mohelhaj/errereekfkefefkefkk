const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Nothing`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
client.on('message' , message => {
if(message.content === 'عدد') {
    message.channel.send(`**عدد الاشخاص الموجودين بـ  الرومات الصوتيه : ${message.guild.members.filter(g => g.voiceChannel).size}**`);
}
});

client.on("message", message => {
        let args = message.content.split(" ").slice(1);
      if (message.content.startsWith(prefix + 'report')) {
            let user = message.mentions.users.first();
            let reason = args.slice(1).join(' ');
            let modlog = client.channels.find('name', 'report');
            if (!reason) return message.reply('**ضع سبباً مقنعاً**');
              if (message.mentions.users.size < 1) return message.reply('**يجب عليك منشن للعضو المراد الابلاغ عليه**').catch(console.error);
       
        if (!modlog) return message.reply('**لا يوجد روم بأسم report**');
        const embed = new Discord.RichEmbed()
          .setColor(0x00AE86)
          .setTimestamp()
          .addField('نوع الرسالة:', 'Report')
          .addField('المراد الابلاغ عليه:', `${user.username}#${user.discriminator} (${user.id}`)
          .addField('صاحب الابلاغ:', `${message.author.username}#${message.author.discriminator}`)
          .addField('السبب', reason);
          message.delete()
          return client.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
          console.log('[report] Send By: ' + message.author.username)
      }
      });

```
client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-admin") {
         if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply(`
         
         **لست من المشرفين لن يتم ارسال الرسالة إليك**
         
         
         `);
         message.channel.send('**لقد تم ارسال رسالة المساعدة في الرسائل الخاصة**');
            
    
         


 message.author.sendMessage(`
 **

╔[❖══════════════════════❖]╗
       اوامر المشرفين
╚[❖══════════════════════❖]╝

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 ❖ $kick <mention > ➾ لطرد الأعضاء
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 ❖ $clear ➾ لمسح الشات
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 
 ❖ $mute < mention > ➾ لإعطاء ميوت للإعضاء
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 ❖ $unmute <mention> ➾ لفك الميوت عن الأعضاء
 =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 
 ❖ $bc <message> ➾ لإرسال رسالة جماعية
 =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 ❖ $closeroms <message> ➾ لإغلاق الشات
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 
 ❖ $openroms <message> ➾ لفتح الشات
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 ❖ $server <message> ➾ لمعرفة نبذه عن السيرفر
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 ❖ $warn <message> ➾ لإعطاء انذار لأحد الأعضاء
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 ❖ $clear <message> ➾ لمسح الشات
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

`);

    }
});

client.login(process.env.BOT_TOKEN);
