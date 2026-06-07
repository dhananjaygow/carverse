/* ═══════════════════════════════════════════════════════════
   AUTOVERSE — script.js
   Premium Car Information Website
   ═══════════════════════════════════════════════════════════ */

'use strict';

/* ═══════════════════════════════════════════════════════════
   1. CAR DATABASE  (21 cars across all categories)
   ═══════════════════════════════════════════════════════════ */
const CAR_DATA = [
  

  {
    id: 1,
    company: "BMW",
    model: "M3 Competition",
    year: 2024,
    category: "sports",
    engine: "3.0L Twin-Turbo Inline-6",
    hp: 503,
    torque: "479 lb·ft",
    topSpeed: "180 mph",
    zeroToSixty: "3.4s",
    transmission: "8-Speed Auto",
    drivetrain: "AWD",
    price: 77600,

    images: [
      "images/bmw_m3_competition.jpg"
    ],
    tagline: "The ultimate driving machine, elevated."
},
  {
    id: 2,
    company: "BMW",
    model: "M5 Competition",
    year: 2024,
    category: "sports",
    engine: "4.4L V8 Twin-Turbo",
    hp: 617,
    torque: "553 lb·ft",
    topSpeed: "190 mph",
    zeroToSixty: "3.1s",
    transmission: "8-Speed M-DCT",
    drivetrain: "AWD",
    price: 115900,
    images: [
      "images/bmw-m5-competition-.jpg",
    ],
    tagline: "The ultimate driving machine, elevated."
  },

  {
    id: 3,
    company: "BMW",
    model: "M5",
    year: 2025,
    category: "sedan",
    engine: "4.4L Twin-Turbo V8 Hybrid",
    hp: 717,
    torque: "738 lb·ft",
    topSpeed: "190 mph",
    zeroToSixty: "3.4s",
    transmission: "8-Speed Auto",
    drivetrain: "AWD",
    price: 119500,

    images: [
      "images/bmw-m5.jpg"
    ],
    tagline: "The ultimate driving machine, elevated."
},
{
    id: 4,
    company: "BMW",
    model: "330i",
    year: 2024,
    category: "sedan",
    engine: "2.0L Turbo Inline-4",
    hp: 255,
    torque: "295 lb·ft",
    topSpeed: "155 mph",
    zeroToSixty: "5.6s",
    transmission: "8-Speed Auto",
    drivetrain: "RWD",
    price: 45400,

    images: [
      "images/bmw_330i_.jpg"
    ],
    tagline: "The ultimate driving machine, elevated."
},
{
  id: 5,
    company: "BMW",
    model: "i4 M50",
    year: 2024,
    category: "sedan",
    engine: "Dual Electric Motors",
    hp: 536,
    torque: "586 lb·ft",
    topSpeed: "140 mph",
    zeroToSixty: "3.7s",
    transmission: "Single-Speed",
    drivetrain: "AWD",
    price: 69400,

    images: [
      "images/i4 M50.jpg"
    ],
    tagline: "The ultimate driving machine, elevated."
},
{
  id: 6,
    company: "BMW",
    model: "X5 xDrive40i",
    year: 2024,
    category: "SUV",
    engine: "3.0L Turbo Inline-6",
    hp: 375,
    torque: "398 lb·ft",
    topSpeed: "155 mph",
    zeroToSixty: "5.3s",
    transmission: "8-Speed Auto",
    drivetrain: "AWD",
    price: 66500,

    images: [
      "images/bmw-x5-xdrive40i.jpg"
    ],
    tagline: "The ultimate driving machine, elevated."
},
{
  id: 7,
    company: "BMW",
    model: "X7 xDrive40i",
    year: 2024,
    category: "SUV",
    engine: "3.0L Turbo Inline-6",
    hp: 375,
    torque: "398 lb·ft",
    topSpeed: "152 mph",
    zeroToSixty: "5.6s",
    transmission: "8-Speed Auto",
    drivetrain: "AWD",
    price: 82400,

    images: [
      "images/X7 xDrive40i.jpg"
    ],
    tagline: "The ultimate driving machine, elevated."
},
{
  id: 8,
    company: "BMW",
    model: "XM",
    year: 2024,
    category: "SUV",
    engine: "4.4L Twin-Turbo V8 Hybrid",
    hp: 644,
    torque: "590 lb·ft",
    topSpeed: "168 mph",
    zeroToSixty: "4.1s",
    transmission: "8-Speed Auto",
    drivetrain: "AWD",
    price: 159000,

    images: [
      "images/XM.jpg"
    ],
    tagline: "The ultimate driving machine, elevated."
},
{
  id: 9,
    company: "BMW",
    model: "Z4 M40i",
    year: 2024,
    category: "roadster",
    engine: "3.0L Turbo Inline-6",
    hp: 382,
    torque: "369 lb·ft",
    topSpeed: "155 mph",
    zeroToSixty: "3.9s",
    transmission: "8-Speed Auto",
    drivetrain: "RWD",
    price: 66950,

    images: [
      "images/Z4 M40i.jpg"
     ],
    tagline: "The ultimate driving machine, elevated."
},
{
  id: 10,
    company: "BMW",
    model: "M8 Competition Coupe",
    year: 2024,
    category: "sports coupe",
    engine: "4.4L Twin-Turbo V8",
    hp: 617,
    torque: "553 lb·ft",
    topSpeed: "190 mph",
    zeroToSixty: "3.0s",
    transmission: "8-Speed Auto",
    drivetrain: "AWD",
    price: 138800,

    images: [
      "images/M8 Competition Coupe.jpg"
    ],
    tagline: "The ultimate driving machine, elevated."
},
{
  id: 11,
    company: "BMW",
    model: "iX xDrive50",
    year: 2024,
    category: "electric SUV",
    engine: "Dual Electric Motors",
    hp: 516,
    torque: "564 lb·ft",
    topSpeed: "124 mph",
    zeroToSixty: "4.4s",
    transmission: "Single-Speed",
    drivetrain: "AWD",
    price: 87000,

    images: [
      "images/iX xDrive50.jpg"
    ],
    tagline: "The ultimate driving machine, elevated."
},

{
    id: 12,
    company: "Toyota",
    model: "Camry XSE",
    year: 2024,
    category: "sedan",
    engine: "2.5L 4-Cyl Hybrid",
    hp: 208,
    torque: "163 lb·ft",
    topSpeed: "118 mph",
    zeroToSixty: "7.2s",
    transmission: "8-Speed Auto",
    drivetrain: "FWD",
    price: 32450,
    images: [
      "images/toyota/Camry XSE.jpg",

    ],

    tagline: "Refined comfort meets everyday performance."
  },

  {
    id: 13,
    company: "Toyota",
    model: "Corolla XSE",
    year: 2024,
    category: "sedan",
    engine: "2.0L Inline-4",
    hp: 169,
    torque: "151 lb·ft",
    topSpeed: "112 mph",
    zeroToSixty: "8.0s",
    transmission: "CVT",
    drivetrain: "FWD",
    price: 28600,
    images:[
      "images/toyota/Corolla XSE.jpg"
    ],
    tagline: "Refined comfort meets everyday performance."
},
{
  id: 14,
    company: "Toyota",
    model: "Prius Limited",
    year: 2024,
    category: "hybrid sedan",
    engine: "2.0L Hybrid Inline-4",
    hp: 196,
    torque: "139 lb·ft",
    topSpeed: "112 mph",
    zeroToSixty: "7.1s",
    transmission: "eCVT",
    drivetrain: "AWD",
    price: 36900,
    images:[
      "images/toyota/Prius Limited.jpg"
    ],
    tagline: "Refined comfort meets everyday performance."
},
{
  id: 15,
    company: "Toyota",
    model: "GR Corolla",
    year: 2024,
    category: "hot hatchback",
    engine: "1.6L Turbo Inline-3",
    hp: 300,
    torque: "273 lb·ft",
    topSpeed: "143 mph",
    zeroToSixty: "4.9s",
    transmission: "6-Speed Manual",
    drivetrain: "AWD",
    price: 37200,
    images:[
      "images/toyota/GR Corolla.jpg"
    ],
    tagline: "Refined comfort meets everyday performance."
},
{
  id: 16,
    company: "Toyota",
    model: "GR Supra 3.0",
    year: 2024,
    category: "sports coupe",
    engine: "3.0L Turbo Inline-6",
    hp: 382,
    torque: "368 lb·ft",
    topSpeed: "155 mph",
    zeroToSixty: "3.9s",
    transmission: "8-Speed Auto",
    drivetrain: "RWD",
    price: 56000,
    images:[
      "images/toyota/GR Supra 3.0.jpg"
    ],
    tagline: "Refined comfort meets everyday performance."
},
{
  id: 17,
    company: "Toyota",
    model: "RAV4 Hybrid",
    year: 2024,
    category: "SUV",
    engine: "2.5L Hybrid Inline-4",
    hp: 219,
    torque: "163 lb·ft",
    topSpeed: "112 mph",
    zeroToSixty: "7.3s",
    transmission: "eCVT",
    drivetrain: "AWD",
    price: 33100,
    images:[
      "images/toyota/RAV4 Hybrid.jpg"
    ],
    tagline: "Refined comfort meets everyday performance."
},
{
  id: 18,
    company: "Toyota",
    model: "Highlander Hybrid",
    year: 2024,
    category: "SUV",
    engine: "2.5L Hybrid Inline-4",
    hp: 243,
    torque: "175 lb·ft",
    topSpeed: "112 mph",
    zeroToSixty: "7.2s",
    transmission: "eCVT",
    drivetrain: "AWD",
    price: 40900,
    images:[
      "images/toyota/Highlander Hybrid.jpg"
    ],
    tagline: "Refined comfort meets everyday performance."
},
{
  id: 19,
    company: "Toyota",
    model: "Land Cruiser",
    year: 2024,
    category: "off-road SUV",
    engine: "2.4L Turbo Hybrid",
    hp: 326,
    torque: "465 lb·ft",
    topSpeed: "108 mph",
    zeroToSixty: "7.7s",
    transmission: "8-Speed Auto",
    drivetrain: "4WD",
    price: 55600,
    images:[
      "images/toyota/Land Cruiser.jpg"
    ],
    tagline: "Refined comfort meets everyday performance."
},
{
  id: 20,
    company: "Toyota",
    model: "Tacoma TRD Pro",
    year: 2024,
    category: "pickup truck",
    engine: "2.4L Turbo Hybrid",
    hp: 326,
    torque: "465 lb·ft",
    topSpeed: "110 mph",
    zeroToSixty: "7.0s",
    transmission: "8-Speed Auto",
    drivetrain: "4WD",
    price: 63800,
    images:[
      "images/toyota/Tacoma TRD Pro.jpg"
    ],
    tagline: "Refined comfort meets everyday performance."
},
{
  id: 21,
    company: "Toyota",
    model: "Tundra Capstone",
    year: 2024,
    category: "pickup truck",
    engine: "3.4L Twin-Turbo V6 Hybrid",
    hp: 437,
    torque: "583 lb·ft",
    topSpeed: "106 mph",
    zeroToSixty: "5.7s",
    transmission: "10-Speed Auto",
    drivetrain: "4WD",
    price: 80000,
    images:[
      "images/toyota/Tundra Capstone.jpg"
    ],
    tagline: "Refined comfort meets everyday performance."
},
  {
    id: 22,
    company: "Mercedes-Benz",
    model: "GLE 53 AMG",
    year: 2024,
    category: "suv",
    engine: "3.0L I6 EQ Boost",
    hp: 429,
    torque: "384 lb·ft",
    topSpeed: "155 mph",
    zeroToSixty: "5.0s",
    transmission: "9G-TRONIC",
    drivetrain: "4MATIC AWD",
    price: 86500,
    
    images: [
      "images/mercedes-benz/GLE 53 AMG.jpg"
    ],
    tagline: "Commanding presence. Unyielding luxury."
  },

  {
    id: 23,
    company: "Mercedes-Benz",
    model: "C300",
    year: 2024,
    category: "sedan",
    engine: "2.0L Turbo Inline-4",
    hp: 255,
    torque: "295 lb·ft",
    topSpeed: "130 mph",
    zeroToSixty: "5.9s",
    transmission: "9-Speed Auto",
    drivetrain: "RWD",
    price: 48400,
    images:[
      "images/mercedes-benz/C300.jpg"
    ],
    tagline: "Commanding presence. Unyielding luxury."
},
{
    id: 24,
    company: "Mercedes-Benz",
    model: "E350",
    year: 2024,
    category: "sedan",
    engine: "2.0L Turbo Inline-4",
    hp: 255,
    torque: "295 lb·ft",
    topSpeed: "130 mph",
    zeroToSixty: "6.0s",
    transmission: "9-Speed Auto",
    drivetrain: "AWD",
    price: 62500,
    images:[
      "images/mercedes-benz/E350.jpeg"
    ],
    tagline: "Commanding presence. Unyielding luxury."
},
{
    id: 25,
    company: "Mercedes-Benz",
    model: "S580 4MATIC",
    year: 2024,
    category: "luxury sedan",
    engine: "4.0L Twin-Turbo V8",
    hp: 496,
    torque: "516 lb·ft",
    topSpeed: "155 mph",
    zeroToSixty: "4.4s",
    transmission: "9-Speed Auto",
    drivetrain: "AWD",
    price: 128600,
    images:[
      "images/mercedes-benz/EQS 580 4MATIC.jpg"
    ],
    tagline: "Commanding presence. Unyielding luxury."
},
{
    id: 26,
    company: "Mercedes-Benz",
    model: "CLA 250",
    year: 2024,
    category: "coupe sedan",
    engine: "2.0L Turbo Inline-4",
    hp: 221,
    torque: "258 lb·ft",
    topSpeed: "130 mph",
    zeroToSixty: "6.3s",
    transmission: "7-Speed Dual-Clutch",
    drivetrain: "FWD",
    price: 44500,
    images:[
      "images/mercedes-benz/CLA 250.jpg"
    ],
    tagline: "Commanding presence. Unyielding luxury."
},
{
    id: 27,
    company: "Mercedes-Benz",
    model: "AMG C63 S E Performance",
    year: 2024,
    category: "sports sedan",
    engine: "2.0L Turbo Hybrid Inline-4",
    hp: 671,
    torque: "752 lb·ft",
    topSpeed: "174 mph",
    zeroToSixty: "3.3s",
    transmission: "9-Speed AMG Auto",
    drivetrain: "AWD",
    price: 86000,
    images:[
      "images/mercedes-benz/AMG C63 S E Performance.jpg"
    ],
    tagline: "Commanding presence. Unyielding luxury."
},
{
    id: 28,
    company: "Mercedes-Benz",
    model: "AMG GT 63",
    year: 2024,
    category: "sports coupe",
    engine: "4.0L Twin-Turbo V8",
    hp: 577,
    torque: "590 lb·ft",
    topSpeed: "196 mph",
    zeroToSixty: "3.1s",
    transmission: "9-Speed AMG Auto",
    drivetrain: "AWD",
    price: 179000,
    images:[
      "images/mercedes-benz/AMG GT 63.jpg"
    ],
    tagline: "Commanding presence. Unyielding luxury."
},
{
    id: 29,
    company: "Mercedes-Benz",
    model: "GLC 300",
    year: 2024,
    category: "SUV",
    engine: "2.0L Turbo Inline-4",
    hp: 255,
    torque: "295 lb·ft",
    topSpeed: "130 mph",
    zeroToSixty: "6.2s",
    transmission: "9-Speed Auto",
    drivetrain: "AWD",
    price: 50500,
    images:[
      "images/mercedes-benz/GLC 300.jpg"
    ],
    tagline: "Commanding presence. Unyielding luxury."
},
{
    id: 30,
    company: "Mercedes-Benz",
    model: "GLE 450",
    year: 2024,
    category: "SUV",
    engine: "3.0L Turbo Inline-6",
    hp: 375,
    torque: "369 lb·ft",
    topSpeed: "155 mph",
    zeroToSixty: "5.3s",
    transmission: "9-Speed Auto",
    drivetrain: "AWD",
    price: 69600,
    images:[
      "images/mercedes-benz/GLE 450.jpg"
    ],
    tagline: "Commanding presence. Unyielding luxury."
},
{
    id: 31,
    company: "Mercedes-Benz",
    model: "G-Class G550",
    year: 2024,
    category: "luxury SUV",
    engine: "4.0L Twin-Turbo V8",
    hp: 416,
    torque: "450 lb·ft",
    topSpeed: "137 mph",
    zeroToSixty: "5.6s",
    transmission: "9-Speed Auto",
    drivetrain: "AWD",
    price: 143000,
    images:[
      "images/mercedes-benz/G-Class G550.jpg"
    ],
    tagline: "Commanding presence. Unyielding luxury."
},
{
    id: 32,
    company: "Mercedes-Benz",
    model: "EQS 580 4MATIC",
    year: 2024,
    category: "electric sedan",
    engine: "Dual Electric Motors",
    hp: 516,
    torque: "631 lb·ft",
    topSpeed: "130 mph",
    zeroToSixty: "4.1s",
    transmission: "Single-Speed",
    drivetrain: "AWD",
    price: 127000,
    images:[
      "images/mercedes-benz/EQS 580 4MATIC.jpg"
    ],
    tagline: "Commanding presence. Unyielding luxury."
},
  {
    id: 33,
    company: "Porsche",
    model: "911 GT3 RS",
    year: 2024,
    category: "sports",
    engine: "4.0L Flat-6 NA",
    hp: 518,
    torque: "346 lb·ft",
    topSpeed: "184 mph",
    zeroToSixty: "3.0s",
    transmission: "7-Speed PDK",
    drivetrain: "RWD",
    price: 243900,
    
    images: [
      "images/porsche/911 GT3 RS.jpg"
    ],
    tagline: "Track precision. Road legal. Pure Porsche."
  },

  {
    id: 34,
    company: "Porsche",
    model: "911 Carrera",
    year: 2024,
    category: "sports coupe",
    engine: "3.0L Twin-Turbo Flat-6",
    hp: 379,
    torque: "331 lb·ft",
    topSpeed: "182 mph",
    zeroToSixty: "4.0s",
    transmission: "8-Speed PDK",
    drivetrain: "RWD",
    price: 114400,

    images: [
      "images/porsche/911 Carrera.jpg"
    ],

    tagline: "The icon that defines sports cars."
},
{
    id: 35,
    company: "Porsche",
    model: "911 Turbo S",
    year: 2024,
    category: "supercar",
    engine: "3.8L Twin-Turbo Flat-6",
    hp: 640,
    torque: "590 lb·ft",
    topSpeed: "205 mph",
    zeroToSixty: "2.6s",
    transmission: "8-Speed PDK",
    drivetrain: "AWD",
    price: 230400,

    images: [
      "images/porsche/911 Turbo S.jpg"
    ],

    tagline: "Relentless speed with everyday usability."
},
{
    id: 36,
    company: "Porsche",
    model: "718 Cayman GTS 4.0",
    year: 2024,
    category: "sports coupe",
    engine: "4.0L Flat-6",
    hp: 394,
    torque: "309 lb·ft",
    topSpeed: "182 mph",
    zeroToSixty: "4.3s",
    transmission: "6-Speed Manual",
    drivetrain: "RWD",
    price: 95500,

    images: [
      "images/porsche/718 Cayman GTS 4.0.jpg"
    ],

    tagline: "Pure mid-engine driving perfection."
},
{
    id: 37,
    company: "Porsche",
    model: "718 Boxster GTS 4.0",
    year: 2024,
    category: "roadster",
    engine: "4.0L Flat-6",
    hp: 394,
    torque: "309 lb·ft",
    topSpeed: "182 mph",
    zeroToSixty: "4.3s",
    transmission: "7-Speed PDK",
    drivetrain: "RWD",
    price: 97800,

    images: [
      "images/porsche/718 Boxster GTS 4.0.jpg"
    ],

    tagline: "Open-air thrills, Porsche style."
},
{
    id: 38,
    company: "Porsche",
    model: "Panamera 4",
    year: 2024,
    category: "luxury sedan",
    engine: "2.9L Twin-Turbo V6",
    hp: 348,
    torque: "368 lb·ft",
    topSpeed: "169 mph",
    zeroToSixty: "4.7s",
    transmission: "8-Speed PDK",
    drivetrain: "AWD",
    price: 101500,

    images: [
      "images/porsche/Panamera 4.jpg"
    ],

    tagline: "Luxury sedan with sports car DNA."
},
{
    id: 39,
    company: "Porsche",
    model: "Panamera Turbo E-Hybrid",
    year: 2024,
    category: "performance sedan",
    engine: "4.0L Twin-Turbo V8 Hybrid",
    hp: 670,
    torque: "685 lb·ft",
    topSpeed: "196 mph",
    zeroToSixty: "3.0s",
    transmission: "8-Speed PDK",
    drivetrain: "AWD",
    price: 191000,

    images: [
      "images/porsche/Panamera Turbo E-Hybrid.jpg"
    ],

    tagline: "Hybrid power meets Porsche performance."
},
{
    id: 40,
    company: "Porsche",
    model: "Macan GTS",
    year: 2024,
    category: "SUV",
    engine: "2.9L Twin-Turbo V6",
    hp: 434,
    torque: "405 lb·ft",
    topSpeed: "169 mph",
    zeroToSixty: "4.3s",
    transmission: "7-Speed PDK",
    drivetrain: "AWD",
    price: 89500,

    images: [
      "images/porsche/Macan GTS.jpg"
    ],

    tagline: "The sports car of compact SUVs."
},
{
    id: 41,
    company: "Porsche",
    model: "Cayenne Turbo GT",
    year: 2024,
    category: "performance SUV",
    engine: "4.0L Twin-Turbo V8",
    hp: 650,
    torque: "626 lb·ft",
    topSpeed: "189 mph",
    zeroToSixty: "3.1s",
    transmission: "8-Speed Auto",
    drivetrain: "AWD",
    price: 196300,

    images: [
      "images/porsche/Cayenne Turbo GT.jpg"
    ],

    tagline: "Supercar performance in SUV form."
},
{
    id: 42,
    company: "Porsche",
    model: "Taycan 4S",
    year: 2024,
    category: "electric sedan",
    engine: "Dual Electric Motors",
    hp: 522,
    torque: "472 lb·ft",
    topSpeed: "155 mph",
    zeroToSixty: "3.8s",
    transmission: "2-Speed Auto",
    drivetrain: "AWD",
    price: 111700,

    images: [
      "images/porsche/Taycan 4S.jpg"
    ],

    tagline: "Electric performance without compromise."
},
{
    id: 43,
    company: "Porsche",
    model: "Taycan Turbo S",
    year: 2024,
    category: "electric sports sedan",
    engine: "Dual Electric Motors",
    hp: 750,
    torque: "774 lb·ft",
    topSpeed: "162 mph",
    zeroToSixty: "2.4s",
    transmission: "2-Speed Auto",
    drivetrain: "AWD",
    price: 209000,

    images: [
      "images/porsche/Taycan Turbo S.jpg"
    ],

    tagline: "The future of speed is electric."
},
  {
    id: 44,
    company: "Lamborghini",
    model: "Huracán EVO",
    year: 2024,
    category: "supercar",
    engine: "5.2L V10 NA",
    hp: 631,
    torque: "443 lb·ft",
    topSpeed: "202 mph",
    zeroToSixty: "2.9s",
    transmission: "7-Speed LDF",
    drivetrain: "AWD",
    price: 261274,
    images: [
      "images/lamborghini/huracan evo.jpg",
    ],
    tagline: "Italian fury unleashed on every road."
  },

  {
    id: 45,
    company: "Lamborghini",
    model: "Revuelto",
    year: 2024,
    category: "hypercar",
    engine: "6.5L V12 Hybrid",
    hp: 1001,
    torque: "793 lb·ft",
    topSpeed: "217 mph",
    zeroToSixty: "2.5s",
    transmission: "8-Speed Dual-Clutch",
    drivetrain: "AWD",
    price: 608000,

    images: [
      "images/lamborghini/Revuelto.jpg"
    ],

    tagline: "The first V12 hybrid Lamborghini."
},
{
    id: 46,
    company: "Lamborghini",
    model: "Huracán Tecnica",
    year: 2024,
    category: "supercar",
    engine: "5.2L V10",
    hp: 631,
    torque: "417 lb·ft",
    topSpeed: "202 mph",
    zeroToSixty: "3.2s",
    transmission: "7-Speed Dual-Clutch",
    drivetrain: "RWD",
    price: 239000,

    images: [
      "images/lamborghini/Huracán Tecnica.jpg"
    ],

    tagline: "Track-inspired thrills for the road."
},
{
    id: 47,
    company: "Lamborghini",
    model: "Huracán STO",
    year: 2024,
    category: "supercar",
    engine: "5.2L V10",
    hp: 631,
    torque: "417 lb·ft",
    topSpeed: "193 mph",
    zeroToSixty: "3.0s",
    transmission: "7-Speed Dual-Clutch",
    drivetrain: "RWD",
    price: 327000,

    images: [
      "images/lamborghini/Huracán STO.jpg"
    ],

    tagline: "A race car engineered for the street."
},
{
    id: 48,
    company: "Lamborghini",
    model: "Urus S",
    year: 2024,
    category: "SUV",
    engine: "4.0L Twin-Turbo V8",
    hp: 657,
    torque: "627 lb·ft",
    topSpeed: "190 mph",
    zeroToSixty: "3.5s",
    transmission: "8-Speed Auto",
    drivetrain: "AWD",
    price: 237000,

    images: [
      "images/lamborghini/Urus S.jpg"
    ],

    tagline: "The world's first Super SUV."
},
{
    id: 49,
    company: "Lamborghini",
    model: "Urus Performante",
    year: 2024,
    category: "performance SUV",
    engine: "4.0L Twin-Turbo V8",
    hp: 657,
    torque: "627 lb·ft",
    topSpeed: "190 mph",
    zeroToSixty: "3.3s",
    transmission: "8-Speed Auto",
    drivetrain: "AWD",
    price: 269000,

    images: [
      "images/lamborghini/Urus Performante.jpg"
    ],

    tagline: "SUV practicality. Supercar attitude."
},
{
    id: 50,
    company: "Lamborghini",
    model: "Aventador SVJ",
    year: 2022,
    category: "hypercar",
    engine: "6.5L V12",
    hp: 759,
    torque: "531 lb·ft",
    topSpeed: "217 mph",
    zeroToSixty: "2.8s",
    transmission: "7-Speed ISR",
    drivetrain: "AWD",
    price: 517000,

    images: [
      "images/lamborghini/Aventador SVJ.jpg"
    ],

    tagline: "The legendary V12 raging bull."
},
{
    id: 51,
    company: "Lamborghini",
    model: "Sián FKP 37",
    year: 2023,
    category: "hypercar",
    engine: "6.5L V12 Hybrid",
    hp: 819,
    torque: "531 lb·ft",
    topSpeed: "217 mph",
    zeroToSixty: "2.8s",
    transmission: "7-Speed ISR",
    drivetrain: "AWD",
    price: 3600000,

    images: [
      "images/lamborghini/Sián FKP 37.jpg"
    ],

    tagline: "The first electrified Lamborghini."
},
{
    id: 52,
    company: "Lamborghini",
    model: "Countach LPI 800-4",
    year: 2023,
    category: "hypercar",
    engine: "6.5L V12 Hybrid",
    hp: 803,
    torque: "557 lb·ft",
    topSpeed: "221 mph",
    zeroToSixty: "2.8s",
    transmission: "7-Speed ISR",
    drivetrain: "AWD",
    price: 2600000,

    images: [
      "images/lamborghini/Countach LPI 800-4.jpg"
    ],

    tagline: "A modern tribute to an icon."
},
{
    id: 53,
    company: "Lamborghini",
    model: "Essenza SCV12",
    year: 2023,
    category: "track hypercar",
    engine: "6.5L V12",
    hp: 830,
    torque: "516 lb·ft",
    topSpeed: "220 mph",
    zeroToSixty: "2.7s",
    transmission: "6-Speed Sequential",
    drivetrain: "RWD",
    price: 2700000,

    images: [
      "images/lamborghini/Essenza SCV12.jpg"
    ],

    tagline: "Pure track domination."
},
{
    id: 54,
    company: "Lamborghini",
    model: "SC18 Alston",
    year: 2023,
    category: "one-off supercar",
    engine: "6.5L V12",
    hp: 770,
    torque: "531 lb·ft",
    topSpeed: "217 mph",
    zeroToSixty: "2.9s",
    transmission: "7-Speed ISR",
    drivetrain: "AWD",
    price: 7000000,

    images: [
      "images/lamborghini/SC18 Alston.jpg"
    ],

    tagline: "A one-of-one Lamborghini masterpiece."
},

{
    id: 55,
    company: "Bugatti",
    model: "Chiron Super Sport",
    year: 2024,
    category: "hypercar",
    engine: "8.0L Quad-Turbo W16",
    hp: 1578,
    torque: "1180 lb·ft",
    topSpeed: "273 mph",
    zeroToSixty: "2.3s",
    transmission: "7-Speed Dual-Clutch",
    drivetrain: "AWD",
    price: 3900000,

    images: [
      "images/buggati/Bugatti-Chiron-Super-Sport-.jpg"
    ],

    tagline: "The ultimate expression of speed."
},
{
    id: 56,
    company: "Bugatti",
    model: "Mistral",
    year: 2024,
    category: "roadster",
    engine: "8.0L Quad-Turbo W16",
    hp: 1578,
    torque: "1180 lb·ft",
    topSpeed: "261 mph",
    zeroToSixty: "2.4s",
    transmission: "7-Speed Dual-Clutch",
    drivetrain: "AWD",
    price: 5000000,

    images: [
      "images/buggati/Mistral.jpg"
    ],

    tagline: "Open-top engineering perfection."
},
{
    id: 57,
    company: "Bugatti",
    model: "Bolide",
    year: 2024,
    category: "track hypercar",
    engine: "8.0L Quad-Turbo W16",
    hp: 1578,
    torque: "1180 lb·ft",
    topSpeed: "236 mph",
    zeroToSixty: "2.2s",
    transmission: "7-Speed Sequential",
    drivetrain: "AWD",
    price: 4700000,

    images: [
      "images/buggati/Bolide.jpg"
    ],

    tagline: "A race car unleashed without limits."
},
{
    id: 58,
    company: "Bugatti",
    model: "Tourbillon",
    year: 2026,
    category: "hypercar",
    engine: "8.3L Naturally Aspirated V16 Hybrid",
    hp: 1775,
    torque: "1192 lb.ft",
    topSpeed: "276 mph",
    zeroToSixty: "2.0s",
    transmission: "8-Speed Dual-Clutch",
    drivetrain: "AWD",
    price: 4600000,

    images: [
      "images/buggati/Tourbillon.jpg"
    ],

    tagline: "The next era of Bugatti begins."
},
{
    id: 59,
    company: "Bugatti",
    model: "Divo",
    year: 2023,
    category: "hypercar",
    engine: "8.0L Quad-Turbo W16",
    hp: 1479,
    torque: "1180 lb·ft",
    topSpeed: "236 mph",
    zeroToSixty: "2.4s",
    transmission: "7-Speed Dual-Clutch",
    drivetrain: "AWD",
    price: 5800000,

    images: [
      "images/buggati/Divo.jpg"
    ],

    tagline: "Built for corners, not compromises."
},
{
    id: 60,
    company: "Bugatti",
    model: "Centodieci",
    year: 2023,
    category: "limited hypercar",
    engine: "8.0L Quad-Turbo W16",
    hp: 1578,
    torque: "1180 lb·ft",
    topSpeed: "236 mph",
    zeroToSixty: "2.4s",
    transmission: "7-Speed Dual-Clutch",
    drivetrain: "AWD",
    price: 9000000,

    images: [
      "images/buggati/Centodieci.jpg"
    ],

    tagline: "A tribute to the legendary EB110."
},
{
    id: 61,
    company: "Bugatti",
    model: "La Voiture Noire",
    year: 2023,
    category: "one-off hypercar",
    engine: "8.0L Quad-Turbo W16",
    hp: 1479,
    torque: "1180 lb·ft",
    topSpeed: "261 mph",
    zeroToSixty: "2.4s",
    transmission: "7-Speed Dual-Clutch",
    drivetrain: "AWD",
    price: 18700000,

    images: [
      "images/buggati/La Voiture Noire.jpg"
    ],

    tagline: "The world's most exclusive automobile."
},
{
    id: 62,
    company: "Bugatti",
    model: "Chiron Pur Sport",
    year: 2023,
    category: "hypercar",
    engine: "8.0L Quad-Turbo W16",
    hp: 1479,
    torque: "1180 lb·ft",
    topSpeed: "217 mph",
    zeroToSixty: "2.3s",
    transmission: "7-Speed Dual-Clutch",
    drivetrain: "AWD",
    price: 3600000,

    images: [
      "images/buggati/Chiron Pur Sport.jpg"
    ],

    tagline: "Precision engineered for pure handling."
},
{
    id: 63,
    company: "Bugatti",
    model: "Chiron Sport",
    year: 2023,
    category: "hypercar",
    engine: "8.0L Quad-Turbo W16",
    hp: 1479,
    torque: "1180 lb·ft",
    topSpeed: "261 mph",
    zeroToSixty: "2.4s",
    transmission: "7-Speed Dual-Clutch",
    drivetrain: "AWD",
    price: 3300000,

    images: [
      "images/buggati/Chiron Sport.webp"
    ],

    tagline: "Luxury and performance in perfect harmony."
},
{
    id: 64,
    company: "Bugatti",
    model: "Veyron Super Sport",
    year: 2015,
    category: "hypercar",
    engine: "8.0L Quad-Turbo W16",
    hp: 1184,
    torque: "1106 lb·ft",
    topSpeed: "267 mph",
    zeroToSixty: "2.5s",
    transmission: "7-Speed Dual-Clutch",
    drivetrain: "AWD",
    price: 2400000,

    images: [
      "images/buggati/Veyron Super Sport.jpg"
    ],

    tagline: "The car that redefined speed records."
},
  
  {
    id: 65,
    company: "Ford",
    model: "Mustang GT",
    year: 2024,
    category: "sports coupe",
    engine: "5.0L V8",
    hp: 480,
    torque: "415 lb·ft",
    topSpeed: "155 mph",
    zeroToSixty: "4.2s",
    transmission: "6-Speed Manual",
    drivetrain: "RWD",
    price: 42900,

    images: [
      "images/ford/Mustang GT.jpg"
    ],

    tagline: "America's iconic pony car."
},
{
    id: 66,
    company: "Ford",
    model: "Mustang Dark Horse",
    year: 2024,
    category: "sports coupe",
    engine: "5.0L V8",
    hp: 500,
    torque: "418 lb·ft",
    topSpeed: "166 mph",
    zeroToSixty: "3.9s",
    transmission: "10-Speed Auto",
    drivetrain: "RWD",
    price: 60200,

    images: [
      "images/ford/Mustang Dark Horse.avif"
    ],

    tagline: "Track-ready performance with attitude."
},
{
    id: 67,
    company: "Ford",
    model: "F-150 Raptor",
    year: 2024,
    category: "pickup truck",
    engine: "3.5L Twin-Turbo EcoBoost V6",
    hp: 450,
    torque: "510 lb·ft",
    topSpeed: "114 mph",
    zeroToSixty: "5.2s",
    transmission: "10-Speed Auto",
    drivetrain: "4WD",
    price: 78900,

    images: [
      "images/ford/F-150 Raptor.jpg"
    ],

    tagline: "Built to dominate any terrain."
},
{
    id: 68,
    company: "Ford",
    model: "F-150 Lightning",
    year: 2024,
    category: "electric pickup",
    engine: "Dual Electric Motors",
    hp: 580,
    torque: "775 lb·ft",
    topSpeed: "112 mph",
    zeroToSixty: "4.0s",
    transmission: "Single-Speed",
    drivetrain: "AWD",
    price: 62995,

    images: [
      "images/ford/F-150 Lightning.jpg"
    ],

    tagline: "The future of America's best-selling truck."
},
{
    id: 69,
    company: "Ford",
    model: "Bronco Raptor",
    year: 2024,
    category: "off-road SUV",
    engine: "3.0L Twin-Turbo EcoBoost V6",
    hp: 418,
    torque: "440 lb·ft",
    topSpeed: "114 mph",
    zeroToSixty: "5.6s",
    transmission: "10-Speed Auto",
    drivetrain: "4WD",
    price: 90800,

    images: [
      "images/ford/Bronco Raptor.jpg"
    ],

    tagline: "Go anywhere. Conquer everything."
},
{
    id: 70,
    company: "Ford",
    model: "Explorer ST",
    year: 2024,
    category: "SUV",
    engine: "3.0L Twin-Turbo EcoBoost V6",
    hp: 400,
    torque: "415 lb·ft",
    topSpeed: "143 mph",
    zeroToSixty: "5.2s",
    transmission: "10-Speed Auto",
    drivetrain: "AWD",
    price: 50900,

    images: [
      "images/ford/Explorer ST.jpg"
    ],

    tagline: "Family SUV with sports-car spirit."
},
{
    id: 71,
    company: "Ford",
    model: "Mustang Mach-E GT",
    year: 2024,
    category: "electric SUV",
    engine: "Dual Electric Motors",
    hp: 480,
    torque: "634 lb·ft",
    topSpeed: "124 mph",
    zeroToSixty: "3.8s",
    transmission: "Single-Speed",
    drivetrain: "AWD",
    price: 54995,

    images: [
      "images/ford/Mustang Mach-E GT.jpg"
    ],

    tagline: "Electric /erformance with Mustang DNA."
},
{
    id: 72,
    company: "Ford",
    model: "GT",
    year: 2022,
    category: "supercar",
    engine: "3.5L Twin-Turbo EcoBoost V6",
    hp: 660,
    torque: "550 lb·ft",
    topSpeed: "216 mph",
    zeroToSixty: "3.0s",
    transmission: "7-Speed Dual-Clutch",
    drivetrain: "RWD",
    price: 500000,

    images: [
      "images/ford/GT.jpg"
    ],

    tagline: "Le Mans-winning heritage reborn."
},
{
    id: 73,
    company: "Ford",
    model: "Ranger Raptor",
    year: 2024,
    category: "pickup truck",
    engine: "3.0L Twin-Turbo EcoBoost V6",
    hp: 405,
    torque: "430 lb·ft",
    topSpeed: "112 mph",
    zeroToSixty: "5.3s",
    transmission: "10-Speed Auto",
    drivetrain: "4WD",
    price: 56960,

    images: [
      "images/ford/Ranger Raptor.jpg"
    ],

    tagline: "Compact truck. Massive capability."
},
{
    id: 74,
    company: "Ford",
    model: "Escape ST-Line",
    year: 2024,
    category: "compact SUV",
    engine: "2.0L Turbo Inline-4",
    hp: 250,
    torque: "280 lb·ft",
    topSpeed: "125 mph",
    zeroToSixty: "6.9s",
    transmission: "8-Speed Auto",
    drivetrain: "AWD",
    price: 35800,

    images: [
      "images/ford/Escape ST-Line.webp"
    ],

    tagline: "Everyday practicality with sporty style."
},
  {
    id: 75,
    company: "Ford",
    model: "Mustang GT500",
    year: 2024,
    category: "sports",
    engine: "5.2L Supercharged V8",
    hp: 760,
    torque: "625 lb·ft",
    topSpeed: "180 mph",
    zeroToSixty: "3.3s",
    transmission: "7-Speed Tremec",
    drivetrain: "RWD",
    price: 79995,
    
    images: [
      "images/ford/Mustang GT500.jpeg"
    ],
    tagline: "American muscle, reimagined for the modern era."
  },

  {
    id: 75,
    company: "Volkswagen",
    model: "Golf GTI",
    year: 2024,
    category: "hot hatchback",
    engine: "2.0L Turbo Inline-4",
    hp: 241,
    torque: "273 lb·ft",
    topSpeed: "155 mph",
    zeroToSixty: "5.7s",
    transmission: "7-Speed DSG",
    drivetrain: "FWD",
    price: 32485,

    images: [
      "images/volkswagon/Golf GTI.jpg"
    ],

    tagline: "The original hot hatch legend."
},
{
    id: 76,
    company: "Volkswagen",
    model: "Golf R",
    year: 2024,
    category: "performance hatchback",
    engine: "2.0L Turbo Inline-4",
    hp: 315,
    torque: "295 lb·ft",
    topSpeed: "167 mph",
    zeroToSixty: "4.7s",
    transmission: "7-Speed DSG",
    drivetrain: "AWD",
    price: 45500,

    images: [
      "images/volkswagon/Golf R.jpg"
    ],

    tagline: "Everyday practicality. Supercar spirit."
},
{
    id: 77,
    company: "Volkswagen",
    model: "Jetta GLI",
    year: 2024,
    category: "sports sedan",
    engine: "2.0L Turbo Inline-4",
    hp: 228,
    torque: "258 lb·ft",
    topSpeed: "130 mph",
    zeroToSixty: "6.1s",
    transmission: "7-Speed DSG",
    drivetrain: "FWD",
    price: 32000,

    images: [
      "images/volkswagon/Jetta GLI.jpg"
    ],

    tagline: "German performance meets everyday comfort."
},
{
    id: 78,
    company: "Volkswagen",
    model: "Arteon SEL Premium R-Line",
    year: 2024,
    category: "luxury sedan",
    engine: "2.0L Turbo Inline-4",
    hp: 300,
    torque: "295 lb·ft",
    topSpeed: "155 mph",
    zeroToSixty: "4.9s",
    transmission: "7-Speed DSG",
    drivetrain: "AWD",
    price: 51000,

    images: [
      "images/volkswagon/Arteon SEL Premium R-Line.webp"
    ],

    tagline: "Elegant design with sporty performance."
},
{
    id: 79,
    company: "Volkswagen",
    model: "Tiguan SEL R-Line",
    year: 2024,
    category: "SUV",
    engine: "2.0L Turbo Inline-4",
    hp: 184,
    torque: "221 lb·ft",
    topSpeed: "124 mph",
    zeroToSixty: "8.0s",
    transmission: "8-Speed Auto",
    drivetrain: "AWD",
    price: 38700,

    images: [
      "images/volkswagon/Tiguan SEL R-Line.jpeg"
    ],

    tagline: "Versatility for every adventure."
},
{
    id: 80,
    company: "Volkswagen",
    model: "Atlas Cross Sport",
    year: 2024,
    category: "SUV",
    engine: "2.0L Turbo Inline-4",
    hp: 269,
    torque: "273 lb·ft",
    topSpeed: "130 mph",
    zeroToSixty: "6.9s",
    transmission: "8-Speed Auto",
    drivetrain: "AWD",
    price: 38000,

    images: [
      "images/volkswagon/Atlas Cross Sport.jpg"
    ],

    tagline: "Big SUV comfort with coupe styling."
},
{
    id: 81,
    company: "Volkswagen",
    model: "ID.4 Pro S",
    year: 2024,
    category: "electric SUV",
    engine: "Single Electric Motor",
    hp: 282,
    torque: "402 lb·ft",
    topSpeed: "112 mph",
    zeroToSixty: "5.8s",
    transmission: "Single-Speed",
    drivetrain: "RWD",
    price: 49300,

    images: [
      "images/volkswagon/ID.4 Pro S.webp"
    ],

    tagline: "Volkswagen's electric future starts here."
},
{
    id: 82,
    company: "Volkswagen",
    model: "ID. Buzz",
    year: 2024,
    category: "electric van",
    engine: "Single Electric Motor",
    hp: 282,
    torque: "413 lb·ft",
    topSpeed: "99 mph",
    zeroToSixty: "7.5s",
    transmission: "Single-Speed",
    drivetrain: "RWD",
    price: 61000,

    images: [
      "images/volkswagon/ID. Buzz.jpg"
    ],

    tagline: "The iconic Microbus reborn as an EV."
},
{
    id: 83,
    company: "Volkswagen",
    model: "Taos SEL",
    year: 2024,
    category: "compact SUV",
    engine: "1.5L Turbo Inline-4",
    hp: 158,
    torque: "184 lb·ft",
    topSpeed: "118 mph",
    zeroToSixty: "7.8s",
    transmission: "7-Speed DSG",
    drivetrain: "AWD",
    price: 33300,

    images: [
      "images/volkswagon/Taos SEL.jpg"
    ],

    tagline: "Compact size. Big capability."
},
{
    id: 84,
    company: "Volkswagen",
    model: "Passat",
    year: 2024,
    category: "sedan",
    engine: "2.0L Turbo Inline-4",
    hp: 201,
    torque: "236 lb·ft",
    topSpeed: "149 mph",
    zeroToSixty: "7.1s",
    transmission: "7-Speed DSG",
    drivetrain: "FWD",
    price: 36500,

    images: [
      "images/volkswagon/Passat.jpg"
    ],

    tagline: "Refined comfort for every journey."
},

  {
    id: 85,
    company: "Ferrari",
    model: "SF90 Stradale",
    year: 2024,
    category: "hypercar",
    engine: "4.0L Twin-Turbo V8 Hybrid",
    hp: 986,
    torque: "590 lb·ft",
    topSpeed: "211 mph",
    zeroToSixty: "2.5s",
    transmission: "8-Speed Dual-Clutch",
    drivetrain: "AWD",
    price: 524000,

    images: [
      "images/ferrari/SF90 Stradale.jpg"
    ],

    tagline: "Ferrari's electrified performance revolution."
},
{
    id: 86,
    company: "Ferrari",
    model: "296 GTB",
    year: 2024,
    category: "supercar",
    engine: "3.0L Twin-Turbo V6 Hybrid",
    hp: 819,
    torque: "546 lb·ft",
    topSpeed: "205 mph",
    zeroToSixty: "2.9s",
    transmission: "8-Speed Dual-Clutch",
    drivetrain: "RWD",
    price: 347000,

    images: [
      "images/ferrari/296 GTB.jpg"
    ],

    tagline: "Compact size. Extraordinary performance."
},
{
    id: 87,
    company: "Ferrari",
    model: "812 Superfast",
    year: 2024,
    category: "supercar",
    engine: "6.5L Naturally Aspirated V12",
    hp: 789,
    torque: "530 lb·ft",
    topSpeed: "211 mph",
    zeroToSixty: "2.8s",
    transmission: "7-Speed Dual-Clutch",
    drivetrain: "RWD",
    price: 430000,

    images: [
      "images/ferrari/812 Superfast.jpeg"
    ],

    tagline: "The ultimate front-engine Ferrari V12."
},
{
    id: 88,
    company: "Ferrari",
    model: "Purosangue",
    year: 2024,
    category: "performance SUV",
    engine: "6.5L Naturally Aspirated V12",
    hp: 715,
    torque: "528 lb·ft",
    topSpeed: "193 mph",
    zeroToSixty: "3.3s",
    transmission: "8-Speed Dual-Clutch",
    drivetrain: "AWD",
    price: 398000,

    images: [
      "images/ferrari/Purosangue.jpg"
    ],

    tagline: "Ferrari's first four-door thoroughbred."
},
{
    id: 89,
    company: "Ferrari",
    model: "Roma",
    year: 2024,
    category: "supercar",
    engine: "3.9L Twin-Turbo V8",
    hp: 612,
    torque: "561 lb·ft",
    topSpeed: "199 mph",
    zeroToSixty: "3.3s",
    transmission: "8-Speed Dual-Clutch",
    drivetrain: "RWD",
    price: 247000,

    images: [
      "images/ferrari/Roma.jpg"
    ],

    tagline: "Italian elegance meets modern performance."
},
{
    id: 90,
    company: "Ferrari",
    model: "F8 Tributo",
    year: 2023,
    category: "supercar",
    engine: "3.9L Twin-Turbo V8",
    hp: 710,
    torque: "568 lb·ft",
    topSpeed: "211 mph",
    zeroToSixty: "2.9s",
    transmission: "7-Speed Dual-Clutch",
    drivetrain: "RWD",
    price: 330000,

    images: [
      "images/ferrari/F8 Tributo.jpg"
    ],

    tagline: "A tribute to Ferrari's legendary V8."
},
{
    id: 91,
    company: "Ferrari",
    model: "Daytona SP3",
    year: 2024,
    category: "limited hypercar",
    engine: "6.5L Naturally Aspirated V12",
    hp: 829,
    torque: "514 lb·ft",
    topSpeed: "211 mph",
    zeroToSixty: "2.8s",
    transmission: "7-Speed Dual-Clutch",
    drivetrain: "RWD",
    price: 2250000,

    images: [
      "images/ferrari/Daytona SP3.jpg"
    ],

    tagline: "Inspired by Ferrari's racing legends."
},
{
    id: 92,
    company: "Ferrari",
    model: "LaFerrari",
    year: 2023,
    category: "hypercar",
    engine: "6.3L V12 Hybrid",
    hp: 950,
    torque: "664 lb·ft",
    topSpeed: "217 mph",
    zeroToSixty: "2.4s",
    transmission: "7-Speed Dual-Clutch",
    drivetrain: "RWD",
    price: 3500000,

    images: [
      "images/ferrari/LaFerrari.jpg"
    ],

    tagline: "The hybrid hypercar that changed everything."
},
{
    id: 93,
    company: "Ferrari",
    model: "488 Pista",
    year: 2023,
    category: "track-focused supercar",
    engine: "3.9L Twin-Turbo V8",
    hp: 710,
    torque: "568 lb·ft",
    topSpeed: "211 mph",
    zeroToSixty: "2.8s",
    transmission: "7-Speed Dual-Clutch",
    drivetrain: "RWD",
    price: 450000,

    images: [
      "images/ferrari/488 Pista.jpg"
    ],

    tagline: "Born on the track. Built for the road."
},
{
    id: 94,
    company: "Ferrari",
    model: "12Cilindri",
    year: 2025,
    category: "supercar",
    engine: "6.5L Naturally Aspirated V12",
    hp: 819,
    torque: "500 lb·ft",
    topSpeed: "211 mph",
    zeroToSixty: "2.9s",
    transmission: "8-Speed Dual-Clutch",
    drivetrain: "RWD",
    price: 430000,

    images: [
      "images/ferrari/12Cilindri.jpg"
    ],

    tagline: "A modern celebration of the Ferrari V12."
},

  {
    id: 95,
    company: "Audi",
    model: "A4 45 TFSI Quattro",
    year: 2024,
    category: "sedan",
    engine: "2.0L Turbo Inline-4",
    hp: 261,
    torque: "273 lb·ft",
    topSpeed: "130 mph",
    zeroToSixty: "5.2s",
    transmission: "7-Speed S Tronic",
    drivetrain: "AWD",
    price: 43000,

    images: [
      "images/audi/A4 45 TFSI Quattro.webp"
    ],

    tagline: "Luxury, technology, and performance in perfect balance."
},
{
    id: 96,
    company: "Audi",
    model: "A6 Prestige",
    year: 2024,
    category: "luxury sedan",
    engine: "3.0L Turbo V6",
    hp: 335,
    torque: "369 lb·ft",
    topSpeed: "155 mph",
    zeroToSixty: "5.0s",
    transmission: "7-Speed S Tronic",
    drivetrain: "AWD",
    price: 62000,

    images: [
      "images/audi/A6 Prestige.jpg"
    ],

    tagline: "Executive luxury with quattro confidence."
},
{
    id: 97,
    company: "Audi",
    model: "A8 L",
    year: 2024,
    category: "flagship luxury sedan",
    engine: "3.0L Turbo V6",
    hp: 335,
    torque: "369 lb·ft",
    topSpeed: "155 mph",
    zeroToSixty: "5.6s",
    transmission: "8-Speed Tiptronic",
    drivetrain: "AWD",
    price: 91000,

    images: [
      "images/audi/A8 L(1).jpg"
    ],

    tagline: "The pinnacle of Audi luxury."
},
{
    id: 98,
    company: "Audi",
    model: "RS3",
    year: 2024,
    category: "sports sedan",
    engine: "2.5L Turbo Inline-5",
    hp: 401,
    torque: "369 lb·ft",
    topSpeed: "180 mph",
    zeroToSixty: "3.6s",
    transmission: "7-Speed S Tronic",
    drivetrain: "AWD",
    price: 63000,

    images: [
      "images/audi/RS3.jpg"
    ],

    tagline: "Compact size. Supercar acceleration."
},
{
    id: 99,
    company: "Audi",
    model: "RS6 Avant Performance",
    year: 2024,
    category: "hatchback",
    engine: "4.0L Twin-Turbo V8",
    hp: 621,
    torque: "627 lb·ft",
    topSpeed: "190 mph",
    zeroToSixty: "3.3s",
    transmission: "8-Speed Tiptronic",
    drivetrain: "AWD",
    price: 126000,

    images: [
      "images/audi/RS6 Avant Performance.jpg"
    ],

    tagline: "The world's most practical supercar."
},
{
    id: 100,
    company: "Audi",
    model: "R8 V10 Performance",
    year: 2023,
    category: "supercar",
    engine: "5.2L Naturally Aspirated V10",
    hp: 602,
    torque: "413 lb·ft",
    topSpeed: "205 mph",
    zeroToSixty: "3.1s",
    transmission: "7-Speed S Tronic",
    drivetrain: "AWD",
    price: 186000,

    images: [
      "images/audi/R8 performance.jpg"
    ],

    tagline: "Audi's legendary V10 masterpiece."
},
{
    id: 101,
    company: "Audi",
    model: "Q5 45 TFSI Quattro",
    year: 2024,
    category: "SUV",
    engine: "2.0L Turbo Inline-4",
    hp: 261,
    torque: "273 lb·ft",
    topSpeed: "130 mph",
    zeroToSixty: "5.7s",
    transmission: "7-Speed S Tronic",
    drivetrain: "AWD",
    price: 45500,

    images: [
      "images/audi/Q5 45 TFSI Quattro.jpg"
    ],

    tagline: "Luxury SUV for every journey."
},
{
    id: 102,
    company: "Audi",
    model: "SQ7",
    year: 2024,
    category: "performance SUV",
    engine: "4.0L Twin-Turbo V8",
    hp: 500,
    torque: "568 lb·ft",
    topSpeed: "155 mph",
    zeroToSixty: "4.3s",
    transmission: "8-Speed Tiptronic",
    drivetrain: "AWD",
    price: 91000,

    images: [
      "images/audi/SQ7.jpg"
    ],

    tagline: "Three rows. Endless performance."
},
{
    id: 103,
    company: "Audi",
    model: "e-tron GT",
    year: 2024,
    category: "electric sports sedan",
    engine: "Dual Electric Motors",
    hp: 522,
    torque: "472 lb·ft",
    topSpeed: "152 mph",
    zeroToSixty: "3.9s",
    transmission: "2-Speed Auto",
    drivetrain: "AWD",
    price: 108000,

    images: [
      "images/audi/e-tron GT.jpeg"
    ],

    tagline: "Electric performance with Audi sophistication."
},
{
    id: 104,
    company: "Audi",
    model: "RS e-tron GT",
    year: 2024,
    category: "electric sedan",
    engine: "Dual Electric Motors",
    hp: 637,
    torque: "612 lb·ft",
    topSpeed: "155 mph",
    zeroToSixty: "3.1s",
    transmission: "2-Speed Auto",
    drivetrain: "AWD",
    price: 147000,

    images: [
      "images/audi/RS e-tron GT.jpg"
    ],

    tagline: "The future of Audi performance is electric."
},
  {
    id: 105,
    company: "Audi",
    model: "Q8 e-tron",
    year: 2024,
    category: "suv",
    engine: "Dual Electric Motors",
    hp: 402,
    torque: "490 lb·ft",
    topSpeed: "130 mph",
    zeroToSixty: "5.6s",
    transmission: "1-Speed Auto",
    drivetrain: "Quattro AWD",
    price: 74400,
    images: [
      "images/audi/Q8 e-tron.jpg"
    ],
    tagline: "Electric innovation meets quattro capability."
  },

  {
    id: 105,
    company: "Honda",
    model: "Civic Type R",
    year: 2024,
    category: "hot hatchback",
    engine: "2.0L Turbo Inline-4",
    hp: 315,
    torque: "310 lb·ft",
    topSpeed: "169 mph",
    zeroToSixty: "5.0s",
    transmission: "6-Speed Manual",
    drivetrain: "FWD",
    price: 45900,

    images: [
      "images/honda/Civic Type R.jpg"
    ],

    tagline: "The ultimate front-wheel-drive performance machine."
},
{
    id: 106,
    company: "Honda",
    model: "Civic Si",
    year: 2024,
    category: "sports sedan",
    engine: "1.5L Turbo Inline-4",
    hp: 200,
    torque: "192 lb·ft",
    topSpeed: "137 mph",
    zeroToSixty: "6.6s",
    transmission: "6-Speed Manual",
    drivetrain: "FWD",
    price: 29900,

    images: [
      "images/honda/Civic Si.jpg"
    ],

    tagline: "Sporty, affordable, and fun to drive."
},
{
    id: 107,
    company: "Honda",
    model: "Accord Touring Hybrid",
    year: 2024,
    category: "sedan",
    engine: "2.0L Hybrid Inline-4",
    hp: 204,
    torque: "247 lb·ft",
    topSpeed: "125 mph",
    zeroToSixty: "6.7s",
    transmission: "eCVT",
    drivetrain: "FWD",
    price: 39500,

    images: [
      "images/honda/Accord Touring Hybrid.jpg"
    ],

    tagline: "Premium comfort with hybrid efficiency."
},
{
    id: 108,
    company: "Honda",
    model: "Civic Touring",
    year: 2024,
    category: "sedan",
    engine: "1.5L Turbo Inline-4",
    hp: 180,
    torque: "177 lb·ft",
    topSpeed: "125 mph",
    zeroToSixty: "7.5s",
    transmission: "CVT",
    drivetrain: "FWD",
    price: 31100,

    images: [
      "images/honda/Civic Touring.jpg"
    ],

    tagline: "The benchmark compact sedan."
},
{
    id: 109,
    company: "Honda",
    model: "CR-V Hybrid Sport Touring",
    year: 2024,
    category: "SUV",
    engine: "2.0L Hybrid Inline-4",
    hp: 204,
    torque: "247 lb·ft",
    topSpeed: "112 mph",
    zeroToSixty: "7.5s",
    transmission: "eCVT",
    drivetrain: "AWD",
    price: 41100,

    images: [
      "images/honda/CR-V Hybrid Sport Touring.webp"
    ],

    tagline: "America's favorite family SUV."
},
{
    id: 110,
    company: "Honda",
    model: "Pilot Elite",
    year: 2024,
    category: "SUV",
    engine: "3.5L V6",
    hp: 285,
    torque: "262 lb·ft",
    topSpeed: "130 mph",
    zeroToSixty: "6.8s",
    transmission: "10-Speed Auto",
    drivetrain: "AWD",
    price: 53300,

    images: [
      "images/honda/Pilot Elite.jpg"
    ],

    tagline: "Adventure-ready for the whole family."
},
{
    id: 111,
    company: "Honda",
    model: "Passport TrailSport",
    year: 2024,
    category: "off-road SUV",
    engine: "3.5L V6",
    hp: 280,
    torque: "262 lb·ft",
    topSpeed: "125 mph",
    zeroToSixty: "6.5s",
    transmission: "9-Speed Auto",
    drivetrain: "AWD",
    price: 46900,

    images: [
      "images/honda/Passport TrailSport.avif"
    ],

    tagline: "Built to explore beyond the pavement."
},
{
    id: 112,
    company: "Honda",
    model: "Ridgeline Black Edition",
    year: 2024,
    category: "pickup truck",
    engine: "3.5L V6",
    hp: 280,
    torque: "262 lb·ft",
    topSpeed: "124 mph",
    zeroToSixty: "6.2s",
    transmission: "9-Speed Auto",
    drivetrain: "AWD",
    price: 47400,

    images: [
      "images/honda/Ridgeline Black Edition.jpg"
    ],

    tagline: "A truck engineered the Honda way."
},
{
    id: 113,
    company: "Honda",
    model: "Prologue Elite",
    year: 2024,
    category: "electric SUV",
    engine: "Dual Electric Motors",
    hp: 288,
    torque: "333 lb·ft",
    topSpeed: "112 mph",
    zeroToSixty: "5.9s",
    transmission: "Single-Speed",
    drivetrain: "AWD",
    price: 57200,

    images: [
      "images/honda/Prologue Elite.jpg"
    ],

    tagline: "Honda's bold step into the EV future."
},
{
    id: 114,
    company: "Honda",
    model: "NSX Type S",
    year: 2022,
    category: "supercar",
    engine: "3.5L Twin-Turbo V6 Hybrid",
    hp: 600,
    torque: "492 lb·ft",
    topSpeed: "191 mph",
    zeroToSixty: "2.9s",
    transmission: "9-Speed Dual-Clutch",
    drivetrain: "AWD",
    price: 169500,

    images: [
      "images/honda/NSX Type S.jpg"
    ],

    tagline: "Honda's legendary hybrid supercar."
},

  {
    id: 115,
    company: "Rolls-Royce",
    model: "Phantom",
    year: 2024,
    category: "ultra-luxury sedan",
    engine: "6.75L Twin-Turbo V12",
    hp: 563,
    torque: "664 lb·ft",
    topSpeed: "155 mph",
    zeroToSixty: "5.1s",
    transmission: "8-Speed Auto",
    drivetrain: "RWD",
    price: 510000,

    images: [
      "images/rolls royce/phantom.jpg"
    ],

    tagline: "The pinnacle of automotive luxury."
},
{
    id: 116,
    company: "Rolls-Royce",
    model: "Ghost",
    year: 2024,
    category: "luxury sedan",
    engine: "6.75L Twin-Turbo V12",
    hp: 563,
    torque: "627 lb·ft",
    topSpeed: "155 mph",
    zeroToSixty: "4.6s",
    transmission: "8-Speed Auto",
    drivetrain: "AWD",
    price: 355000,

    images: [
      "images/rolls royce/Ghost.jpg"
    ],

    tagline: "Effortless power. Timeless elegance."
},
{
    id: 117,
    company: "Rolls-Royce",
    model: "Ghost Black Badge",
    year: 2024,
    category: "performance luxury sedan",
    engine: "6.75L Twin-Turbo V12",
    hp: 592,
    torque: "664 lb·ft",
    topSpeed: "155 mph",
    zeroToSixty: "4.5s",
    transmission: "8-Speed Auto",
    drivetrain: "AWD",
    price: 420000,

    images: [
      "images/rolls royce/Ghost Black Badge.jpg"
    ],

    tagline: "A darker expression of luxury."
},
{
    id: 118,
    company: "Rolls-Royce",
    model: "Cullinan",
    year: 2024,
    category: "luxury SUV",
    engine: "6.75L Twin-Turbo V12",
    hp: 563,
    torque: "627 lb·ft",
    topSpeed: "155 mph",
    zeroToSixty: "4.8s",
    transmission: "8-Speed Auto",
    drivetrain: "AWD",
    price: 392000,

    images: [
      "images/rolls royce/Cullinan.jpg"
    ],

    tagline: "Luxury without limits."
},
{
    id: 119,
    company: "Rolls-Royce",
    model: "Cullinan Black Badge",
    year: 2024,
    category: "performance luxury SUV",
    engine: "6.75L Twin-Turbo V12",
    hp: 592,
    torque: "664 lb·ft",
    topSpeed: "155 mph",
    zeroToSixty: "4.6s",
    transmission: "8-Speed Auto",
    drivetrain: "AWD",
    price: 470000,

    images: [
      "images/rolls royce/Cullinan Black Badge.jpg"
    ],

    tagline: "The boldest Rolls-Royce SUV."
},
{
    id: 120,
    company: "Rolls-Royce",
    model: "Spectre",
    year: 2024,
    category: "electric luxury sedan",
    engine: "Dual Electric Motors",
    hp: 577,
    torque: "664 lb·ft",
    topSpeed: "155 mph",
    zeroToSixty: "4.4s",
    transmission: "Single-Speed",
    drivetrain: "AWD",
    price: 422000,

    images: [
      "images/rolls royce/Spectre.jpg"
    ],

    tagline: "The first fully electric Rolls-Royce."
},
{
    id: 121,
    company: "Rolls-Royce",
    model: "Wraith Black Badge",
    year: 2023,
    category: "sedan",
    engine: "6.6L Twin-Turbo V12",
    hp: 624,
    torque: "642 lb·ft",
    topSpeed: "155 mph",
    zeroToSixty: "4.3s",
    transmission: "8-Speed Auto",
    drivetrain: "RWD",
    price: 380000,

    images: [
      "images/rolls royce/Wraith Black Badge.jpg"
    ],

    tagline: "The most powerful Rolls-Royce grand tourer."
},
{
    id: 122,
    company: "Rolls-Royce",
    model: "Dawn Black Badge",
    year: 2023,
    category: "luxury convertible roadster",
    engine: "6.6L Twin-Turbo V12",
    hp: 593,
    torque: "620 lb·ft",
    topSpeed: "155 mph",
    zeroToSixty: "4.6s",
    transmission: "8-Speed Auto",
    drivetrain: "RWD",
    price: 365000,

    images: [
      "images/rolls royce/Dawn Black Badge.jpg"
    ],

    tagline: "Open-air luxury at its finest."
},
{
    id: 123,
    company: "Rolls-Royce",
    model: "Boat Tail",
    year: 2023,
    category: "coachbuilt luxury car sedan",
    engine: "6.75L Twin-Turbo V12",
    hp: 563,
    torque: "627 lb·ft",
    topSpeed: "155 mph",
    zeroToSixty: "5.0s",
    transmission: "8-Speed Auto",
    drivetrain: "RWD",
    price: 28000000,

    images: [
      "images/rolls royce/Boat Tail.jpg"
    ],

    tagline: "One of the world's most exclusive automobiles."
},
{
    id: 124,
    company: "Rolls-Royce",
    model: "Sweptail",
    year: 2023,
    category: "one-off luxury coupe sedan",
    engine: "6.75L V12",
    hp: 453,
    torque: "531 lb·ft",
    topSpeed: "150 mph",
    zeroToSixty: "5.6s",
    transmission: "8-Speed Auto",
    drivetrain: "RWD",
    price: 13000000,

    images: [
      "images/rolls royce/Sweptail.jpg"
    ],

    tagline: "A bespoke masterpiece beyond comparison."
},

  {
    id: 125,
    company: "Rimac",
    model: "Nevera",
    year: 2024,
    category: "electric hypercar",
    engine: "Four Electric Motors",
    hp: 1914,
    torque: "1741 lb·ft",
    topSpeed: "258 mph",
    zeroToSixty: "1.85s",
    transmission: "Single-Speed",
    drivetrain: "AWD",
    price: 2400000,

    images: [
      "images/rimac/rimac_nevera.jpg"
    ],

    tagline: "The world's fastest electric hypercar."
},
{
    id: 126,
    company: "Rimac",
    model: "Nevera Time Attack",
    year: 2024,
    category: "electric hypercar",
    engine: "Four Electric Motors",
    hp: 1914,
    torque: "1741 lb·ft",
    topSpeed: "258 mph",
    zeroToSixty: "1.85s",
    transmission: "Single-Speed",
    drivetrain: "AWD",
    price: 2700000,

    images: [
      "images/rimac/Nevera Time Attack.jpg"
    ],

    tagline: "Built to shatter records."
},
{
    id: 127,
    company: "Rimac",
    model: "Nevera R",
    year: 2025,
    category: "electric hypercar",
    engine: "Four Electric Motors",
    hp: 2107,
    torque: "1770 lb·ft",
    topSpeed: "258 mph",
    zeroToSixty: "1.8s",
    transmission: "Single-Speed",
    drivetrain: "AWD",
    price: 2800000,

    images: [
      "images/rimac/Nevera R.jpg"
    ],

    tagline: "The next evolution of electric dominance."
},
{
    id: 128,
    company: "Rimac",
    model: "Concept One",
    year: 2018,
    category: "electric supercar",
    engine: "Four Electric Motors",
    hp: 1224,
    torque: "1180 lb·ft",
    topSpeed: "221 mph",
    zeroToSixty: "2.5s",
    transmission: "Single-Speed",
    drivetrain: "AWD",
    price: 1000000,

    images: [
      "images/rimac/Concept One.jpg"
    ],

    tagline: "The car that introduced Rimac to the world."
},
{
    id: 129,
    company: "Rimac",
    model: "Concept S",
    year: 2017,
    category: "electric supercar",
    engine: "Four Electric Motors",
    hp: 1384,
    torque: "1328 lb·ft",
    topSpeed: "227 mph",
    zeroToSixty: "2.3s",
    transmission: "Single-Speed",
    drivetrain: "AWD",
    price: 1200000,

    images: [
      "images/rimac/Concept S.jpg"
    ],

    tagline: "A track-focused electric beast."
},
{
    id: 130,
    company: "Rimac",
    model: "Concept Two",
    year: 2019,
    category: "electric hypercar",
    engine: "Four Electric Motors",
    hp: 1888,
    torque: "1696 lb·ft",
    topSpeed: "258 mph",
    zeroToSixty: "1.97s",
    transmission: "Single-Speed",
    drivetrain: "AWD",
    price: 2100000,

    images: [
      "images/rimac/Concept Two.jpg"
    ],

    tagline: "The prototype that became Nevera."
},
{
    id: 131,
    company: "Rimac",
    model: "Nevera Signature Edition",
    year: 2025,
    category: "limited electric hypercar",
    engine: "Four Electric Motors",
    hp: 1914,
    torque: "1741 lb·ft",
    topSpeed: "258 mph",
    zeroToSixty: "1.85s",
    transmission: "Single-Speed",
    drivetrain: "AWD",
    price: 3000000,

    images: [
      "images/rimac/Nevera Signature Edition.jpg"
    ],

    tagline: "Exclusive craftsmanship meets electric power."
},
{
    id: 132,
    company: "Rimac",
    model: "Nevera Track Pack",
    year: 2025,
    category: "track hypercar",
    engine: "Four Electric Motors",
    hp: 1914,
    torque: "1741 lb·ft",
    topSpeed: "258 mph",
    zeroToSixty: "1.85s",
    transmission: "Single-Speed",
    drivetrain: "AWD",
    price: 2600000,

    images: [
      "images/rimac/Nevera Track Pack.jpg"
    ],

    tagline: "Engineered for ultimate circuit performance."
},
{
    id: 133,
    company: "Rimac",
    model: "Nevera Carbon Edition",
    year: 2025,
    category: "limited hypercar",
    engine: "Four Electric Motors",
    hp: 1914,
    torque: "1741 lb·ft",
    topSpeed: "258 mph",
    zeroToSixty: "1.85s",
    transmission: "Single-Speed",
    drivetrain: "AWD",
    price: 2900000,

    images: [
      "images/rimac/Nevera Carbon Edition.avif"
    ],

    tagline: "Lightweight construction. Maximum performance."
},
{
    id: 134,
    company: "Rimac",
    model: "Nevera Black Edition",
    year: 2025,
    category: "limited hypercar",
    engine: "Four Electric Motors",
    hp: 1914,
    torque: "1741 lb·ft",
    topSpeed: "258 mph",
    zeroToSixty: "1.85s",
    transmission: "Single-Speed",
    drivetrain: "AWD",
    price: 2950000,

    images: [
      "images/rimac/Nevera Black Edition.jpg"
    ],

    tagline: "Stealth, luxury, and unmatched speed."
},

  {
    id: 135,
    company: "Land Rover",
    model: "Range Rover Autobiography",
    year: 2024,
    category: "luxury SUV",
    engine: "4.4L Twin-Turbo V8",
    hp: 523,
    torque: "553 lb·ft",
    topSpeed: "155 mph",
    zeroToSixty: "4.4s",
    transmission: "8-Speed Auto",
    drivetrain: "AWD",
    price: 168000,

    images: [
      "images/land rover/Range Rover Autobiography.jpg"
    ],

    tagline: "The benchmark for luxury SUVs."
},
{
    id: 136,
    company: "Land Rover",
    model: "Range Rover SV",
    year: 2024,
    category: "ultra-luxury SUV",
    engine: "4.4L Twin-Turbo V8",
    hp: 606,
    torque: "553 lb·ft",
    topSpeed: "162 mph",
    zeroToSixty: "4.3s",
    transmission: "8-Speed Auto",
    drivetrain: "AWD",
    price: 234000,

    images: [
      "images/land rover/Range Rover SV.jpg"
    ],

    tagline: "Crafted luxury without compromise."
},
{
    id: 137,
    company: "Land Rover",
    model: "Range Rover Sport SV",
    year: 2024,
    category: "performance SUV",
    engine: "4.4L Twin-Turbo V8 Hybrid",
    hp: 626,
    torque: "553 lb·ft",
    topSpeed: "180 mph",
    zeroToSixty: "3.6s",
    transmission: "8-Speed Auto",
    drivetrain: "AWD",
    price: 181000,

    images: [
      "images/land rover/Range Rover Sport SV.jpg"
    ],

    tagline: "The fastest Range Rover ever built."
},
{
    id: 138,
    company: "Land Rover",
    model: "Range Rover Velar",
    year: 2024,
    category: "luxury SUV",
    engine: "2.0L Turbo Inline-4",
    hp: 247,
    torque: "269 lb·ft",
    topSpeed: "135 mph",
    zeroToSixty: "7.1s",
    transmission: "8-Speed Auto",
    drivetrain: "AWD",
    price: 62000,

    images: [
      "images/land rover/Range Rover Velar.jpg"
    ],

    tagline: "Minimalist design meets modern luxury."
},
{
    id: 139,
    company: "Land Rover",
    model: "Range Rover Evoque",
    year: 2024,
    category: "compact luxury SUV",
    engine: "2.0L Turbo Inline-4",
    hp: 246,
    torque: "269 lb·ft",
    topSpeed: "143 mph",
    zeroToSixty: "7.0s",
    transmission: "9-Speed Auto",
    drivetrain: "AWD",
    price: 49500,

    images: [
      "images/land rover/Range Rover Evoque.jpg"
    ],

    tagline: "Compact size. Premium character."
},
{
    id: 140,
    company: "Land Rover",
    model: "Defender 90 V8",
    year: 2024,
    category: "off-road SUV",
    engine: "5.0L Supercharged V8",
    hp: 518,
    torque: "461 lb·ft",
    topSpeed: "149 mph",
    zeroToSixty: "4.9s",
    transmission: "8-Speed Auto",
    drivetrain: "AWD",
    price: 113500,

    images: [
      "images/land rover/Defender 90 V8.jpg"
    ],

    tagline: "Iconic capability with V8 power."
},
{
    id: 141,
    company: "Land Rover",
    model: "Defender 110",
    year: 2024,
    category: "off-road SUV",
    engine: "3.0L Turbo Inline-6",
    hp: 395,
    torque: "406 lb·ft",
    topSpeed: "119 mph",
    zeroToSixty: "5.8s",
    transmission: "8-Speed Auto",
    drivetrain: "AWD",
    price: 68500,

    images: [
      "images/land rover/Defender 110.jpg"
    ],

    tagline: "Built for every adventure."
},
{
    id: 142,
    company: "Land Rover",
    model: "Defender OCTA",
    year: 2025,
    category: "performance off-road SUV",
    engine: "4.4L Twin-Turbo V8",
    hp: 626,
    torque: "553 lb·ft",
    topSpeed: "155 mph",
    zeroToSixty: "3.8s",
    transmission: "8-Speed Auto",
    drivetrain: "AWD",
    price: 153000,

    images: [
      "images/land rover/Defender OCTA.avif"
    ],

    tagline: "The most extreme Defender ever created."
},
{
    id: 143,
    company: "Land Rover",
    model: "Discovery Metropolitan Edition",
    year: 2024,
    category: "family SUV",
    engine: "3.0L Turbo Inline-6",
    hp: 355,
    torque: "369 lb·ft",
    topSpeed: "130 mph",
    zeroToSixty: "6.2s",
    transmission: "8-Speed Auto",
    drivetrain: "AWD",
    price: 81000,

    images: [
      "images/land rover/Discovery Metropolitan Edition.jpg"
    ],

    tagline: "Luxury and versatility for every journey."
},
{
    id: 144,
    company: "Land Rover",
    model: "Discovery Sport",
    year: 2024,
    category: "compact SUV",
    engine: "2.0L Turbo Inline-4",
    hp: 246,
    torque: "269 lb·ft",
    topSpeed: "140 mph",
    zeroToSixty: "7.3s",
    transmission: "9-Speed Auto",
    drivetrain: "AWD",
    price: 50000,

    images: [
      "images/land rover/Discovery Sport.jpg"
    ],

    tagline: "Everyday practicality with Land Rover DNA."
},
  {
    id: 1450,
    company: "Land Rover",
    model: "Defender 110 V8",
    year: 2024,
    category: "suv",
    engine: "5.0L Supercharged V8",
    hp: 518,
    torque: "461 lb·ft",
    topSpeed: "149 mph",
    zeroToSixty: "5.0s",
    transmission: "8-Speed Auto",
    drivetrain: "AWD 4×4",
    price: 107050,
   
    images: [
      "images/land rover/Defender 110 V8.jpg"
    ],
    tagline: "Built for those who refuse to be tamed."
  },

  {
    id: 145,
    company: "McLaren",
    model: "750S",
    year: 2024,
    category: "supercar",
    engine: "4.0L Twin-Turbo V8",
    hp: 740,
    torque: "590 lb·ft",
    topSpeed: "206 mph",
    zeroToSixty: "2.7s",
    transmission: "7-Speed Dual-Clutch",
    drivetrain: "RWD",
    price: 324000,

    images: [
      "images/mclaren/750S.jpg"
    ],

    tagline: "The benchmark for lightweight supercars."
},
{
    id: 146,
    company: "McLaren",
    model: "750S Spider",
    year: 2024,
    category: "convertible supercar roadster",
    engine: "4.0L Twin-Turbo V8",
    hp: 740,
    torque: "590 lb·ft",
    topSpeed: "206 mph",
    zeroToSixty: "2.8s",
    transmission: "7-Speed Dual-Clutch",
    drivetrain: "RWD",
    price: 345000,

    images: [
      "images/mclaren/750S Spider.jpg"
    ],

    tagline: "Open-air performance without compromise."
},
{
    id: 147,
    company: "McLaren",
    model: "Artura",
    year: 2024,
    category: "hybrid supercar",
    engine: "3.0L Twin-Turbo V6 Hybrid",
    hp: 671,
    torque: "531 lb·ft",
    topSpeed: "205 mph",
    zeroToSixty: "3.0s",
    transmission: "8-Speed Dual-Clutch",
    drivetrain: "RWD",
    price: 273000,

    images: [
      "images/mclaren/Artura.jpg"
    ],

    tagline: "The future of McLaren performance."
},
{
    id: 148,
    company: "McLaren",
    model: "Artura Spider",
    year: 2025,
    category: "hybrid convertible supercar roadster",
    engine: "3.0L Twin-Turbo V6 Hybrid",
    hp: 690,
    torque: "531 lb·ft",
    topSpeed: "205 mph",
    zeroToSixty: "3.0s",
    transmission: "8-Speed Dual-Clutch",
    drivetrain: "RWD",
    price: 305000,

    images: [
      "images/mclaren/Artura Spider.jpg"
    ],

    tagline: "Hybrid power meets open-top excitement."
},
{
    id: 149,
    company: "McLaren",
    model: "765LT",
    year: 2024,
    category: "track-focused supercar",
    engine: "4.0L Twin-Turbo V8",
    hp: 755,
    torque: "590 lb·ft",
    topSpeed: "205 mph",
    zeroToSixty: "2.7s",
    transmission: "7-Speed Dual-Clutch",
    drivetrain: "RWD",
    price: 385000,

    images: [
      "images/mclaren/765LT.jpg"
    ],

    tagline: "Longtail engineering at its finest."
},
{
    id: 150,
    company: "McLaren",
    model: "Senna",
    year: 2023,
    category: "hypercar",
    engine: "4.0L Twin-Turbo V8",
    hp: 789,
    torque: "590 lb·ft",
    topSpeed: "208 mph",
    zeroToSixty: "2.7s",
    transmission: "7-Speed Dual-Clutch",
    drivetrain: "RWD",
    price: 1000000,

    images: [
      "images/mclaren/Senna.jpg"
    ],

    tagline: "Built to dominate the track."
},
{
    id: 151,
    company: "McLaren",
    model: "Speedtail",
    year: 2023,
    category: "hypercar-GT",
    engine: "4.0L Twin-Turbo V8 Hybrid",
    hp: 1036,
    torque: "848 lb·ft",
    topSpeed: "250 mph",
    zeroToSixty: "2.9s",
    transmission: "7-Speed Dual-Clutch",
    drivetrain: "RWD",
    price: 2300000,

    images: [
      "images/mclaren/Speedtail.jpg"
    ],

    tagline: "The fastest McLaren road car ever."
},
{
    id: 152,
    company: "McLaren",
    model: "P1",
    year: 2023,
    category: "hybrid hypercar",
    engine: "3.8L Twin-Turbo V8 Hybrid",
    hp: 903,
    torque: "664 lb·ft",
    topSpeed: "217 mph",
    zeroToSixty: "2.7s",
    transmission: "7-Speed Dual-Clutch",
    drivetrain: "RWD",
    price: 1800000,

    images: [
      "images/mclaren/P1.jpg"
    ],

    tagline: "The hybrid hypercar that changed everything."
},
{
    id: 153,
    company: "McLaren",
    model: "Solus GT",
    year: 2025,
    category: "track hypercar",
    engine: "5.2L Naturally Aspirated V10",
    hp: 829,
    torque: "479 lb·ft",
    topSpeed: "200 mph",
    zeroToSixty: "2.5s",
    transmission: "7-Speed Sequential",
    drivetrain: "RWD",
    price: 4000000,

    images: [
      "images/mclaren/Solus GT.jpg"
    ],

    tagline: "A Formula-inspired machine for the track."
},
{
    id: 154,
    company: "McLaren",
    model: "W1",
    year: 2025,
    category: "hypercar",
    engine: "4.0L Twin-Turbo V8 Hybrid",
    hp: 1258,
    torque: "988 lb·ft",
    topSpeed: "217 mph",
    zeroToSixty: "2.4s",
    transmission: "8-Speed Dual-Clutch",
    drivetrain: "RWD",
    price: 2100000,

    images: [
      "images/mclaren/W1.jpg"
    ],

    tagline: "The next chapter of McLaren hypercar excellence."
},
  {
    id: 1550,
    company: "McLaren",
    model: "765LT Spider",
    year: 2024,
    category: "supercar",
    engine: "4.0L V8 Twin-Turbo",
    hp: 765,
    torque: "590 lb·ft",
    topSpeed: "205 mph",
    zeroToSixty: "2.8s",
    transmission: "7-Speed SSG",
    drivetrain: "RWD",
    price: 382500,
   
    images: [
      "images/mclaren/765LT Spider.jpg"
    ],
    tagline: "Roofless, breathless, and utterly brilliant."
  },

  {
    id: 155,
    company: "Tesla",
    model: "Model S Plaid",
    year: 2024,
    category: "electric sedan",
    engine: "Tri-Motor Electric",
    hp: 1020,
    torque: "1050 lb·ft",
    topSpeed: "200 mph",
    zeroToSixty: "1.99s",
    transmission: "Single-Speed",
    drivetrain: "AWD",
    price: 89990,

    images: [
      "images/tesla/Model S Plaid.jpg"
    ],

    tagline: "The quickest production sedan ever built."
},
{
    id: 156,
    company: "Tesla",
    model: "Model S",
    year: 2024,
    category: "electric sedan",
    engine: "Dual-Motor Electric",
    hp: 670,
    torque: "723 lb·ft",
    topSpeed: "149 mph",
    zeroToSixty: "3.1s",
    transmission: "Single-Speed",
    drivetrain: "AWD",
    price: 74990,

    images: [
      "images/tesla/Model S.jpg"
    ],

    tagline: "Luxury, technology, and electric performance."
},
{
    id: 157,
    company: "Tesla",
    model: "Model 3 Performance",
    year: 2024,
    category: "electric sports sedan",
    engine: "Dual-Motor Electric",
    hp: 510,
    torque: "554 lb·ft",
    topSpeed: "163 mph",
    zeroToSixty: "2.9s",
    transmission: "Single-Speed",
    drivetrain: "AWD",
    price: 54990,

    images: [
      "images/tesla/Model 3 Performance.webp"
    ],

    tagline: "Sports car acceleration meets daily practicality."
},
{
    id: 158,
    company: "Tesla",
    model: "Model 3 Long Range",
    year: 2024,
    category: "electric sedan",
    engine: "Dual-Motor Electric",
    hp: 498,
    torque: "487 lb·ft",
    topSpeed: "125 mph",
    zeroToSixty: "4.2s",
    transmission: "Single-Speed",
    drivetrain: "AWD",
    price: 47990,

    images: [
      "images/tesla/Model 3 Long Range.webp"
    ],

    tagline: "The world's most popular EV sedan."
},
{
    id: 159,
    company: "Tesla",
    model: "Model X Plaid",
    year: 2024,
    category: "electric SUV",
    engine: "Tri-Motor Electric",
    hp: 1020,
    torque: "1050 lb·ft",
    topSpeed: "163 mph",
    zeroToSixty: "2.5s",
    transmission: "Single-Speed",
    drivetrain: "AWD",
    price: 94990,

    images: [
      "images/tesla/Model X Plaid.jpg"
    ],

    tagline: "Supercar speed with room for the whole family."
},
{
    id: 160,
    company: "Tesla",
    model: "Model X",
    year: 2024,
    category: "electric SUV",
    engine: "Dual-Motor Electric",
    hp: 670,
    torque: "723 lb·ft",
    topSpeed: "149 mph",
    zeroToSixty: "3.8s",
    transmission: "Single-Speed",
    drivetrain: "AWD",
    price: 84990,

    images: [
      "images/tesla/Model X.jpg"
    ],

    tagline: "Luxury SUV with futuristic Falcon Wing doors."
},
{
    id: 161,
    company: "Tesla",
    model: "Model Y Performance",
    year: 2024,
    category: "electric SUV",
    engine: "Dual-Motor Electric",
    hp: 456,
    torque: "497 lb·ft",
    topSpeed: "155 mph",
    zeroToSixty: "3.5s",
    transmission: "Single-Speed",
    drivetrain: "AWD",
    price: 51990,

    images: [
      "images/tesla/Model Y Performance.jpg"
    ],

    tagline: "The world's best-selling electric SUV."
},
{
    id: 162,
    company: "Tesla",
    model: "Model Y Long Range",
    year: 2024,
    category: "electric SUV",
    engine: "Dual-Motor Electric",
    hp: 384,
    torque: "376 lb·ft",
    topSpeed: "135 mph",
    zeroToSixty: "4.8s",
    transmission: "Single-Speed",
    drivetrain: "AWD",
    price: 44990,

    images: [
      "images/tesla/Model Y Long Range.webp"
    ],

    tagline: "Maximum range. Everyday versatility."
},
{
    id: 163,
    company: "Tesla",
    model: "Cybertruck Cyberbeast",
    year: 2024,
    category: "electric pickup",
    engine: "Tri-Motor Electric",
    hp: 845,
    torque: "10300 lb·ft",
    topSpeed: "130 mph",
    zeroToSixty: "2.6s",
    transmission: "Single-Speed",
    drivetrain: "AWD",
    price: 99990,

    images: [
      "images/tesla/Cybertruck Cyberbeast.avif"
    ],

    tagline: "The future of trucks has arrived."
},
{
    id: 164,
    company: "Tesla",
    model: "Cybertruck AWD",
    year: 2024,
    category: "electric pickup",
    engine: "Dual-Motor Electric",
    hp: 600,
    torque: "7400 lb·ft",
    topSpeed: "112 mph",
    zeroToSixty: "4.1s",
    transmission: "Single-Speed",
    drivetrain: "AWD",
    price: 79990,

    images: [
      "images/tesla/Cybertruck AWD.jpg"
    ],

    tagline: "Utility, innovation, and electric power combined."
},

  {
    id: 165,
    company: "Kia",
    model: "EV6 GT",
    year: 2024,
    category: "electric performance crossover hatchback",
    engine: "Dual Electric Motors",
    hp: 576,
    torque: "545 lb·ft",
    topSpeed: "161 mph",
    zeroToSixty: "3.4s",
    transmission: "Single-Speed",
    drivetrain: "AWD",
    price: 61900,

    images: [
      "images/kia/EV6 GT.jpg"
    ],

    tagline: "Electrifying performance without compromise."
},
{
    id: 166,
    company: "Kia",
    model: "EV9 GT-Line",
    year: 2024,
    category: "electric SUV",
    engine: "Dual Electric Motors",
    hp: 379,
    torque: "516 lb·ft",
    topSpeed: "124 mph",
    zeroToSixty: "5.0s",
    transmission: "Single-Speed",
    drivetrain: "AWD",
    price: 73900,

    images: [
      "images/kia/EV9 GT-Line.jpg"
    ],

    tagline: "The future of family SUVs."
},
{
    id: 167,
    company: "Kia",
    model: "Stinger GT2",
    year: 2023,
    category: "sports sedan",
    engine: "3.3L Twin-Turbo V6",
    hp: 368,
    torque: "376 lb·ft",
    topSpeed: "167 mph",
    zeroToSixty: "4.7s",
    transmission: "8-Speed Auto",
    drivetrain: "AWD",
    price: 54000,

    images: [
      "images/kia/Stinger GT2.jpg"
    ],

    tagline: "Grand touring performance at an attainable price."
},
{
    id: 168,
    company: "Kia",
    model: "K5 GT",
    year: 2024,
    category: "sports sedan",
    engine: "2.5L Turbo Inline-4",
    hp: 290,
    torque: "311 lb·ft",
    topSpeed: "155 mph",
    zeroToSixty: "5.4s",
    transmission: "8-Speed Dual-Clutch",
    drivetrain: "FWD",
    price: 33700,

    images: [
      "images/kia/K5 GT.jpg"
    ],

    tagline: "Aggressive styling meets turbocharged excitement."
},
{
    id: 169,
    company: "Kia",
    model: "Forte GT",
    year: 2024,
    category: "compact sports sedan",
    engine: "1.6L Turbo Inline-4",
    hp: 201,
    torque: "195 lb·ft",
    topSpeed: "135 mph",
    zeroToSixty: "6.7s",
    transmission: "7-Speed Dual-Clutch",
    drivetrain: "FWD",
    price: 25800,

    images: [
      "images/kia/Forte GT.jpg"
    ],

    tagline: "Affordable performance for every day."
},
{
    id: 170,
    company: "Kia",
    model: "Telluride SX Prestige",
    year: 2024,
    category: "SUV",
    engine: "3.8L V6",
    hp: 291,
    torque: "262 lb·ft",
    topSpeed: "132 mph",
    zeroToSixty: "7.0s",
    transmission: "8-Speed Auto",
    drivetrain: "AWD",
    price: 52800,

    images: [
      "images/kia/Telluride SX Prestige.webp"
    ],

    tagline: "The award-winning family SUV."
},
{
    id: 171,
    company: "Kia",
    model: "Sportage X-Pro",
    year: 2024,
    category: "SUV",
    engine: "2.5L Inline-4",
    hp: 187,
    torque: "178 lb·ft",
    topSpeed: "118 mph",
    zeroToSixty: "8.5s",
    transmission: "8-Speed Auto",
    drivetrain: "AWD",
    price: 39200,

    images: [
      "images/kia/Sportage X-Pro.jpg"
    ],

    tagline: "Adventure-ready and family-friendly."
},
{
    id: 172,
    company: "Kia",
    model: "Sorento Hybrid",
    year: 2024,
    category: "hybrid SUV",
    engine: "1.6L Turbo Hybrid",
    hp: 227,
    torque: "258 lb·ft",
    topSpeed: "118 mph",
    zeroToSixty: "7.8s",
    transmission: "6-Speed Auto",
    drivetrain: "AWD",
    price: 38900,

    images: [
      "images/kia/Sorento Hybrid.avif"
    ],

    tagline: "Efficiency meets versatility."
},
{
    id: 173,
    company: "Kia",
    model: "Carnival SX Prestige",
    year: 2024,
    category: "mini van",
    engine: "3.5L V6",
    hp: 290,
    torque: "262 lb·ft",
    topSpeed: "120 mph",
    zeroToSixty: "7.2s",
    transmission: "8-Speed Auto",
    drivetrain: "FWD",
    price: 48400,

    images: [
      "images/kia/Carnival SX Prestige.jpeg"
    ],

    tagline: "Luxury and practicality for modern families."
},
{
    id: 174,
    company: "Kia",
    model: "EV5",
    year: 2025,
    category: "electric SUV",
    engine: "Dual Electric Motors",
    hp: 308,
    torque: "354 lb·ft",
    topSpeed: "115 mph",
    zeroToSixty: "6.1s",
    transmission: "Single-Speed",
    drivetrain: "AWD",
    price: 45000,

    images: [
      "images/kia/EV5.jpg"
    ],

    tagline: "Smart electric mobility for everyone."
},
  {
    id: 1750,
    company: "Kia",
    model: "Carnival",
    year: 2024,
    category: "muv",
    engine: "3.5L V6",
    hp: 290,
    torque: "262 lb·ft",
    topSpeed: "118 mph",
    zeroToSixty: "7.5s",
    transmission: "8-Speed Auto",
    drivetrain: "FWD",
    price: 37475,
   
    images: [
      "images/kia/Carnival.jpg"
    ],
    tagline: "Redefining what a family hauler can be."
  },

  {
    id: 175,
    company: "Koenigsegg",
    model: "Jesko Attack",
    year: 2024,
    category: "hypercar",
    engine: "5.0L Twin-Turbo V8",
    hp: 1280,
    torque: "1106 lb·ft",
    topSpeed: "300+ mph",
    zeroToSixty: "2.5s",
    transmission: "9-Speed Light Speed Transmission",
    drivetrain: "RWD",
    price: 3000000,

    images: [
      "images/koenigsegg/Jesko Attack.jpg"
    ],

    tagline: "Built to dominate the track."
},
{
    id: 176,
    company: "Koenigsegg",
    model: "Jesko Absolut",
    year: 2024,
    category: "hypercar",
    engine: "5.0L Twin-Turbo V8",
    hp: 1600,
    torque: "1106 lb·ft",
    topSpeed: "330+ mph",
    zeroToSixty: "2.5s",
    transmission: "9-Speed Light Speed Transmission",
    drivetrain: "RWD",
    price: 3200000,

    images: [
      "images/koenigsegg/Jesko Absolut.jpg"
    ],

    tagline: "The fastest Koenigsegg ever conceived."
},
{
    id: 177,
    company: "Koenigsegg",
    model: "Gemera",
    year: 2025,
    category: " hypercar mega-GT",
    engine: "5.0L Twin-Turbo V8 Hybrid",
    hp: 2300,
    torque: "2028 lb·ft",
    topSpeed: "249 mph",
    zeroToSixty: "1.9s",
    transmission: "Direct Drive",
    drivetrain: "AWD",
    price: 1700000,

    images: [
      "images/koenigsegg/Gemera.jpg"
    ],

    tagline: "The world's first mega-GT."
},
{
    id: 178,
    company: "Koenigsegg",
    model: "CC850",
    year: 2024,
    category: "hypercar",
    engine: "5.0L Twin-Turbo V8",
    hp: 1385,
    torque: "1017 lb·ft",
    topSpeed: "280 mph",
    zeroToSixty: "2.7s",
    transmission: "9-Speed Manual/Automatic",
    drivetrain: "RWD",
    price: 3700000,

    images: [
      "images/koenigsegg/CC850.jpg"
    ],

    tagline: "A tribute to the legendary CC8S."
},
{
    id: 179,
    company: "Koenigsegg",
    model: "Regera",
    year: 2023,
    category: "hybrid hypercar",
    engine: "5.0L Twin-Turbo V8 Hybrid",
    hp: 1500,
    torque: "1475 lb·ft",
    topSpeed: "255 mph",
    zeroToSixty: "2.8s",
    transmission: "Direct Drive",
    drivetrain: "RWD",
    price: 2000000,

    images: [
      "images/koenigsegg/Regera.jpg"
    ],

    tagline: "Reinventing performance through innovation."
},
{
    id: 180,
    company: "Koenigsegg",
    model: "Agera RS",
    year: 2022,
    category: "hypercar",
    engine: "5.0L Twin-Turbo V8",
    hp: 1341,
    torque: "1011 lb·ft",
    topSpeed: "277.9 mph",
    zeroToSixty: "2.8s",
    transmission: "7-Speed Dual-Clutch",
    drivetrain: "RWD",
    price: 2500000,

    images: [
      "images/koenigsegg/Agera RS.jpg"
    ],

    tagline: "The former world's fastest production car."
},
{
    id: 181,
    company: "Koenigsegg",
    model: "One:1",
    year: 2022,
    category: "megacar hypercar",
    engine: "5.0L Twin-Turbo V8",
    hp: 1341,
    torque: "1011 lb·ft",
    topSpeed: "273 mph",
    zeroToSixty: "2.8s",
    transmission: "7-Speed Dual-Clutch",
    drivetrain: "RWD",
    price: 2850000,

    images: [
      "images/koenigsegg/One.jpg"
    ],

    tagline: "The world's first megacar."
},
{
    id: 182,
    company: "Koenigsegg",
    model: "CCX",
    year: 2021,
    category: "supercar",
    engine: "4.7L Twin-Supercharged V8",
    hp: 806,
    torque: "678 lb·ft",
    topSpeed: "245 mph",
    zeroToSixty: "3.2s",
    transmission: "6-Speed Manual",
    drivetrain: "RWD",
    price: 800000,

    images: [
      "images/koenigsegg/CCX.jpg"
    ],

    tagline: "The car that established a legend."
},
{
    id: 183,
    company: "Koenigsegg",
    model: "CCXR",
    year: 2021,
    category: "supercar",
    engine: "4.8L Twin-Supercharged V8",
    hp: 1018,
    torque: "782 lb·ft",
    topSpeed: "249 mph",
    zeroToSixty: "2.9s",
    transmission: "6-Speed Manual",
    drivetrain: "RWD",
    price: 1200000,

    images: [
      "images/koenigsegg/CCXR.jpg"
    ],

    tagline: "The world's first green hypercar."
},
{
    id: 184,
    company: "Koenigsegg",
    model: "CCR",
    year: 2020,
    category: "supercar",
    engine: "4.7L Supercharged V8",
    hp: 806,
    torque: "678 lb·ft",
    topSpeed: "241 mph",
    zeroToSixty: "3.2s",
    transmission: "6-Speed Manual",
    drivetrain: "RWD",
    price: 700000,

    images: [
      "images/koenigsegg/CCR.jpg"
    ],

    tagline: "The machine that broke speed records."
},

  {
    id: 185,
    company: "Suzuki",
    model: "Swift Sport",
    year: 2024,
    category: "hot hatchback",
    engine: "1.4L Turbo Inline-4",
    hp: 138,
    torque: "170 lb·ft",
    topSpeed: "130 mph",
    zeroToSixty: "7.8s",
    transmission: "6-Speed Manual",
    drivetrain: "FWD",
    price: 25000,

    images: [
      "images/suzuki/Swift Sport.jpg"
    ],

    tagline: "Lightweight fun with sporty character."
},
{
    id: 186,
    company: "Suzuki",
    model: "Swift Hybrid",
    year: 2024,
    category: "hatchback",
    engine: "1.2L Mild Hybrid Inline-3",
    hp: 82,
    torque: "83 lb·ft",
    topSpeed: "106 mph",
    zeroToSixty: "12.5s",
    transmission: "CVT",
    drivetrain: "FWD",
    price: 18000,

    images: [
      "images/suzuki/Swift Hybrid.jpg"
    ],

    tagline: "Compact efficiency for modern cities."
},
{
    id: 187,
    company: "Suzuki",
    model: "Baleno",
    year: 2024,
    category: "hatchback",
    engine: "1.2L DualJet Inline-4",
    hp: 89,
    torque: "83 lb·ft",
    topSpeed: "112 mph",
    zeroToSixty: "11.4s",
    transmission: "CVT",
    drivetrain: "FWD",
    price: 17000,

    images: [
      "images/suzuki/Baleno.jpg"
    ],

    tagline: "Premium hatchback with everyday practicality."
},
{
    id: 188,
    company: "Suzuki",
    model: "Fronx Turbo",
    year: 2024,
    category: "compact SUV",
    engine: "1.0L Turbo BoosterJet",
    hp: 99,
    torque: "108 lb·ft",
    topSpeed: "112 mph",
    zeroToSixty: "10.5s",
    transmission: "6-Speed Auto",
    drivetrain: "FWD",
    price: 16500,

    images: [
      "images/suzuki/Fronx Turbo.jpg"
    ],

    tagline: "Bold crossover styling with turbocharged efficiency."
},
{
    id: 189,
    company: "Suzuki",
    model: "Grand Vitara Hybrid",
    year: 2024,
    category: "SUV",
    engine: "1.5L Strong Hybrid",
    hp: 114,
    torque: "104 lb·ft",
    topSpeed: "106 mph",
    zeroToSixty: "11.0s",
    transmission: "eCVT",
    drivetrain: "AWD",
    price: 23000,

    images: [
      "images/suzuki/Grand Vitara Hybrid.jpg"
    ],

    tagline: "Efficiency and adventure in one package."
},
{
    id: 190,
    company: "Suzuki",
    model: "Jimny 5-Door",
    year: 2024,
    category: "off-road SUV",
    engine: "1.5L Naturally Aspirated Inline-4",
    hp: 103,
    torque: "99 lb·ft",
    topSpeed: "90 mph",
    zeroToSixty: "12.8s",
    transmission: "5-Speed Manual",
    drivetrain: "4WD",
    price: 22000,

    images: [
      "images/suzuki/Jimny 5-Door.webp"
    ],

    tagline: "Small size. Massive off-road capability."
},
{
    id: 191,
    company: "Suzuki",
    model: "Vitara",
    year: 2024,
    category: "SUV",
    engine: "1.4L BoosterJet Turbo",
    hp: 127,
    torque: "173 lb·ft",
    topSpeed: "118 mph",
    zeroToSixty: "9.5s",
    transmission: "6-Speed Auto",
    drivetrain: "AWD",
    price: 26000,

    images: [
      "images/suzuki/Vitara.jpg"
    ],

    tagline: "Versatile SUV built for everyday adventures."
},
{
    id: 192,
    company: "Suzuki",
    model: "S-Cross",
    year: 2024,
    category: "crossover SUV",
    engine: "1.4L BoosterJet Hybrid",
    hp: 127,
    torque: "173 lb·ft",
    topSpeed: "121 mph",
    zeroToSixty: "9.7s",
    transmission: "6-Speed Auto",
    drivetrain: "AWD",
    price: 28000,

    images: [
      "images/suzuki/S-Cross.jpg"
    ],

    tagline: "Comfort, efficiency, and all-weather confidence."
},
{
    id: 193,
    company: "Suzuki",
    model: "Ertiga",
    year: 2024,
    category: "MUV",
    engine: "1.5L Smart Hybrid",
    hp: 102,
    torque: "101 lb·ft",
    topSpeed: "105 mph",
    zeroToSixty: "12.2s",
    transmission: "6-Speed Auto",
    drivetrain: "FWD",
    price: 16000,

    images: [
      "images/suzuki/Ertiga.jpg"
    ],

    tagline: "Practical mobility for growing families."
},
{
    id: 194,
    company: "Suzuki",
    model: "XL6",
    year: 2024,
    category: "premium MUV",
    engine: "1.5L Smart Hybrid",
    hp: 102,
    torque: "101 lb·ft",
    topSpeed: "105 mph",
    zeroToSixty: "12.0s",
    transmission: "6-Speed Auto",
    drivetrain: "FWD",
    price: 19000,

    images: [
      "images/suzuki/XL6.jpg"
    ],

    tagline: "Premium comfort with six-seat versatility."
},

  {
    id: 195,
    company: "Aston Martin",
    model: "DB12",
    year: 2024,
    category: "sports sedan",
    engine: "4.0L Twin-Turbo V8",
    hp: 671,
    torque: "590 lb·ft",
    topSpeed: "202 mph",
    zeroToSixty: "3.5s",
    transmission: "8-Speed Auto",
    drivetrain: "RWD",
    price: 245000,

    images: [
      "images/aston martin/DB12.jpg"
    ],

    tagline: "The world's first super tourer."
},
{
    id: 196,
    company: "Aston Martin",
    model: "Vantage",
    year: 2024,
    category: "sports car",
    engine: "4.0L Twin-Turbo V8",
    hp: 656,
    torque: "590 lb·ft",
    topSpeed: "202 mph",
    zeroToSixty: "3.4s",
    transmission: "8-Speed Auto",
    drivetrain: "RWD",
    price: 191000,

    images: [
      "images/aston martin/Vantage.jpg"
    ],

    tagline: "Pure sports car performance."
},
{
    id: 197,
    company: "Aston Martin",
    model: "Vanquish",
    year: 2025,
    category: "super GT supercar",
    engine: "5.2L Twin-Turbo V12",
    hp: 824,
    torque: "738 lb·ft",
    topSpeed: "214 mph",
    zeroToSixty: "3.2s",
    transmission: "8-Speed Auto",
    drivetrain: "RWD",
    price: 430000,

    images: [
      "images/aston martin/Vanquish.avif"
    ],

    tagline: "The return of a legendary name."
},
{
    id: 198,
    company: "Aston Martin",
    model: "DBX707",
    year: 2024,
    category: "performance SUV",
    engine: "4.0L Twin-Turbo V8",
    hp: 697,
    torque: "664 lb·ft",
    topSpeed: "193 mph",
    zeroToSixty: "3.1s",
    transmission: "9-Speed Auto",
    drivetrain: "AWD",
    price: 245000,

    images: [
      "images/aston martin/DBX707.webp"
    ],

    tagline: "The supercar of luxury SUVs."
},
{
    id: 199,
    company: "Aston Martin",
    model: "Valhalla",
    year: 2025,
    category: "hybrid supercar",
    engine: "4.0L Twin-Turbo V8 Hybrid",
    hp: 1064,
    torque: "811 lb·ft",
    topSpeed: "217 mph",
    zeroToSixty: "2.5s",
    transmission: "8-Speed Dual-Clutch",
    drivetrain: "AWD",
    price: 850000,

    images: [
      "images/aston martin/Valhalla.jpg"
    ],

    tagline: "Formula 1 technology for the road."
},
{
    id: 200,
    company: "Aston Martin",
    model: "Valkyrie",
    year: 2024,
    category: "hypercar",
    engine: "6.5L Naturally Aspirated V12 Hybrid",
    hp: 1160,
    torque: "664 lb·ft",
    topSpeed: "250 mph",
    zeroToSixty: "2.5s",
    transmission: "7-Speed Sequential",
    drivetrain: "RWD",
    price: 3200000,

    images: [
      "images/aston martin/Valkyrie.webp"
    ],

    tagline: "The closest thing to an F1 car on the road."
},
{
    id: 201,
    company: "Aston Martin",
    model: "Valkyrie AMR Pro",
    year: 2024,
    category: "track hypercar",
    engine: "6.5L Naturally Aspirated V12",
    hp: 1000,
    torque: "546 lb·ft",
    topSpeed: "225 mph",
    zeroToSixty: "2.5s",
    transmission: "7-Speed Sequential",
    drivetrain: "RWD",
    price: 4000000,

    images: [
      "images/aston martin/Valkyrie AMR Pro.jpg"
    ],

    tagline: "Track-only performance without limits."
},
{
    id: 202,
    company: "Aston Martin",
    model: "DBS 770 Ultimate",
    year: 2024,
    category: "super GT supercar",
    engine: "5.2L Twin-Turbo V12",
    hp: 759,
    torque: "664 lb·ft",
    topSpeed: "211 mph",
    zeroToSixty: "3.2s",
    transmission: "8-Speed Auto",
    drivetrain: "RWD",
    price: 390000,

    images: [
      "images/aston martin/DBS 770 Ultimate.avif"
    ],

    tagline: "The ultimate expression of the DBS."
},
{
    id: 203,
    company: "Aston Martin",
    model: "DB11 V8",
    year: 2023,
    category: "sports sedan",
    engine: "4.0L Twin-Turbo V8",
    hp: 528,
    torque: "513 lb·ft",
    topSpeed: "192 mph",
    zeroToSixty: "3.9s",
    transmission: "8-Speed Auto",
    drivetrain: "RWD",
    price: 220000,

    images: [
      "images/aston martin/DB11 V8.jpg"
    ],

    tagline: "Timeless British grand touring."
},
{
    id: 204,
    company: "Aston Martin",
    model: "Rapide S",
    year: 2022,
    category: "luxury sports sedan",
    engine: "6.0L Naturally Aspirated V12",
    hp: 552,
    torque: "465 lb·ft",
    topSpeed: "203 mph",
    zeroToSixty: "4.2s",
    transmission: "8-Speed Auto",
    drivetrain: "RWD",
    price: 210000,

    images: [
      "images/aston martin/Rapide S.jpg"
    ],

    tagline: "Four doors. Pure Aston Martin."
},
  {
    id: 205,
    company: "Aston Martin",
    model: "Vantage F1 Edition",
    year: 2024,
    category: "sports",
    engine: "4.0L V8 Twin-Turbo",
    hp: 503,
    torque: "505 lb·ft",
    topSpeed: "195 mph",
    zeroToSixty: "3.6s",
    transmission: "8-Speed ZF Auto",
    drivetrain: "RWD",
    price: 189086,
    
    images: [
      "images/aston martin/Vantage F1 Edition.jpg"
    ],
    tagline: "Beauty with a bite. The soul of Aston Martin."
  }
];

