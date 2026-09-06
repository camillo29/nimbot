import 'dotenv/config';

export async function DiscordRequest(endpoint, options) {
  // append endpoint to root API URL
  const url = 'https://discord.com/api/v10/' + endpoint;
  // Stringify payloads
  if (options.body) options.body = JSON.stringify(options.body);
  // Use fetch to make requests
  const res = await fetch(url, {
    headers: {
      Authorization: `Bot ${process.env.DISCORD_TOKEN}`,
      'Content-Type': 'application/json; charset=UTF-8',
      'User-Agent': 'DiscordBot (https://github.com/discord/discord-example-app, 1.0.0)',
    },
    ...options
  });
  // throw API errors
  if (!res.ok) {
    const data = await res.json();
    console.log(res.status);
    throw new Error(JSON.stringify(data));
  }
  // return original response
  return res;
}

export async function InstallGlobalCommands(appId, commands) {
  // API endpoint to overwrite global commands
  const endpoint = `applications/${appId}/commands`;

  try {
    // This is calling the bulk overwrite endpoint: https://discord.com/developers/docs/interactions/application-commands#bulk-overwrite-global-application-commands
    await DiscordRequest(endpoint, { method: 'PUT', body: commands });
  } catch (err) {
    console.error(err);
  }
}

// Simple method that returns a random emoji from list
export function getRandomEmoji() {
  const emojiList = ['😭','😄','😌','🤓','😎','😤','🤖','😶‍🌫️','🌏','📸','💿','👋','🌊','✨'];
  return emojiList[Math.floor(Math.random() * emojiList.length)];
}

export function getRandomGif() {
    const gifList = ['https://cdn.discordapp.com/attachments/1214906463798165534/1518685295178940498/NimfeiSpin.gif?ex=6a3ad166&is=6a397fe6&hm=d207efb4f9c050a5002ad751d44ddc8003d4746925a882dc23a818e1f58763b4&',
        'https://cdn.discordapp.com/attachments/1214906463798165534/1518685304985227374/NimfeiNvm.gif?ex=6a3ad168&is=6a397fe8&hm=2e5515f220092816fc8e6341963051cc8b2ad563315c0693c5a8f148a785e7f2&',
        'https://cdn.discordapp.com/attachments/1214906463798165534/1518685309372731392/NimfeiBrick.gif?ex=6a3ad169&is=6a397fe9&hm=be88c89454233c705c929077f7fe9a5f4af9a016ff4f5d8965184c13451bbbc5&',
        'https://cdn.discordapp.com/attachments/1214906463798165534/1518685346513031248/lemon.gif?ex=6a3ad172&is=6a397ff2&hm=79874fc7496a76692b5f3fd5275775f317696e69e316ab45ca50bdc1bb6af0f1&'];
    return gifList[Math.floor(Math.random() * gifList.length)];
}

export function getRandomAnimal() {
    const animals = [
        'alpaką',
        'anakondą',
        'antylopą',
        'arą',
        'bąkiem',
        'bawołem',
        'bielikiem',
        'bizonem',
        'bocianem',
        'borsukiem',
        'bobrem',
        'bykiem',
        'chomikiem',
        'cykadą',
        'danielem',
        'delfinem',
        'dikdikiem',
        'dziobakiem',
        'dzikiem',
        'emu',
        'fenkiem',
        'flamingiem',
        'foką',
        'fretką',
        'gazelą',
        'gekonem',
        'gepardem',
        'gibonem',
        'gilem',
        'gorylem',
        'gołębiem',
        'gęsią',
        'hipopotamem',
        'hieną',
        'iguaną',
        'indykiem',
        'jaguarem',
        'jastrzębiem',
        'jaszczurką',
        'jeżem',
        'kaczką',
        'kajmanem',
        'kameleonem',
        'kangurem',
        'kapibarą',
        'karpiem',
        'kawką',
        'kobrą',
        'kolibrem',
        'koniem',
        'konikiem morskim',
        'koalą',
        'kogutem',
        'kojotem',
        'kotem',
        'krokodylem',
        'królikiem',
        'krukiem',
        'kuną',
        'kurą',
        'kuropatwą',
        'lemurem',
        'lampartem',
        'leniwcem',
        'lisem',
        'lwem',
        'łabędziem',
        'łasicą',
        'łosiem',
        'małpą',
        'mewą',
        'misiem',
        'modliszką',
        'morsem',
        'motylem',
        'mrówką',
        'muchą',
        'myszą',
        'narwalem',
        'nietoperzem',
        'nosorożcem',
        'ośmiornicą',
        'orłem',
        'orką',
        'osłem',
        'osą',
        'owcą',
        'pandą',
        'panterą',
        'papugą',
        'pawiem',
        'pelikanem',
        'pingwinem',
        'pijawką',
        'piranią',
        'psem',
        'pszczołą',
        'pstrągiem',
        'pumą',
        'rakiem',
        'rekinem',
        'reniferem',
        'ropuchą',
        'rysiem',
        'salamandrą',
        'sarną',
        'sępem',
        'skorpionem',
        'skowronkiem',
        'słoniem',
        'słowikiem',
        'sową',
        'strusiem',
        'surykatką',
        'szakalem',
        'szczurem',
        'szympansem',
        'ślimakiem',
        'świnią',
        'tchórzem',
        'termitem',
        'tygrysem',
        'tukanem',
        'tuńczykiem',
        'waranem',
        'wężem',
        'wiewiórką',
        'wilkiem',
        'wydrą',
        'wombatem',
        'zającem',
        'zebrą',
        'żabą',
        'żmiją',
        'żółwiem',
        'żubrem',
        'żyrafą',
        'aksolotlem',
        'baranem',
        'bażantem',
        'boa dusicielem',
        'czaplą',
        'glistą',
        'gronostajem',
        'jenotem',
        'kozicą',
        'krabem',
        'krewetką',
        'mangustą',
        'morskim lwem',
        'mrównikiem',
        'myszołowem',
        'norką',
        'padalcem',
        'pancernikiem',
        'pluskwą',
        'płaszczką',
        'raniuszkiem',
        'sekretarzem',
        'serwalem',
        'sikorką',
        'sokołem',
        'sroką',
        'szopem praczem',
        'szpakiem',
        'świstakiem',
        'trzmielem',
        'żurawiem',
        'albatrosem',
        'aniołem morskim',
        'błazenkiem',
        'bojownikiem',
        'buldogiem',
        'dingo',
        'dobermanem',
        'drozdem',
        'dżdżownicą',
        'dzięciołem',
        'grzywaczem',
        'gupikiem',
        'jarząbkiem',
        'kałamarnicą',
        'karaluchem',
        'kleszczem',
        'komarem',
        'kretem',
        'kukułką',
        'labradorem',
        'lamą',
        'makrelą',
        'molem',
        'morświnem',
        'niedźwiedziem',
        'ocelotem',
        'oposem',
        'owczarkiem',
        'ratlerkiem',
        'ryjówką',
        'sardynką',
        'zebrą',
        'jeleniem'
    ];
    return animals[Math.floor(Math.random() * animals.length)];
}

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
