## Getting started
1. **Create a self-signed SSL certificate**

Before getting started, you will need to have created a self-signed SSL certificate to serve your assets locally. Please follow this guide before proceeding. [Create a self signed SSL certificate](https://github.com/Shopify/slate/wiki/4.-Create-a-self-signed-SSL-certificate)

2. **Install project dependencies**

You will need to make a clone of this repo and run the following command in the project folder. This will install the Shopify theme dependencies as well as third party packages required for the local theme development.

`$ yarn install`

3. **Set up your .env file**

You will need to create a .env file using the contents below in the project directory. These details will not be supplied to you, you will to set up a private Shopify app to get these details for your environment.

```
# The myshopify.com URL to your Shopify store 
SLATE_STORE=your-test-store.myshopify.com

# The API password generated from a Private App 
SLATE_PASSWORD=

# The ID of the theme you wish to upload files too
SLATE_THEME_ID=

# A list of file patterns to ignore, with each list item separated by ':' 
SLATE_IGNORE_FILES=settings_data.json:
```

1. **Start Node.js Express server and begin watching assets**

The command will compile the assets within /src into a /dist directory - which are all the necessary files for your theme to run.

`$ yarn start`

5. **Start developing!**

The terminal should provide you with a preview link to your theme, and will automatically inject and refresh the browser when changes are made. The preview link should like either of the following:

`https://localhost:3000/?preview_theme_id=THEME_ID`

`https://123.45.678.90:3000/?preview_theme_id=THEME_ID` 

> If you are getting localhost or certificate issues, then please follow this guide to troubleshoot the issue. [Create a self signed SSL certificate](https://github.com/Shopify/slate/wiki/4.-Create-a-self-signed-SSL-certificate)

5. **Working demo link**

The working demo can be accessed from [here](https://wmw-advance-test.myshopify.com/)
