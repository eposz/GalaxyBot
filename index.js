const Discord = require('discord.js');
const ms = require('ms')
const bot = new Discord.Client();
const config = require('./config.json');
const moment = require('moment');
require('moment-duration-format');
const { version } = require('discord.js');

bot.on('message', async message => {
   // this sets the prefix
    let prefix = "g!";
    let stg = "g!setgame";
    let winter = "cool kid";
    let cate = "cool kid too";
    let teamav = "nerd";
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const swearWords = ["nig nog", "nigger", "negro", "n1g n0g", "n3gr0", "negr0", "n1gger", "n1g nog", "nig n0g", "n.i.g.g.e.r", "n.1.g.g.e.r", "n.i.g.g.3.r", "n.1.g.g.3.r", "n 1 g g 3 r", "n i g g 3 r", "n 1 g g e r", "n i g g e r", "wetback", "faggot", "nlgger", "nlgg3r", "testicles", "penis", "p3n1s", "p3nis", "pen1s", "vagina", "vag1na", "cunt", "v@gina", "v@g1na", "t3st1cl3s", "test1cl3s", "t3sticl3s", "t3sticles", "t3sticles", "test1cles", "testicl3s", "cuck", "c uck", "c u ck", "c u c k", "cu ck", "cuc k", "shit", "sh1t", "s h i t", "s h 1 t", "slag", "sl@g", "slut", "retard", "nignog"];
    const swearReply = [
          "You looking for a fight? [Don't Swear]",
          "I'll smack you! [Don't Swear]",
          "Don't Swear",
          "Don't be a fool! [Don't Swear]",
          "I'll bounty wipe you! [Don't Swear]",
          "Saying stuff like this would probably get you muted xd [Don't Swear]",
          "I'm running out of random messages to send [Don't Swear]",
          "The cake was a lie [Don't Swear]",
          "Don't Swear",
          "I'll smack you again [Don't Swear]"];
    var vulgarReply = swearReply[Math.floor(Math.random() * 10) +1];
    
    
    const clean = text => {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
    
    if(swearWords.some(word => message.content.toLowerCase().includes(word)) ) {
    if(message.author.id === "134133271750639616") return;
    if(message.guild.id !== "204965774618656769") return;
    if(message.author.id === "338397690641645568") return
    bot.channels.get("357904007630684171").send({embed: {
  color: 501264,
  description: `${message.author.username} with an id of ${message.author.id} \`${bot.ping.toFixed(0)}ms\` was caught by the filter saying \`${message.content}\``
  }});
    message.reply(vulgarReply);
    message.delete();
}
    if (!message.content.startsWith(prefix)) return;
    if (message.author.bot) return;
    if (message.author.id === "221602423746199552") return message.channel.send("para is banned from using this bot")
    if (message.channel.id === "217786280895971330" && message.author.id !== "200627218299355136" && message.author.id !== "151829152239058945" && message.author.id !== "214360468058406912" && message.author.id !== "174927339354849280" && message.author.id !== "184192896751239170" && message.author.id !== "193982780378447872" && message.author.id !== "179091809111113728" && message.content.toLowerCase() !== prefix + "apoc" && !message.content.toLowerCase().startsWith(prefix +"kick") && !message.content.toLowerCase().startsWith(prefix +"warn") && !message.content.toLowerCase().startsWith(prefix +"mute") && !message.content.toLowerCase().startsWith(prefix +"ban")) return message.channel.send(`${message.author.username}, please use bot commands in <#204966054462619650>`)
    if (message.channel.id === "204965774618656769" && message.author.id !== "200627218299355136" && message.author.id !== "151829152239058945" && message.author.id !== "214360468058406912" && message.author.id !== "174927339354849280" && message.author.id !== "184192896751239170" && message.author.id !== "193982780378447872" && message.author.id !== "179091809111113728" && message.content.toLowerCase() !== prefix + "apoc" && !message.content.toLowerCase().startsWith(prefix +"kick") && !message.content.toLowerCase().startsWith(prefix +"warn") && !message.content.toLowerCase().startsWith(prefix +"mute") && !message.content.toLowerCase().startsWith(prefix +"ban")) return message.channel.send(`${message.author.username}, please use bot commands in <#204966054462619650>`)
    if (message.channel.id === "350873216291700739" && message.author.id !== "200627218299355136" && message.author.id !== "151829152239058945" && message.author.id !== "214360468058406912" && message.author.id !== "174927339354849280" && message.author.id !== "184192896751239170" && message.author.id !== "193982780378447872" && message.author.id !== "179091809111113728" && message.content.toLowerCase() !== prefix + "apoc" && !message.content.toLowerCase().startsWith(prefix +"kick") && !message.content.toLowerCase().startsWith(prefix +"warn") && !message.content.toLowerCase().startsWith(prefix +"mute") && !message.content.toLowerCase().startsWith(prefix +"ban")) return message.channel.send(`${message.author.username}, please use bot commands in <#204966054462619650>`)
    if (message.channel.id === "342735946573283328" && message.author.id !== "200627218299355136" && message.author.id !== "151829152239058945" && message.author.id !== "214360468058406912" && message.author.id !== "174927339354849280" && message.author.id !== "184192896751239170" && message.author.id !== "193982780378447872" && message.author.id !== "179091809111113728" && message.content.toLowerCase() !== prefix + "apoc" && !message.content.toLowerCase().startsWith(prefix +"kick") && !message.content.toLowerCase().startsWith(prefix +"warn") && !message.content.toLowerCase().startsWith(prefix +"mute") && !message.content.toLowerCase().startsWith(prefix +"ban")) return message.channel.send(`${message.author.username}, please use bot commands in <#204966054462619650>`)
    if (message.author.id === "nothing") return message.channel.send(`Blacklisted from this bot due to repeated offences. DM <@200627218299355136> for an appeal.` && bot.channels.get("350966037958623233").send(`${message.author.username} attempted to use this bot whilst being blacklisted`))

    //Unblocked Seans's, purples, caymons, arias, speeds, communitythingyguy's, feral's and my ID.


    if (message.content.toLowerCase().startsWith(prefix + "appeal")) {
      message.channel.send(`DM <@200627218299355136> for an appeal.`)
    } else

    if (message.content.toLowerCase().startsWith(prefix + "info tango")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Tango",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Tango",
    description: "The Tango is the next mining ship you should get after the wasp. It gets ore twice as fast and has twice the ore capacity.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 56 - Carbon: 51 - Iridium: 42\nWarehouse Level Required: 1\nManufacturing Fee: $91\nTotal Cost (can vary): $1,140"
      },
      {
        name: "Ship Statistics",
        value: "Ore Hold: 500\nMining Lasers: 2 Small\nCargo Hold: 25\nWarp Drive: None\nTotal Health Pool: 200 Shield - 200 Hull\nTop Speed: 100 - Acceleration: 8 - Turn Speed: 0.43"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Cheap price - Good income for new players - Good speed for a miner\n\nDisadvantages: Low health - No warp - Lacks defences"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  } 
});

    
    } else

if (message.content.toLowerCase().startsWith(prefix + "info harvester")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Harvester",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Harvester",
    description: "The Harvester is an agile miner that can reach distant parts of the galaxy to mine with its warp drive.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 453 - Carbon: 493 - Iridium: 389\nWarehouse Level Required: 2\nManufacturing Fee: $871\nTotal Cost (can vary): $10,874"
      },
      {
        name: "Ship Statistics",
        value: "Ore Hold: 750\nMining Lasers: 2 Small\nCargo Hold: 250\nWarp Drive: Yes\nTotal Health Pool: 250 Shield - 250 Hull\nTop Speed: 100 - Acceleration: 12 - Turn Speed: 0.45"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Has a warp drive - High mobility - If under fire you can flee quickly\n\nDisadvantages: Low health - Lacks defences - Small ore hold"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info advanced")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Advanced Miner",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Advanced_Miner",
    description: "The Advanced Miner features 4 mining lasers and an expanded cargo hold. Veteran players remember this as their go-to mining vessel in the past.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 616 - Carbon: 559 - Iridium: 455\nWarehouse Level Required: 2\nManufacturing Fee: $998\nTotal Cost (can vary): $12,466"
      },
      {
        name: "Ship Statistics",
        value: "Ore Hold: 1000\nMining Lasers: 4 Small\nCargo Hold: 75\nWarp Drive: None\nTotal Health Pool: 400 Shield - 400 Hull\nTop Speed: 100 - Acceleration: 15 - Turn Speed: 0.42"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Fast mining speed - Large ore hold - 4 lasers instead of one, two or three lasers the others have\n\nDisadvantages: Low health - Slow - Doesn't have warp - Can easily be taken out by any ship if left unprotected"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else


if (message.content.toLowerCase().startsWith(prefix + "info industrial")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Industrial Miner",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Industrial_Miner",
    description: "Rugges and Reliable.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 1173 - Carbon: 1075 - Iridium: 892 - Palladium: 29 - Titanium: 8 - Quantanium: 8\nWarehouse Level Required: 4\nManufacturing Fee: $1,972\nTotal Cost (can vary): $24,652"
      },
      {
        name: "Ship Statistics",
        value: "Ore Hold: 1500\nMining Lasers: 2 Medium\nCargo Hold: 100\nWarp Drive: None\nTotal Health Pool: 550 Shield - 550 Hull\nTop Speed: 100 - Acceleration: 15 - Turn Speed: 0.4"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Second fastest mining speed in the game - Second largest ore hold in the game - It's medium mining laser's range is 3000 studs, the same as the Rorquals\n\nDisadvantages: Low health - Lacks defences - Can easily be destroyed if too far from base//megabase"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info rorqual")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Rorqual",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Rorqual",
    description: "Lumbering slowly from one asteroid to the next, the Rorqual is excellent for clearing all the ores from large swathes of space.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 3335 - Carbon: 3200 - Iridium: 2694 - Palladium: 38 - Titanium: 10 - Quantanium: 10\nWarehouse Level Required: 6\nManufacturing Fee: $5,746\nTotal Cost (can vary): $76,705"
      },
      {
        name: "Ship Statistics",
        value: "Ore Hold: 5000\nMining Lasers: 3 Medium\nCargo Hold: 130\nWarp Drive: None\nTotal Health Pool: 1000 Shield - 2000 Hull\nTop Speed: 75 - Acceleration: 10 - Turn Speed: 0.3"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Massive ore hold - Highest shield and hull, similar to that of a battleship - Currently the fastest mining speed in game - Earns from $6,000 to $8,000 per run, depending on loyalty\n\nDisadvantages: Slow - Lacks defences - Small cargo hold - High cost - takes a bit of time to get full load"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});


}else

if (message.content.toLowerCase().startsWith(prefix + "info wyrm")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Wyrm",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Wyrm",
    description: "A small, warp-capable, agile and quick freighter perfect for those who want to do their jobs fast. Agile enough to make battleships miss you. This is the Wyrm.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 163 - Carbon: 173 - Iridium: 68\nWarehouse Level Required: 1\nManufacturing Fee: $240\nTotal Cost (can vary): $2,986"
      },
      {
        name: "Ship Statistics",
        value: "Cargo Hold: 250\nWarp Drive: Yes\nTotal Health Pool: 250 Shield - 250 Hull\nTop Speed: 100 - Acceleration: 30 - Turn Speed: 0.43"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Easy to control and begin trading with - Cheap and warp-capable - Not much of a target for pirates - High acceleration - Great for salvaging small wrecks - Small and hard to hit\n\nDisadvantages: Slow - Lacks defences - Small cargo hold - High cost - takes a bit of time to get full load"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info tempura")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Tempura",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Tempura",
    description: "A trading ship with a large cargo hold.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 263 - Carbon: 267 - Iridium: 99\nWarehouse Level Required: 1\nManufacturing Fee: $372\nTotal Cost (can vary): $4,621"
      },
      {
        name: "Ship Statistics",
        value: "Cargo Hold: 500\nWarp Drive: Yes\nTotal Health Pool: 325 Shield - 325 Hull\nTop Speed: 100 - Acceleration: 15 - Turn Speed: 0.41"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Relatively easy to obtain - Moderate speed - Quite a bit more health than the Wyrm\n\nDisadvantages: Low cargo capacity - Low shields and hull - Easy target for pirates"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info argonaut")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Argonaut",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Argonaut",
    description: "A step up from the Tempura. It has a larger cargo hold and stronger hull, but speed is an issue.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 472 - Carbon: 463 - Iridium: 167\nWarehouse Level Required: 1\nManufacturing Fee: $650\nTotal Cost (can vary): $8,066"
      },
      {
        name: "Ship Statistics",
        value: "Cargo Hold: 750\nWarp Drive: Yes\nTotal Health Pool: 350 Shield - 350 Hull\nTop Speed: 100 - Acceleration: 24 - Turn Speed: 0.4"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Large cargo hold - Some increase in hull and shield from the last freighter, the Tempura\n\nDisadvantages: low health - Low turn speed - High cost"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info hercules")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Hercules",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Hercules",
    description: "Combining heavy armor with high cargo capacity, the Hercules is perfect for those who insist on hoarding everything in sight.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 1309 - Carbon: 1237 - Iridium: 428\nWarehouse Level Required: 4\nManufacturing Fee: $1,748\nTotal Cost (can vary): $21,670"
      },
      {
        name: "Ship Statistics",
        value: "Cargo Hold: 1500\nWarp Drive: Yes\nTotal Health Pool: 400 Shield - 450 Hull\nTop Speed: 65 - Acceleration: 10 - Turn Speed: 0.3"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: The Hercules has a large cargo hold of 1500, allowing a player to make high profit margins in a single runl, and salvage many wrecks without having to dock - This ship is great for transferring items to your warehouse\n\nDisadvantages: The Hercules is extremely slow, with a top speed of 65, and a semi slow turn speed of 0.4, it heavily relies on warp to get around - Pirates consider the Hercules a high value target due to lack of defences and slow and easy to target - despite it's description, it is easily destroyed by any capable pilot"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info prep")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Prepravca",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Prepravca",
    description: "From the factory of Senti Terrae, comes this massive capacity freighter with it's only drawbacks being its speed and it's hull.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 3431 - Carbon: 3296 - Iridium: 1144\nWarehouse Level Required: 8\nManufacturing Fee: $4,627\nTotal Cost (can vary): $57,352"
      },
      {
        name: "Ship Statistics",
        value: "Cargo Hold: 2500\nWarp Drive: Yes\nTotal Health Pool: 1000 Shield - 500 Hull\nTop Speed: 50 - Acceleration: 14 - Turn Speed: 0.29"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Largest cargo hold in the game - High health for it's class - Can make 2k to 4k credits per run if the economy is good\n\nDisadvantages: Very slow. The slowest freighter in the game - Extremely expensive for a freighter - Very vunerable alone - Pirates consider this a floating gold pile, since it's slow, defenceless and commonly found with it's cargo hold full - Slower than most dreadnoughts"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});


    } else
    
    if (message.content.toLowerCase().startsWith(prefix + "info wasp")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Wasp",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Wasp",
    description: "The Wasp is an entry level ship that can be used to start making credits by mining.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required: **None**\nWarehouse Level Required: 1\nManufacturing Fee: $0\nTotal Cost (can vary): $0"
      },
      {
        name: "Ship Statistics",
        value: "Ore Hold: 250\nMining Lasers: 1 Small\nCargo Hold: 7\nWarp Drive: None\nTotal Health Pool: 150 Shield - 125 Hull\nTop Speed: 180 - Acceleration: 25 - Turn Speed: 0.49"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Very fast - Infinite supply - Pirates typically leave Wasps alone due to the lack of loot and bounty given\n\nDisadvantages: Very low health - No warp - Lacks defences - Very slow mining speed - Low Ore Hold"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info starblade")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Starblade",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Starblade",
    description: "Designed for one purpose: Get in, fire torpedo, get out.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 37 - Carbon: 22 - Iridium: 20 - Adamammite: 8 - Palladium: 7 - Titanium: 7 - Quantanium: 6\nWarehouse Level Required: 1\nManufacturing Fee: $75\nTotal Cost (can vary): $953"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 2 Tiny Phasers - 1 Small Torpedo\nCargo Hold: 25\nWarp Drive: Yes\nTotal Health Pool: 150 Shield - 175 Hull\nTop Speed: 130 - Acceleration: 24 - Turn Speed: 0.5"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: High speed - Torpedo does lots of damage - Phasers have very high rate of fire - Can easily aim at larger ships - Cheap\n\nDisadvantages: Low health - Low on defences - Lacks turrets - Phasers deal little damage - Slow turn speed"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info dropship")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Dropship",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Dropship",
    description: "The Dropship is designed for troop transport and ground operations, it has carrying cpacity for 8 passengers and 1 pilot, as well as small space to store cargo.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 137 - Carbon: 84 - Iridium: 68\nWarehouse Level Required: 1\nManufacturing Fee: $172\nTotal Cost (can vary): $2,140"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 2 Medium Cannons - 1 Light Laser\nCargo Hold: 95\nWarp Drive: Yes\nTotal Health Pool: 250 Shield - 250 Hull\nTop Speed: 140 - Acceleration: 30 - Turn Speed: 0.5"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Decent cargo hold for a frigate - Super cheap - High warp speed - great ship for beginners, easily replaceable - The only frigate with medium cannons - Better firepower against hull\n\nDisadvantages: Extremely low health - Weak against shields - Not much firepower - Easily killed because of its blocky form and rather large size"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info avenger")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Avenger",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Avenger",
    description: "A frigate that is both cheap and fast.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 140 - Carbon: 68 - Iridium: 60\nWarehouse Level Required: 1\nManufacturing Fee: $157\nTotal Cost (can vary): $1,957"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 2 Small Phasers\nCargo Hold: 64\nWarp Drive: Yes\nTotal Health Pool: 200 Shield - 300 Hull\nTop Speed: 225 - Acceleration: 14 - Turn Speed: 0.49"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Excellent mobility - Great for beginners - Easy to remake if destroyed - Spinals are decent against shields and fire fast\n\nDisadvantages: Terrible damage against hull - Rather oversized for its class; tends to get hit by larger guns more often than not - Lacks turrets - Completely outclassed by the ~Raven, which has similar characteristics but smaller therefore much harder to hit"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info raven")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Raven",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Raven",
    description: "The Raven is a fast and maneuverable frigate that can distract larger ships and can outmaneuver them, getting in their blind spots. Its major weakness is that it's not really durable, preventing it from fighting alone for extended periods of time.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 58 - Carbon: 27 - Iridium: 26\nWarehouse Level Required: 1\nManufacturing Fee: $65\nTotal Cost (can vary): $812"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 2 Small Phasers\nCargo Hold: 44\nWarp Drive: Yes\nTotal Health Pool: 200 Shield - 300 Hull\nTop Speed: 150 - Acceleration: 30 - Turn Speed: 0.5"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: High speed - Very agile - Phasers have a good rate of fire and do decent damage against shields - Easy to remake in the event that it gets destroyed - Overall, a great ship for beginners\n\nDisadvantages: Low amount of health, staying at top is critical to staying alive - Very low damage against hull"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info python")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Python",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Python",
    description: "Great for distracting a base during a siege. Good health for its class.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 132 - Carbon: 74 - Iridium: 76\nWarehouse Level Required: 1\nManufacturing Fee: $169\nTotal Cost (can vary): $2,110"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 4 Small Phasers\nCargo Hold: 71\nWarp Drive: Yes\nTotal Health Pool: 300 Shield - 250 Hull\nTop Speed: 180 - Acceleration: 31 - Turn Speed: 0.6"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: High speed - Cheap - Easy to distract a base with - Can wear down shields easily - Great support ship\n\nDisadvantages: Low health - Completely outclassed by the Viper in everything but cost - Lacks turrets - Phasers deal little damage to hull - Rather large for a frigate - Not a good solo ship."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info osprey")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Osprey",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Osprey",
    description: "A versatile ship that can be used for many things.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 184 - Carbon: 115 - Iridium: 86\nWarehouse Level Required: 1\nManufacturing Fee: $228\nTotal Cost (can vary): $2,840"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 4 Small Cannons - 1 Light Laser\nCargo Hold: 90\nWarp Drive: Yes\nTotal Health Pool: 150 Shield - 250 Hull\nTop Speed: 190 - Acceleration: 34 - Turn Speed: 0.6"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Good mobility - Largely underestimated; its cannons can deal massive damage and quickly finish off a hulled ship - Relatively low cost - The small light laser helps deal with enemy shields - Decent cargo hold for a frigate\n\nDisadvantages: Very low health, even for a frigate - Shield damage output is much lower than hull output damage."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info archangel")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Archangel",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Archangel",
    description: "A heavyweight fighter, the Archangel is fast enough to dodge most things you throw at it while being still packing a decent punch, provided you can land a hit at the operational speed.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 150 - Carbon: 73 - Iridium: 47\nWarehouse Level Required: 1\nManufacturing Fee: $155\nTotal Cost (can vary): $1,931"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 2 Small Cannons - 1 Light Flak\nCargo Hold: 50\nWarp Drive: Yes\nTotal Health Pool: 200 Shield - 300 Hull\nTop Speed: 195 - Acceleration: 40 - Turn Speed: 0.64"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: High mobility - Great for distracting a base during a siege\n\nDisadvantages: Low shield damage - Weak against aliens."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info viper")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Viper",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Viper",
    description: "A heavy fighter with great speed and turning.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 290 - Carbon: 166 - Iridium: 183\nWarehouse Level Required: 1\nManufacturing Fee: $386\nTotal Cost (can vary): $4,817"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 4 Small Phasers\nCargo Hold: 50\nWarp Drive: Yes\nTotal Health Pool: 150 Shield - 350 Hull\nTop Speed: 290 - Acceleration: 40 - Turn Speed: 0.56"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Extremely high mobility, highest in game if you don't consider the Revenue - High firepower for a frigate - One of the best choices for distracting a base during a siege - Great choice as a beginner ship\n\nDisadvantages: High cost - Low hull and shields - Lacks turrets - Weak against hull"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info abyss")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Abyss",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Abyss",
    description: "Good choice for hunting down ships, as it has good torque and a wide spray multi-barrel mini-cannon.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 431 - Carbon: 286 - Iridium: 285\nWarehouse Level Required: 2\nManufacturing Fee: $608\nTotal Cost (can vary): $7,588"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 10 Tiny Cannons\nCargo Hold: 65\nWarp Drive: Yes\nTotal Health Pool: 250 Shield - 250 Hull\nTop Speed: 210 - Acceleration: 40 - Turn Speed: 0.64"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Extremely high acceleration - Extremely high firepower for a frigate, exceeding some destroyers - High mobility - Can distract a base during a siege\n\nDisadvantages: High cost - Not good against shields"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info zhanado")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Zhanado",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Zhanado",
    description: "Take a stand, a shining example of the firepower a frigate can contain.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 97 - Carbon: 45 - Iridium: 49\nWarehouse Level Required: 1 - **Requires VIP**\nManufacturing Fee: $113\nTotal Cost (can vary): $322 (Depreciated)"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 2 Tiny Phasers - 3 Tiny Cannons\nCargo Hold: 25\nWarp Drive: Yes\nTotal Health Pool: 350 Shield - 250 Hull\nTop Speed: 160 - Acceleration: 13 - Turn Speed: 0.75"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: High damaging spinals - Great against large ships with big blind spots, like the Ridgebreaker - Cheap\n\nDisadvantages: Slow for a frigate - No Turrets - Must own VIP Gamepass to purchase"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info zhanado")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Zhanado",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Zhanado",
    description: "Take a stand, a shining example of the firepower a frigate can contain.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 97 - Carbon: 45 - Iridium: 49\nWarehouse Level Required: 1 - **Requires VIP**\nManufacturing Fee: $113\nTotal Cost (can vary): $322 (Depreciated)"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 2 Tiny Phasers - 3 Tiny Cannons\nCargo Hold: 25\nWarp Drive: Yes\nTotal Health Pool: 350 Shield - 250 Hull\nTop Speed: 160 - Acceleration: 13 - Turn Speed: 0.75"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: High damaging spinals - Great against large ships with big blind spots, like the Ridgebreaker - Cheap\n\nDisadvantages: Slow for a frigate - No Turrets - Must own VIP Gamepass to purchase"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

    } else

    
