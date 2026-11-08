var APP_DATA = {
  "scenes": [
    {
      "id": "0-queue-entrance",
      "name": "Queue Entrance",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.041731447378992925,
        "pitch": 0.035990835097956975,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 1.6933228447292397,
          "pitch": 0.08771569051778805,
          "rotation": 3.9269908169872414,
          "target": "3-queue-right"
        },
        {
          "yaw": -0.11238028482132201,
          "pitch": 0.24469922943266909,
          "rotation": 0,
          "target": "4-maze-entrance-p1"
        },
        {
          "yaw": -1.528463612409979,
          "pitch": 0.17456961223052758,
          "rotation": 2.356194490192345,
          "target": "2-queue-left"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-queue-far-left",
      "name": "Queue Far Left",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.17742802111505895,
        "pitch": 0.005185120310718716,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 1.4004304373360963,
          "pitch": 0.15444727891243204,
          "rotation": 5.497787143782138,
          "target": "2-queue-left"
        },
        {
          "yaw": -1.933195705953553,
          "pitch": -0.06354000651316305,
          "rotation": 10.995574287564278,
          "target": "40-maze-exit"
        },
        {
          "yaw": 1.2784312020238584,
          "pitch": -0.20746935205252015,
          "rotation": 3.9269908169872414,
          "target": "0-queue-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-queue-left",
      "name": "Queue Left",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.17247864483876896,
        "pitch": 0.032839095301223864,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -2.1797802969680404,
          "pitch": 0.18235435748270135,
          "rotation": 2.356194490192345,
          "target": "1-queue-far-left"
        },
        {
          "yaw": 1.294269467983158,
          "pitch": 0.11519186865594122,
          "rotation": 4.71238898038469,
          "target": "0-queue-entrance"
        },
        {
          "yaw": 0.5424223702580129,
          "pitch": 0.1600951847438452,
          "rotation": 5.497787143782138,
          "target": "4-maze-entrance-p1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-queue-right",
      "name": "Queue Right",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.09529844788548658,
        "pitch": 0.04464385889638933,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -1.1274679581664007,
          "pitch": 0.19197732918239296,
          "rotation": 1.5707963267948966,
          "target": "0-queue-entrance"
        },
        {
          "yaw": -0.31041706064969254,
          "pitch": 0.1792345870686045,
          "rotation": 0.7853981633974483,
          "target": "4-maze-entrance-p1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-maze-entrance-p1",
      "name": "Maze Entrance P1",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.07568607893718848,
        "pitch": -0.003458565441242456,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 3.095584498812631,
          "pitch": 0.13583412813247264,
          "rotation": 3.141592653589793,
          "target": "0-queue-entrance"
        },
        {
          "yaw": -0.04087522110603281,
          "pitch": 0.39688690567843565,
          "rotation": 0,
          "target": "5-maze-entrance-p2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-maze-entrance-p2",
      "name": "Maze Entrance P2",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.02357435245584405,
        "pitch": 0.1987629452442672,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -3.1310313410141397,
          "pitch": 0.26384008671429093,
          "rotation": 3.141592653589793,
          "target": "4-maze-entrance-p1"
        },
        {
          "yaw": -0.06509575644864896,
          "pitch": 0.6309284471722059,
          "rotation": 4.71238898038469,
          "target": "6-room-1-p1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-room-1-p1",
      "name": "Room 1 P1",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.004963021569652781,
        "pitch": 0.2627127624098087,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -1.8140254842480523,
          "pitch": 0.6059556124225463,
          "rotation": 3.141592653589793,
          "target": "5-maze-entrance-p2"
        },
        {
          "yaw": 0.38358320322673656,
          "pitch": 0.514826539230155,
          "rotation": 2.356194490192345,
          "target": "7-room-1-p2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-room-1-p2",
      "name": "Room 1 P2",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.6675264011182236,
        "pitch": 0.2488857749145552,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 2.502279966940586,
          "pitch": 0.5189148435758888,
          "rotation": 8.63937979737193,
          "target": "6-room-1-p1"
        },
        {
          "yaw": 1.32763172318408,
          "pitch": 0.4995340268014612,
          "rotation": 1.5707963267948966,
          "target": "8-room-1-p3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-room-1-p3",
      "name": "Room 1 P3",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.2729736099996156,
        "pitch": 0.24197228116692138,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 2.981317516608174,
          "pitch": 0.46797480866024443,
          "rotation": 8.63937979737193,
          "target": "7-room-1-p2"
        },
        {
          "yaw": 0.3694469895964154,
          "pitch": 0.4815148685776336,
          "rotation": 5.497787143782138,
          "target": "9-room-1-p4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-room-1-p4",
      "name": "Room 1 P4",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.07196381275994668,
        "pitch": 0.3266625795753608,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 0.026480719875134895,
          "pitch": 0.5523628915345711,
          "rotation": 5.497787143782138,
          "target": "10-room-1-p5"
        },
        {
          "yaw": -1.646213528256423,
          "pitch": 0.4631707189367411,
          "rotation": 3.141592653589793,
          "target": "8-room-1-p3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-room-1-p5",
      "name": "Room 1 P5",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.06327852501306452,
        "pitch": 0.276539749905071,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -0.0396244867654616,
          "pitch": 0.30518158324544586,
          "rotation": 4.71238898038469,
          "target": "11-pathway-1-p1"
        },
        {
          "yaw": -2.5307821404775606,
          "pitch": 0.5053265017399511,
          "rotation": 3.141592653589793,
          "target": "9-room-1-p4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-pathway-1-p1",
      "name": "Pathway 1 P1",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.03971912707917724,
        "pitch": 0.24715740147765075,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -0.05318440743991104,
          "pitch": 0.4691406712620072,
          "rotation": 6.283185307179586,
          "target": "12-pathway-1-p2"
        },
        {
          "yaw": -1.932163042954322,
          "pitch": 0.3422179405075223,
          "rotation": 3.141592653589793,
          "target": "10-room-1-p5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-pathway-1-p2",
      "name": "Pathway 1 P2",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.22581748141915803,
        "pitch": 0.3646867951873176,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -2.936278441229822,
          "pitch": 0.4328800096911465,
          "rotation": 3.141592653589793,
          "target": "11-pathway-1-p1"
        },
        {
          "yaw": 0.47395131616756814,
          "pitch": 0.4505624193620825,
          "rotation": 2.356194490192345,
          "target": "13-pathway-1-p3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-pathway-1-p3",
      "name": "Pathway 1 P3",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.14020535934265865,
        "pitch": 0.36641516862422385,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 0.09137923356901112,
          "pitch": 0.41175268542494514,
          "rotation": 3.141592653589793,
          "target": "12-pathway-1-p2"
        },
        {
          "yaw": -0.4623672322822614,
          "pitch": 0.3944454604434142,
          "rotation": 0,
          "target": "14-pathway-1-p4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-pathway-1-p4",
      "name": "Pathway 1 P4",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.07940834511441963,
        "pitch": 0.4044393842361682,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -0.3611149821772983,
          "pitch": 0.45397099742217684,
          "rotation": 16.493361431346422,
          "target": "15-pathway-1-p5"
        },
        {
          "yaw": 2.8561344568918283,
          "pitch": 0.39102546735396615,
          "rotation": 3.141592653589793,
          "target": "13-pathway-1-p3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-pathway-1-p5",
      "name": "Pathway 1 P5",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.04225866895334818,
        "pitch": 0.30094031607317717,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -1.368918715177296,
          "pitch": 0.408510861296012,
          "rotation": 3.9269908169872414,
          "target": "14-pathway-1-p4"
        },
        {
          "yaw": 0.1420445832244841,
          "pitch": 0.34038872909741613,
          "rotation": 5.497787143782138,
          "target": "16-pathway-1-p6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-pathway-1-p6",
      "name": "Pathway 1 P6",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.3114296034956503,
        "pitch": 0.22123179992405184,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -1.7367769916530378,
          "pitch": 0.2667935531863108,
          "rotation": 3.141592653589793,
          "target": "15-pathway-1-p5"
        },
        {
          "yaw": 0.22544041223292766,
          "pitch": 0.21839610906043028,
          "rotation": 10.995574287564278,
          "target": "17-pathway-1-p7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-pathway-1-p7",
      "name": "Pathway 1 P7",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.004963021569654558,
        "pitch": 0.20221969211807966,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -2.0206617585683784,
          "pitch": 0.2702254548605758,
          "rotation": 3.141592653589793,
          "target": "16-pathway-1-p6"
        },
        {
          "yaw": 0.22258355057309842,
          "pitch": 0.26320384908705385,
          "rotation": 0.7853981633974483,
          "target": "18-pathway-1-p8"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-pathway-1-p8",
      "name": "Pathway 1 P8",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 1.1296681433622062,
        "pitch": 0.1825278486818167,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 1.5129149029075997,
          "pitch": 0.28613612748256756,
          "rotation": 0,
          "target": "19-pathway-1-p9"
        },
        {
          "yaw": 3.0739431706331617,
          "pitch": 0.33772364215882433,
          "rotation": 3.141592653589793,
          "target": "17-pathway-1-p7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-pathway-1-p9",
      "name": "Pathway 1 P9",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.07568607893719026,
        "pitch": 0.029382348427413163,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 0.2250214962410073,
          "pitch": 0.15822447267286677,
          "rotation": 0,
          "target": "20-pathway-2-p1"
        },
        {
          "yaw": 3.0288835080550918,
          "pitch": 0.27498503848483935,
          "rotation": 2.356194490192345,
          "target": "18-pathway-1-p8"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-pathway-2-p1",
      "name": "Pathway 2 P1",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -2.842013145612995,
        "pitch": 0.20589427410275363,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -2.647055716613746,
          "pitch": 0.36026440033028173,
          "rotation": 2.356194490192345,
          "target": "22-pathway-2-p3"
        },
        {
          "yaw": -0.034068847508407885,
          "pitch": 0.31593190994806264,
          "rotation": 3.141592653589793,
          "target": "19-pathway-1-p9"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-pathway-2-p2",
      "name": "Pathway 2 P2",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -2.5874456245368957,
        "pitch": 0.2394095205536022,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 0.5259931733839558,
          "pitch": 0.287621789683854,
          "rotation": 3.9269908169872414,
          "target": "22-pathway-2-p3"
        },
        {
          "yaw": -2.6246436031657687,
          "pitch": 0.38184789284344767,
          "rotation": 0,
          "target": "23-pathway-2-p4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-pathway-2-p3",
      "name": "Pathway 2 P3",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 1.6431821310458137,
        "pitch": 0.33241796933123524,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 2.257527260119386,
          "pitch": 0.3850200520154097,
          "rotation": 3.141592653589793,
          "target": "20-pathway-2-p1"
        },
        {
          "yaw": 1.3141461323987755,
          "pitch": 0.40973036669028673,
          "rotation": 0,
          "target": "21-pathway-2-p2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-pathway-2-p4",
      "name": "Pathway 2 P4",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.05087229621000411,
        "pitch": 0.2143183061764269,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 0.0038583831953005188,
          "pitch": 0.3938651784305698,
          "rotation": 4.71238898038469,
          "target": "24-pathway-2-p5"
        },
        {
          "yaw": 2.6702092301044997,
          "pitch": 0.23569914748164678,
          "rotation": 3.141592653589793,
          "target": "21-pathway-2-p2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-pathway-2-p5",
      "name": "Pathway 2 P5",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.11415896123587643,
        "pitch": 0.2730961879717242,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -0.27989839875858635,
          "pitch": 0.33639308642547583,
          "rotation": 5.497787143782138,
          "target": "25-pathway-2-p6"
        },
        {
          "yaw": -1.8320993857250496,
          "pitch": 0.39094190868625844,
          "rotation": 3.141592653589793,
          "target": "23-pathway-2-p4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-pathway-2-p6",
      "name": "Pathway 2 P6",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.25437243195182546,
        "pitch": 0.26436768357334195,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -1.739603015528342,
          "pitch": 0.25460756320449285,
          "rotation": 3.141592653589793,
          "target": "24-pathway-2-p5"
        },
        {
          "yaw": 0.04113012821962059,
          "pitch": 0.5208359805786635,
          "rotation": 0,
          "target": "26-pathway-3-p1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-pathway-3-p1",
      "name": "Pathway 3 P1",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.0012409994301734173,
        "pitch": 0.25752764209909174,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -2.8974992350675883,
          "pitch": 0.43009609469553567,
          "rotation": 3.9269908169872414,
          "target": "25-pathway-2-p6"
        },
        {
          "yaw": -0.031381219236479296,
          "pitch": 0.4948035747613204,
          "rotation": 0,
          "target": "27-pathway-3-p2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-pathway-3-p2",
      "name": "Pathway 3 P2",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.11663100688681283,
        "pitch": 0.3162888013113072,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 3.0003007329270783,
          "pitch": 0.4045743157935551,
          "rotation": 3.141592653589793,
          "target": "26-pathway-3-p1"
        },
        {
          "yaw": -0.36151456537786686,
          "pitch": 0.3796783303348299,
          "rotation": 5.497787143782138,
          "target": "28-pathway-3-p3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-pathway-3-p3",
      "name": "Pathway 3 P3",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.05583399265857736,
        "pitch": 0.18666433118592174,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -2.7618072573508634,
          "pitch": 0.3534341129098859,
          "rotation": 3.9269908169872414,
          "target": "27-pathway-3-p2"
        },
        {
          "yaw": 0.1492329301807871,
          "pitch": 0.36808575157976975,
          "rotation": 0.7853981633974483,
          "target": "29-pathway-3-p4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-pathway-3-p4",
      "name": "Pathway 3 P4",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.016129820101365766,
        "pitch": 0.09853663115695532,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 2.54591551578034,
          "pitch": 0.3807290469247171,
          "rotation": 3.141592653589793,
          "target": "28-pathway-3-p3"
        },
        {
          "yaw": -0.026804209581571925,
          "pitch": 0.4305214012556249,
          "rotation": 0,
          "target": "30-pathway-3-p5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-pathway-3-p5",
      "name": "Pathway 3 P5",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.04343650673608934,
        "pitch": 0.29036673740032803,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 3.121724823110398,
          "pitch": 0.39129477341418095,
          "rotation": 3.141592653589793,
          "target": "29-pathway-3-p4"
        },
        {
          "yaw": 0.06412773032562136,
          "pitch": 0.47093066910148806,
          "rotation": 0,
          "target": "31-pathway-4-p1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-pathway-4-p1",
      "name": "Pathway 4 P1",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.017370575493774965,
        "pitch": 0.28172487021580217,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -3.1358964583791753,
          "pitch": 0.3711064679529805,
          "rotation": 3.141592653589793,
          "target": "30-pathway-3-p5"
        },
        {
          "yaw": -0.06522540829057277,
          "pitch": 0.4351387723444393,
          "rotation": 4.71238898038469,
          "target": "32-pathway-4-p2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "32-pathway-4-p2",
      "name": "Pathway 4 P2",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.18859481964677727,
        "pitch": 0.22468854679786965,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -1.7994947075128866,
          "pitch": 0.4656825713546482,
          "rotation": 3.141592653589793,
          "target": "31-pathway-4-p1"
        },
        {
          "yaw": -0.274333877083766,
          "pitch": 0.29508464534990253,
          "rotation": 6.283185307179586,
          "target": "33-pathway-4-p3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "33-pathway-4-p3",
      "name": "Pathway 4 P3",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.014889064708953015,
        "pitch": -0.025925601553597133,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 2.5618694565441356,
          "pitch": 0.4411221683917663,
          "rotation": 3.9269908169872414,
          "target": "32-pathway-4-p2"
        },
        {
          "yaw": 0.509386365874537,
          "pitch": 0.32441124485624684,
          "rotation": 6.283185307179586,
          "target": "34-pathway-4-p4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "34-pathway-4-p4",
      "name": "Pathway 4 P4",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.11539316487001017,
        "pitch": 0.0345674687381301,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -0.1327608269881928,
          "pitch": 0.19876294524427252,
          "rotation": 4.71238898038469,
          "target": "35-theater-p1"
        },
        {
          "yaw": -2.609332086205548,
          "pitch": 0.5046084708456426,
          "rotation": 8.63937979737193,
          "target": "33-pathway-4-p3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "35-theater-p1",
      "name": "Theater P1",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.11173386847634603,
        "pitch": 0.15046026431402204,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -1.7988228463586875,
          "pitch": 0.6136746034440712,
          "rotation": 3.141592653589793,
          "target": "34-pathway-4-p4"
        },
        {
          "yaw": -0.05693873421059337,
          "pitch": 0.45324687892235893,
          "rotation": 0,
          "target": "36-theater-p2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "36-theater-p2",
      "name": "Theater P2",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.03722266177238254,
        "pitch": 0.2074048124288037,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 3.084707284420718,
          "pitch": 0.42662959347115503,
          "rotation": 3.141592653589793,
          "target": "35-theater-p1"
        },
        {
          "yaw": 0.24471224146921244,
          "pitch": 0.6817141828632955,
          "rotation": 1.5707963267948966,
          "target": "37-theater-p3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "37-theater-p3",
      "name": "Theater P3",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.03225964020273686,
        "pitch": 0.33876119363371693,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 1.754049071733931,
          "pitch": 0.5236442927440077,
          "rotation": 3.141592653589793,
          "target": "36-theater-p2"
        },
        {
          "yaw": -0.01451735367151663,
          "pitch": 0.4959277653441667,
          "rotation": 1.5707963267948966,
          "target": "38-theater-p4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "38-theater-p4",
      "name": "Theater P4",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.0012423498770530728,
        "pitch": 0.23678716085621865,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": 1.670628619749345,
          "pitch": 0.4899266315473998,
          "rotation": 3.141592653589793,
          "target": "37-theater-p3"
        },
        {
          "yaw": 0.04117998442709592,
          "pitch": 0.43692031357842964,
          "rotation": 5.497787143782138,
          "target": "39-theater-p5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "39-theater-p5",
      "name": "Theater P5",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.37600513157973126,
        "pitch": 0.23160204054549638,
        "fov": 1.3536620968836544
      },
      "linkHotspots": [
        {
          "yaw": -1.5941467237435312,
          "pitch": 0.3597878394020775,
          "rotation": 3.141592653589793,
          "target": "38-theater-p4"
        },
        {
          "yaw": 0.6327605701093635,
          "pitch": 0.1828187714770273,
          "rotation": 0,
          "target": "40-maze-exit"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "40-maze-exit",
      "name": "Maze Exit",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6100575851202112,
          "pitch": 0.09040023251252727,
          "rotation": 0,
          "target": "1-queue-far-left"
        },
        {
          "yaw": 3.068293911090687,
          "pitch": 0.09880459856392321,
          "rotation": 3.141592653589793,
          "target": "39-theater-p5"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "TRICK OR TREAT",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
