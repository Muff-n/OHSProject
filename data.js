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
          "title": "Snedecor Family",
          "imgPath": "resources/panels/front/snedecor/imgs",
          "imgCount": 8,
          "captions": [
            "Eliphalet: spouse of Sarah (1788-1861 [73])",
            "Eliphalet Snedecor - Living History",
            "Sarah & Cornelia: spouse of Eliphalet (1787-1875 [88]), daughter (1822-1880 [58])",
            "Lewis: child of Eliphalet (1811-1846 [35])",
            "John & Jeremiah: children of Lewis (1839-1864 [25] / 1842-1864 [22])",
            "John Snedecor - Living History",
            "Mary: child of Lewis (1841 [6mths])",
            "Deborah: child of Eliphalet (1814-1833 [19])",
          ],
          "facts":[
            "After receiving leased land from the Nicoll family, Eliphalet built a popular tavern.",
            "Lewis' grave is inscribed with a pastoral hymn entitled: Forgive, Blest Shade! The Tributary Tear.",
            "John & Jeremiah were killed in the Civil War, fighting for the Union Army.",
          ],
          "speechCap":["Eliphalet", "John"],
          "audioPath": "resources/panels/front/snedecor/audio/",
          "scripts": ["#eliphalet","#john"]
        },
        {
          "yaw": -1.0259125131870235,
          "pitch": -0.01462544684946998,
          "title": "William Terry Family",
          "imgPath": "resources/panels/front/terry/imgs",
          "imgCount": 17,
          "captions": [
            "William: spouse of Mary Carmen (1750-1824 [74])",
            "Silas: child of William (1784-1838 [54])",
            "Martha: spouse of Silas (1786-1834 [47])",
            "Martha Terry - Living History",
            "Amanda: child of Silas (1808-1812 [4])",
            "Amanda Terry - Living History",
            "Glorana: child of William (1773-1839 [66])",
            "Glorana Strong - Living History",
            "William & Louise Strong: child of Glorana (1807-1855 [47]), spouse (1808-1885 [77])",
            "Mary Strong: child of William Strong (1831-1859 [28])",
            "Ruth Brown: child of William (1775-1858 [83])",
            "William Brown: spouse of Ruth (1762-1845 [83])",
            "Samuel Brown: child of Ruth (1798-1876 [77])",
            "Mary Green: child of William (1779-1868 [89])",
            "William Green: spouse of Mary Green (1779-1824 [45])",
            "Isaac Woodruff: 1st spouse of Hannah (child of William) (1781-1813 [32])",
            "Jacob Morris: 2nd spouse of Hannah (1770-1855 [84])",
          ],
          "facts":[
            "Both Glorana and Silas had daughters named Amanda.",
            "Isaac Woodruff passed away in a fishing accident, which killed 10 other men.",
            "Silas' daughter (Amanda) was burried with the alphabet as she had been learning the ABCs.",
          ],
          "speechCap":["Martha", "Glorana"],
          "audioPath": "resources/panels/front/terry/audio/",
          "scripts": ["#martha","#glorana"]
        }
      ],
      "imageHotspots": [
        {
          "yaw": 1.45504400546002,
          "pitch": -0.007021906781497833,
          "title": "<div>Plaque</div>",
          "img": "tour.html#plaque"
        },
        {
          "yaw": 0.21388879878420397,
          "pitch": -0.022392020306838845,
          "title": "Gazebo View<br>",
          "img": "tour.html#gazebo"
        },
        {
          "yaw": -2.4613147647839817,
          "pitch": 0.014653578657348731,
          "title": "<div>Garden</div>",
          "img": "tour.html#garden"
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
          "yaw": -2.500867273919761,
          "pitch": -0.007108409667695881,
          "title": "Ludlow Family",
          "imgPath": "resources/panels/back/ludlow/imgs",
          "imgCount": 12,
          "captions": [
            "William Handy: spouse of Frances Nicoll (1821-1890 [69])",
            "William Handy Ludlow - Portrait",
            "William Handy Ludlow - Living History",
            "Frances Nicoll: spouse of William Handy (1822-1887 [65])",
            "Nicoll: child of William Handy (1842-1915 [73])",
            "Nicoll Ludlow - Portrait",
            "Frances Mary Thomas: 1st spouse of Nicoll (1842-1873 [30])",
            "Nicoll Jr.: child of Nicoll (1871-1887 [15])",
            "Mary McLean (Living History): 2nd spouse of Nicoll",
            "William (Portrait): child of William Handy (1843-1901 [57])",
            "William Ludlow - Living History",
            "Newton Perkins: child of William Handy (1846-1858 [12])",
          ],
          "facts":[
            "William Handy Ludlow was a Civil War Union Major General, politician, and lawyer.",
            "Nicoll Ludlow was a Rear Admiral in the US Navy, and William Ludlow was a Major General in the US Army.",
            "Mary McLean Ludlow led a landmark lawsuit against her spouse regarding private ownership of churches/cemetaries.",
          ],
          "speechCap":["William Handy Ludlow", "William Ludlow"],
          "audioPath": "resources/panels/back/ludlow/audio/",
          "scripts": ["#williamHandy","#williamLudlow"]
        },
        {
          "yaw": 3.1008290775575205,
          "pitch": 0.005598976777411835,
          "title": "Jeremiah Terry Family",
          "imgPath": "resources/panels/back/terry/imgs",
          "imgCount": 5,
          "captions": [
            "Elizabeth & Jeremiah: married couple (1742-1795 [53] / 1739-1823 [84])",
            "Jemima Smith (Living History): child of Elizabeth (1768-1833[65])",
            "Henry Smith: spouse of Jemima (1766-1805 [38])",
            "James: child of Elizabeth (1778-1817 [38])",
            "Edmond: child of James (1811-1839 [28])",
          ],
          "facts":[
            "Elizabeth's headstone is the oldest one in the cemetery.",
            "Jeremiah served as a Lieutenant in the Revolutionary War.",
            "Jemima and her family worked as farmers.",
          ],
          "speechCap":["Jemima"],
          "audioPath": "resources/panels/back/terry/audio/",
          "scripts": ["#jemima"]
        },
        {
          "yaw": 2.4342743919351406,
          "pitch": -0.004510343775205428,
          "title": "Nicoll Family",
          "imgPath": "resources/panels/back/nicoll/imgs",
          "imgCount": 6,
          "captions": [
            "Sarah Augusta & William: child of William (1824-1830 [6] / 1798-1823 [25])",
            "Sarah Augusta Nicoll Nicoll - Living History",
            "Sarah Greeley: spouse of William (1798-1887 [89])",
            "Sarah Greeley Nicoll - Living History",
            "William III: grandchild of William (1844 [1mth])",
            "Frances Ludlow: child of William (1822-1887 [65])",
          ],
          "facts":[
            "William's grandfather purchased Islip, and William built the St. John's Church.",
            "Sarah Augusta Nicoll Nicoll's grave is meant to resemble a crib.",
            "Frances married into the Ludlow family, thus having her grave in the Ludlow plot.",
          ],
          "speechCap":["Sarah Augusta", "Nicoll's Nurse"],
          "audioPath": "resources/panels/back/nicoll/audio/",
          "scripts": ["#sarahAugusta","#nurse"]
        },
        {
          "yaw": 1.8698869188589287,
          "pitch": 0.023611809222419566,
          "title": "William Mazurie",
          "imgPath": "resources/panels/back/mazurie/imgs",
          "imgCount": 2,
          "captions": [
            "William Mazurie: (1765-1859 [94])",
            "Madame Theresa Mazurie de Keroualin (sister) - Living History",
          ],
          "facts":[
            "William was originally from France, explaining his unique headstone.",
            "William was one of 13 siblings, three of which moved to the US.",
            "William worked as a merchant.",
          ],
          "speechCap":["Theresa Mazurie"],
          "audioPath": "resources/panels/back/mazurie/audio/",
          "scripts": ["#mazurie"]
        },
        {
          "yaw": -0.3404266653327621,
          "pitch": 0.025068765839055374,
          "title": "Penelope Price",
          "imgPath": "resources/panels/back/price/imgs",
          "imgCount": 2,
          "captions": [
            "Penelope Price: (1774-1855 [80])",
            "Penelope Price - Living History",
          ],
          "facts":[
            "Penelope was one of six children born in Connecticut.",
            "Penelope married again after becoming a widow, she had two daughters (one from each).",
            "Penelope and her family worked in farming and animal husbandry.",
          ],
          "speechCap":["Penelope"],
          "audioPath": "resources/panels/back/price/audio/",
          "scripts": ["#penelope"]
        },
        {
          "yaw": -1.3025638544195388,
          "pitch": 0.062210008221597946,
          "title": "Edwards Family",
          "imgPath": "resources/panels/back/edwards/imgs",
          "imgCount": 4,
          "captions": [
            "Sarah Edwards: spouse of Lawrence (1801-1869 [67])",
            "Sarah Jane Burgess Edwards - Living History",
            "Lawrence: spouse of Sarah (1793-1860 [67])",
            "Mary & Benjamin Smith: child of Sarah (1829-1875 [46]), spouse (1821-1871 [50])",
          ],
          "facts":[
            "Lawrence was from the islands of Barbados.",
            "The Edwards worked as farmers and were active in the community.",
            "One of the Edwards children's full name was Edward Edwards.",
          ],
          "speechCap":["Sarah"],
          "audioPath": "resources/panels/back/edwards/audio/",
          "scripts": ["#sarahEdwards"]
        }
      ],
      "imageHotspots": [
        {
          "yaw": 0.26469842234173946,
          "pitch": 0.0593380063114477,
          "title": "The Memorial<br>",
          "img": "tour.html#memorial"
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
          "imgPath": "resources/panels/inside/altar/imgs",
          "imgCount": 2,
          "captions": [],
          "facts":[
            "It is thought that the altar is the original one from when the church was first built.",
            "During renovations in 1873 the stained-glass window pictured was installed.",
            "The stained-glass behind the altar was a gift from St. Thomas Church in Brooklyn.",
          ],
          "speechCap":[],
          "audioPath": "",
          "scripts": []
        },
        {
          "yaw": -2.7197054240811465,
          "pitch": -0.5643676737882704,
          "title": "Gallery",
          "imgPath": "resources/panels/inside/gallery/imgs",
          "imgCount": 2,
          "captions": [],
          "facts":[
            "The gallery is thought to have been where servants, free African Americans, Native Americans, and children prayed.",
          ],
          "speechCap":[],
          "audioPath": "",
          "scripts": []
        }
      ],
      "imageHotspots": [
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
