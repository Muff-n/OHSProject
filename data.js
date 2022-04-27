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
          "yaw": -1.7033089607261456,
          "pitch": 0.07069206833155661,
          "rotation": 11.780972450961727,
          "target": "2-church-interior"
        },
        {
          "yaw": -2.1027787439462458,
          "pitch": -0.012178593154496653,
          "rotation": 14.137166941154074,
          "target": "1-church-exterior-back"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.3063009966169119,
          "pitch": 0.13364921409737995,
          "title": "Heart Sculpture<br>",
          "text": "<br>"
        },
        {
          "yaw": 0.5023768622214497,
          "pitch": 0.09157814016281307,
          "title": "Gazebo View<br>",
          "text": "<br>"
        },
        {
          "yaw": 1.4938541429820837,
          "pitch": 0.05369251232415806,
          "title": "Church Plaque<br>",
          "text": "<br>"
        },
        {
          "yaw": 1.9623283866287329,
          "pitch": 0.05761886757425572,
          "title": "Church Info<br>",
          "text": "<br>"
        },
        {
          "yaw": 2.2664629310706115,
          "pitch": 0.15228352711887183,
          "title": "Snedecor Family<br>",
          "text": "<br>"
        },
        {
          "yaw": -0.9968740361838258,
          "pitch": 0.05398231504744011,
          "title": "Terry Family<br>",
          "text": "<br>"
        },
        {
          "yaw": -2.485043076335508,
          "pitch": 0.03856888040115436,
          "title": "Hedge",
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
          "yaw": -2.8793050059120873,
          "pitch": 0.0007030569738688541,
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
          "yaw": -2.4864754020023483,
          "pitch": 0.06464882214753764,
          "title": "Ludlow Plot<br>",
          "text": "<br>"
        },
        {
          "yaw": 3.120633332438457,
          "pitch": 0.04728982394751746,
          "title": "Jeremiah Terry<br>",
          "text": "<br>"
        },
        {
          "yaw": 2.459489824026889,
          "pitch": 0.050333623883673795,
          "title": "Nicoll Family<br>",
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
          "yaw": 0.02144008049882018,
          "pitch": 0.027504552966522766,
          "rotation": 4.71238898038469,
          "target": "0-church-exterior-front"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -3.10619273231236,
          "pitch": 0.09846806738510594,
          "title": "Altar",
          "text": "Text"
        },
        {
          "yaw": -2.6870275344874983,
          "pitch": -0.5463502824404038,
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
