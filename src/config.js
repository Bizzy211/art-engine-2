const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Eating Zero(es) Presents - Demi Boyz";
const description = "Demi Boyz Edition";
const baseUri = "ipfs://QmPVy7vSM8aaNPRDRw6YDA7UKzXPjHKUgcdkmQZ5s3YqY3";

const solanaMetadata = {
  symbol: "EAT",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.eatingzeroes.com",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 1,
    layersOrder: [
      /*{ name: "Background" , 
        options: {
          bypassDNA: true,
        },
      },*/
      { name: "Base" , 
      options: {
        bypassDNA: true,
      },},
      { name: "Eyes" , 
      options: {
        bypassDNA: true,
      },},
      { name: "Hat Bill" },
      { name: "Hoodie" }, 
      { name: "Hat Stitches" },
      { name: "Hat Body" },
      { name: "Hat Plate" },
      { name: "Buttons" },
      { name: "String Sleeve" },
      { name: "Ganja Leaf" },
      { name: "Mouth" },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 1500,
  height: 1500,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: false,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = [
  {
    "trait_type": "Level",
    "value": Math.floor(Math.random() * (100 - 65)) + 65,
    "max_value": 100},
    {"trait_type": "Age",
    "value": Math.floor(Math.random() * (2000 - 20)) + 20},
    {"trait_type": "Health (HP)",
    "value": Math.floor(Math.random() * (500 - 100)) + 100,
    "max_value": 500},
    {"trait_type": "Speed",
    "value": Math.floor(Math.random() * (100 - 55)) + 55,
    "max_value": 100},
    {"trait_type": "Agility",
    "value": Math.floor(Math.random() * (100 - 55)) + 55,
    "max_value": 100},
    {"trait_type": "Luck",
    "value": Math.floor(Math.random() * (100 - 55)) + 55,
    "max_value": 100},      
    {"trait_type": "Attack",
    "value": Math.floor(Math.random() * (100 - 55)) + 55,
    "max_value": 100},
    {"trait_type": "Defense",
    "value": Math.floor(Math.random() * (100 - 55)) + 55,
    "max_value": 100},
    {"trait_type": "Magic (MP)",
    "value": Math.floor(Math.random() * (100 - 55)) + 55,
    "max_value": 100},
    {"trait_type": "Intellect",
    "value": Math.floor(Math.random() * (100 - 55)) + 55,
    "max_value": 100},
    {"display_type": "boost_number",
    "trait_type": "Fighting Style",
    "value": Math.floor(Math.random() * (20 - 1)) + 1,
    "max_value": 20},      
    {"display_type": "boost_number", 
    "trait_type": "HP", 
    "value": Math.floor(Math.random() * 100)},
    {"display_type": "boost_number", 
    "trait_type": "MP", 
    "value": Math.floor(Math.random() * 100)}, 
    {"display_type": "boost_number", 
    "trait_type": "ATK", 
    "value": Math.floor(Math.random() * 100)}, 
    {"display_type": "boost_number", 
    "trait_type": "DEF", 
    "value": Math.floor(Math.random() * 100)},
    {"display_type": "boost_number", 
    "trait_type": "LUCK", 
    "value": Math.floor(Math.random() * 100)},

]

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
