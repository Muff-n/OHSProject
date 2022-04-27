var APP_DATA = {
  "scenes": [
    {
      "id": "0-church-exterior-front",
      "name": "Church Exterior (Front)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": -1.6839861069364463,
        "pitch": -0.04928812664711302,
        "fov": 1.4082576482174474
      },
      "linkHotspots": [
        {
          "yaw": -1.7122182254661986,
          "pitch": 0.017882252692384526,
          "rotation": 11.780972450961727,
          "target": "2-church-interior"
        },
        {
          "yaw": -2.0777504149269586,
          "pitch": -0.07587996223784543,
          "rotation": 14.137166941154074,
          "target": "1-church-exterior-back"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.215583611095317,
          "pitch": 0.14997575759649884,
          "title": "Snedecor Family<br>",
          "text": "<br>"
        },
        {
          "yaw": -1.0259125131870235,
          "pitch": -0.01462544684946998,
          "title": "Terry Family<br>",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "1-church-exterior-back",
      "name": "Church Exterior (Back)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 3.0906882469620065,
        "pitch": -0.07962413028261928,
        "fov": 1.4082576482174474
      },
      "linkHotspots": [
        {
          "yaw": -2.884053268105175,
          "pitch": -0.05203489245971227,
          "rotation": 23.561944901923464,
          "target": "0-church-exterior-front"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.26469842234173946,
          "pitch": 0.0593380063114477,
          "title": "Memorial<br>",
          "text": "<br>"
        },
        {
          "yaw": -2.500867273919761,
          "pitch": -0.007108409667695881,
          "title": "Ludlow Plot<br>",
          "text": "<br>"
        },
        {
          "yaw": 3.1008290775575205,
          "pitch": 0.005598976777411835,
          "title": "Jeremiah Terry<br>",
          "text": "<br>"
        },
        {
          "yaw": 2.4342743919351406,
          "pitch": -0.004510343775205428,
          "title": "Nicoll Family<br>",
          "text": "<br>"
        },
        {
          "yaw": 1.8698869188589287,
          "pitch": 0.023611809222419566,
          "title": "William Mazurie<br>",
          "text": "<br>"
        },
        {
          "yaw": -0.3404266653327621,
          "pitch": 0.025068765839055374,
          "title": "Penelope Price<br>",
          "text": "<br>"
        },
        {
          "yaw": -1.3025638544195388,
          "pitch": 0.062210008221597946,
          "title": "Sarah Jane Burgess Edwards<br>",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "2-church-interior",
      "name": "Church Interior",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": -3.086687009939155,
        "pitch": -0.01388070148384557,
        "fov": 1.4082576482174474
      },
      "linkHotspots": [
        {
          "yaw": 0.012183232067830119,
          "pitch": -0.042471078632189574,
          "rotation": 4.71238898038469,
          "target": "0-church-exterior-front"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.134921780192391,
          "pitch": 0.07856293802918302,
          "title": "Altar",
          "text": "<br>"
        },
        {
          "yaw": -2.7197054240811465,
          "pitch": -0.5643676737882704,
          "title": "Balcony",
          "text": "<br>"
        }
      ]
    }
  ],
  "name": "St. John's Episcopal Church",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
