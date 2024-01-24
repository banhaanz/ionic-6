var env_map = {
  "SIT": "sit.thailife.tlfollow"
  , "UAT": "uat.thailife.tlafter"
  , "PRE": "pre.thailife.tlafter"
  , "PROD": "com.thailife.tlafter"
};
var googleservice_map = {
  "SIT": "google-services.json"
  , "UAT": "google-services.json"
  , "PRE": "google-services-prod.json"
  , "PROD": "google-services-prod.json"
}
var wkport_map = {
  "SIT": "4001"
  , "UAT": "5001"
  , "PRE": "7001"
  , "PROD": "6001"
};
var app_name_map = {
  "SIT": "TL After SIT"
  , "UAT": "TL After UAT"
  , "PRE": "TL After PRE"
  , "PROD": "TL After Plus"
};
var url_scheme_map = {
  "SIT": "tlafterplussit"
  , "UAT": "tlafterplusuat"
  , "PRE": "tlafterpluspre"
  , "PROD": "tlafterplus"
}
var url_deeplink_map = {
  "SIT": "tlafterplussit.com"
  , "UAT": "tlafterplusuat.com"
  , "PRE": "tlafterpluspre.com"
  , "PROD": "tlafterplus.com"
}

var filename = 'config.xml';
var appid = env_map[process.argv[2] || "PROD"];
var googleservice = googleservice_map[process.argv[2] || "PROD"];
var wkport = wkport_map[process.argv[2] || "PROD"];
var appname = app_name_map[process.argv[2] || "PROD"];
var urlscheme = url_scheme_map[process.argv[2] || "PROD"];
var urldeeplink = url_deeplink_map[process.argv[2] || "PROD"];

var fs = require('fs')
fs.readFile(filename, 'utf8', function (err, data) {
  if (err) { 
      return console.log(err);
  }

  // change app_id
  data = data.replace(/<widget id=\"(.*?)\"/, '<widget id="' + appid + '"');

  // change google-services resource file
  data = data.replace(/<resource-file(.*?)>/, '<resource-file src="' + googleservice + '" target="app/google-services.json" />');

  // change WKPort
  data = data.replace(/<preference name="WKPort" value=\"(.*?)\"/, '<preference name="WKPort" value="' + wkport + '"');
  data = data.replace(/<allow-navigation(.*?)>/, '<allow-navigation href="http://localhost:' + wkport + '/*" />');

  // change Application Name
  data = data.replace(/<name>(.*?)</, '<name>' + appname +'<');

  // change URL Scheme
  // data = data.replace(/<variable name="URL_SCHEME" value=\"(.*?)\"/, '<variable name="URL_SCHEME" value="' + urlscheme + '"');

  fs.writeFile(filename, data, 'utf8', function (err) {
     if (err) return console.log(err);
  });

  const { exec } = require('child_process');
  exec('cordova plugin remove cordova-plugin-customurlscheme', (err, stdout, stderr) => {
    if (err) {
      // node couldn't execute the command
      return;
    }

    exec('cordova plugin add cordova-plugin-customurlscheme@4.4.0 --variable URL_SCHEME=' + urlscheme, (err, stdout, stderr) => {
      if (err) {
        // node couldn't execute the command
        return;
      }

      // the *entire* stdout and stderr (buffered)
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    });

    // the *entire* stdout and stderr (buffered)
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });

  //Deeplink
  exec('cordova plugin remove ionic-plugin-deeplinks', (err, stdout, stderr) => {
    if (err) {
      // node couldn't execute the command
      return;
    }
    
    exec('cordova plugin add ionic-plugin-deeplinks@1.0.20 --variable URL_SCHEME='+urlscheme+' --variable DEEPLINK_SCHEME=https --variable DEEPLINK_HOST='+urldeeplink+' --variable ANDROID_PATH_PREFIX=/', (err, stdout, stderr) => {
      if (err) {
        // node couldn't execute the command
        return;
      }

      // the *entire* stdout and stderr (buffered)
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    });

    // the *entire* stdout and stderr (buffered)
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });
});

// fs.readFile('package.json', 'utf8', function (err, data) {
//   if (err) {
//       return console.log(err);
//   }

//   data = data.replace(/"URL_SCHEME": \"(.*?)\"/, '"URL_SCHEME": "' + urlscheme + '"');

//   fs.writeFile('package.json', data, 'utf8', function (err) {
//       if (err) return console.log(err);
//   });
// });
