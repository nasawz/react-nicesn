import React from 'react';
import ReactDOM from 'react-dom';

import Navigation from "../src/Navigation.js";

let logo_dark_path = require("copy?src!./res/logo-dark.png")
let logo_light_path = require("copy?src!./res/logo-light.png")

let logoObj = {
  name: "nicesn",
  dark_path: logo_dark_path,
  light_path: logo_light_path
}

let menus = [
  {
    title: 'Home',
    label: '',
    icon: '',
    route: '/',
    subs: {
      type: 'mega',
      datas: [
        [{
          title: 'Concepts'
        },
          {
            title: 'Adventure',
            route: '/',
            icon: '',
            label: ''
          }], [
          {
            title: 'Concepts'
          },
          {
            title: 'Adventure',
            route: '/',
            icon: '',
            label: 'New!'
          }
        ]
      ]
    }
  }, {
    title: 'Profile',
    label: '',
    icon: '',
    route: '/',
    subs: {
      type: 'normal',
      datas: [
        {
          title: 'Contained',
          route: '/',
          icon: '',
          label: '',
          subs: [
            {
              title: 'Adventure',
              route: '/',
              icon: '',
              label: ''
            },
            {
              title: 'Adventure',
              route: '/',
              icon: '',
              label: ''
            }
          ]
        }, {
          title: 'Contained',
          route: '/',
          icon: '',
          label: ''
        }
      ]
    }
  }
]
let langs = [{
  title: '中文',
  curr: true
}, {
  title: 'English',
  curr: false
}
]

ReactDOM.render(
  <Navigation logo={logoObj} mode='dark' menus={menus} langs={langs} search={true}>Navigation</Navigation>,
  document.getElementById('__react-content')
);