if (message.content.toLowerCase().startsWith(prefix + "info corvid")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Corvid",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Corvid",
    description: "A low cost destroyer that focuses on turret firepower.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 215 - Carbon: 134 - Iridium: 8\nWarehouse Level Required: 1\nManufacturing Fee: $197\nTotal Cost (can vary): $2,384 "
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 3 Light Lasers - 2 Small Flaks\nCargo Hold: 75\nWarp Drive: Yes\nTotal Health Pool: 550 Shield - 500 Hull\nTop Speed: 150 - Acceleration: 25 - Turn Speed: 0.6"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Cheap - Decent turret damage - Fast - Great for support - Shreds shields\n\nDisadvantages: No spinals - Low hull and shields - Can't siege"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

    } else

        
if (message.content.toLowerCase().startsWith(prefix + "info phantom")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Phantom",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Phantom",
    description: "The Phantom destroyer is armed to the teeth.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 317 - Carbon: 214 - Iridium: 114\nWarehouse Level Required: 1\nManufacturing Fee: $377\nTotal Cost (can vary): $4,729 (Depreciated)"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 4 Light Lasers - 2 Small Phasers\nCargo Hold: 70\nWarp Drive: Yes\nTotal Health Pool: 550 Shield - 550 Hull\nTop Speed: 150 - Acceleration: 30 - Turn Speed: 0.56"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Cheap - Multiple Weapons - Well defended underbelly - Spinals give huge damage bonus if used - Decent health for a destroyer - Shreds shields\n\nDisadvantages: Slow -  Bad turret placement - Can't do much damage to hulls"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info centurion")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Centurion",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Centurion",
    description: "A vunerable ship with limited turrets, but can fire devastating long-range torperdoes out of the reach of defences.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 303 - Carbon: 213 - Iridium: 131 - Adamammite: 46 - Palladium: 44 - Titanium: 42 - Quantanium: 39\nWarehouse Level Required: 1\nManufacturing Fee: $544\nTotal Cost (can vary): $7,025"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 2 Flak Cannons - 1 Medium Torpedo - 2 Small Cannons\nCargo Hold: 58\nWarp Drive: Yes\nTotal Health Pool: 500 Shield - 500 Hull\nTop Speed: 100 - Acceleration: 30 - Turn Speed: 0.45"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Devastating damage to hull - Early torpedo sieger for beginner players - Fairly well-defended against fighters/frigates and alien swarmers - Can be combined with shield shredding ships like the Gideon to make a devastating combo - Torpedo deals vey high damage\n\nDisadvantages: Very low mobility for a destroyer - Vunerable bottom - Terrible against shields - Low health - Long torpedo reload time"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info scimitar")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Scimitar",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Scimitar",
    description: "The Scimitar is a Destroyer class ship used as an interceptor against large targets getting jobs done fast.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 365 - Carbon: 255 - Iridium: 172\nWarehouse Level Required: 1\nManufacturing Fee: $470\nTotal Cost (can vary): $5,906"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 2 Small Cannons - 4 Small Phasers\nCargo Hold: 65\nWarp Drive: Yes\nTotal Health Pool: 500 Shield - 500 Hull\nTop Speed: 200 - Acceleration: 30 - Turn Speed: 0.61"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Decent spinal firepower - Highly maneuverable - Balanced shields and hull - A great choice for beginners - Hard to hit - great for distracting bases while doing considerable damage to it - Both energy and kinetic weaponry available\n\nDisadvantages: Lacks any turrets - Requires good spinal aim to be effective in a PvP - A somewhat low amount of health"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else


if (message.content.toLowerCase().startsWith(prefix + "info zero")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Zero",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Zero",
    description: "Designed for one purpose: Get in, fire torpedo, get out.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 408 - Carbon: 275 - Iridium: 139\nWarehouse Level Required: 1\nManufacturing Fee: $480\nTotal Cost (can vary): $6,009"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 4 Small Phasers - 1 Light Flak - 1 Light Laser\nCargo Hold: 51\nWarp Drive: Yes\nTotal Health Pool: 750 Shield - 250 Hull\nTop Speed: 200 - Acceleration: 35 - Turn Speed: 0.63"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Good acceleration - Lots of phasers and accurate as they all fire at the same time - Hard for big ships to hit - One of the best cheap pirating ships, able to dish large damage if used correctly - Extremely agile - Great alternative to the Viper for drawing base fire - For very skill pilots, it is a great counter to both the Gideon and the Cobra, as it can keep in their very small blind spots if used properly\n\nDisadvantages: Little hull - Costs a lot for beginners - Often spawns underneath megabase docking bay - Not as much DPM (Damage per Minute) as the Cobra - Lacking in kinetic weaponry"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info cobra")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Cobra",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Cobra",
    description: "The Cobra is a fast, well-armed ship that focuses on shield. It's technology is basic at best, good enough to get the job done. It also plays a role as a transport ship, with 10 passenger seats.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 426 - Carbon: 293 - Iridium: 165\nWarehouse Level Required: 1\nManufacturing Fee: $519\nTotal Cost (can vary): $6,912"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 3 Light Laser - 2 Light Flaks - 6 Small Phasers\nCargo Hold: 81\nWarp Drive: Yes\nTotal Health Pool: 850 Shield - 250 Hull\nTop Speed: 170 - Acceleration: 25 - Turn Speed: 0.58"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Excellent - Good mobility - One of the most favoured pirating ships - One of the best choices beginning ships - Extremely deadly to shield-based ships; it's spinals do massive damage and have small reload time\n\nDisadvantages: Low hull - High cost - Due to the Cobra's health pool mostly consisting of shield, it's extremely vunderable to phaser/laser-based ships - Deals significantly less damage to hull, but still considerable - Rather large for a destroyer, gets hit by large lasers often"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info sabre tooth")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Sabre Tooth",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Sabre_Tooth",
    description: "Extraordinary speed, at a hefty price.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 958 - Carbon: 713 - Iridium: 688\nWarehouse Level Required: 3\nManufacturing Fee: $1,440\nTotal Cost (can vary): $19,142"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 2 Medium Phasers\nCargo Hold: 50\nWarp Drive: Yes\nTotal Health Pool: 600 Shield - 150 Hull\nTop Speed: 300 - Acceleration: 45 - Turn Speed: 0.47"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Extremely high speed - Decent spinal firepower - Great for scouting - Great health for a destroyer - Can easily distract a base during a siege\n\nDisadvantages: Low hull - No turrets - Needs a player that can aim spinals well - bad at PvP - Expensive"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info argosy")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Argosy",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Argosy",
    description: "The Argosy Class Destroyer, constructed with empryean Arnaments traditional style, and designed as a general purpose ship that, being armed with a quad gauss cannon and 4 laser turrets, could escort or give chase as the situation demands.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 213 - Carbon: 137 - Iridium: 59\nWarehouse Level Required: 1\nManufacturing Fee: $519\nTotal Cost (can vary): $6,912"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 4 Light Laser - 4 Small Cannons\nCargo Hold: 40\nWarp Drive: Yes\nTotal Health Pool: 125 Shield - 950 Hull\nTop Speed: 120 - Acceleration: 30 - Turn Speed: 0.59"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Very high hull for its class - Good amount of hull damage output - Cheap\n\nDisadvantages: Almost non-existant Shield - Extremely slow for a destroyer - Does considerably less shield damage than hull damage."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info xenon")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Xenon",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Xenon",
    description: "This ship packs a hefty punch, while still maintaining space to carry some passengers.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 330 - Carbon: 230 - Iridium: 63 -  Palladium: 21 - Titanium: 6 - Quantanium: 6\nWarehouse Level Required: 1\nManufacturing Fee: $389\nTotal Cost (can vary): $5,118"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 1 Small Laser - 2 Small Flaks - 1 Railgun\nCargo Hold: 74\nWarp Drive: Yes\nTotal Health Pool: 750 Shield - 1200 Hull\nTop Speed: 120 - Acceleration: 25 - Turn Speed: 0.57"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: High health - Good acceleration - No vunerable bottom - Adds one more railgun to a siege\n\nDisadvantages: Can't defend itself well - Slow"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info gunslinger")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Gunslinger",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Gunslinger",
    description: "A Cruiser with a twin-barreled cannon that can smash through hull with ease, but causes stress on the propulsion system making it have low mobility.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 366 - Carbon: 270 - Iridium: 180\nWarehouse Level Required: 1\nManufacturing Fee: $479\nTotal Cost (can vary): $6,012"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 1 Light Laser - 2 Small Flaks - 2 Large Cannons\nCargo Hold: 89\nWarp Drive: Yes\nTotal Health Pool: 850 Shield - 750 Hull\nTop Speed: 105 - Acceleration: 6.5 - Turn Speed: 0.39"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Decent durability - Relatively low cost - Wrecks havoc on hull and anything you can hit with your spinals - Decent health for a cruiser\n\nDisadvantages: Very slow and not maneuverable - Comparatively low turret firepower - Low damage output against shield - Vunerable alone"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info Orion")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Orion",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Orion",
    description: "A heavy cruiser built for battle, with its medium turret and 6 small cannons .",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 393 - Carbon: 292 - Iridium: 155 - Palladium: 18 - Titanium: 5 - Quantanium: 5\nWarehouse Level Required: 1\nManufacturing Fee: $523\nTotal Cost (can vary): $6,571"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 2 Light Lasers - 1 Medium Laser - 6 Small Cannons\nCargo Hold: 103\nWarp Drive: Yes\nTotal Health Pool: 1000 Shield - 750 Hull\nTop Speed: 110 - Acceleration: 21 - Turn Speed: 0.54"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Early game warp drive - Easy to learn - High damaging spinals - Decent support ship\n\nDisadvantages: Vunerable bottom and sides - Slow for a cruiser - Lacks turret firepower - Lack of Flak Cannons means you must use spinals to do decent hull damage"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info reaver")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Reaver",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Reaver",
    description: "Also known as the Mini-Hawklight, this ship can quickly get into battle and change the outcome.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 316 - Carbon: 225 - Iridium: 76\nWarehouse Level Required: 1\nManufacturing Fee: $355\nTotal Cost (can vary): $4,443"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 2 Light Lasers - 2 Small Flak Cannons - 2 Small Cannons\nCargo Hold: 74\nWarp Drive: Yes\nTotal Health Pool: 800 Shield - 750 Hull\nTop Speed: 135 - Acceleration: 23 - Turn Speed: 0.51"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Very high manueverability and good speed - Good turret layout, great at attacking all types of ships - Can devastate ships on hull - Cheap - Great for support - Good interior, if you look fo that stuff\n\nDisadvantages: Rather low health, this ship can't take much punishment - Can have trouble with enemy shields, as it only has 2 light lasers - Easily overwhelmed by a few fighters"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info gideon")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Gideon",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Gideon",
    description: "A slick cruiser to hang out with your friends in, or support a fleet in battle with.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 481 - Carbon: 334 - Iridium: 77\nWarehouse Level Required: 1\nManufacturing Fee: $507\nTotal Cost (can vary): $6,324"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 2 Light Lasers - 3 Light Flak Cannons\nCargo Hold: 100\nWarp Drive: Yes\nTotal Health Pool: 800 Shield - 900 Hull\nTop Speed: 145 - Acceleration: 31 - Turn Speed: 0.41"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Low cost - High - Can devastate ships on hull - Cheap - Great for support - Good interior, if you look fo that stuff\n\nDisadvantages: Rather low health, this ship can't take much punishment - Can have trouble with enemy shields, as it only has 2 light lasers - Easily overwhelmed by a few fighters"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info nova")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Nova",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Nova",
    description: "This cruiser will dominate your enemy with its Rapid Phaser burst. Goes pretty fast for a cruiser.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 608 - Carbon: 470 - Iridium: 405\nWarehouse Level Required: 2\nManufacturing Fee: $901\nTotal Cost (can vary): $11,301"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 10 Small Phasers - 1 Light Laser - 1 Medium Cannon\nCargo Hold: 81\nWarp Drive: Yes\nTotal Health Pool: 1000 Shield - 600 Hull\nTop Speed: 132 - Acceleration: 25 - Turn Speed: 0.58"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: High Spinal firepower - Decent mobility - Decent Health - Higher damage to shields due to having more energy weapons\n\nDisadvantages: Low turret firepower - Only a Medium Cannon to destroy hull effectively - Only has one Light Laser"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info spectre")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Spectre",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Spectre",
    description: "A giant 1 seated ship that will whip your opponent in seconds. A dream for fighter pilots.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 721 - Carbon: 543 - Iridium: 445\nWarehouse Level Required: 3\nManufacturing Fee: $1,033\nTotal Cost (can vary): $12,995"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 2 Light Lasers - 8 Small Phasers - 2 Medium Cannons\nCargo Hold: 52\nWarp Drive: Yes\nTotal Health Pool: 850 Shield - 800 Hull\nTop Speed: 145 - Acceleration: 21 - Turn Speed: 0.61"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Powerful Spinals - Good Moboility - Decent health for a Cruiser - Great as an escort due to its high mobility - Due to its weapons mainly consisting of energy, it's more effective against shield based ships - Most firepower in spinals making it a valuable asset to pilots who prefer spinal-based ships - Fairly evened out health pool between shields and hull\n\nDisadvantages: Lacking in turret firepower - Vunerable defences - Little kinetic weaponry making it less effective against hull - Hard to use if you're not adapted to spinal weaponry"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info invictus")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Invictus",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Invictus",
    description: "Invictus is a cruiser that can transport pilots in a time of need. It is also quite tanky.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 552 - Carbon: 394 - Iridium: 208\nWarehouse Level Required: 2\nManufacturing Fee: $678\nTotal Cost (can vary): $8,496"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 4 Light Lasers - 2 Medium Phasers\nCargo Hold: 110\nWarp Drive: Yes\nTotal Health Pool: 600 Shield - 1300 Hull\nTop Speed: 150 - Acceleration: 26 - Turn Speed: 0.54"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: High Hull - Average price - Great against shields - No blind spots - Large cargo hold - Great for support\n\nDisadvantages: Slow to accelerate - Not good against hull - Cannot focus all turrets directly unless facing directly forward/away - Low shield health"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info sixfold")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Sixfold",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Sixfold",
    description: "This combat-orientatied ship has many turrets and powerful rotary cannons, as well as high handling, at the cost of durability.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 765 - Carbon: 561 - Iridium: 364\nWarehouse Level Required: 3\nManufacturing Fee: $1,006\nTotal Cost (can vary): $12,624"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 12 Tiny Cannons - 2 Light Flaks - 4 Light Lasers\nCargo Hold: 74\nWarp Drive: Yes\nTotal Health Pool: 900 Shield - 500 Hull\nTop Speed: 145 - Acceleration: 25 - Turn Speed: 0.63"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Very mobile for a cruiser in terms of speed and handling- Extremely high firepower for a cruiser - Great turret placement - Able to do great amounts of damage in a short time - The fast reload cannons give it more DPS towards the hull than even the Ampharos\n\nDisadvantages: Very low health - High cost - Cannot easily focus all turrets on 1 target - Very large, allowing it to be torn apart by larger ships such as Dreadnaughts"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info lusso")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Lusso",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Lusso",
    description: "The Lusso is a luxury cruiser, as well equipped as it is in style.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 757 - Carbon: 560 - Iridium: 471\nWarehouse Level Required: 3\nManufacturing Fee: $1,081\nTotal Cost (can vary): $21,956"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 4 Light Flaks - 12 Tiny Phasers\nCargo Hold: 50\nWarp Drive: Yes\nTotal Health Pool: 500 Shield - 900 Hull\nTop Speed: 170 - Acceleration: 28 - Turn Speed: 0.5"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Good acceleration and speed - High damaging spinals - Great for attacking ships - Pair this with the Sixfold to shred other ships\n\nDisadvantages: Low Shield - Lacks turrets on the bottom - Expensive - Without Spinals it is very hard to damage shields"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info dramiel")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Dramiel",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Dramiel",
    description: "The Dramiel is an agile and small cruiser for rushing in, pirating a freighter and escaping unscathed.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 673 - Carbon: 498 - Iridium: 378\nWarehouse Level Required: 2\nManufacturing Fee: $931\nTotal Cost (can vary): $12,344"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 2 Light Flaks - 6 Tiny Phasers - 6 Tiny Cannons\nCargo Hold: 35\nWarp Drive: Yes\nTotal Health Pool: 500 Shield - 900 Hull\nTop Speed: 180 - Acceleration: 31 - Turn Speed: 0.65"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Powerful spinals - Very fast and manaevurable - Very small, making it hard to hit\n\nDisadvantages: Low shields and hull - Low turret firepower - Expensive for a cruiser"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});


}else

