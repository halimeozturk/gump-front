
  var currentEnv = (function () {
    var env = process.env.REACT_APP_ENVIRONMENT || "local";
    return env;
  })();
  
  var Resources = {
  
    getValue: function (key) {
      if (typeof Resources["url"][key] != "undefined")
        return Resources["url"][key];
      else if (typeof Resources[currentEnv][key] != "undefined")
        return Resources[currentEnv][key];
    },
  
    url: {
      countryAllApiURL: "/country/all",
    },
  
    local: {
      appBaseEnvURL: "/api",
      apiBaseEnvURL: "http://localhost:8080/api",
    },
  
    dev: {
      appBaseEnvURL: "/api",
      apiBaseEnvURL: "https://whispering-shore-75390.herokuapp.com/api",
    },
  };
  
  export default Resources;
  