/* ─── Hero carousel images ─── */
const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&q=85",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=85",
  "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&q=85",
  "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=1200&q=85",
  "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=1200&q=85",
  "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=1200&q=85",
  "https://images.unsplash.com/photo-1580414057403-c5f451f30e1c?w=1200&q=85",
  "https://images.unsplash.com/photo-1612825173281-9a193378527e?w=1200&q=85",
];

/* ═══════════════════════════════════════════════════════════
   2. STATE
   ═══════════════════════════════════════════════════════════ */
let currentFilter = 'all';
let currentSearch = '';
let currentSort = 'default';
let visibleCount = 9;         // how many cards shown
const PAGE_SIZE = 6;
let filteredCars = [...CAR_DATA];
let currentModalCar = null;
let currentImgIdx = 0;

/* ═══════════════════════════════════════════════════════════
   3. HELPERS
   ═══════════════════════════════════════════════════════════ */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
function getColorSearchLink(car) {
  return `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(
    car.company + ' ' + car.model + ' all colors'
  )}`;
}

function formatPrice(n) {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K`;
  return `$${n}`;
}

function formatPriceFull(n) {
  return '$' + n.toLocaleString('en-US');
}

function categoryLabel(cat) {
  const map = { sedan: 'Sedan', suv: 'SUV', hatchback: 'Hatchback', muv: 'MUV / MPV', sports: 'Sports Car', supercar: 'Super Car', hypercar: 'Hyper Car' };
  return map[cat] || cat;
}

/* ═══════════════════════════════════════════════════════════
   4. LOADER
   ═══════════════════════════════════════════════════════════ */
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = $('#loader');
    loader.classList.add('hidden');
    document.body.style.overflow = '';
  }, 2000);
});

document.body.style.overflow = 'hidden'; // prevent scroll while loading

/* ═══════════════════════════════════════════════════════════
   5. HERO CAROUSEL
   ═══════════════════════════════════════════════════════════ */
function buildCarousel() {
  const track = $('#carouselTrack');
  if (!track) return;

  // Duplicate for seamless loop
  const allImgs = [...HERO_IMAGES, ...HERO_IMAGES];
  allImgs.forEach(src => {
    const slide = document.createElement('div');
    slide.className = 'carousel-slide';
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Premium car';
    img.loading = 'lazy';
    slide.appendChild(img);
    track.appendChild(slide);
  });
}

/* ═══════════════════════════════════════════════════════════
   6. NAVBAR
   ═══════════════════════════════════════════════════════════ */
function initNavbar() {
  const navbar = $('#navbar');
  const hamburger = $('#hamburger');
  const navMenu = $('#navMenu');

  // Scroll → add .scrolled class
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    updateActiveNavLink();
  }, { passive: true });

  // Hamburger toggle
  hamburger.addEventListener('click', () => {
    const open = navMenu.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open);
  });

  // Close menu on link click
  $$('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // Footer quick-category links
  $$('[data-goto]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      const cat = el.getAttribute('data-goto');
      document.querySelector('#cars').scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => setFilter(cat), 400);
    });
  });
}

function updateActiveNavLink() {
  const sections = $$('section[id]');
  const scrollY = window.scrollY + 100;

  sections.forEach(sec => {
    const top = sec.offsetTop;
    const bottom = top + sec.offsetHeight;
    const id = sec.getAttribute('id');
    const link = $(`.nav-link[data-section="${id}"]`);
    if (link) link.classList.toggle('active', scrollY >= top && scrollY < bottom);
  });
}

/* ═══════════════════════════════════════════════════════════
   7. THEME TOGGLE
   ═══════════════════════════════════════════════════════════ */
function initTheme() {
  const btn = $('#themeToggle');
  const icon = $('#themeIcon');
  const saved = localStorage.getItem('av-theme') || 'dark';
  setTheme(saved);

  btn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
  });

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('av-theme', theme);
    icon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
  }
}

/* ═══════════════════════════════════════════════════════════
   8. CARS — FILTER / SEARCH / SORT
   ═══════════════════════════════════════════════════════════ */
function applyFiltersAndSort() {
  let cars = [...CAR_DATA];

  // Category filter
  if (currentFilter !== 'all') {
    cars = cars.filter(c => c.category.toLowerCase().includes(currentFilter));
  }

  // Search
  if (currentSearch.trim()) {
    const q = currentSearch.trim().toLowerCase();
    cars = cars.filter(c =>
      c.model.toLowerCase().includes(q) ||
      c.company.toLowerCase().includes(q) ||
      c.category.toLowerCase().includes(q)
    );
  }

  // Sort
  switch (currentSort) {
    case 'price-asc': cars.sort((a, b) => a.price - b.price); break;
    case 'price-desc': cars.sort((a, b) => b.price - a.price); break;
    case 'hp-desc': cars.sort((a, b) => b.hp - a.hp); break;
    case 'year-desc': cars.sort((a, b) => b.year - a.year); break;
    case 'name-asc': cars.sort((a, b) => a.model.localeCompare(b.model)); break;
    default: cars.sort(() => Math.random() - 0.5); break; // shuffle for "random"
  }

  filteredCars = cars;
  visibleCount = PAGE_SIZE + 3; // reset pagination
  renderCards();
}

function setFilter(cat) {
  currentFilter = cat;
  $$('.filter-btn').forEach(btn => {
    const active = btn.getAttribute('data-filter') === cat;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', active);
  });
  applyFiltersAndSort();
}

function renderCards() {
  const grid = $('#carsGrid');
  const noResults = $('#noResults');
  const lmWrap = $('#loadMoreWrap');
  const countEl = $('#resultsCount');

  grid.innerHTML = '';

  if (filteredCars.length === 0) {
    noResults.classList.remove('hidden');
    lmWrap.classList.add('hidden');
    countEl.textContent = '0 cars found';
    return;
  }

  noResults.classList.add('hidden');
  const toShow = filteredCars.slice(0, visibleCount);
  countEl.textContent = `${filteredCars.length} car${filteredCars.length !== 1 ? 's' : ''} found`;

  toShow.forEach((car, i) => {
    const card = buildCarCard(car, i);
    grid.appendChild(card);
  });

  // Load more button
  if (visibleCount >= filteredCars.length) {
    lmWrap.classList.add('hidden');
  } else {
    lmWrap.classList.remove('hidden');
  }
}

function buildCarCard(car, i) {
  const card = document.createElement('article');
  card.className = 'car-card';
  card.setAttribute('role', 'listitem');
  card.style.animationDelay = `${i * 60}ms`;

  const safeColors = car.colors || ["#000000", "#ffffff", "#c0c0c0"];
  const safeColorNames = car.colorNames || ["Black", "White", "Silver"];

  const colorDots = '';

  card.innerHTML = `
    <span class="card-badge">${categoryLabel(car.category)}</span>

    <div class="card-img-wrap">
      <img src="${car.images[0]}"
           alt="${car.company} ${car.model}"
           loading="lazy"
           width="800" height="450" />
    </div>

    <div class="card-body">
      <p class="card-company">${car.company}</p>
      <h3 class="card-model">${car.model}</h3>
      <p class="card-year">${car.year} · ${car.engine}</p>

      <div class="card-specs">
        <div class="spec">
          <span class="spec-val">${car.hp}</span>
          <span class="spec-lbl">HP</span>
        </div>
        <div class="spec">
          <span class="spec-val">${car.zeroToSixty}</span>
          <span class="spec-lbl">0–60</span>
        </div>
        <div class="spec">
          <span class="spec-val">${car.topSpeed}</span>
          <span class="spec-lbl">Top Speed</span>
        </div>
      </div>

      <div class="card-footer">
  <div>
    <div class="card-price">${formatPrice(car.price)}</div>
    <div class="card-price-lbl">Starting Price</div>
  </div>

  <a href="${car.link || getColorSearchLink(car)}"
   target="_blank"
   rel="noopener noreferrer"
   class="card-detail-btn">
   View Colors
  </a>
</div>
    </div>
  `;

  // Color dot click → swap image
  const img = card.querySelector('.card-img-wrap img');
  card.querySelectorAll('.color-dot').forEach((dot, idx) => {
    dot.addEventListener('click', e => {
      e.stopPropagation();
      card.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
      // Cycle through available images (wrap around)
      const imgIdx = idx % car.images.length;
      img.style.opacity = '0';
      setTimeout(() => {
        img.src = car.images[imgIdx];
        img.style.opacity = '1';
      }, 250);
    });
  });

  // Open modal
  card.addEventListener('click', () => openModal(car));
card.querySelector('.card-detail-btn').addEventListener('click', e => {
  e.stopPropagation();
});

  // Keyboard
  card.setAttribute('tabindex', '0');
  card.addEventListener('keydown', e => { if (e.key === 'Enter') openModal(car); });

  return card;
}

/* ═══════════════════════════════════════════════════════════
   9. SEARCH INPUT
   ═══════════════════════════════════════════════════════════ */
function initSearch() {
  const input = $('#searchInput');
  const clearBtn = $('#searchClear');

  input.addEventListener('input', () => {
    currentSearch = input.value;
    clearBtn.classList.toggle('hidden', !currentSearch);
    applyFiltersAndSort();
  });

  clearBtn.addEventListener('click', () => {
    input.value = '';
    currentSearch = '';
    clearBtn.classList.add('hidden');
    applyFiltersAndSort();
    input.focus();
  });
}

/* ═══════════════════════════════════════════════════════════
   10. SORT SELECT
   ═══════════════════════════════════════════════════════════ */
function initSort() {
  const sel = $('#sortSelect');
  sel.addEventListener('change', () => {
    currentSort = sel.value;
    applyFiltersAndSort();
  });
}

/* ═══════════════════════════════════════════════════════════
   11. FILTER BUTTONS
   ═══════════════════════════════════════════════════════════ */
function initFilterButtons() {
  $$('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => setFilter(btn.getAttribute('data-filter')));
  });
}

/* ═══════════════════════════════════════════════════════════
   12. LOAD MORE
   ═══════════════════════════════════════════════════════════ */
function initLoadMore() {
  $('#loadMoreBtn').addEventListener('click', () => {
    $('#loadMoreBtn').textContent = 'Loading...';

    setTimeout(() => {
      visibleCount = filteredCars.length; // show all filtered cars
      renderCards();

      $('#loadMoreBtn').style.display = 'none';
    }, 50);
  });

  $('#resetBtn').addEventListener('click', () => {
    currentFilter = 'all';
    currentSearch = '';
    currentSort = 'default';
    $('#searchInput').value = '';
    $('#searchClear').classList.add('hidden');
    $('#sortSelect').value = 'default';
    $$('.filter-btn').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-filter') === 'all');
      b.setAttribute('aria-pressed', b.getAttribute('data-filter') === 'all');
    });
    applyFiltersAndSort();
  });
}

/* ═══════════════════════════════════════════════════════════
   13. MODAL
   ═══════════════════════════════════════════════════════════ */
function openModal(car) {
  currentModalCar = car;
  currentImgIdx = 0;

  const overlay = $('#modalOverlay');
  const modalBody = $('#modalBody');

  const thumbs = car.images.map((src, i) => `
    <div class="modal-thumb ${i === 0 ? 'active' : ''}" data-idx="${i}" role="button" tabindex="0" aria-label="Image ${i + 1}">
      <img src="${src}" alt="${car.company} ${car.model} view ${i + 1}" loading="lazy" />
    </div>
  `).join('');

  const specsList = [
    { val: car.engine, lbl: 'Engine' },
    { val: car.hp + ' HP', lbl: 'Power' },
    { val: car.torque, lbl: 'Torque' },
    { val: car.topSpeed, lbl: 'Top Speed' },
    { val: car.zeroToSixty, lbl: '0–60 mph' },
    { val: car.transmission, lbl: 'Transmission' },
    { val: car.drivetrain, lbl: 'Drivetrain' },
    { val: car.year, lbl: 'Year' },
  ];

  const specsHtml = specsList.map(s => `
    <div class="modal-spec">
      <span class="modal-spec-val">${s.val}</span>
      <span class="modal-spec-lbl">${s.lbl}</span>
    </div>
  `).join('');

  const safeColors = car.colors || ["#000000", "#ffffff", "#c0c0c0"];
  const safeColorNames = car.colorNames || ["Black", "White", "Silver"];

  const colorDots = safeColors.map((c, i) => `
    <div class="modal-color-dot ${i === 0 ? 'active' : ''}"
         style="background:${c}"
         data-idx="${i}"
         title="${safeColorNames[i]}"
         role="button" tabindex="0"
         aria-label="${safeColorNames[i]}"
  
    </div>
  `).join('');

  modalBody.innerHTML = `
    <div class="modal-gallery">
      <img id="modalMainImg" src="${car.images[0]}" alt="${car.company} ${car.model}" />

    </div>
    <div class="modal-info">
      <div class="modal-header">
        <p class="modal-company">${car.company} · ${categoryLabel(car.category)}</p>
        <h2 class="modal-name">${car.model}</h2>
        <p class="modal-tagline">${car.tagline}</p>
      </div>

      <div class="modal-specs-grid">${specsHtml}</div>

      <div class="modal-price-row">
        <div>
          <div class="modal-price">${formatPriceFull(car.price)}</div>
          <div class="modal-price-note">Starting MSRP (USD)</div>
        </div>
        <a href="#contact" class="btn-primary" onclick="closeModal()">
          Get Notified <i class="fas fa-bell"></i>
        </a>
      </div>
    </div>
  `;

  // Thumb click

  // Color dot click in modal
  modalBody.querySelectorAll('.modal-color-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.dataset.idx);
      modalBody.querySelectorAll('.modal-color-dot').forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
      const imgIdx = idx % car.images.length;
      switchModalImage(imgIdx);
    });
  });

  overlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  // Focus trap
  setTimeout(() => $('#modalClose').focus(), 100);
}

function switchModalImage(idx) {
  currentImgIdx = idx;
  const mainImg = $('#modalMainImg');
  mainImg.style.opacity = '0';
  setTimeout(() => {
    mainImg.src = currentModalCar.images[idx] || currentModalCar.images[0];
    mainImg.style.opacity = '1';
  }, 200);

  $$('.modal-thumb').forEach(t => {
    t.classList.toggle('active', parseInt(t.dataset.idx) === idx);
  });
}

function closeModal() {
  const overlay = $('#modalOverlay');
  overlay.classList.add('hidden');
  document.body.style.overflow = '';
  currentModalCar = null;
}

function initModal() {
  $('#modalClose').addEventListener('click', closeModal);
  $('#modalOverlay').addEventListener('click', e => {
    if (e.target === $('#modalOverlay')) closeModal();
  });

  // ESC key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
}

/* ═══════════════════════════════════════════════════════════
   14. NEWSLETTER FORM
   ═══════════════════════════════════════════════════════════ */
function initNewsletterForm() {
  const form = $('#ctaForm');
  const note = $('#ctaNote');
  const input = $('#ctaEmail');

  form.addEventListener('submit', e => {
    e.preventDefault();
    const email = input.value.trim();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      note.style.color = '#e74c3c';
      note.textContent = '⚠ Please enter a valid email address.';
      return;
    }

    const btn = form.querySelector('.btn-primary');
    btn.innerHTML = '<span>Subscribing…</span> <i class="fas fa-spinner fa-spin"></i>';
    btn.disabled = true;

    setTimeout(() => {
      note.style.color = '#2ecc71';
      note.textContent = '✓ You\'re subscribed! Welcome to AutoVerse.';
      input.value = '';
      btn.innerHTML = '<span>Subscribe</span> <i class="fas fa-paper-plane"></i>';
      btn.disabled = false;

      setTimeout(() => { note.textContent = ''; }, 5000);
    }, 1500);
  });
}

/* ═══════════════════════════════════════════════════════════
   15. SCROLL REVEAL (Intersection Observer)
   ═══════════════════════════════════════════════════════════ */
function initScrollReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  $$('.reveal-up, .reveal-left, .reveal-right').forEach(el => obs.observe(el));
}

/* ═══════════════════════════════════════════════════════════
   16. COUNTER ANIMATION
   ═══════════════════════════════════════════════════════════ */
function initCounters() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  $$('.counter').forEach(el => obs.observe(el));
}

function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-target'));
  const decimal = el.hasAttribute('data-decimal');
  const duration = 1800;
  const start = performance.now();

  function step(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = target * eased;

    el.textContent = decimal
      ? (current / 10).toFixed(1)
      : Math.round(current).toLocaleString();

    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

/* ═══════════════════════════════════════════════════════════
   17. SMOOTH SCROLL FOR ALL ANCHOR LINKS
   ═══════════════════════════════════════════════════════════ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ═══════════════════════════════════════════════════════════
   18. "EXPLORE CARS" CTA BUTTON IN HERO
   ═══════════════════════════════════════════════════════════ */
function initHeroCTA() {
  document.querySelectorAll('a[href="#cars"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector('#cars').scrollIntoView({ behavior: 'smooth' });
    });
  });
}

/* ═══════════════════════════════════════════════════════════
   19. INIT — run everything
   ═══════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  buildCarousel();
  initNavbar();
  initTheme();
  initSearch();
  initSort();
  initFilterButtons();
  initLoadMore();
  initModal();
  initNewsletterForm();
  initScrollReveal();
  initCounters();
  initSmoothScroll();
  initHeroCTA();

  // Initial render (shuffled)
  applyFiltersAndSort();

  console.log('%c🚗 AutoVerse Loaded', 'color:#C9A84C;font-size:1.2rem;font-weight:bold;');
});
