const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:"https://opensource-demo.orangehrmlive.com",
    defaultCommandTimeout:20000,
    //pageLoadTimeout:60000,
    //viewportHeight:1920,
   // viewportWidth:1080,
    retries:{openMode:3, runMode:2},
   
    
    env:{
      username:"Raju",
      password:"admin123",

     },
     video:true,
     setupNodeEvents(on, config) {

     

     

     
   
  
     
    },
  },
});