if (message.content.toLowerCase().startsWith(prefix + "info bastion")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Bastion",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Bastion",
    description: "A very well armored Battlecruiser, the Bastion can withstand a lot of damage and has a lot of turret firepower. However, it is quite slow for its class.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 956 - Carbon: 678 - Iridium: 198 - Palladium: 55 - Titanium: 14 - Quantanium: 14\nWarehouse Level Required: 3\nManufacturing Fee: $1,133\nTotal Cost (can vary): $14,916"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 2 Light Flaks - 3 Light Lasers - 1 Railgun - 1 Medium Laser\nCargo Hold: 136\nWarp Drive: Yes\nTotal Health Pool: 1850 Shield - 1900 Hull\nTop Speed: 90 - Acceleration: 23 - Turn Speed: 0.48"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: High turret firepower - No blind spots - The highest health for any battlecruiser - Wide range of weaponry - Can help siege with it's railgun - Large cargo hold for a battlecruiser - Good for PvP due to it's range of kinetic and energy weapons\n\nDisadvantages: Low mobility for its class - Lacks spinals - Somewhat vunerable bottom (has 2 flaks that can deal with hull, but not shield) - Easily out-gunned by larger and heavier ships - High cost"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info dire wolf")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Dire Wold",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Dire_Wolf",
    description: "Has unique side-mounted turrets, as well as enough mobility to defend your turf.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 1149 - Carbon: 861 - Iridium: 386  - Palladium: 176 - Titanium: 46 - Quantanium: 46\nWarehouse Level Required: 3\nManufacturing Fee: $1,670\nTotal Cost (can vary): $22,048"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 5 Medium Flaks - 3 Medium Lasers - 2 Medium Cannons\nCargo Hold: 155\nWarp Drive: Yes\nTotal Health Pool: 1400 Shield - 1400 Hull\nTop Speed: 120 - Acceleration: 30 - Turn Speed: 0.45"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: High firepower against shields - Perfect balanced health pool between Shield and Hull - Low Cost\n\nDisadvantages: Low mobility for its class - Hard to damage hull - Spinals fire one at a time, making it harder to hit both cannons at one moving target - Vunerable bottom"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info razor wing")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Razor Wing",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Razor_Wing",
    description: "A great ship for experienced players. With its Phasers and Cannons, it has earned fear for its ability to take down larger ships with ease. Also capable of transporting 11 passengers, as if you ever need to do so.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 802 - Carbon: 612 - Iridium: 537\nWarehouse Level Required: 3\nManufacturing Fee: $1,186\nTotal Cost (can vary): $14,924"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 6 Medium Phasers - 6 Medium Cannons\nCargo Hold: 150\nWarp Drive: Yes\nTotal Health Pool: 1500 Shield - 900 Hull\nTop Speed: 95 - Acceleration: 7.5 - Turn Speed: 0.5"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Powerful Spinal Weapons - Good turret firepower. - Well defended against fighters/frigates - Multiple Spinals - Can easily take out a dreadnought if the pilot is skilled enough - Docks very quickly and easily\n\nDisadvantages: Low health - Lower mobility - Vulnerable bottom - Low turn speed"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info radiance")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Radiance",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Radiance",
    description: "The Radiance-class battlecruiser has little armor but an incredibly powerful shield generator. Built around an oversized laser array, the Radiance is designed to burn down hostile shields and then brute-force its way through the hull, as it lacks any kinetic turrets.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 1083 - Carbon: 747 - Iridium: 306\nWarehouse Level Required: 3\nManufacturing Fee: $1,215\nTotal Cost (can vary): $15,204"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 6 Light Lasers - 1 Large Cannon\nCargo Hold: 126\nWarp Drive: Yes\nTotal Health Pool: 1500 Shield - 1200 Hull\nTop Speed: 135 - Acceleration: 25 - Turn Speed: 0.45"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Unique Turret placement means no blind spots - High energy firepower can burn down shields - High mobility - Great as an escort - High acceleration, higher than the Black Flare - Very effective against the Cobra, a common Pirate ship\n\nDisadvantages: Lacks kinetic turrets, relying on the player to have good aim to deal damage to hull with its large cannon - Lacks long-range weaponry, can only effectively attack anything within 3000 studs or less of it unless the pilot is very skilled at aiming Spinals - Cannot focus all turrets on 1 target unless they are directly ahead - Slightly lower health than other battlecruisers - Cannot do much damage when chasing a crippled ship in warp, due to the light lasers dealing poor hull damage"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info hecate")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Hecate",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Hecate",
    description: "The beautiful looking battlecruiser has 2 large phasers but not much turret firepower.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 1177 - Carbon: 870 - Iridium: 497 - Palladium: 91 - Titanium: 23 - Quantanium: 23\nWarehouse Level Required: 4\nManufacturing Fee: $1,642\nTotal Cost (can vary): $21,711"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 1 Light Lasers - 1 Medium Laser - 2 Medium Flaks - 2 Large Phasers\nCargo Hold: 226\nWarp Drive: Yes\nTotal Health Pool: 1200 Shield - 1800 Hull\nTop Speed: 120 - Acceleration: 27 - Turn Speed: 0.4"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Currently the second highest health battlecruiser - Spinals do decent damage - High cargo for its class, (Higher than some dreads) - Able to siege but not able to tank - Can support various roles such as pvp, siege, and support - The price is not too expensive and not too cheap\n\nDisadvantages: Vulnerable bottom - Unless the opponent has no knowledge of turning, this ship is almost completely useless for solo and small group PVP - Spinals have a slow fire rate - Despite the large Spinals, it does much less damage per minute than certain smaller ships, such as the Cobra"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info aeaphiel")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Aeaphiel",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Aeaphiel",
    description: "A fast and agile battlecruiser designed to spearhead an attack.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 968 - Carbon: 730 - Iridium: 314 - Palladium: 64 - Titanium: 16 - Quantanium: 16\nWarehouse Level Required: 3\nManufacturing Fee: $1,271\nTotal Cost (can vary): $15,969"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 1 Light Laser - 2 Small Flaks - 1 Railgun - 1 Medium Laser - 4 Small Phasers\nCargo Hold: 128\nWarp Drive: Yes\nTotal Health Pool: 1900 Shield - 750 Hull\nTop Speed: 115 - Acceleration: 29 - Turn Speed: 0.57"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Good all rounder - High shields, higher than any other Battlecruiser - Decent Spinals - Very convenient Turret placement\n\nDisadvantages: Low hull for a Battlecruiser - Must be facing head-on to do max damage"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info grievion")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Grievion",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Grievion",
    description: "The Grievion is a battlecruiser designed for ship-to-ship combat, with good speed, high firepower, and boosted shields to withstand more punishment.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 1273 - Carbon: 931 - Iridium: 20453 - Palladium: 62 - Titanium: 16 - Quantanium: 16\nWarehouse Level Required: 4\nManufacturing Fee: $1,652\nTotal Cost (can vary): $20,738"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 2 Light Lasers - 4 Small Flaks - 2 Medium Lasers - 8 Small Cannons\nCargo Hold: 168\nWarp Drive: Yes\nTotal Health Pool: 1600 Shield - 1300 Hull\nTop Speed: 100 - Acceleration: 24 - Turn Speed: 0.41"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: High firepower - Good mobility - Great for escorts - Good Spinals for its size\n\nDisadvantages: Very high cost - Vulnerable bottom - Really low health for its cost"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info black flare")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Black Flare",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Black_Flare",
    description: "An extremely powerful battlecruiser. Many turrets, multi-pulse phasers and fast.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 1390 - Carbon: 1007 - Iridium: 546 - Palladium: 117 - Titanium: 30 - Quantanium: 30\nWarehouse Level Required: 4\nManufacturing Fee: $1,910\nTotal Cost (can vary): $24,031"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 3 Light Lasers - 3 Railguns - 7 Small Phasers\nCargo Hold: 99\nWarp Drive: Yes\nTotal Health Pool: 1200 Shield - 1650 Hull\nTop Speed: 145 - Acceleration: 30 - Turn Speed: 0.49"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Extremely high mobility, higher than some Cruisers - High health - High firepower - Good all-rounder - High turn speed, higher than some Destroyers - High hull for a Battlecruiser - High mobility makes it good for scouting\n\nDisadvantages: High cost - Vulnerable bottom - The Black Flare is a very well known ship and can put a target on your head - When fighting Battleships the firepower can at times seem lacking"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info belvat")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Belvat",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Belvat",
    description: "A nightmare for pirates and combat ships. Designed to warp, destroy, and leave.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 1340 - Carbon: 1012 - Iridium: 753 - Adamammite: 94 - Palladium: 89 - Titanium: 84 - Quantanium: 79\nWarehouse Level Required: 5\nManufacturing Fee: $2,213\nTotal Cost (can vary): $27,947"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 5 Medium Phasers - 1 Medium Torpedo - 2 Light Lasers - 1 Small Flak\nCargo Hold: 25\nWarp Drive: Yes\nTotal Health Pool: 1350 Shield - 1050 Hull\nTop Speed: 125 - Acceleration: 29 - Turn Speed: 0.47"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: High firepower from its phasers and torpedo - Good for taking out Fighters, Frigates, and Swarmers - Well defended bottom - Can solo siege a Starbase using torpedoes - Absolutely destroys base siegers (assuming they rush in)\n\nDisadvantages: Easy to counter while sieging bases - Vulnerable Topside - If you approach from the top all your lasers and flak can hit but it also gives enemy ships an advantage since the majority of their weapons can hit you - Slow torpedo making it ineffective against small ships or anything moving too quickly - Can be difficult to aim torpedoes"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info sturm")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Sturm",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Sturm",
    description: "The most Advanced Technology there is, all in one ship... High Firepower - Low HP for compensation. And one of the Fastest Battlecruisers out there.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 1582 - Carbon: 1154 - Iridium: 467\nWarehouse Level Required: 4\nManufacturing Fee: $1,997\nTotal Cost (can vary): $24,152"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 6 Light Lasers - 4 Medium Cannons\nCargo Hold: 120\nWarp Drive: Yes\nTotal Health Pool: 1100 Shield - 900 Hull\nTop Speed: 180 - Acceleration: 34 - Turn Speed: 0.41"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Highest acceleration of any Battlecruiser - Powerful Spinals - Can deal massive damage if used correctly.\n\nDisadvantages: Low shields and hull for a Battlecruiser - Being able to aim with the ship's Spinals is crucial to do decent damage - The 2nd most expensive Battlecruiser in the game."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info absolution")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Absolution",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Absolution",
    description: "Risen from the darkest of times, this Battlecruiser has seen some Battles...",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 1032 - Carbon: 748 - Iridium: 405 - Palladium: 115 - Titanium: 29 - Quantanium: 29\nWarehouse Level Required: 3\nManufacturing Fee: $1,460\nTotal Cost (can vary): $18,311"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 2 Light Flaks - 4 Medium Lasers - 2 Large Cannons\nCargo Hold: 70\nWarp Drive: Yes\nTotal Health Pool: 450 Shield - 1300 Hull\nTop Speed: 130 - Acceleration: 21 - Turn Speed: 0.45"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: High Overall Turret and Spinal firepower - Decent Mobility for a Ship of its Class - High Hull\n\nDisadvantages: Vulnerable bottom - Low Shields - Easily outranged by ships above it's class as it's turrets cant shoot over 5,000 Studs. (Unknown if the spinals can shoot over this distance)"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info tengu")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Tengu",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Tengu",
    description: "A Very dangerous battlecruiser equipped with two torpedoes and phasers for maximum destruction.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 877 - Carbon: 663 - Iridium: 328 - Adamammite: 54 - Palladium: 51 - Titanium: 48 - Quantanium: 45\nWarehouse Level Required: 3\nManufacturing Fee: $1,262\nTotal Cost (can vary): $25,782"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 4 Small Phasers - 2 Small Torpedo\nCargo Hold: 140\nWarp Drive: Yes\nTotal Health Pool: 1900 Shield - 1200 Hull\nTop Speed: 105 - Acceleration: 28 - Turn Speed: 0.43"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: High damaging Spinals - Great turn speed and acceleration - High HP\n\nDisadvantages: Lacks Turrets - Vulnerable from most angles besides the front"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info vansnova")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Vansnova",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Vansnova",
    description: "This Battlecruiser was built by the Noke Empire to snip and destroy enemy Dreadnoughts.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 910 - Carbon: 675 - Iridium: 542\nWarehouse Level Required: 3\nManufacturing Fee: $1,296\nTotal Cost (can vary): $25,806"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 2 Large Cannons - 9 Tiny Phasers\nCargo Hold: 93\nWarp Drive: Yes\nTotal Health Pool: 1000 Shield - 1500 Hull\nTop Speed: 120 - Acceleration: 20 - Turn Speed: 0.55"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Fast - Powerful Spinals\n\nDisadvantages: No Turrets - Low HP"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info sovereign")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Sovereign",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Sovereign",
    description: "As a heavy battleship, the Sovereign forgoes the (relative) maneuverability of the Hawklight for heavier armor and a spinal mount mass accelerator..",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 1573 - Carbon: 1122 - Iridium: 507 - Adamammite: 184 - Palladium: 281 - Titanium: 204 - Quantanium: 204\nWarehouse Level Required: 5\nManufacturing Fee: $2,741\nTotal Cost (can vary): $36,121"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 2 Light Lasers - 1 Small Flak - 2 Medium Lasers - 1 Heavy Laser - 1 Large Cannon\nCargo Hold: 153\nWarp Drive: Yes\nTotal Health Pool: 2800 Shield - 2700 Hull\nTop Speed: 70 - Acceleration: 19 - Turn Speed: 0.35"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Cheap for a Battleship - Many turrets of all sizes - Decent health - Mostly laser weapons making it more effective against enemy shields\n\nDisadvantages: Slowest battleship along with the Archeon - Hard to aim spinal - Vulnerable bottom - Bad firepower for a Battleship - Mostly laser weapons making it less effective against enemy hull. - Despite the description showcasing the spinal compared to the Hawklight, the Sovereign's cannon does far less damage than the Hawklight's spinal cannons"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info nisos")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Nisos",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Nisos",
    description: "This ship features the latest in federation technology: an advanced beam weapon that shreds shields.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 1785 - Carbon: 1306 - Iridium: 841 - Adamammite: 161 - Palladium: 276 - Titanium: 184 - Quantanium: 184\nWarehouse Level Required: 6\nManufacturing Fee: $3,144\nTotal Cost (can vary): $58,176"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 2 Light Lasers - 1 Small Flak - 1 Railgun - 1 Medium Laser - 1 Large Laser - 3 Large Phasers\nCargo Hold: 120\nWarp Drive: Yes\nTotal Health Pool: 1900 Shield - 2100 Hull\nTop Speed: 95 - Acceleration: 21 - Turn Speed: 0.38"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Fast - Massive shield damage - Good acceleration - High damaging Spinals\n\nDisadvantages: Deals low hull damage"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info hasatan")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Hasatan",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Hasatan",
    description: "The Hasatan is able to make full use of its armaments and torpedo to turn itself into a strong adversary against its opponents.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 1703 - Carbon: 1269 - Iridium: 884 - Adamammite: 280 - Palladium: 327 - Titanium: 277 - Quantanium: 269\nWarehouse Level Required: 6\nManufacturing Fee: $3,460\nTotal Cost (can vary): $66,542"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 1 Light Laser - 1 Small Flak - 1 Medium Laser - 1 Railgun - 5 Medium Phasers - 1 Large Torpedo\nCargo Hold: 153\nWarp Drive: Yes\nTotal Health Pool: 2000 Shield - 1500 Hull\nTop Speed: 90 - Acceleration: 21 - Turn Speed: 0.25"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Relatively low cost. - High damage per shot with the torpedo. (~300 to starbase) - Extremely long range with torpedoes (7500+), well out of reach of base fire\n\nDisadvantages: Low health - Lacks Turret firepower - Long torpedo reloading time - A large target that is easily hittable - The extremely slow speed of the torpedo makes fighting almost impossible, short of starbases and large ships"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info hawklight")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Hawklight",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Hawklight",
    description: "The core of any major fleet, this ship can take a beating as well as dish out a lot of damage.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 2089 - Carbon: 1546 - Iridium: 1044 - Adamammite: 167 - Palladium: 241 - Titanium: 180 - Quantanium: 180\nWarehouse Level Required: 7\nManufacturing Fee: $3,561\nTotal Cost (can vary): $69,907"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 2 Small Flaks - 1 Light Laser - 1 Medium Laser - 1 Heavy Laser - 8 Medium Cannons\nCargo Hold: 153\nWarp Drive: Yes\nTotal Health Pool: 2750 Shield - 1750 Hull\nTop Speed: 85 - Acceleration: 20 - Turn Speed: 0.3"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Decent amount of Spinals makes this a good PVP ship - Good ship-to-ship capability - Decent health - High mobility - An all around ship that contains a subtle loadout that can be used as an anti-siege ship - Has a small turret on the bottom that does a small amount of damage but can be useful to repel small ships that contain little health\n\nDisadvantages: Low turn speed - Slow - Hard to fight any ship that has high mobility due to low turn speed - Very well known ship which can be your demise when it comes to PvP - Hard to damage hull if you can't aim with Spinals."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info aegis")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Aegis",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Aegis",
    description: "The Aegis is an old Syndicate freighter that has been modified to carry a large shield generator and heavy weapons. The hull is rather weak though.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 2521 - Carbon: 1912 - Iridium: 1156 - Adamammite: 220 - Palladium: 424 - Titanium: 264 - Quantanium: 264\nWarehouse Level Required: 8\nManufacturing Fee: $4,494\nTotal Cost (can vary): $87,584"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 2 Light Lasers - 2 Medium Lasers - 2 Railguns - 1 Large Laser - 6 Large Cannons\nCargo Hold: 207\nWarp Drive: Yes\nTotal Health Pool: 3500 Shield - 700 Hull\nTop Speed: 100 - Acceleration: 23 - Turn Speed: 0.45"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: High Turret firepower - High shields - Good mobility for a Battleship - Highest acceleration of any Battleship. (Higher than the Black Flare) - Spinals deal great damage\n\nDisadvantages: Low hull - Vulnerable top"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info warlock")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Warlock",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Warlock",
    description: "A slow but powerful ship with a lot of turrets and a massive gun",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 2046 - Carbon: 1462 - Iridium: 657 - Adamammite: 184 - Palladium: 518 - Titanium: 268 - Quantanium: 268\nWarehouse Level Required: 7\nManufacturing Fee: $3,667\nTotal Cost (can vary): $46,490"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 4 Railguns - 4 Medium Lasers - 1 Large Cannon\nCargo Hold: 135\nWarp Drive: Yes\nTotal Health Pool: 2000 Shield - 2500 Hull\nTop Speed: 95 - Acceleration: 19 - Turn Speed: 0.4"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: High firepower, with 8 Medium Turrets and 1 Large Cannon - Decent health and mobility for a Battleship - Can support fleets - It is a great ship for sieging Starbases - Performs surprisingly well as a pirate ship due to the amount of damage the Railguns and lasers can deal\n\nDisadvantages: Vulnerable bottom - Lacks Small Turrets, weakening its ability vs small ships - High cost - Slow turn speed"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info archeon")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Archeon",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Archeon",
    description: "Behold the Empyrean Armaments Archeon class battleship, designed for the purpose of ripping apart the hulls of vulnerable ships and stations with it's 6 railguns and twin mass accelerator, show the enemy who's boss!",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 2100 - Carbon: 1518 - Iridium: 752 - Adamammite: 184 - Palladium: 447 - Titanium: 257 - Quantanium: 257\nWarehouse Level Required: 7\nManufacturing Fee: $3,737\nTotal Cost (can vary): $47,360"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 2 Medium Lasers - 6 Railguns - 2 Large Cannons\nCargo Hold: 192\nWarp Drive: Yes\nTotal Health Pool: 2500 Shield - 2500 Hull\nTop Speed: 70 - Acceleration: 18 - Turn Speed: 0.4"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Best Battleship for sieges when accounting turret firepower - It's 6 Railguns and dual large cannons will destroy hull - Decent health for a ship of its class - Performs very well in fleets\n\nDisadvantages: Vulnerable when alone, it is unable to defend itself from most ships - Cannot perform well in a ship to ship combat scenario - Railguns will almost always miss on anything smaller than a battleship unless you get really close - Slowest battleship along with the Sovereign - Hard to damage shields - Blindspot behind the ship."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info ampharos")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Ampharos",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Ampharos",
    description: "This battleship is designed to ward off smaller ships, but is not an effective siege ship.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 372183 - Carbon: 1556 - Iridium: 782 - Adamammite: 210 - Palladium: 288 - Titanium: 229 - Quantanium: 229\nWarehouse Level Required: 7\nManufacturing Fee: $3,606\nTotal Cost (can vary): $45,602"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 2 Light Lasers - 5 Small Flaks - 2 Medium Lasers - 2 Large Cannons\nCargo Hold: 192\nWarp Drive: Yes\nTotal Health Pool: 2250 Shield - 2000 Hull\nTop Speed: 110 - Acceleration: 22 - Turn Speed: 0.45"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Absolutely shreds small ships - High mobility - Decent Spinals - Extremely good at fleet support - Fastest battleship in the game\n\nDisadvantages: Lower than average health - High cost for a battleship - Vulnerable bottom - Not good against dreadnoughts or anything with high firepower - Can't siege due to the lack of Railguns and Heavy Weaponry"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info witch")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Witch",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Witch",
    description: "The Witch is a fast stripped down combat version of the Warlock.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 2595 - Carbon: 1922 - Iridium: 1367 - Adamammite: 164 - Palladium: 327 - Titanium: 204 - Quantanium: 204\nWarehouse Level Required: 8\nManufacturing Fee: $4,423\nTotal Cost (can vary): $55,927"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 4 Medium Lasers - 2 Small Flaks - 3 Large Cannons - 2 Large Phasers\nCargo Hold: 210\nWarp Drive: Yes\nTotal Health Pool: 1600 Shield - 1600 Hull\nTop Speed: 135 - Acceleration: 24 - Turn Speed: 0.3"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Extremely high mobility - Great firepower - High damaging Spinals\n\nDisadvantages: High cost - Vulnerable bottom - Low hull and shields for a Battleship - Weak Turret firepower compared to other Battleships."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info carvainir")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Carvainir",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Carvainir",
    description: "Do you have pirate problems? Not anymore! The Cavainir is a one-man economy vessel that keeps your ores and cargo safe.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 2489 - Carbon: 1823 - Iridium: 867 - Adamammite: 199 - Palladium: 278 - Titanium: 219 - Quantanium: 219\nWarehouse Level Required: 7 **Requires VIP Pass**\nManufacturing Fee: $3,949\nTotal Cost (can vary): $52,079"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 4 Small Turrets - 2 Medium Turrets [Citation Needed] - 2 Large Cannons\nCargo Hold: 750\nWarp Drive: Yes\nTotal Health Pool: 1700 Shield - 2500 Hull\nTop Speed: 85 - Acceleration: 31 - Turn Speed: 0.4"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Large cargo hold, same size as the Tempura - Able to fend off Pirates with its Turrets and Spinals - High health\n\nDisadvantages: Expensive - Slow for a Battleship - Not much firepower for a Battleship - Must own the Galaxy VIP Gamepass to build this ship"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info sentaliz")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Sentaliz",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Sentaliz",
    description: "The Sentaliz is a powerful battleship capable of shredding larger ships with ease, developed by [REDACTED] to track and destroy rogue dreadnoughts.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 3096 - Carbon: 2265 - Iridium: 1739 - Adamammite: 220 - Palladium: 220 - Titanium: 220 - Quantanium: 220 \nWarehouse Level Required: 8 - **Requires VIP Pass**\nManufacturing Fee: $5,134\nTotal Cost (can vary): $96,296"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 1 Light Laser - 1 Small Flak - 2 Large Phasers - 2 Large Cannons\nCargo Hold: 118\nWarp Drive: Yes\nTotal Health Pool: 2200 Shield - 1500 Hull\nTop Speed: 160 - Acceleration: 26 - Turn Speed: 0.5"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Equal shield and hull damage - Fast - High damaging Spinals\n\nDisadvantages: Unable to fight larger ships - Expensive - Low Turret firepower. (Less than the Cobra) - Sometimes, you'll need to slow down to land hits with Turrets or Spinals"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info sag")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Sagittarius",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Sagittarius",
    description: "A heavy ship equipped with a powerful burst fire phaser and heavy turret firepower. Being protected from small ships with an additional small turret, counterattack against it is almost impossible.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 2688 - Carbon: 2103 - Iridium: 1678 - Adamammite: 578 - Palladium: 754 - Titanium: 603 - Quantanium: 603\nWarehouse Level Required: 10\nManufacturing Fee: $6,454\nTotal Cost (can vary): $82,193"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 1 Small Flak - 4 Large Lasers - 3 Large Phasers\nCargo Hold: 213\nWarp Drive: Yes\nTotal Health Pool: 4000 Shield - 3300 Hull\nTop Speed: 48 - Acceleration: 6 - Turn Speed: 0.2"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Absolutely shreds Shields - Low price - owerful spinals - High health - Very well defended front - Since it uses four heavy lasers, it is able to deal a rather large amount of damage (about 100 for each laser) - With the design of the ship, the heavy lasers will have slightly more range and will be able to out-range ships of its class, use this to your advantage\n\nDisadvantages: Slow for a dreadnought - Inadequate kinetic weaponry makes it hard to damage hull - Vulnerable backside - Unable to siege a base alone - Cant PvP other ships alone, there must be someone that can damage hull in order to help you - Difficult to fight small ships due to the ship having only one small turret"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info naglfar")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Naglfar",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Naglfar",
    description: "Known for its smooth design, the Naglfar has nearly no interior, instead focusing on combat capability, and excellent defensive capacity.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 2801 - Carbon: 2197 - Iridium: 1579 - Adamammite: 634 - Palladium: 893 - Titanium: 677 - Quantanium: 677\nWarehouse Level Required: 10\nManufacturing Fee: $6,838\nTotal Cost (can vary): $83,158"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 2 Medium Lasers - 4 Large Lasers - 1 Large Cannon\nCargo Hold: 213\nWarp Drive: Yes\nTotal Health Pool: 4000 Shield - 3000 Hull\nTop Speed: 60 - Acceleration: 8 - Turn Speed: 0.2"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Can burn down shields easily with 4 heavy lasers and 2 medium lasers - Decent firepower vs smaller ships with 2 medium lasers - Higher-than-average health and mobility - Low cost - High PvP capabilities - One of if not the best base defense dreads - Super slick from the outside if you consider that to be a strength - Able to out-range other ships, use this to your advantage\n\nDisadvantages: The low amount of kinetic weapons makes it hard to destroy hull - Vulnerable bottom - Bad turret placement against ships below its class - No defense against small ships unless they go above you and are very close - Some people prefer the Sagittarius over this because it can support many different roles and has no blind spots. But, the Sagittarius is 7k cheaper - The Tempest has better PvP capabilities, so most players that value PvP find the extra 17k to get the Tempest worth it"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info tenn")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Tennhausen",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Tennhausen",
    description: "Reconstructed from remnants of the great wars by Xeiron Industries, the Tennhausen is a mighty and versatile ship capable of destruction to targets big and small alike.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 3988 - Carbon: 3115 - Iridium: 2435 - Adamammite: 828 - Palladium: 1116 - Titanium: 880 - Quantanium: 880\nWarehouse Level Required: 12\nManufacturing Fee: $9,471\nTotal Cost (can vary): $124,672"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 3 Small Flaks - 3 Railguns - 3 Large Lasers - 3 Large Phasers\nCargo Hold: 219\nWarp Drive: Yes\nTotal Health Pool: 4450 Shield - 3200 Hull\nTop Speed: 55 - Acceleration: 6 - Turn Speed: 0.2"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Highly versatile with its loadout, being able to siege and fight off small ships. (Multi-Purpose. - High health - Powerful Spinals - No blind spots. (Belly covered with 2 Heavy Lasers and 1 Flak - Fast Spinal reload\n\nDisadvantages: High cost - Very slow - The side Heavy Lasers might not shoot upon ships above it (Side Heavy Lasers are at an undesirable angle) - The limited amount of small Turrets make it unable to fight off most small ships"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info tempest")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Tempest",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Tempest",
    description: "The Tempest is a fine dreadnought for supporting a siege fleet since its very well equipped against smaller ships, However usually falls short on firepower against other dreadnoughts.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 4538 - Carbon: 3474 - Iridium: 3001 - Adamammite: 774 - Palladium: 919 - Titanium: 810 - Quantanium: 810\nWarehouse Level Required: 13\nManufacturing Fee: $10,004\nTotal Cost (can vary): $127,168"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 5 Flaks - 4 Medium Lasers - 2 Huge Cannons - 2 Huge Phasers\nCargo Hold: 219\nWarp Drive: Yes\nTotal Health Pool: 3850 Shield - 3250 Hull\nTop Speed: 55 - Acceleration: 8 - Turn Speed: 0.23"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Excellent turret placement allowing it to defend easily from most angles. (1 Medium Laser and 2 Flak Turrets on its belly. - Great against Battleships and Carriers - High Shield And Hull - One of the best dreads for PvP - Very effective against smaller ships such as Cruisers and Destroyers - Impressive Damage Per Second. (DPS) - Powerful Spinal firepower - Able to shoot upon ships below you - Can destroy a Level 1 Starbase without retreating (unless you were damaged before or being attacked by other sources\n\nDisadvantages: Very Expensive - Not very well equipped turret-wise against ships of its class - Lower than average mobility - Can easily be out-ranged by Heavy Lasers and Railguns - Has difficulty sieging and destroying shields without the use of Spinals - Turrets don't have enough line of sight to target a single enemy with all turrets at once"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info nem")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Nemesis",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Nemesis",
    description: "After its collapse in the Great War, it rises again to tremble those in its wake....",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 4282 - Carbon: 3327 - Iridium: 2685 - Adamammite: 776 - Palladium: 1130 - Titanium: 843 - Quantanium: 843\nWarehouse Level Required: 12\nManufacturing Fee: $9,826\nTotal Cost (can vary): $125,021"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 2 Small Flaks - 4 Railguns - 3 Largee Lasers - 1 Large Cannon - 6 Medium Phasers\nCargo Hold: 235\nWarp Drive: Yes\nTotal Health Pool: 3500 Shield - 3000 Hull\nTop Speed: 55 - Acceleration: 11 - Turn Speed: 0.22"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Good variety of Turrets for many situations and they do great damage to both enemy shields and hull - Dual flak turrets can deal with fighters and small ships - Powerful Spinal Weapons can wreak havoc on enemy ships - All Turrets have a good line of sight - A great all round ship that can siege and PvP\n\nDisadvantages: Low health - Requires good use of its spinal weaponry to prove effective - Large blind spot underneath the ship"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info cyc")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Cyclops",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Cyclops",
    description: "A very large ship capable of unspeakable destruction.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 3813 - Carbon: 3007 - Iridium: 2168 - Adamammite: 748 - Palladium: 1179 - Titanium: 842 - Quantanium: 842\nWarehouse Level Required: 12\nManufacturing Fee: $9,022\nTotal Cost (can vary): $114,887"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 7 Railguns - 2 Heavy Lasers - 1 Huge Cannon\nCargo Hold: 197\nWarp Drive: Yes\nTotal Health Pool: 4250 Shield - 2250 Hull\nTop Speed: 60 - Acceleration: 9 - Turn Speed: 0.25"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: High mobility for a Dreadnought - Powerful siege Turret - Powerful Spinals - Fairly flat for its size potentially helping in dodging incoming fire when facing directly away or towards\n\nDisadvantages: Extremely low hull (same total health as the Nemesis. - High cost - Vulnerable Bottom - Cannot defend itself from small ships all too well - Slightly lower cargo hold than most dreads"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info apoc")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Apoc",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Apocalypse",
    description: "The Apocalypse has been resurrected by the Amarr Empire. Fear its devastating firepower.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 3863 - Carbon: 3025 - Iridium: 2103 - Adamammite: 892 - Palladium: 1315 - Titanium: 978 - Quantanium: 978\nWarehouse Level Required: 12\nManufacturing Fee: $9,562\nTotal Cost (can vary): $125,825"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 3 Large Lasers - 6 Railguns\nCargo Hold: 212\nWarp Drive: Yes\nTotal Health Pool: 4750 Shield - 3250 Hull\nTop Speed: 58 - Acceleration: 5 - Turn Speed: 0.28"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: High siege Turret firepower, best turret firepower damage wise - Has the second most health among the dreadnoughts, after Ridgebreaker - Above average turning speed - Can also tank for a long amount of time in a siege - One of the best dreadnoughts for a siege because of its railguns and heavy lasers - Good turret placement for sieging. (Placement allows all guns to fire upon a Starbase.) - This ship has more firepower than a Level 3 Starbase and almost same health\n\nDisadvantages: Vulnerable bottom - Lacks small Turret firepower making it unable to fend off small ships - Lacks Spinal firepower - Can be overwhelmed by smaller ships such as a Bastion, Cobra, and any ship smaller than a Battleship - Less sieging power than the Ridgebreaker. If you value sieging, it is worth it to save up for the Ridgebreaker"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info levi")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Leviathan",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Leviathan",
    description: "The enemy will tremble when this beast approaches.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 3713 - Carbon: 2907 - Iridium: 2021 - Adamammite: 857 - Palladium: 1263 - Titanium: 940 - Quantanium: 940\nWarehouse Level Required: 12\nManufacturing Fee: $9,061\nTotal Cost (can vary): $115,254"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 2 Light Flaks - 2 Medium Lasers - 2 Railguns - 2 Heavy Lasers - 1 Huge Cannon\nCargo Hold: 228\nWarp Drive: Yes\nTotal Health Pool: 4250 Shield - 3000 Hull\nTop Speed: 58 - Acceleration: 5 - Turn Speed: 0.28"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Balanced firepower vs smaller ships - Has 1 huge cannon for high Spinal firepower - High mobility - High health - Fast for its size - Has 1 Railgun below the ship to defend its underbelly\n\nDisadvantages: Somewhat lacking in overall firepower - Blindspot on the bottom of the ship - Expensive"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info zeus")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Zeus",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Zeus",
    description: "The signature dreadnought used by the king of Olympian, Zeus can harness electricity making its shields hard to bring down.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 3852 - Carbon: 2987 - Iridium: 2091 - Adamammite: 911 - Palladium: 1298 - Titanium: 989 - Quantanium: 989\nWarehouse Level Required: 12\nManufacturing Fee: $9,548\nTotal Cost (can vary): $121,684"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 1 Light Flak - 5 Medium Lasers - 3 Heavy Lasers\nCargo Hold: 175\nWarp Drive: Yes\nTotal Health Pool: 4500 Shield - 3500 Hull\nTop Speed: 60 - Acceleration: 8 - Turn Speed: 0.27"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Large laser array allows for the easy destruction of enemy shields - With the second highest shield of any ship, it is a great damage tank - Has two defense turrets under the ship, a medium laser and a light flak, removing the underbelly blind spot most large ships possess - Has good speed for a ship of its size\n\nDisadvantages: Due to its lack of kinetic weaponry, it can have a very hard time getting through the enemy hull - Lacks a Spinal mount weapon - Very slow"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info ridge")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Ridgebreaker",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Ridgebreaker",
    description: "A heavy siege ship with enough firepower to destroy entire mountain ridges, not to mention entire starbases. Also highly durable and can stand prolonged periods of heavy fire.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 4091 - Carbon: 3061 - Iridium: 2534 - Adamammite: 723 - Palladium: 959 - Titanium: 773 - Quantanium: 773\nWarehouse Level Required: 12\nManufacturing Fee: $9,087\nTotal Cost (can vary): $115,563"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 5 Railguns - 2 Heavy Lasers - 4 Huge Cannons\nCargo Hold: 200\nWarp Drive: Yes\nTotal Health Pool: 3500 Shield - 5250 Hull\nTop Speed: 38 - Acceleration: 6 - Turn Speed: 0.17"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Extremely high spinal firepower that can wreck havoc on anything that is hit by them - Extremely high health, highest health for a dreadnought - Powerful siege turret firepower - Overall high damage output - Able to tank for a long period of time without hitting hull - Can solo-siege a Level 1 Starbase\n\nDisadvantages: Extremely slow, the slowest dreadnought in-game and second slowest ship, right behind the Nyx - Lack of small turrets makes it unable to fend off small ships - Vulnerable bottom - Slightly lower cargo hold than other Dreadnoughts - Hard to turn and control"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info andro")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Andromeda",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Andromeda",
    description: "Pray that this technology never falls into the wrong hands...",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 5830 - Carbon: 4504 - Iridium: 4810 - Adamammite: 487 - Palladium: 487 - Titanium: 487 - Quantanium: 487\nWarehouse Level Required: 14 - **Requires VIP Pass**\nManufacturing Fee: $11,285\nTotal Cost (can vary): $142,948"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 5 Huge Phasers - 6 Huge Cannons\nCargo Hold: 140\nWarp Drive: Yes\nTotal Health Pool: 2700 Shield - 2700 Hull\nTop Speed: 69 - Acceleration: 10 - Turn Speed: 0.28"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Massive spinal damage - Highest DPM (damage per minute) of any ship in the game - Great for taking down other dreads - Fast warp acceleration - One of the fastest dreads, second only to the Leviathan by a difference of 1 speed - Very high turn speed for a dread, again second only to the Leviathan\n\nDisadvantages: Lowest health in class - Large size makes it an easy target for all ships and weapons - Can only be used effectively by highly experienced players - Has no Turrets whatsoever, leaving it highly vulnerable to small, agile ships - Aiming is difficult, as the reduced mobility caused by being a Dreadnought makes it hard to hit targets that are below a Battleship or fast-moving. Make sure to bring support in the form of an Ampharos or a Tempest if taking on a fleet - Must own the Galaxy VIP Gamepass to build this ship"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info behemoth")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Behemoth",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Behemoth",
    description: "The Behemoth was designed to be the counter of other capital ships, it excels at fighting other capital ships using it's superior weapons when facing its broadsides.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 4199 - Carbon: 3257 - Iridium: 2342 - Adamammite: 860 - Palladium: 1309 - Titanium: 952 - Quantanium: 952\nWarehouse Level Required: 12\nManufacturing Fee: $9,964\nTotal Cost (can vary): $179,030"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 4 Railguns - 2 Medium Lasers - 4 Large Lasers - 2 Large Cannons\nCargo Hold: 249\nWarp Drive: Yes\nTotal Health Pool: 4000 Shield - 3250 Hull\nTop Speed: 65 - Acceleration: 9 - Turn Speed: 0.23"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: High Turret firepower - High Spinal firepower - High health - Great top speed for a Dreadnought - Great Turret placement\n\nDisadvantages: Expensive - Unable to deal much damage to smaller ships"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info vanguard")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Vanguard",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Vanguard",
    description: "A small carrier with extremely tanky fighters meant for swooping near bases, launching fighters and harassing miners.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 2907 - Carbon: 2430 - Iridium: 2365 - Adamammite: 397 - Palladium: 387 - Titanium: 497 - Quantanium: 387\nWarehouse Level Required: 10\nManufacturing Fee: $6,414\nTotal Cost (can vary): $85,002"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 4 Flaks - 2 Light Lasers - 2 Falcons\nCargo Hold: 70\nWarp Drive: Yes\nTotal Health Pool: 1200 Shield - 1100 Hull\nTop Speed: 140 - Acceleration: 20 - Turn Speed: 0.55"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Decent cost for a Carrier - Very high top speed for a Carrier - Much smaller than all other carriers, about the size of a Battlecruiser, making it harder to hit - Powerful Spinals - Durable Fighters. (Falcons) - Can defend itself very well against small ships while also being able to deploy fighters\n\nDisadvantages: Very low health. (Battlecruiser Class Health) - Only has 2 Falcons - Has trouble dealing with larger ships - Low firepower for its class"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info retribution")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Retribution",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Retribution",
    description: "The Retribution is a fierce and versatile dread. Capable of exacting righteous punishment to any foe it encounters.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 3624 - Carbon: 2806 - Iridium: 2061 - Adamammite: 757 - Palladium: 1108 - Titanium: 827 - Quantanium: 827\nWarehouse Level Required: 11\nManufacturing Fee: $8,630\nTotal Cost (can vary): $113,997"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 4 Railguns - 2 Medium Lasers - 3 Heavy Lasers - 4 Medium Cannons\nCargo Hold: 200\nWarp Drive: Yes\nTotal Health Pool: 4000 Shield - 3300 Hull\nTop Speed: 58 - Acceleration: 9 - Turn Speed: 0.3"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Very high turn speed - High turret firepower - Decent Spinal firepower - Excellent turret placement\n\nDisadvantages: Somewhat lacking in light turret firepower - Unable to fend off smaller ships"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info revelation")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Revelation",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Revelation",
    description: "With his heavily armed carrier you are able to easily overwhelm your enemy!",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 2776 - Carbon: 2470 - Iridium: 1755 - Adamammite: 695 - Palladium: 871 - Titanium: 936 - Quantanium: 731\nWarehouse Level Required: 11\nManufacturing Fee: $7,504\nTotal Cost (can vary): $92,629"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 5 Flaks - 2 Medium Lasers - 2 Large Lasers - 6 Fury Fighters\nCargo Hold: 200\nWarp Drive: Yes\nTotal Health Pool: 3500 Shield - 3000 Hull\nTop Speed: 40 - Acceleration: 7 - Turn Speed: 0.25"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Decent health - Good firepower with Fury as a custom fighter - High turret firepower makes it well-defended against intruders - Can support fleets in a large scale siege\n\nDisadvantages: Low mobility - Somewhat weak fighters - Vulnerable bottom - Can be overwhelmed by smaller ships - Very large and makes a huge target for enemy ships - Being slow makes it hard to run away"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info hev")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Hevnetier",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Hevnetier",
    description: "A light carrier designed to support a fleet in battle with fighters and light turret firepower.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 2310 - Carbon: 1991 - Iridium: 1467 - Adamammite: 598 - Palladium: 575 - Titanium: 825 - Quantanium: 575\nWarehouse Level Required: 9\nManufacturing Fee: $6,702\nTotal Cost (can vary): $77,412"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 4 Flaks - 3 Light Lasers - 6 Randomly Selected Fighters\nCargo Hold: 250\nWarp Drive: Yes\nTotal Health Pool: 2125 Shield - 2125 Hull\nTop Speed: 85 - Acceleration: 9.5 - Turn Speed: 0.32"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: High mobility - Not restricted to using a specific fighter - Well-defended against small ships - Reduced bottom vulnerability from side mounted turrets - Small but powerful and hard to hit at a long distance - Can hit a smaller ship because it contains small turrets - Can hold as much cargo as a Wyrm\n\nDisadvantages: Low health - Does not carry many fighters - Cannot focus all turrets on a single target at once - No spinal firepower - Lacks Medium and Heavy Turrets - High cost"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info storm")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Stormbringer",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Stormbringer",
    description: "Bring the fight to your enemies with this massive carrier.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 3155 - Carbon: 2779 - Iridium: 2038 - Adamammite: 826 - Palladium: 931 - Titanium: 1122 - Quantanium: 832\nWarehouse Level Required: 11\nManufacturing Fee: $8,553\nTotal Cost (can vary): $109,095"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 4 Small Flaks - 4 Medium Lasers - 6 Fury Fighters\nCargo Hold: 350\nWarp Drive: Yes\nTotal Health Pool: 3500 Shield - 3500 Hull\nTop Speed: 50 - Acceleration: 10 - Turn Speed: 0.2"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Provides enough fighters for use by the faction - High health - It is good for some PvP - It has small turrets, enabling it to fend off small ships\n\nDisadvantages: Relatively slow - Vulnerable underside - Semi-high cost"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info rhino")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Rhino",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Rhino",
    description: "This heavy carrier can unleash a fleet of fighters to wither down the enemy.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 4612 - Carbon: 4075 - Iridium: 3063 - Adamammite: 1238 - Palladium: 1616 - Titanium: 1616 - Quantanium: 1229\nWarehouse Level Required: 14\nManufacturing Fee: $12,541\nTotal Cost (can vary): $165,512"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 4 Small Flaks - 2 Light Lasers - 1 Railgun - 2 Medium Lasers - 1 Large Cannon - 10 Frenzy Fighters\nCargo Hold: 325\nWarp Drive: Yes\nTotal Health Pool: 3750 Shield - 3750 Hull\nTop Speed: 50 - Acceleration: 9 - Turn Speed: 0.25"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Many fighters - High firepower with a custom fighter called the Frenzy - High health - Huge explosion size making it a nightmare for ships that are near it - Only carrier with a spinal weapon and a railgun\n\nDisadvantages: Extremely high cost - Vulnerable bottom - Relatively slow - Can't focus all Turrets on a single target due to positioning"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info nyx")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Nyx",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Nyx",
    description: "The Nyx is a gigantic homage to a figure much loved in Gallente society. It is the biggest Capital ship at it's time, the perfect Carrier... they say. Armed with the most deadliest fighters to exist, it shall conquer the whole universe and throughout.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required - Silicate: 5473 - Carbon: 5080 - Iridium: 3818 - Adamammite: 1688 - Palladium: 1655 - Titanium: 2012 - Quantanium: 1655\nWarehouse Level Required: 16\nManufacturing Fee: $15,785\nTotal Cost (can vary): $201,445"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 11 Nyxesion Fighters\nCargo Hold: 500\nWarp Drive: Yes\nTotal Health Pool: 9125 Shield - 8100 Hull\nTop Speed: 35 - Acceleration: 6 - Turn Speed: 0.19"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Extremely high firepower from the Nyxesion custom fighters - The combination of over 17k total health and 40% damage resistance means that this ship can take the most punishment of any non-admin ship - More health than a Starbase. - Good speed and turn speed for its massive size - Extremely large death explosion causing it to turn into a nuke when killed. (420 Explosion size) - Has 40% damage resistance\n\nDisadvantages: Lacks Turrets or Spinals, forcing it to rely heavily on teammates for defense or pilots - Vulnerable from all angles - Very large - Low mobility - **Massive** explosion size, occurring only when your Nyx gets destroyed in combat. This can destroy any nearby ships, including allies. However, the explosion cannot damage bases - Can easily be destroyed by multiple dreadnoughts - This ship requires cooperation in order for a proper combat scenario - This ship is seen as a golden target for opportunistic pilots, given its low mobility and huge profile."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info fury")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Fury",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Fury",
    description: "The Fury is a fighter class ship that is extremely maneuverable and can deal a strong maximum of 200 damage to shields every time it fires its phasers. The ship is tiny, about the size of a Wasp and has four laser-barrels, and resembles a fighter jet. It has 4 glowing barrels that are operational and shoot small but formidable lasers.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required **NONE**\nWarehouse Level Required: 1\nManufacturing Fee: $0\nTotal Cost (can vary): $0\nThis fighter spawns in the hangar of Level 3 Bases; and in the hangars of the carriers the Hevnetier, the Revelation and the Stormbringer"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 4 Small Phasers\nCargo Hold: 0\nWarp Drive: None\nTotal Health Pool: 50 Shield - 125 Hull\nTop Speed: 195"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: High damage if used correctly - Maneuverable - Free\n\nDisadvantages: Easily hit by high fire-rate Turrets or high accuracy Turrets - Weak compared to most other fighters - Low health"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info fury")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Frenzy",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Frenzy",
    description: "The Frenzy is a \"stealth\" variant of the Fury, intended for the Rhino carrier. It carries four small phasers, slightly less hull than its sister fighter, and more speed. However, Frenzy is a slippery fighter, meaning it is very hard to control. It won't go in a straight line if you turn it too hard. People use it in swarms a lot, and it is hard to take out if it manages to get into a blind spot on your ship. It is carried on the Rhino, Hevnetier and Level 3 Starbases.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required **NONE**\nWarehouse Level Required: 1\nManufacturing Fee: $0\nTotal Cost (can vary): $0\nThis fighter spawns in the hangar of Level 3 Bases; and in the hangars of the carriers the Hevnetier and the Rhino"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 4 Small Phasers\nCargo Hold: 0\nWarp Drive: None\nTotal Health Pool: 50 Shield - 110 Hull\nTop Speed: 230"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: High damage if used correctly - Maneuverable - Free\n\nDisadvantages: Easily hit by high fire-rate Turrets or high accuracy Turrets - Weak compared to most other fighters - Low health"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info dragon")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Dragonfly",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Dragonfly",
    description: "The first fighter added into the game, the Dragonfly was originally a ship that was spawn-able by players. It is currently the game's fastest fighter with the weakest health pool, and one of the two fighters to have a small ballistic cannon as a weapon, the other being the Nyxesion. It can spawn in some carriers or Level 3 Starbases.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required **NONE**\nWarehouse Level Required: 1\nManufacturing Fee: $0\nTotal Cost (can vary): $0\nThis fighter spawns in the hangar of Level 3 Bases; and in the hangar of the carrier the Hevnetier"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 1 Small Cannon\nCargo Hold: 0\nWarp Drive: None\nTotal Health Pool: 25 Shield - 100 Hull\nTop Speed: 450"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Second fastest ship in-game excluding warp speed\n\nDisadvantages: Very low health (lowest in-game) - Spinal does little damage - Hard to aim at moving ships"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info xenophile")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Xenophile",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Fury",
    description: "The Xenophile was one of the second fighters to be added into the game, along with the Fury. It carries two small phasers and is the second fastest fighter currently in-game, boasting 345 max speed outside of owned territory. It has the second weakest health pool of fighters in-game.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required **NONE**\nWarehouse Level Required: 1\nManufacturing Fee: $0\nTotal Cost (can vary): $0\nThis fighter spawns in the hangar of Level 3 Bases; and in the hangar of the carrier the Hevnetier"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 2 Small Phasers\nCargo Hold: 0\nWarp Drive: None\nTotal Health Pool: 50 Shield - 100 Hull\nTop Speed: 345"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Fast - Free\n\nDisadvantages: Spinals aren't very good - Low health"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info nighthawk")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Nighthawk",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Nighthawk",
    description: "The Nighthawk is a fighter similar to the Xenophile, with more hull (150 to be precise) and 45 less speed, making it the third fastest fighter in-game. It is carried inside the Hevnetier or Level 3 Starbases.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required **NONE**\nWarehouse Level Required: 1\nManufacturing Fee: $0\nTotal Cost (can vary): $0\nThis fighter spawns in the hangar of Level 3 Bases; and in the hangar of the carrier the Hevnetier"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 2 Small Phasers\nCargo Hold: 0\nWarp Drive: None\nTotal Health Pool: 50 Shield - 150 Hull\nTop Speed: 300"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Fast - Small ship making it really hard to get hit - High health for a fighter - Free\n\nDisadvantages: Spinals do little damage - Low Shield/Hull"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info nixesion")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Nixesion",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Nixesion",
    description: "A Fighter risen from Gallente blood to push back any enemies that have gone where they shouldn't have.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required **NONE**\nWarehouse Level Required: 1\nManufacturing Fee: $0\nTotal Cost (can vary): $0\nThis fighter spawns in the hangar of Level 3 Bases; and in the hangars of the carriers the Hevnetier and the Nyx"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 3 Small Phasers - 4 Small Cannons\nCargo Hold: 0\nWarp Drive: None\nTotal Health Pool: 100 Shield - 150 Hull\nTop Speed: 100"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Very high firepower for a Fighter. (Higher than some destroyers) - Decent durability - Has two weapon types, allowing it to be effective no matter the situation - Easy to control since it moves slow enough for the pilot to react - A couple of Nyxesions can destroy a Level 1, 2 and 3 Starbase if undefended - High shield for a Fighter\n\nDisadvantages: Slow for a Fighter - Can be shot down easily - Can be out ranged"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info falcon")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Falcon",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Falcon",
    description: "The Falcon is a Fighter-Class ship resembling its namesake and can spawn in level 3 Starbases and carriers. It is a relatively normal fighter in speed and size, currently 4th fastest behind Xenophile, Nighthawk, and Dragonfly. Similar to the Nighthawk and Xenophile. The Falcon has two Small Phasers but more overall health than both, which is compensated with a lower top speed.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required **NONE**\nWarehouse Level Required: 1\nManufacturing Fee: $0\nTotal Cost (can vary): $0\nThis fighter spawns in the hangar of Level 3 Bases; and in the hangars of the carriers the Hevnetier and the Nyx"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: 2 Small Phasers\nCargo Hold: 0\nWarp Drive: None\nTotal Health Pool: 500 Shield - 100 Hull\nTop Speed: 230"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Fast - Maneuverable - Highest health out of all Fighters - The one Small Phaser reloads very fast, allowing for rapid fire\n\nDisadvantages: Relatively slower and has low(er) firepower - Susceptible to light Turrets"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});


}else

