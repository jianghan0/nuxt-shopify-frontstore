import Vue from 'vue'
import fetch from 'node-fetch'
import Client from 'shopify-buy'

const shopify = Client.buildClient({
  domain: process.env.STORE_URL,
  storefrontAccessToken: process.env.STORE_FRONT_ACCESS_TOKEN
}, fetch);

Vue.prototype.$shopify = shopify
