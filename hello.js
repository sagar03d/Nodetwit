console.log("Hello there");

var Twit = require('twit'); //
var config = require('./config');
var T = new Twit(config);
let i=0;
  tweet();
setInterval(tweet, 1000*60*60*2);

function tweet(){
      tw_bot = 'https://gist.githubusercontent.com/sagar03d/b4416d542619b25bc3c28fe6eed0f6a9/raw/30340ef5fed68b99b230930a484f730bd0d15ccf/twitter_bot.json';
      vir_as = 'https://gist.githubusercontent.com/sagar03d/9b66de0c2255e4974b5ec6874bde4211/raw/57e8233018974c1da8d74d47932e5b195fd75aad/virtual_assistent.json';
      git_web = 'https://gist.githubusercontent.com/sagar03d/15c4e8021005950891674533a67e0baf/raw/4a334597b9eb5fef9a02e910bdbbfba35ff13917/github_website.json';
      house_price = 'https://gist.githubusercontent.com/sagar03d/019645130549aac373eb992b2b4c7d6b/raw/24c3e424f3f8292624efe34a493e008b5aae25c4/house_price.json';
      ml_digits = 'https://gist.githubusercontent.com/sagar03d/c9f959d6027a6087cf8ed160a6cad690/raw/397bcf7f5cf7e9be4a7339519cc37b4415cfaf43/classifying_digits.json';
      ml_tuto = 'https://gist.githubusercontent.com/sagar03d/170bc2fcf432e8e32a73fbc768532843/raw/c1665874b92acefef9b22f55aeff18b815de566e/ML_tutorial.json';
      btc = 'https://gist.githubusercontent.com/sagar03d/1d4606b2d193de8f6960bcce2d2698de/raw/b32621715123395e3fe9e25dbc647b4059565a20/btc.json';
      let posts = [ml_digits,btc,tw_bot,vir_as,git_web,house_price,ml_tuto];
      let link = posts[i];
      const request = require('request');
      request(link, { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
         console.log(body.title);

    var status = {
        status: body.title+"\n"+body.link
    }

    T.post('statuses/update', status, tweetIt);
      function tweetIt(err, data, response){
        i++;
         if(err){
           console.log("Something went wrong");
       }
       else{
          console.log("It worked");
          if(i == posts.length){
              i = 0;
            }
        }
    }
    });
}