if (message.content.toLowerCase().startsWith(prefix + "info halloween")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Halloween",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Halloween_Ship",
    description: "The Halloween Ship is an admin-only ship that makes for a great party boat. It has a dance floor inside that flashes different colors. The ship drops no loot or bounty upon destruction.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required: Unobtainable\nManufacturing Fee: Unobtainable"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: None\nCargo Hold: 0\nWarp Drive: Yes\nTotal Health Pool: 2500 Shield - 2500 Hull\nTop Speed: 400\nAcceleration: 4\nTurn Speed: Fast!"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: ~~Swaggy~~ - High mobility - High damage resistance (95%) - Dance parties forever\n\nDisadvantages: Has no weapons - Vulnerable from all sides"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info revenue")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Revenue",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Revenue",
    description: "The Revenue is an admin only ship and is the fastest ship in the game. The ship drops no loot upon destruction. It has damage resistance of 95%. It can go 900 speed without warp!",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required: Unobtainable\nManufacturing Fee: Unobtainable"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: None\nCargo Hold: 0\nWarp Drive: Yes\nTotal Health Pool: 1400 Shield - 1200 Hull\nTop Speed: 900\nAcceleration: Fast!\nTurn Speed: Fast!"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Super high mobility- High damage resistance (95%)\n\nDisadvantages: Has no weapons - Vulnerable from all sides"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info eclipse")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Eclipse",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Eclipse",
    description: "The Eclipse is an admin restricted \"Cruiser\" in Galaxy that has no weapons, but a colossal amount of health and (95%) damage resistance. The ship drops no loot upon destruction.",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required: Unobtainable\nManufacturing Fee: Unobtainable"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: None\nCargo Hold: 0\nWarp Drive: None\nTotal Health Pool: 5000 Shield - 5000 Hull\nTop Speed: 125\nAcceleration: 25\nTurn Speed: 0.4"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: High mobility for its size - Excellent health - Excellent damage resistance (95%!)\n\nDisadvantages: Has no weapons - Vulnerable from all sides"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info toyota")) {
                  message.channel.send("https://vignette.wikia.nocookie.net/roblox-galaxy-official/images/4/44/Toyota.png/revision/latest?cb=20170906235812")
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Toyota Trueno AE86",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Toyota",
    description: "Also known as the AE85, The Toyota is an Admin Class ship that looks like a car and has two seats(one for passenger and the other for the driver/pilot). It has unique wheels and a nice looking red trail following it",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required: Unobtainable\nManufacturing Fee: Unobtainable"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: None\nCargo Hold: 0\nWarp Drive: None\nTotal Health Pool: 1400 Shield - 1200 Hull\nTop Speed: 900\nAcceleration: ???\nTurn Speed: ???"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Rediculous speed (900), On par with the Revenue - Very high resisitance (95%) - Works well with Eurobeat music\n\nDisadvantages: Has no weapons - Vulnerable from all sides"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "info ae86")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About the Toyota Trueno AE86",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Toyota",
    description: "Also known as the AE85, The Toyota is an Admin Class ship that looks like a car and has two seats(one for passenger and the other for the driver/pilot). It has unique wheels and a nice looking red trail following it",
    fields: [{
        name: "Ship Cost",
        value: "Materials Required: Unobtainable\nManufacturing Fee: Unobtainable"
      },
      {
        name: "Ship Statistics",
        value: "Weaponry: Yes\nCargo Hold: 0\nWarp Drive: None\nTotal Health Pool: 1400 Shield - 1200 Hull\nTop Speed: 900\nAcceleration: ???\nTurn Speed: ???"
      },
      {
        name: "Ship Strategies",
        value: "Advantages: Rediculous speed (900), On par with the Revenue - Very high resisitance (95%) - Works well with Eurobeat music\n\nDisadvantages: Has no weapons - Vulnerable from all sides"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "starbase")) {
                  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About Starbases",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Starbase",
    description: "The Starbase is the centre of factions and serves as a spawn point to players who are in that faction. The Starbase is crucial for factions as they are places where ore can be dumped, sold and bought. Many Starbases serve as safe houses for players as they can dock and despawn their ship there.\n\nWhen a Starbase is destroyed, the faction it belongs to also gets destroyed. The Starbase generates credits based on the amount of power and territory it holds. At the start of the game, it has 70 credits (25000 in Arcade). These Starbases are stationary and get a random position on the map.\n\nAll of these factions and Starbases are colour coded. When you walk to the centre of the Starbase, you are greeted with the starbase menu where you can open the ship menu, buy and sell items, teleport to the Mega Base, loan credits, and change faction settings. Even though the Starbase may seem safe, ships docked there may still be damaged. This doesn't apply to the Mega Base.\n\nThe Starbase has an explosive radius of 100. The new Starbases were changed in size. Docking terminals are now 9 studs wide and 10 studs tall. The floor and ceiling are both .8 studs in height. The docking point should be perfectly flush and centered to the floor.",
    fields: [{
        name: "Level 1",
        value: "This the level the starbase is when the game starts off. It has only 4 docks and can only house 4 players. There is only one floor and only 6 turrets on this base."
      },
      {
        name: "Level 2",
        value: "This is the second level for a starbase. This upgrade costs 3000 base credits and can only be performed by the leader of the faction. There are 8 docks and can house more players. There is a ladder near one of the corners of the starbase that can be used to get to the second floor. Smaller ships will always dock at A, B, C and D terminals, while bigger ships will always dock at E, F, G, and H terminals unless there is no room."
      },
      {
        name: "Level 3",
        value: "This is the last level for a starbase and costs 6000 base credits. Instead of more docks, there is a small hangar on the third floor (can be reached by a ladder). This hangar contains two regenerating fighters. There are 18 turrets/railguns. A level three starbase has 5000 shield points and 7000 hull points. All fighter types spawn in the hangar."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});


   }else

if (message.content.toLowerCase().startsWith(prefix + "list miner")) {
                  message.channel.send({embed: {
    color: 25500,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Miner-Class Ships",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Ships",
    description: "Miner Class ships are solely used for mining ores. These ships do not have any form of weaponry and tend to be slow. With the exception of the Harvester, they do not possess a warp drive.\n\nMiner Class ships are used to collect and sell ore for credits. They are the only ships with an ore hold, which contains all mined ore. This ore cannot be moved to the player's warehouse, and can only be sold to the starbase or the Mega Base.\n\nOne of the two ships that a player receives at the beginning of the game is a Miner Class ship, the Wasp.",
    fields: [{
        name: "List of ships within the Miner Class",
        value: "Wasp\n\nTango\n\nHarvester\n\nAdvanced Miner\n\nIndustrial Miner\n\nRorqual"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "list miners")) {
                  message.channel.send({embed: {
    color: 25500,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Miner-Class Ships",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Ships",
    description: "Miner Class ships are solely used for mining ores. These ships do not have any form of weaponry and tend to be slow. With the exception of the Harvester, they do not possess a warp drive.\n\nMiner Class ships are used to collect and sell ore for credits. They are the only ships with an ore hold, which contains all mined ore. This ore cannot be moved to the player's warehouse, and can only be sold to the starbase or the Mega Base.\n\nOne of the two ships that a player receives at the beginning of the game is a Miner Class ship, the Wasp.",
    fields: [{
        name: "List of ships within the Freighter Class",
        value: "Wasp\n\nTango\n\nHarvester\n\nAdvanced Miner\n\nIndustrial Miner\n\nRorqual"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "list freighters")) {
                  message.channel.send({embed: {
    color: 25500,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Freighter-Class Ships",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Ships",
    description: "Freighter Class ships are mainly used for transporting materials to a warehoue or trading. They have massive cargo holds in comparison to other ships, but do not have any form of weaponry.\n\nLike Miner Class ships, these ships are very slow and vulnerable (with the exception of Wyrm) but contain a warp drive. These ships are the category which goes to salvaging (looting) at most.",
    fields: [{
        name: "List of ships within the Freighter Class",
        value: "Wyrm\n\nTempura\n\nArgonaut\n\nProspector\n\nHercules\n\nPrepravca"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "list freighter")) {
                  message.channel.send({embed: {
    color: 25500,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Freighter-Class Ships",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Ships",
    description: "Freighter Class ships are mainly used for transporting materials to a warehoue or trading. They have massive cargo holds in comparison to other ships, but do not have any form of weaponry.\n\nLike Miner Class ships, these ships are very slow and vulnerable (with the exception of Wyrm) but contain a warp drive. These ships are the category which goes to salvaging (looting) at most.",
    fields: [{
        name: "List of ships within the Freighter Class",
        value: "Wyrm\n\nTempura\n\nArgonaut\n\nProspector\n\nHercules\n\nPrepravca"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "list trade")) {
                  message.channel.send({embed: {
    color: 25500,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Freighter-Class Ships",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Ships",
    description: "Freighter Class ships are mainly used for transporting materials to a warehoue or trading. They have massive cargo holds in comparison to other ships, but do not have any form of weaponry.\n\nLike Miner Class ships, these ships are very slow and vulnerable (with the exception of Wyrm) but contain a warp drive. These ships are the category which goes to salvaging (looting) at most.",
    fields: [{
        name: "List of ships within the Freighter Class",
        value: "Wyrm\n\nTempura\n\nArgonaut\n\nProspector\n\nHercules\n\nPrepravca"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "list trading")) {
                  message.channel.send({embed: {
    color: 25500,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Freighter-Class Ships",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Ships",
    description: "Freighter Class ships are mainly used for transporting materials to a warehoue or trading. They have massive cargo holds in comparison to other ships, but do not have any form of weaponry.\n\nLike Miner Class ships, these ships are very slow and vulnerable (with the exception of Wyrm) but contain a warp drive. These ships are the category which goes to salvaging (looting) at most.",
    fields: [{
        name: "List of ships within the Freighter Class",
        value: "Wyrm\n\nTempura\n\nArgonaut\n\nProspector\n\nHercules\n\nPrepravca"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "list frigate")) {
                  message.channel.send({embed: {
    color: 25500,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Frigate-Class Ships",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Ships",
    description: "Frigate class ships are the lowest priced combat capable ships available and thus are good starter ships.\n\nFrigate Class ships are small, extremely fast, and highly maneuverable. They have very light weaponry, very low health, and at most will only have 1 Turret. All the Frigate Class ships have spinal weaponry.\n\nThese ships are mostly used for distracting base turrets in a siege and not much else due to the low amount of firepower they possess\n\nThe standard size of a Frigate is 30 - 60 studs.",
    fields: [{
        name: "List of ships within the Frigate Class",
        value: "Starblade\n\nDropship\n\nAvenger\n\nRaven\n\nPython\n\nOsprey\n\nArchangel\n\nViper\n\nAbyss\n\nZhanado (**VIP**)"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "list frigates")) {
                  message.channel.send({embed: {
    color: 25500,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Frigate-Class Ships",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Ships",
    description: "Frigate class ships are the lowest priced combat capable ships available and thus are good starter ships.\n\nFrigate Class ships are small, extremely fast, and highly maneuverable. They have very light weaponry, very low health, and at most will only have 1 Turret. All the Frigate Class ships have spinal weaponry.\n\nThese ships are mostly used for distracting base turrets in a siege and not much else due to the low amount of firepower they possess\n\nThe standard size of a Frigate is 30 - 60 studs.",
    fields: [{
        name: "List of ships within the Frigate Class",
        value: "Starblade\n\nDropship\n\nAvenger\n\nRaven\n\nPython\n\nOsprey\n\nArchangel\n\nViper\n\nAbyss\n\nZhanado (**VIP**)"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "list destroyer")) {
                  message.channel.send({embed: {
    color: 25500,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Destroyer-Class Ships",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Ships",
    description: "A step up from Frigate Class ships, Destroyer Class ships are bigger and have more firepower.\n\nWhile not being as fast as Frigate Class ships, they still achieve high speeds and have very good maneuverability.\n\nThey still have low health, but it is much higher than Frigate Class ships. Destroyers can have good spinal weaponry or up to 5 light turrets.\n\nThe standard size of a Destroyer is 60 - 90 studs.",
    fields: [{
        name: "List of ships within the Destroyer Class",
        value: "Corvid\n\nPhantom\n\nCenturion\n\nScimitar\n\nZero\n\nCobra\n\nSabre Tooth\n\nArgosy"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "list destroyers")) {
                  message.channel.send({embed: {
    color: 25500,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Destroyer-Class Ships",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Ships",
    description: "A step up from Frigate Class ships, Destroyer Class ships are bigger and have more firepower.\n\nWhile not being as fast as Frigate Class ships, they still achieve high speeds and have very good maneuverability.\n\nThey still have low health, but it is much higher than Frigate Class ships. Destroyers can have good spinal weaponry or up to 5 light turrets.\n\nThe standard size of a Destroyer is 60 - 90 studs.",
    fields: [{
        name: "List of ships within the Destroyer Class",
        value: "Corvid\n\nPhantom\n\nCenturion\n\nScimitar\n\nZero\n\nCobra\n\nSabre Tooth\n\nArgosy"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "list cruiser")) {
                  message.channel.send({embed: {
    color: 25500,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Cruiser-Class Ships",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Ships",
    description: "Next up from Destroyer is the Cruiser.\n\nThese ships tend to be very maneuverable and pack a decent amount of health. They are not as fast as Destroyer Class ships but still have decent speeds. They have light to medium weaponry, with a varying number of automatic turrets and spinal weapons.\n\nMost cruisers make very good pirating ships and can be unstoppable in the hands of a good pilot. They are mostly cheap until you get to the Sixfold which costs 12k.\n\nThe standard size of the Cruiser is 90 - 125 studs.",
    fields: [{
        name: "List of ships within the Cruiser Class",
        value: "Xenon\n\nGunslinger\n\nOrion\n\nReaver\n\nGideon\n\nNova\n\nSpectre\n\nInvictus\n\nSixfold\n\nLusso"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "list cruisers")) {
                  message.channel.send({embed: {
    color: 25500,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Cruiser-Class Ships",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Ships",
    description: "Next up from Destroyer is the Cruiser.\n\nThese ships tend to be very maneuverable and pack a decent amount of health. They are not as fast as Destroyer Class ships but still have decent speeds. They have light to medium weaponry, with a varying number of automatic turrets and spinal weapons.\n\nMost cruisers make very good pirating ships and can be unstoppable in the hands of a good pilot. They are mostly cheap until you get to the Sixfold which costs 12k.\n\nThe standard size of the Cruiser is 90 - 125 studs.",
    fields: [{
        name: "List of ships within the Cruiser Class",
        value: "Xenon\n\nGunslinger\n\nOrion\n\nReaver\n\nGideon\n\nNova\n\nSpectre\n\nInvictus\n\nSixfold\n\nLusso"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "list battlecruiser")) {
                  message.channel.send({embed: {
    color: 25500,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Battlecruiser-Class Ships",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Ships",
    description: "The Battlecruisers are medium-sized ships.\n\nThe maneuverability and speed of Battlecruisers are greatly lessened in comparison to the Cruiser Class.\n\nHowever, boasting over twice as much health as Cruisers and several times more firepower, these are the go-to ships for most PVP battles. These ships have a powerful mix of light-medium weaponry.\n\nThe standard size for Battlecruiser is 125 - 175 studs.",
    fields: [{
        name: "List of ships within the Battlecruiser Class",
        value: "Bastion\n\nDire Wolf\n\nRazor Wing\n\nRadiance\n\nHecate\n\nAeaphiel\n\nGrievion\n\nBlack Flare\n\nBelvat\n\nSturm\n\nAbsolution\n\nTengu\n\nVansnova"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "list battlecruisers")) {
                  message.channel.send({embed: {
    color: 25500,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Battlecruiser-Class Ships",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Ships",
    description: "The Battlecruisers are medium-sized ships.\n\nThe maneuverability and speed of Battlecruisers are greatly lessened in comparison to the Cruiser Class.\n\nHowever, boasting over twice as much health as Cruisers and several times more firepower, these are the go-to ships for most PVP battles. These ships have a powerful mix of light-medium weaponry.\n\nThe standard size for Battlecruiser is 125 - 175 studs.",
    fields: [{
        name: "List of ships within the Battlecruiser Class",
        value: "Bastion\n\nDire Wolf\n\nRazor Wing\n\nRadiance\n\nHecate\n\nAeaphiel\n\nGrievion\n\nBlack Flare\n\nBelvat\n\nSturm\n\nAbsolution\n\nTengu\n\nVansnova"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "list battleships")) {
                  message.channel.send({embed: {
    color: 25500,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Battleship-Class Ships",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Ships",
    description: "The Battleships are a heavy class of ships, often with optimizations for certain tasks, such as Hasatan and Warlock being for sieges.\n\nThese ships are designed with medium to heavy weapons, for combat, or in the case of the Archeon, for sieges. They have a lot of health but are not very maneuverable when compared to other smaller ships.\n\nSome of the battleships can excel at many different roles such as PVP, sieging, and anti-siege.\n\nThe standard size for battleships is 175-275 studs.",
    fields: [{
        name: "List of ships within the Battleship Class",
        value: "Sovereign\n\nNisos\n\nHasatan\n\nHawklight\n\nAegis\n\nWarlock\n\nArcheon\n\nAmpharos\n\nWitch\n\nCarvainir (**VIP**)\n\nSentaliz(**VIP**)"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "list battleship")) {
                  message.channel.send({embed: {
    color: 25500,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Battleship-Class Ships",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Ships",
    description: "The Battleships are a heavy class of ships, often with optimizations for certain tasks, such as Hasatan and Warlock being for sieges.\n\nThese ships are designed with medium to heavy weapons, for combat, or in the case of the Archeon, for sieges. They have a lot of health but are not very maneuverable when compared to other smaller ships.\n\nSome of the battleships can excel at many different roles such as PVP, sieging, and anti-siege.\n\nThe standard size for battleships is 175-275 studs.",
    fields: [{
        name: "List of ships within the Battleship Class",
        value: "Sovereign\n\nNisos\n\nHasatan\n\nHawklight\n\nAegis\n\nWarlock\n\nArcheon\n\nAmpharos\n\nWitch\n\nCarvainir (**VIP**)\n\nSentaliz(**VIP**)"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "list dreadnought")) {
                  message.channel.send({embed: {
    color: 25500,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Dreadnought-Class Ships",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Ships",
    description: "The most powerful ships a single player can own, these monsters are unstoppable in the hands of a skilled pilot.\n\nThey are extremely slow and barely able to maneuver, the firepower these ships possess is colossal, able to take down a Battleship Class ship in around half a minute. Their health is monstrous, they can take a beating and survive. They also have 20% damage resistance.\n\nMost of them, however, do not come with adequate light Turret firepower, thus leaving them to be easily assaulted by small ships, as their heavy guns are not accurate enough to hit them. (The Andromeda is the only Dreadnought with no Turrets, but possesses spinals instead).\n\nThe standard size of Dreadnoughts is 275 - 400 studs.",
    fields: [{
        name: "List of ships within the Dreadnought Class",
        value: "Sagittarius\n\nNaglfar\n\nTennhausen\n\nTempest\n\nNemesis\n\nCyclops\n\nApocalypse\n\nLeviathan\n\nZeus\n\nRidgebreaker\n\nAndromeda(**VIP**)\n\nBehemoth"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "list dreadnoughts")) {
                  message.channel.send({embed: {
    color: 25500,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Dreadnought-Class Ships",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Ships",
    description: "The most powerful ships a single player can own, these monsters are unstoppable in the hands of a skilled pilot.\n\nThey are extremely slow and barely able to maneuver, the firepower these ships possess is colossal, able to take down a Battleship Class ship in around half a minute. Their health is monstrous, they can take a beating and survive. They also have 20% damage resistance.\n\nMost of them, however, do not come with adequate light Turret firepower, thus leaving them to be easily assaulted by small ships, as their heavy guns are not accurate enough to hit them. (The Andromeda is the only Dreadnought with no Turrets, but possesses spinals instead).\n\nThe standard size of Dreadnoughts is 275 - 400 studs.",
    fields: [{
        name: "List of ships within the Dreadnought Class",
        value: "Sagittarius\n\nNaglfar\n\nTennhausen\n\nTempest\n\nNemesis\n\nCyclops\n\nApocalypse\n\nLeviathan\n\nZeus\n\nRidgebreaker\n\nAndromeda(**VIP**)\n\nBehemoth"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "list dread")) {
                  message.channel.send({embed: {
    color: 25500,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Dreadnought-Class Ships",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Ships",
    description: "The most powerful ships a single player can own, these monsters are unstoppable in the hands of a skilled pilot.\n\nThey are extremely slow and barely able to maneuver, the firepower these ships possess is colossal, able to take down a Battleship Class ship in around half a minute. Their health is monstrous, they can take a beating and survive. They also have 20% damage resistance.\n\nMost of them, however, do not come with adequate light Turret firepower, thus leaving them to be easily assaulted by small ships, as their heavy guns are not accurate enough to hit them. (The Andromeda is the only Dreadnought with no Turrets, but possesses spinals instead).\n\nThe standard size of Dreadnoughts is 275 - 400 studs.",
    fields: [{
        name: "List of ships within the Dreadnought Class",
        value: "Sagittarius\n\nNaglfar\n\nTennhausen\n\nTempest\n\nNemesis\n\nCyclops\n\nApocalypse\n\nLeviathan\n\nZeus\n\nRidgebreaker\n\nAndromeda(**VIP**)\n\nBehemoth"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "list dreads")) {
                  message.channel.send({embed: {
    color: 25500,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Dreadnought-Class Ships",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Ships",
    description: "The most powerful ships a single player can own, these monsters are unstoppable in the hands of a skilled pilot.\n\nThey are extremely slow and barely able to maneuver, the firepower these ships possess is colossal, able to take down a Battleship Class ship in around half a minute. Their health is monstrous, they can take a beating and survive. They also have 20% damage resistance.\n\nMost of them, however, do not come with adequate light Turret firepower, thus leaving them to be easily assaulted by small ships, as their heavy guns are not accurate enough to hit them. (The Andromeda is the only Dreadnought with no Turrets, but possesses spinals instead).\n\nThe standard size of Dreadnoughts is 275 - 400 studs.",
    fields: [{
        name: "List of ships within the Dreadnought Class",
        value: "Sagittarius\n\nNaglfar\n\nTennhausen\n\nTempest\n\nNemesis\n\nCyclops\n\nApocalypse\n\nLeviathan\n\nZeus\n\nRidgebreaker\n\nAndromeda(**VIP**)\n\nBehemoth"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "list carrier")) {
                  message.channel.send({embed: {
    color: 25500,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Carrier-Class Ships",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Ships",
    description: "The Carriers are the most strategic and team-based ships in Galaxy. Alone, they have decent power and can be easily beaten. However, these ships contain Fighters within them, which are pilot-able by other players. When used with an entire team, these ships are extremely valuable in battle. You are able to teleport to any carrier on the map via the home base menu.\n\nThey are typically slightly slower and less maneuverable than Dreadnoughts, but are larger and have very similar health to Dreadnoughts (except the Hevnetier which is slightly smaller than a Battleship and has Battleship health, but also Battleship speed).",
    fields: [{
        name: "List of ships within the Carrier Class",
        value: "Revelation\n\nHevnetier\n\nStormbringer\n\nRhino\n\nNyx"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "list carriers")) {
                  message.channel.send({embed: {
    color: 25500,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Carrier-Class Ships",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Ships",
    description: "The Carriers are the most strategic and team-based ships in Galaxy. Alone, they have decent power and can be easily beaten. However, these ships contain Fighters within them, which are pilot-able by other players. When used with an entire team, these ships are extremely valuable in battle. You are able to teleport to any carrier on the map via the home base menu.\n\nThey are typically slightly slower and less maneuverable than Dreadnoughts, but are larger and have very similar health to Dreadnoughts (except the Hevnetier which is slightly smaller than a Battleship and has Battleship health, but also Battleship speed).",
    fields: [{
        name: "List of ships within the Carrier Class",
        value: "Revelation\n\nHevnetier\n\nStormbringer\n\nRhino\n\nNyx"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "list fighter")) {
                  message.channel.send({embed: {
    color: 25500,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Fighter-Class Ships",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Ships",
    description: "Fighters cannot be purchased or stored in a player's inventory. They spawn for free in the hangar of a level 3+ Starbase or in player owned Carriers. These ships are smaller than Frigates, and have even less health. However, these ships are deadly in battle. Their extremely small size makes them almost impossible for large ships to hit, and their weapons do high damage for their size (the Fury does nearly the same damage as the Viper, a Frigate class ship). Fighter Class ships are also very fast and maneuverable but do not have a warp drive.",
    fields: [{
        name: "List of ships within the Fighter Class",
        value: "Fury\n\nFrenzy\n\nDragonfly\n\nXenophile\n\nNighthawk\n\nNyxesion (g!info nixesion)"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "list fighters")) {
                  message.channel.send({embed: {
    color: 25500,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Fighter-Class Ships",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Ships",
    description: "Fighters cannot be purchased or stored in a player's inventory. They spawn for free in the hangar of a level 3+ Starbase or in player owned Carriers. These ships are smaller than Frigates, and have even less health. However, these ships are deadly in battle. Their extremely small size makes them almost impossible for large ships to hit, and their weapons do high damage for their size (the Fury does nearly the same damage as the Viper, a Frigate class ship). Fighter Class ships are also very fast and maneuverable but do not have a warp drive.",
    fields: [{
        name: "List of ships within the Fighter Class",
        value: "Fury\n\nFrenzy\n\nDragonfly\n\nXenophile\n\nNighthawk\n\nNyxesion (g!info nixesion)"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "list admin")) {
                  message.channel.send({embed: {
    color: 25500,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Admin-Class Ships",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Ships",
    description: "These Ships are restricted only to admins and can only be spawned by them. Admin Class ships have a very high damage resistance of 95% and have no weapons.",
    fields: [{
        name: "List of ships within the Admin Class",
        value: "Halloween Ship\n\nRevenue\n\nEclipse"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

}else

if (message.content.toLowerCase().startsWith(prefix + "list admin")) {
                  message.channel.send({embed: {
    color: 25500,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Admin-Class Ships",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Ships",
    description: "These Ships are restricted only to admins and can only be spawned by them. Admin Class ships have a very high damage resistance of 95% and have no weapons.",
    fields: [{
        name: "List of ships within the Admin Class",
        value: "Halloween Ship\n\nRevenue\n\nEclipse"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

    } else
    
    if (message.content.toLowerCase().startsWith(prefix + "about")) {
              message.channel.startTyping();
              setTimeout(() => {
                              message.channel.send({embed: {
    color: 501264,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "About GalaxyBot",
    url: "https://www.roblox.com/games/200330616/Galaxy-New-Turret-Effects",
    description: "This bot is a pet project created by winter#6371 to learn JavaScript.",
    fields: [{
        name: "Commands",
        value: "A link with all the commands usable for this bot will be up soon. For now, type g!help to receive commands"
      },
      {
        name: "Use of GalaxyBot",
        value: `This bot was intended for use in the [Official Galaxy Discord](https://discord.gg/3aN6KuC) and currently serves ${bot.guilds.size} guilds and ${bot.users.size} users!.`
      },
      {
        name: "Related links",
        value: "Here are some cool links related to the function of the bot.\n[Sean's Server](https://discord.gg/syUQGP5)\n[Galaxy Wikia Discord](https://discord.gg/KtV4PvG)\n[Official Galaxy Discord](https://discord.gg/3aN6KuC)\n[Galaxy Roblox Game](https://www.roblox.com/games/200330616/Galaxy-New-Turret-Effects)\n[Galaxy Wikia](http://roblox-galaxy-official.wikia.com)\n[Rcouret Studios](https://discord.gg/FQw8Wma)"
      },
      {
          name: "Extra information",
         value:"Special thanks to the Wikia Staff Team, especially SeanMorabitoYT for putting out the information used by this bot. If you see any errors or mistakes, or just want to ask questions about this bot, feel free to DM winter#6371. Bot uptime may vary, as this bot is being hosted from my personal computer."
      },{
        name: "12/09/17",
        value: "Lot's of errors fixed - Cool looking colour embeds :D - Added new ships and updated the Falcon fighter - Updated Galaxy staff list - Bug fixes - Added refund system :ok_hand:"
      },
      {
          name:"Legal Stuff",
          value:"By using GalaxyBot, you hereby agree to any data about you collected by GalaxyBot. For more information about this, please see the [Discord API Developers ToS](https://discordapp.com/developers/docs/legal)"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
  
});

message.channel.stopTyping(true);
              }, Math.floor((Math.random() * 4) +1)
)

    } else
    
    if (message.content.toLowerCase().startsWith(prefix + "admin")) {
              message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Current Galaxy/GalaxyBot\Wikia Staff",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Galaxy_Staff",
    description: "Current/Retired Galaxy/GalaxyBot/Wikia Staff",
    fields: [{
        name:"GalaxyBot Developer",
        value:"winter#6371 | eposz\n\nSean_MorabitoYT (Information Broker)"
      },{
        name: "Galaxy Game Staff",
        value: "Rcouret (Game Owner)\n\nPurpleDazee/PurpelDazee (Head of Staff)\n\nXelvok (Admin Director)\n\nRekuri (Shipmaster)\n\nCaymon77(Admin)\n\nSpeedstang (Admin)\n\nSean_MorabitoYT (Admin)\n\nUglycar (Community Advisor)\n\nFeraligater101 (Admin)\n\nBossJakeTheF5 (Admin)\n\nARiNA_AZUMA (Admin)\n\noChaosWarrioro (Admin)\n\nwinter [eposz] (Admin)\n\nVortextDaKitteh-7 [Falcxn] (Admin)"
      },{
        name: "Galaxy Discord Staff (Includes all Admins)",
        value: "Scatman (Discord Moderator)\n\nNicklesniff (Discord Moderator)\n\nRedacted (Discord Moderator)\n\nKD5/Dent (Discord Moderator)\n\nLogicaleman (Discord Moderator)"
      },{
        name :"Galaxy Wikia Staff",
        value: "PigeonGuru (Founder)\n\nSean_MorabitoYT (Head Admin)\n\nSpeedstang (Wiki Admin)\n\nGoldamainia (Wikia Admin)\n\nProgrammerA10 (Wikia Moderator)\n\nDimentioDimentio (Wikia Moderator)\n\noChaosWarrioro (Wikia Admin)\n\nCorsaka (Wikia Admin)"
      },{
        name: "Retired Staff",
        value: "Plural (Retired Community Advisor/Shipmaster)\n\n381654729 (Retired Head of Staff)\n\nfarterbotz (Retired Shipmaster)\n\nConfinium (Retired Admin)\n\nFalloria (Retired Admin)\n\nToscha Mijasik (Retired Admin)\n\nSuspicousPerson (Retired Admin)\n\nPavalix (Retired Admin)\n\nStephen409 (Retired Admin Director)\n\nAstraelis (Retired Admin)\n\nheroxdark (Retired Admin)"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

    } else
    
    if (message.content.toLowerCase().startsWith(prefix + "mod")) {
               message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Current Galaxy/GalaxyBot\Wikia Staff",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Galaxy_Staff",
    description: "Current/Retired Galaxy/GalaxyBot/Wikia Staff",
    fields: [{
        name:"GalaxyBot Developer",
        value:"winter#6371 | eposz\n\nSean_MorabitoYT (Information Broker)"
      },{
        name: "Galaxy Game Staff",
        value: "Rcouret (Game Owner)\n\nPurpleDazee/PurpelDazee (Head of Staff)\n\nXelvok (Admin Director)\n\nRekuri (Shipmaster)\n\nCaymon77(Admin)\n\nSpeedstang (Admin)\n\nSean_MorabitoYT (Admin)\n\nUglycar (Community Advisor)\n\nFeraligater101 (Admin)\n\nBossJakeTheF5 (Admin)\n\nARiNA_AZUMA (Admin)\n\noChaosWarrioro (Admin)\n\nwinter [eposz] (Admin)\n\nVortextDaKitteh-7 [Falcxn] (Admin)"
      },{
        name: "Galaxy Discord Staff (Includes all Admins)",
        value: "Scatman (Discord Moderator)\n\nNicklesniff (Discord Moderator)\n\nRedacted (Discord Moderator)\n\nKD5/Dent (Discord Moderator)\n\nLogicaleman (Discord Moderator)"
      },{
        name :"Galaxy Wikia Staff",
        value: "PigeonGuru (Founder)\n\nSean_MorabitoYT (Head Admin)\n\nSpeedstang (Wiki Admin)\n\nGoldamainia (Wikia Admin)\n\nProgrammerA10 (Wikia Moderator)\n\nDimentioDimentio (Wikia Moderator)\n\noChaosWarrioro (Wikia Admin)\n\nCorsaka (Wikia Admin)"
      },{
        name: "Retired Staff",
        value: "Plural (Retired Community Advisor/Shipmaster)\n\n381654729 (Retired Head of Staff)\n\nfarterbotz (Retired Shipmaster)\n\nConfinium (Retired Admin)\n\nFalloria (Retired Admin)\n\nToscha Mijasik (Retired Admin)\n\nSuspicousPerson (Retired Admin)\n\nPavalix (Retired Admin)\n\nStephen409 (Retired Admin Director)\n\nAstraelis (Retired Admin)\n\nheroxdark (Retired Admin)"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

    } else
    
    if (message.content.toLowerCase().startsWith(prefix + "staff")) {
               message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Current Galaxy/GalaxyBot\Wikia Staff",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Galaxy_Staff",
    description: "Current/Retired Galaxy/GalaxyBot/Wikia Staff",
    fields: [{
        name:"GalaxyBot Developer",
        value:"winter#6371 | eposz\n\nSean_MorabitoYT (Information Broker)"
      },{
        name: "Galaxy Game Staff",
        value: "Rcouret (Game Owner)\n\nPurpleDazee/PurpelDazee (Head of Staff)\n\nXelvok (Admin Director)\n\nRekuri (Shipmaster)\n\nCaymon77(Admin)\n\nSpeedstang (Admin)\n\nSean_MorabitoYT (Admin)\n\nUglycar (Community Advisor)\n\nFeraligater101 (Admin)\n\nBossJakeTheF5 (Admin)\n\nARiNA_AZUMA (Admin)\n\noChaosWarrioro (Admin)\n\nwinter [eposz] (Admin)\n\nVortextDaKitteh-7 [Falcxn] (Admin)"
      },{
        name: "Galaxy Discord Staff (Includes all Admins)",
        value: "Scatman (Discord Moderator)\n\nNicklesniff (Discord Moderator)\n\nRedacted (Discord Moderator)\n\nKD5/Dent (Discord Moderator)\n\nLogicaleman (Discord Moderator)"
      },{
        name :"Galaxy Wikia Staff",
        value: "PigeonGuru (Founder)\n\nSean_MorabitoYT (Head Admin)\n\nSpeedstang (Wiki Admin)\n\nGoldamainia (Wikia Admin)\n\nProgrammerA10 (Wikia Moderator)\n\nDimentioDimentio (Wikia Moderator)\n\noChaosWarrioro (Wikia Admin)\n\nCorsaka (Wikia Admin)"
      },{
        name: "Retired Staff",
        value: "Plural (Retired Community Advisor/Shipmaster)\n\n381654729 (Retired Head of Staff)\n\nfarterbotz (Retired Shipmaster)\n\nConfinium (Retired Admin)\n\nFalloria (Retired Admin)\n\nToscha Mijasik (Retired Admin)\n\nSuspicousPerson (Retired Admin)\n\nPavalix (Retired Admin)\n\nStephen409 (Retired Admin Director)\n\nAstraelis (Retired Admin)\n\nheroxdark (Retired Admin)"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});

    } else
    
    if (message.content.toLowerCase().startsWith(prefix + "rule")) {
              message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Galaxy Rules",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Galaxy_Rules",
    description: "Current Galaxy game rules",
    fields: [{
        name: "Rules subsections",
        value: "Rules are divided into 3 subsections.\n\n**g!offence minor** | lists all offences that are minor\n\n**g!offence major** | lists all offences that are major\n\n**g!offence bannable** | lists all bannable offences\n\n\nThis will all be added in the next update"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});


    } else
    
    if (message.content.toLowerCase().startsWith(prefix + "update")) {
              message.channel.send({embed: {
    color: 7479999,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Updates",
    url: "http://roblox-galaxy-official.wikia.com/wiki/Special:WikiActivity",
    description: "Updates planned for GalaxyBot.",
    fields: [{
        name: "Changelog",
        value: "g!turret turret/spinal weapon name | Turret information including damage and range\n\ng!gamehelp - g!how to play | How to play the Galaxy game\n\ng!quest | Information about the game quest\n\ng!refund | ~~[Experimental] Guides players through a refund process that asks for evidence and in game name, to be looked at by other staff members~~ [Released] [At Beta Stage] | g!builders for a list of builders, and their rank determined by purple :ok_hand:"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
    }
  }
});


    } else


    if (message.content.toLowerCase().startsWith(prefix + "help")) {
        message.channel.send({embed: {
  color: 15209750,
  title: "GalaxyBot Help",
  description: "**All commands can now be done in lowercase and uppercase** | All ships have been completed as of now - Nixesion fighters must be spelt as \"Nixesion\" ",
  fields: [{
        name: "Ship Information | g!info shipname - eg. g!info prepravca",
        value: "Displays the cost of a ship, materials required, statistics of the ship and it's advantages/disadvantages"
      },{
        name :"Starbase Information | g!starbase",
        value :"Displays the information of the three different levels of starbases, and general information regarding it"
      },
      {
        name :"Refund Requests | g!refund",
        value :"Type g!refund to get more info about this command!"
      },
      {
        name: "GalaxyBot Information | g!about",
        value: "Shows information about this bot and contains related links/discord server links"
      },
      {
        name:"Server Invitiation | g!invite",
        value:"Use g!invite to share this server to other galaxy-related servers"
        },
        {
        name: "Ship Class | g!list shipclass eg. g!list miner",
        value: "Displays information about ship catergories and lists ships within said category"
      },{
        name: "Staff List | g!staff - g!admins - g!mods",
        value: "Lists current and retired Galaxy/Galaxy Wikia/GalaxyBot Staff"
      },{
        name: "Galaxy Game Rules | g!rules",
        value: "Lists all Bannable offenses regarding the game itself (and not roblox in general) [Still not complete]"
      },{
        name: "8ball game | g!8ball",
        value: "Fun 8ball command added in courtesy of BlackHawkDestroyerIO"
      },{
          name: "Other Commands",
          value: "g!ping - Replies with the bot ping\n\ng!updates - See planned updates for GalaxyBot"
      }
    ],
  timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© GalaxyBot - winter#6371"
}}});

} else

      if(message.content.toLowerCase().startsWith(prefix + "tip")) {


        var randomTip = [
          "When you are in combat with a ship you are familiar with, try to get out of the turrets' line of sight. For example, when fighting a Stormbringer you would want to go underneath it, because it has no Turrets underneath it, so the Turrets on top can't hit you.",
          "Always keep moving as fast as you can when fighting as it lowers the chance of an enemy hitting you.",
          "However, if you're looking to get big hits in dog fights don't always fly like a complete maniac, try lowering your throttle to get more hits. A dogfight is when you're using small, fast ships with Spinals as their main weapons, such as the Zero, Razor Wing or any Fighter-Class ship.",
          "Make sure to use your Spinal Weapons (F and G guns) during combat for a huge damage bonus.",
          "Never attack a Starbase alone.",
          "When using Spinals make sure the bottom of the cursor is facing the top of the ship, if the target is moving sideways, remember to lead the target by aiming in front of them and estimating where the Spinals will hit.",
          "Use your Q, E, C, and Z controls to move in a path making aiming and maneuverability easier. Best used for dog fights.",
          "When fighting in and/or against larger ships, be sure to avoid enemy Spinal Weapons and try to position yourself to maximize your firepower. Also, it is wise to avoid enemy Turret fire. Larger ships turn slower, so therefore, if you position yourself behind and below it, you can effectively start racking up damage before they can turn and engage you.",
          "Always rotate your ship correctly so all/most of your Turrets get the line of sight with on your target. If you are using a Warlock for example, all the Turrets could fire if the top of your ship is facing the target but, if your starboard was facing the target, only half of the Turrets could fire.",
          "Try to stay out of combat when your shields are down. Shields slowly regenerate, but hull does not. You can repair your hull by docking at a friendly Starbase.",
          "Pay attention to the Minimap, the last thing you need while in the middle of a battle is to have enemy reinforcements arrive. However, if a fellow faction or ally reinforcements arrive you have a great advantage over the opposing ship(s). Simply watching the Minimap can be the difference between loss and survival."
        ];
          var tips = randomTip[Math.floor(Math.random() * 11) +1];

        message.channel.send(tips);

        } else

      if(message.content.toLowerCase().startsWith(prefix + "8ball")) {
        if(message.content.toLowerCase().includes("winter")) return message.channel.send(`Sorry ${message.author.username}, I am not permitted to speak about that`);


        var ball8 = [
          ":8ball: It is certain",
          ":8ball: It is decidedly so",
          ":8ball: Without a doubt",
          ":8ball: Yes definitely",
          ":8ball: You may rely on it",
          ":8ball: As I see it, yes",
          ":8ball: Most likely",
          ":8ball: Outlook good",
          ":8ball: Yes",
          ":8ball: Signs point to yes",
          ":8ball: Reply hazy try again",
          ":8ball: Ask again later",
          ":8ball: Better not tell you now",
          ":8ball: Cannot predict now",
          ":8ball: Concentrate and ask again",
          ":8ball: Don't count on it",
          ":8ball: My reply is no",
          ":8ball: My sources say no",
          ":8ball: Outlook not so good",
          ":8ball: Very doubtful"
        ];
          var tips = ball8[Math.floor(Math.random() * 20) +1];

        message.channel.send(tips);

    } else

    if (message.content.toLowerCase().startsWith(prefix + "idea")) {
      if (message.guild.id !== "204965774618656769") return message.channel.send(`Sorry ${message.author.username}, this command is only available in the Official Galaxy Server\n\nLINK: https://discord.gg/3aN6KuC`);
      if(message.channel.id === "204966054462619650") return message.channel.send(`Send this idea in <#336903856032317440> to keep discussions going.`)
      if (message.content.toLowerCase().substring(7,1000).startsWith("give me")) return message.channel.send(`${message.author.username}, that's not a valid request.`);
      if (message.content.toLowerCase().substring(7,1000).includes("remodel")) return message.channel.send(`${message.author.username}, that's not a valid request.`);
      message.channel.send(`Sending idea \`${message.content.substring(7,999999)}\``).then(m => m.delete(17000))
  message.react("⭐")
   bot.channels.get('358279514419363840').send({embed: {
  color: 3447003,
  description: `Idea: ${message.content.substring(7,999999)} by ${message.author.username}`
  }});

    } else

    if(message.content.toLowerCase().startsWith(prefix + 'refund')) {
    if (message.channel.type === "dm" && !message.author.bot) {
       message.channel.send('Refund System for GalaxyBot BETA\n\n***IF YOU ARE REFUNDING A SHIP:*** - State your ROBLOX name, the ship you are looking to refund, why it needs refunding and some form of evidence\n\n\n**DO NOT UPLOAD A VIDEO TO DISCORD AS THE BOT CANNOT DETECT THEM, UPLOAD TO YOUTUBE AND THEN SEND A LINK. ENSURE THAT YOU HAVE ADDED EVIDENCE OR YOUR REQUEST WILL BE REJECTED**\n```javascript\n**EXAMPLE** "Roblox name: Eposz, Ship lost: Prepravca, Lost to invisible base," "youtube.com/videonamehereblahblah"```\n\n**Rules for refund requests:\n1.It cannot be lag related\n2.Evidence must show a game breaking bug that has caused your ship to die**\n\n\n\n***IF YOUR REFUND REQUEST IS ABOUT DATA LOSS*** - You must state: Your Roblox Name, Your Bounty, Your Credits and Your Warehouse Level.\n\n**DO NOT LIE ABOUT THIS AS THE ADMINS WILL CHECK YOUR LOGS. BANS FOR LYING ARE PERMANENT AND APPEAL CHANCES ARE LOW**\n\n```javascript\n**EXAMPLE** "Roblox name: Eposz, Bounty: 50,034, Credits: 109,548, Warehouse level: 13"```\n\n**Copy the examples in blue if you wish**\n\n\nThis command will automatically cancel in `5` minutes.').then(() => {
         if(message.author.bot) return;
  message.channel.awaitMessages(response => response.content , {
    max: 1,
    time: 300000,
    errors: ['time'],
  })
  .then((collected) => {
    if(collected.first().content.startsWith('Refund System for GalaxyBot BETA')) return message.channel.send(":no_entry: **BOT ERROR, TYPE 'g!refund' AGAIN PLEASE** :no_entry:");
      message.channel.send(`Sending refund request: \`${collected.first().content}\``);
      bot.channels.get('358275964976758784').send({embed: {
  color: 3447003,
  description: ` \`REFUND REQUEST:\` ${collected.first().content}\n\nFrom ${message.author.username}${message.author.discriminator} ID: \`${message.author.id}\``
  }});
    })
    .catch(() => {
      message.channel.send('You didn\'t send a refund request in time! Type g!refund and try to type this again faster!');
    });
});

} else if(message.channel.type === "text") {
  message.channel.send('To use the refund feature, you must **DM** this bot.\n\n**INSTRUCTIONS FOR USE**\n\n***IF YOU ARE REFUNDING A SHIP:*** - State your ROBLOX name, the ship you are looking to refund, why it needs refunding and some form of evidence\n\n\n**DO NOT UPLOAD A VIDEO TO DISCORD AS THE BOT CANNOT DETECT THEM, UPLOAD TO YOUTUBE AND THEN SEND A LINK. ENSURE THAT YOU HAVE ADDED EVIDENCE OR YOUR REQUEST WILL BE REJECTED**\n```javascript\n**EXAMPLE** "Roblox name: Eposz, Ship lost: Prepravca, Lost to invisible base," "youtube.com/videonamehereblahblah"```\n\n**Rules for refund requests:\n1.It cannot be lag related\n2.Evidence must show a game breaking bug that has caused your ship to die**\n\n\n\n***IF YOUR REFUND REQUEST IS ABOUT DATA LOSS*** - You must state: Your Roblox Name, Your Bounty, Your Credits and Your Warehouse Level.\n\n**DO NOT LIE ABOUT THIS AS THE ADMINS WILL CHECK YOUR LOGS. BANS FOR LYING ARE PERMANENT AND APPEAL CHANCES ARE LOW**\n\n```javascript\n**EXAMPLE** "Roblox name: Eposz, Bounty: 50,034, Credits: 109,548, Warehouse level: 13"```\n\n**Copy the examples in blue if you wish**\n\nDon\'t forget to **DM** the bot or this won\'t Work. Kthx')
}
  

  } else
    
    if (message.content.toLowerCase().startsWith(prefix + "invite")) {
        message.channel.send(`${message.author.username}, Click this link to invite other people to your server, https://discordapp.com/oauth2/authorize?client_id=338397690641645568&scope=bot&permissions=232512`)
        bot.channels.get('350966037958623233').send({embed: {
  color: 3447003,
  description: `${message.author.username} has requested an invite link for this bot!`
  }});
    
    } else

    if (message.content.toLowerCase().startsWith(prefix + "ping")) {
        message.channel.send({embed: {color: 501264,
          description: `Pong! :ping_pong: The bot clients ping is \`${bot.ping.toFixed(0)}ms\``}});
        
    // alert the console
    console.log("pong-ed " + message.author.username);
    //log who did it
    bot.channels.get('350966037958623233').send({embed: {
  color: 501264,
  description: `pong-ed ${message.author.username} with a ping of \`${bot.ping.toFixed(0)}ms\``
  }});
    
     } else
    
        if (message.content.startsWith(prefix + "shutdown"))
        {
            if (message.author.id !== "200627218299355136") return message.channel.send("Sorry, only the bot owner can do that!")
        message.channel.send({embed: {
          color: 15209750,
          description: "The bot process has been shut down!"
          }})
        console.log("The bot process has been shut down!")
        bot.channels.get('350966037958623233').send({embed: {
  color: 15209750,
  description: `${message.author.username} has shut down the bot.`
  }});
        setTimeout(exiting, 3000)
        function exiting() {
            process.exit(1)}

            } else
    
        if (message.content.startsWith(prefix + "sendmsg"))
        {
            if (message.author.id !== "200627218299355136") return message.channel.send("Sorry, only the bot owner can do that!")
             message.channel.send({embed: {
              color: 501264,
              description: "The message has been sent!"
            }})
            console.log("Message to singularity sent!") 
            bot.channels.get('290664361989767169').send(`${message.content.substring(10,99999)}`)
            bot.channels.get('350966037958623233').send({embed: {
  color: 3447003,
  description: `Message ${message.content.substring(10,99999)} has been sent to Singularity!`
  }});

              } else
    
        if (message.content.startsWith(prefix + "sendmessage"))
        {
            if (message.author.id !== "200627218299355136") return message.channel.send("Sorry, only the bot owner can do that!")
             message.channel.send({embed: {
              color: 501264,
              description: "The message has been sent!"
            }})
            console.log("Message to custom guild sent!") 
            bot.channels.get(`${message.content.substring(14,32)}`).send(`${message.content.substring(33,99999)}`)
            bot.channels.get('350966037958623233').send({embed: {
  color: 3447003,
  description: `Message ${message.content.substring(33,99999)} has been sent`
  }});

        } else

        if(message.content.toLowerCase().startsWith(prefix + 'setnickname')) {
          if (message.author.id !== "200627218299355136") return message.channel.send("Sorry, only the bot owner can do that!")
            message.channel.send('Nickname set!')
          bot.users.get(`${message.content.substring(14,32)}`).setNickname(`${message.content.substring(34,66)}`)

        } else


        if (message.content.startsWith(prefix +"setstatus"))
        {
            if (message.author.id !== "200627218299355136") return message.channel.send("Sorry, only the bot owner can use this command!")
                 message.channel.send({embed: {
              color: 15288888,
              description: "The status has been updated!"
            }})
                console.log(`The game status has been changed to ${message.content.substring(12,9999)}`)
                 bot.user.setPresence({ game: { name: `${message.content.substring(12,99999)}`, type: 0 } });
                 bot.channels.get('350966037958623233').send({embed: {
  color: 3447003,
  description: `The game has been changed to ${message.content.substring(12,99999)}`
  }});

                //- Fixed
                //- .substring was the secret!!!
            
            }else
        if (message.content.startsWith(prefix +"statusdef"))
        {
            if (message.author.id !== "200627218299355136") return message.channel.send("Sorry, only the bot owner can use this command!")
                message.channel.send({embed: {
              color: 15288888,
              description: "The status has been reset!"
            }})
                console.log(`The game status has been changed with ${bot.users.size} users | g!help`)
                bot.user.setPresence({ game: { name: `g!help | ${bot.users.size} users`, type: 0 } });
                bot.channels.get('350966037958623233').send({embed: {
  color: 3447003,
  description: `The status has been reset to with ${bot.users.size} users | g!help`
  }});

                //g!statusdef returns status back to normal

        }else
            
                
        if (message.content.startsWith(prefix +"setstream"))
        {
            if (message.author.id !== "200627218299355136") return message.channel.send("Sorry, only the bot owner can use this command!")
                message.channel.send({embed: {
              color: 7479999,
              description: "The stream has been updated!"
            }})
                console.log(`The game stream has been changed to ${message.content.substring(12,9999)}`)
                 bot.user.setPresence({ game: { name: `${message.content.substring(12,99999)}`, type: 1 } });
                 bot.user.setGame(`${message.content.substring(12,9999)}`, `https://www.twitch.tv/pheumaj`, 1);
                 bot.channels.get('350966037958623233').send({embed: {
  color: 3447003,
  description: `The bot stream has been changed to ${message.content.substring(10,99999)}`}
  });

                //- Fixed
                //- .substring was the secret!!!
            
            }else
        
            if (message.content.startsWith(prefix +"streamdef"))
        {
            if (message.author.id !== "200627218299355136") return message.channel.send("Sorry, only the bot owner can use this command!")
                 message.channel.send({embed: {
              color: 7479999,
              description: "The stream has been reset!"
            }})
                console.log(`The game stream has been changed with ${bot.users.size} users | g!help`)
                bot.user.setPresence({ game: { name: `with ${bot.users.size} users | g!help`, type: 1 } });
                bot.user.setGame(`g!help | ${bot.users.size} users`, `https://www.twitch.tv/pheumaj`, 1);
bot.channels.get('350966037958623233').send({embed: {
  color: 3447003,
  description: `The game stream has been reset to with ${bot.users.size} users | g!help`}
  });
                

                //g!statusdef returns status back to normal
            

             }else
              
             if(message.content.toLowerCase().startsWith(prefix + 'eval')) {
              if(message.author.id !== "200627218299355136") return message.channel.send("Only the bot owner can use evaluate due to security reason >:(");
    try {
      const code = `${message.content.substring(7,999999)}`;
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  
             } else
       
             if (message.content.startsWith(prefix +"setname"))
        {
            if (message.author.id !== "200627218299355136") return message.channel.send("Sorry, only the bot owner can use this command!")
                message.reply(`The bot name has successfully been changed to ${message.content.substring(10,42)}!`)
                console.log(`The bot name has been changed to ${message.content.substring(10,42)}`)
                bot.user.setUsername(`${message.content.substring(10,42)}`)
                bot.channels.get('350966037958623233').send({embed: {
  color: 3447003,
  description: `Username has been changed to ${message.content.substring(10,42)}`}
  });

                //g!waspname changes bot name to WaspBot
                 
            
            }else
       
            if (message.content.startsWith(prefix +"namedef"))
        {
            if (message.author.id !== "200627218299355136") return message.channel.send("Sorry, only the bot owner can use this command!")
                message.reply("The bot name has successfully been reset to GalaxyBot!")
                console.log(`The bot name has been reset to GalaxyBot`)
                bot.user.setUsername("GalaxyBot")
                bot.channels.get('350966037958623233').send({embed: {
  color: 3447003,
  description: `The bot name has been reset to GalaxyBot`}
  });

                //g!namedef returns bot name back to normal
            

         } else 
         
         if(message.content.toLowerCase().startsWith(prefix + "7202947892304792")) {
        let userMention = message.mentions.users.first();
        if(message.mentions.users.size < 1) return message.channel.send(`User has been smash with banne`);
        if(message.mentions.users.first().id === "200627218299355136") return message.channel.send(`cant smashe hammer on ${userMention.username}`)
        message.channel.send(`${userMention.username}#${userMention.discriminator} has been smash with banne`)

      } else
         
         if(message.content.toLowerCase() === prefix + "apoc") {
        let userMention = message.mentions.users.first();
        if(message.mentions.users.size < 1) return message.channel.send(`User has been deafened by touhou music`);
        if(message.mentions.users.first().id === "200627218299355136") return message.channel.send(`cant deafen ${userMention.username}`)
        message.channel.send(`${userMention.username} has been deafened by touhou music`)
                 
      } else 
         
         if(message.content.toLowerCase().startsWith(prefix + "why")) {
        if(message.author.id !== "200627218299355136") return;
        message.channel.send(`https://cdn.discordapp.com/attachments/142706044416688128/339161936795271169/but_WHY.png`)

        } else 
         
         if(message.content.toLowerCase().startsWith(prefix + "boi")) {
        if(message.author.id !== "200627218299355136") return;
        message.channel.send(`https://cdn.discordapp.com/attachments/187017643448991745/338753823327780864/ced43ba6412014e7ce13422536713805fb37dce4.png`)

      } else
      
      if(message.content.toLowerCase().startsWith(prefix + "testing")) {
        if(message.author.id !== "200627218299355136") return;
          message.channel.send("Hello Ladies and Gentlemen, Welcome to the Offical Galaxy Discord server. You can use this place to talk or discuss all things Galaxy here! However, to ensure that the server doesn't get out of control, we have set some Guidelines that you must follow. Failure to abide by these rules may result in warnings, mutes, kicks or even bans.\n\n**Rule 1: No 18+ Content**\nNo Porn/Hentai/Gore, Anything considered NSFW or borderline NSFW. This includes any content posted and avatars, and DMing any users said content.\n\n**Rule 2: No Drama**\nNo arguing in here. Debates about the game and possible suggestions are fine, as long as they don't get out of hand. Once they do, you either drop it or take it to DMs\n\n**Rule 3: No Racism**\nRacism will not be tolerated on this server. This includes pictures, memes, avatars\n\n**Rule 4: Keep content in their relevant channels**\nNo bot commands, with the exception of mods and admins, may be used outside of <#204966054462619650>, Dumping pictures are to be in <#254780529986109440>, Suggestions and the use of g!idea is to be kept in <#336903856032317440>\n\n**Rule 5: No Profanity:**\nSwearing is now completely banned. Attempting to override/bypass the bots will result in a mute, so don't do it.\n\n**Rule 6: Advertising**\nPosting a youtube video of yours once is acceptable, and you may advertise if approved by an admin. Advertising here without permission, however, will be met with warnings and mutes.\n\n**Rule 7: No Spam**\nSpamming/Raiding will be met with a mute. Just don't do it.\n\n**Rule 8: Tagging**\nDon't spam tag anyone, or tag Admins or Moderators in <#338453701767200769>.\nYou may tag moderators if there are severe rules being broken, and you may tag Admins if there is a bug with the game that needs fixing (like invisible bases).\n\n**Rule 9: Loopholes**\nThere are no loopholes. Moderators and Admins may mute you if they feel it's necessary.\n\nJust follow these rules and you will not be in any trouble :slight_smile:")
        
        } else

        if(message.content.startsWith(prefix + "kick")) {
          if(message.guild.id !== "204965774618656769") return;
    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit: 
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
    if(!message.member.roles.some(r=>["Admins", "Moderator"].includes(r.name)) ) return message.reply(":no_entry: You don't have permission to kick :no_entry:");
    
    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    let member = message.mentions.members.first();
        if(message.mentions.users.size < 1) return message.channel.send('You must mention someone to kick')
    if(!member.kickable) return message.reply("Can't kick this user.");
    if(member.id === "200627218299355136") return message.reply("Can't kick this user.")
    
    // slice(1) removes the first part, which here should be the user mention!
    let reason = args.slice(2).join(' ');
    if(!reason)
      return message.reply("Please indicate a reason for the kick!");
    
    // Now, time for a swift kick in the nuts!
    await member.kick(reason + "~GalaxyBot Kick").catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.channel.send(`**${message.author.username}** Kicked **${member.user.username}** for: \`${reason}\``);
    bot.channels.get("361967935041830932").send({embed: {
    color: 14972979,
    title: `${member.user.username}${member.user.discriminator}`,
    description: `**KICKED**\n**USER: **${member.user.username}${member.user.discriminator}\n**User ID: **${member.id}\n**REASON: **${reason}`,
    timestamp: new Date(),
    footer: {
      icon_url: message.author.avatarURL,
      text: `${message.author.username}${message.author.discriminator} (STAFF)`
    }
  }
});

  } else

          if(message.content.startsWith(prefix + "ban")) {
            if(message.guild.id !== "204965774618656769") return;
    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit: 
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
    if(!message.member.roles.some(r=>["Admins"].includes(r.name)) ) return message.reply(":no_entry: You don't have permission to ban :no_entry:");
    
    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    let member = message.mentions.members.first();
        if(message.mentions.users.size < 1) return message.channel.send('You must mention someone to ban')
    if(!member.bannable) return message.reply("Can't ban this user.");
    if(member.id === "361967935041830932") return message.reply("Can't ban this user.")
    
    // slice(1) removes the first part, which here should be the user mention!
    let reason = args.slice(2).join(' ');
    if(!reason)
      return message.reply("Please indicate a reason for the ban!");
    
    // Now, time for a swift kick in the nuts!
    await member.ban(reason + "~GalaxyBot Ban").catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : \`${error}\``));
    message.channel.send(`**${message.author.username}** Banned **${member.user.username}** for: \`${reason}\``);
    bot.channels.get("361967935041830932").send({embed: {
    color: 16720896,
        author: {
      icon_url: member.user.displayAvatarURL
    },
    title: `${member.user.username}${member.user.discriminator}`,
    description: `**BANNED**\n**USER: **${member.user.username}#${member.user.discriminator}\n**User ID: **${member.id}\n**REASON: **${reason}`,
    timestamp: new Date(),
    footer: {
      icon_url: message.author.avatarURL,
      text: `${message.author.username}${message.author.discriminator} (STAFF)`
    }
  }
});

} else

    if(message.content.toLowerCase().startsWith(prefix + "warn")) {
      if(message.guild.id !== "204965774618656769") return;
   
    if(!message.member.roles.some(r=>["Admins", "Moderator"].includes(r.name)) ) return message.reply(":no_entry: You don't have permission to kick :no_entry:");
    
    
    let member = message.mentions.members.first();
        if(message.mentions.users.size < 1) return message.channel.send('You must mention someone to warn')
    if(!member.kickable) return message.reply("Can't warn this user.");
    if(member.id === "200627218299355136") return message.reply("Can't warn this user.")
    
    let reason = args.slice(2).join(' ');
    if(!reason)
      return message.reply("Please indicate a reason for the warn!");
    
    // Now, time for the warn!
    message.channel.send(`**${message.author.username}** Warned **${member.user.username}** for: \`${reason}\``);
    bot.channels.get("361967935041830932").send({embed: {
    color: 16776960,
        author: {
      icon_url: member.user.displayAvatarURL
    },
    title: `${member.user.username}#${member.user.discriminator}`,
    description: `**WARNED**\n**USER: **${member.user.username}#${member.user.discriminator}\n**User ID: **${member.id}\n**REASON: **${reason}`,
    timestamp: new Date(),
    footer: {
      icon_url: message.author.avatarURL,
      text: `${message.author.username}${message.author.discriminator} (STAFF)`
    }
  }
});



} else

  if(message.content.toLowerCase().startsWith(prefix + "mute")) {
    if(message.guild.id !== "204965774618656769") return;
    if(!message.member.roles.some(r=>["Admins", "Moderator"].includes(r.name)) ) return message.reply(":no_entry: You don't have permission to mute :no_entry:");
    let member = message.mentions.members.first();
    if(!member.kickable) return message.channel.send('Can\'t mute this user.') 
    let mutedRole = message.guild.roles.find("name", "Muted");
    if(!mutedRole) return message.channel.send("Muted role does not exist");
    let params = message.content.split(" ").slice(1);
    let time = params[1];
    let reason = args.slice(3).join(' ');
    if(!time) return message.channel.send('**Command Usage:** g!mute mention time reason\neg. g!mute @insertrandomnamehereblah 10m obvious troll (10 minutes)');
    member.addRole(mutedRole.id)
    message.channel.send(`**${message.author.username}** Muted **${member.user.username}** for: \`${ms(ms(time), {long: true})}\` reason: \`${reason}\``);
    bot.channels.get("361967935041830932").send({embed: {
    color: 32767,
    author: {
      icon_url: member.user.displayAvatarURL
    },
    title: `${member.user.username}${member.user.discriminator}`,
    description: `**MUTED**\n**USER: **${member.user.username}${member.user.discriminator}\n**User ID: **${member.id}\n**TIME: **${ms(ms(time), {long: true})}\n**REASON: **${reason}`,
    timestamp: new Date(),
    footer: {
      icon_url: message.author.avatarURL,
      text: `${message.author.username}${message.author.discriminator} (STAFF)`
    }
  }
})
      setTimeout(function() {
        member.removeRole(mutedRole.id);
      }, ms(time));
  
  
    } else if(message.content.toLowerCase().startsWith(prefix + "stat")) {
        const duration = moment.duration(bot.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
      message.channel.send(`= STATISTICS =
• Mem Usage  :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
• Uptime     :: ${duration}
• Users      :: ${bot.users.size.toLocaleString()}
• Servers    :: ${bot.guilds.size.toLocaleString()}
• Channels   :: ${bot.channels.size.toLocaleString()}
• Discord.js :: v${version}
• Node       :: ${process.version}`, {code: "asciidoc"});
};
    })


bot.on("ready", () => {
     console.log(`Bot is up since ${bot.readyTimestamp}`)
  bot.user.setPresence({ game: { name: `g!help | ${bot.users.size} Users`, type: 0 } });
})
    

// This code will run once the bot has disconnected from Discord.
bot.on("disconnected", function () {
	// alert the console
	console.log("Disconnected!");

	// exit node.js with an error
	process.exit(1);
})

bot.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  bot.user.setPresence({ game: { name: `with ${bot.users.size} Users | g!help`, type: 0 } });
  // Logs it to discord
  bot.channels.get('350966037958623233').send({embed: {
  color: 3447003,
  description: `I have been removed from: ${guild.name} (id: ${guild.id})`
}});

})

bot.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  bot.user.setPresence({ game: { name: `with ${bot.users.size} Users | g!help`, type: 0 } });
  // Logs it to discord
bot.channels.get('350966037958623233').send({embed: {
  color: 3447003,
  description: `New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`
}});

});

bot.on("guildMemberAdd", member => {
  if(member.guild.id !== "204965774618656769") return;
  member.send("Welcome Aliens, Pilots and Pirates to the Official Galaxy Discord Server.\nThis is where you discuss all things Galaxy related. We have Guidelines in the Galaxy and failure to follow these rules will result in mutes, kicks and bans. Our Discord policies are simple. Follow the rules and you can stay.\n\nGuidelines\n\nRule 1: No 18+ Content\nNo Porn/Hentai/Gore or anything considered NSFW or borderline NSFW. This includes, but is not limited to, user/nicknames, avatars, text, pics, memes and DM’s to any users with said content.\n\nRule 2: No Racism\nRacism will not be tolerated on this server. This includes, but is not limited to, user/nicknames, avatars, text, pics, memes and DM’s to any users with said content.\n\nRule 3: No Profanity:\nAttempting to override/bypass the bots will result in a mute, so don't do it.\n\nRule 4: No Phishing/hacking/cookie links.\nThis includes, but is not limited to, .exe files. Instant perm ban.\n\nRule 5: Keep content and #bot_commands in their relevant channels.\nWith the exception of mods and admins, No bot commands may be used outside of #bot_commands channel. Pictures/memes go in #picture_dump. Suggestions use of g!idea in the  #suggestions channel.\n\nRule 6: Advertising\nPosting a youtube video of yours once is acceptable. You may advertise if approved by an admin. Advertising here without permission is a mute or ban.\n\nRule 7: No Drama\nNo arguing. Debates about the game or suggestions are fine. Just don’t get out of hand or you’ll get muted.\n\nRule 8: No Spam\nSpamming/Raiding is a mute. Just don't do it.\n\nRule 9: Tagging\nDon't spam tag anyone in any channel. Don’t tag Admins or Moderators in #rank_request.\nOnly tag moderators if there are severe rules being broken. Only tag Admins if there is a bug with the game that needs fixing, like invisible bases, or for a refund request.\n\nRule 10: Loopholes\nBe respectful because you guys can’t dodge consequences. Moderators and Admins may mute you if they find it's necessary.")
  member.send("\n\nThese guidelines are collaborated effort by Staff and Moderators to keep you guys safe. Just follow these rules and you will not be in any trouble :smile:")
});

bot.on("messageDelete", message => {
  if(message.guild.id !== "204965774618656769") return;
  if(message.author.bot) return;
  bot.channels.get("361535768016977921").send({embed: {
    color: 3447003,
    title: `Message Deleted (${message.id}) in guild ${message.guild.name}`,
    description: `\`\`\`${message.content}\`\`\``,
    timestamp: new Date(),
    footer: {
      icon_url: message.author.avatarURL,
      text: `(${message.author.id}} ${message.author.username}${message.author.discriminator}`
    }
  }
})
});

//bot.on("messageUpdate", (oldMessage, newMessage) => {
  //if(oldMessage.guild.id !== "204965774618656769") return;
  //if(oldMessage.author.bot) return;
  //bot.channels.get("361535768016977921").send({embed: {
    //color: 3447003,
    //title: `Message Updated (${oldMessage.id}) in guild ${oldMessage.guild.name}`,
    //description: `**Old Message**\`\`\`${oldMessage.content}\`\`\`**New Message**\`\`\`${newMessage.content}\`\`\``,
    //timestamp: new Date(),
    //footer: {
      //icon_url: oldMessage.author.avatarURL,
      //text: `(${oldMessage.author.id}} ${oldMessage.author.username}${oldMessage.author.discriminator}`
    //}
  //}
//})
//});


bot.login(config.token);