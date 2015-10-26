var path = require('path');

global.CONF_DIRECTORY = "/usr/local/share/omaze/conf/";
global.ROOT_DIR = __dirname;

// only set this if it wasn't already configured (aka... in tests)
global.rootRequire = global.rootRequire || function(name) {
    return require(__dirname + '/' + name);
};


global.getEnvVar = function(env_var_name, default_value) {
    var value = undefined;
    if(!env_var_name || env_var_name == "" || env_var_name == null){
        console.error("Attempting to get ENV var with undefined key name.");
        return value;
    }

    // you don't need a try catch here because process.env doesn't throw for missing vars
    value = process.env[env_var_name];

    /*
        HACK to deal with chef environment mis-nomer
     */
    if(value === "staging"){
        value = "stage";
    }

    if(value == undefined && default_value){
        value = default_value;
    }

    return value;
};