const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const withFonts = require("next-fonts");
const webpack = require("webpack");
const path = require("path");
const withPWA = require('next-pwa')




module.exports = withFonts(
  withCSS(
    withImages(
      withSass(
        withPWA(

      {
        target:"serverless",
        env: {
          hubspotApiKey : process.env.hubspotApiKey ,
          portalID : process.env.portalID , 
          formID : process.env.formID , 
          FAUNADB_SECRET_KEY : process.env.FAUNADB_SECRET_KEY , 
          COGNITO_DOMAIN : process.env.COGNITO_DOMAIN , 
          COGNITO_CLIENT_ID : process.env.COGNITO_CLIENT_ID , 
          NEXTAUTH_URL : process.env.NEXTAUTH_URL
        }
        
        webpack(config, options) {
          config.module.rules.push({
            test: /\.(eot|ttf|woff|woff2)$/,
            use: {
              loader: "url-loader",
            },
          });
          config.resolve.modules.push(path.resolve("./"));
          return config;
        },
        pwa: {
          disable: process.env.NODE_ENV === 'development',
          register: true,
          scope: '/app',
          sw: './service-worker.js',
          dest: 'public'
        },
      }
      
      )
    )
  )
)
);
