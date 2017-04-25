export interface Cars {
  	name: string,
    economy_mpg: any,
    cylinders: number,
    displacement_cc: number,
    power_hp: number,
    weight_lb: number,
    mph60_s: number,
    year: number
}

export const Cars: Cars[] = [
  {name: "AMC Ambassador Brougham",economy_mpg: 13,cylinders: 8,displacement_cc: 360,power_hp: 175,weight_lb: 3821,mph60_s: 11,year: 73},
  {name: "AMC Ambassador DPL",economy_mpg: 15,cylinders: 8,displacement_cc: 390,power_hp: 190,weight_lb: 3850, mph60_s: 8.5,year: 70},
  {name: "AMC Ambassador SST",economy_mpg: 17,cylinders: 8,displacement_cc: 304,power_hp: 150,weight_lb: 3672,mph60_s: 11.5,year: 72},
  {name: "AMC Concord DL 6",    economy_mpg: 20.2,    cylinders: 6,    displacement_cc: 232,    power_hp: 90,    weight_lb: 3265,    mph60_s: 18.2,    year: 79  },  
  {name: "AMC Concord DL",    economy_mpg: 18.1,    cylinders: 6,    displacement_cc: 258,    power_hp: 120,    weight_lb: 3410,    mph60_s: 15.1,    year: 78  },
  {name: "AMC Concord DL",    economy_mpg: 23,    cylinders: 4,    displacement_cc: 151,    power_hp: 90,    weight_lb: 3035,    mph60_s: 20.5,    year: 82  },
  {name: "AMC Concord",    economy_mpg: 19.4,    cylinders: 6,    displacement_cc: 232,    power_hp: 90,    weight_lb: 3210,    mph60_s: 17.2,    year: 78  },
  {name: "AMC Concord", economy_mpg: 24.3,    cylinders: 4,    displacement_cc: 151,    power_hp: 90,    weight_lb: 3003,    mph60_s: 20.1,    year: 80  },
  {name: "AMC Gremlin",    economy_mpg: 18,    cylinders: 6,    displacement_cc: 232,    power_hp: 100,    weight_lb: 2789,    mph60_s: 15,    year: 73  },
  {name: "AMC Gremlin",    economy_mpg: 19,    cylinders: 6,    displacement_cc: 232,    power_hp: 100,    weight_lb: 2634,    mph60_s: 13,    year: 71  },
  // {
  //   name: "AMC Gremlin",
  //   economy_mpg: 20,
  //   cylinders: 6,
  //   displacement_cc: 232,
  //   power_hp: 100,
  //   weight_lb: 2914,
  //   mph60_s: 16,
  //   year: 75
  // },
  // {
  //   name: "AMC Gremlin",
  //   economy_mpg: 21,
  //   cylinders: 6,
  //   displacement_cc: 199,
  //   power_hp: 90,
  //   weight_lb: 2648,
  //   mph60_s: 15,
  //   year: 70
  // },
  // {
  //   name: "AMC Hornet Sportabout (Wagon)",
  //   economy_mpg: 18,
  //   cylinders: 6,
  //   displacement_cc: 258,
  //   power_hp: 110,
  //   weight_lb: 2962,
  //   mph60_s: 13.5,
  //   year: 71
  // },
  // {
  //   name: "AMC Hornet",
  //   economy_mpg: 18,
  //   cylinders: 6,
  //   displacement_cc: 199,
  //   power_hp: 97,
  //   weight_lb: 2774,
  //   mph60_s: 15.5,
  //   year: 70
  // },
  // {
  //   name: "AMC Hornet",
  //   economy_mpg: 18,
  //   cylinders: 6,
  //   displacement_cc: 232,
  //   power_hp: 100,
  //   weight_lb: 2945,
  //   mph60_s: 16,
  //   year: 73
  // },
  // {
  //   name: "AMC Hornet",
  //   economy_mpg: 19,
  //   cylinders: 6,
  //   displacement_cc: 232,
  //   power_hp: 100,
  //   weight_lb: 2901,
  //   mph60_s: 16,
  //   year: 74
  // },
  // {
  //   name: "AMC Hornet",
  //   economy_mpg: 22.5,
  //   cylinders: 6,
  //   displacement_cc: 232,
  //   power_hp: 90,
  //   weight_lb: 3085,
  //   mph60_s: 17.6,
  //   year: 76
  // },
  // {
  //   name: "AMC Matador (Wagon)",
  //   economy_mpg: 14,
  //   cylinders: 8,
  //   displacement_cc: 304,
  //   power_hp: 150,
  //   weight_lb: 4257,
  //   mph60_s: 15.5,
  //   year: 74
  // },
  // {
  //   name: "AMC Matador (Wagon)",
  //   economy_mpg: 15,
  //   cylinders: 8,
  //   displacement_cc: 304,
  //   power_hp: 150,
  //   weight_lb: 3892,
  //   mph60_s: 12.5,
  //   year: 72
  // },
  // {
  //   name: "AMC Matador",
  //   economy_mpg: 14,
  //   cylinders: 8,
  //   displacement_cc: 304,
  //   power_hp: 150,
  //   weight_lb: 3672,
  //   mph60_s: 11.5,
  //   year: 73
  // },
  // {
  //   name: "AMC Matador",
  //   economy_mpg: 15,
  //   cylinders: 6,
  //   displacement_cc: 258,
  //   power_hp: 110,
  //   weight_lb: 3730,
  //   mph60_s: 19,
  //   year: 75
  // },
  // {
  //   name: "AMC Matador",
  //   economy_mpg: 15.5,
  //   cylinders: 8,
  //   displacement_cc: 304,
  //   power_hp: 120,
  //   weight_lb: 3962,
  //   mph60_s: 13.9,
  //   year: 76
  // },
  // {
  //   name: "AMC Matador",
  //   economy_mpg: 16,
  //   cylinders: 6,
  //   displacement_cc: 258,
  //   power_hp: 110,
  //   weight_lb: 3632,
  //   mph60_s: 18,
  //   year: 74
  // },
  // {
  //   name: "AMC Matador",
  //   economy_mpg: 18,
  //   cylinders: 6,
  //   displacement_cc: 232,
  //   power_hp: 100,
  //   weight_lb: 3288,
  //   mph60_s: 15.5,
  //   year: 71
  // },
  // {
  //   name: "AMC Pacer D/L",
  //   economy_mpg: 17.5,
  //   cylinders: 6,
  //   displacement_cc: 258,
  //   power_hp: 95,
  //   weight_lb: 3193,
  //   mph60_s: 17.8,
  //   year: 76
  // },
  // {
  //   name: "AMC Pacer",
  //   economy_mpg: 19,
  //   cylinders: 6,
  //   displacement_cc: 232,
  //   power_hp: 90,
  //   weight_lb: 3211,
  //   mph60_s: 17,
  //   year: 75
  // },
  // {
  //   name: "AMC Rebel SST (Wagon)",
  //   economy_mpg: "",
  //   cylinders: 8,
  //   displacement_cc: 360,
  //   power_hp: 175,
  //   weight_lb: 3850,
  //   mph60_s: 11,
  //   year: 70
  // },
  // {
  //   name: "AMC Rebel SST",
  //   economy_mpg: 16,
  //   cylinders: 8,
  //   displacement_cc: 304,
  //   power_hp: 150,
  //   weight_lb: 3433,
  //   mph60_s: 12,
  //   year: 70
  // },
  // {
  //   name: "AMC Spirit DL",
  //   economy_mpg: 27.4,
  //   cylinders: 4,
  //   displacement_cc: 121,
  //   power_hp: 80,
  //   weight_lb: 2670,
  //   mph60_s: 15,
  //   year: 79
  // },
  // {
  //   name: "Audi 100 LS",
  //   economy_mpg: 20,
  //   cylinders: 4,
  //   displacement_cc: 114,
  //   power_hp: 91,
  //   weight_lb: 2582,
  //   mph60_s: 14,
  //   year: 73
  // },
  // {
  //   name: "Audi 100 LS",
  //   economy_mpg: 23,
  //   cylinders: 4,
  //   displacement_cc: 115,
  //   power_hp: 95,
  //   weight_lb: 2694,
  //   mph60_s: 15,
  //   year: 75
  // },
  // {
  //   name: "Audi 100 LS",
  //   economy_mpg: 24,
  //   cylinders: 4,
  //   displacement_cc: 107,
  //   power_hp: 90,
  //   weight_lb: 2430,
  //   mph60_s: 14.5,
  //   year: 70
  // },
  // {
  //   name: "Audi 4000",
  //   economy_mpg: 34.3,
  //   cylinders: 4,
  //   displacement_cc: 97,
  //   power_hp: 78,
  //   weight_lb: 2188,
  //   mph60_s: 15.8,
  //   year: 80
  // },
  // {
  //   name: "Audi 5000",
  //   economy_mpg: 20.3,
  //   cylinders: 5,
  //   displacement_cc: 131,
  //   power_hp: 103,
  //   weight_lb: 2830,
  //   mph60_s: 15.9,
  //   year: 78
  // },
  // {
  //   name: "Audi 5000S (Diesel)",
  //   economy_mpg: 36.4,
  //   cylinders: 5,
  //   displacement_cc: 121,
  //   power_hp: 67,
  //   weight_lb: 2950,
  //   mph60_s: 19.9,
  //   year: 80
  // },
  // {
  //   name: "Audi Fox",
  //   economy_mpg: 29,
  //   cylinders: 4,
  //   displacement_cc: 98,
  //   power_hp: 83,
  //   weight_lb: 2219,
  //   mph60_s: 16.5,
  //   year: 74
  // },
  // {
  //   name: "BMW 2002",
  //   economy_mpg: 26,
  //   cylinders: 4,
  //   displacement_cc: 121,
  //   power_hp: 113,
  //   weight_lb: 2234,
  //   mph60_s: 12.5,
  //   year: 70
  // },
  // {
  //   name: "BMW 320i",
  //   economy_mpg: 21.5,
  //   cylinders: 4,
  //   displacement_cc: 121,
  //   power_hp: 110,
  //   weight_lb: 2600,
  //   mph60_s: 12.8,
  //   year: 77
  // },
  // {
  //   name: "Buick Century 350",
  //   economy_mpg: 13,
  //   cylinders: 8,
  //   displacement_cc: 350,
  //   power_hp: 175,
  //   weight_lb: 4100,
  //   mph60_s: 13,
  //   year: 73
  // },
  // {
  //   name: "Buick Century Limited",
  //   economy_mpg: 25,
  //   cylinders: 6,
  //   displacement_cc: 181,
  //   power_hp: 110,
  //   weight_lb: 2945,
  //   mph60_s: 16.4,
  //   year: 82
  // },
  // {
  //   name: "Buick Century Luxus (Wagon)",
  //   economy_mpg: 13,
  //   cylinders: 8,
  //   displacement_cc: 350,
  //   power_hp: 150,
  //   weight_lb: 4699,
  //   mph60_s: 14.5,
  //   year: 74
  // },
  // {
  //   name: "Buick Century Special",
  //   economy_mpg: 20.6,
  //   cylinders: 6,
  //   displacement_cc: 231,
  //   power_hp: 105,
  //   weight_lb: 3380,
  //   mph60_s: 15.8,
  //   year: 78
  // },
  // {
  //   name: "Buick Century",
  //   economy_mpg: 17,
  //   cylinders: 6,
  //   displacement_cc: 231,
  //   power_hp: 110,
  //   weight_lb: 3907,
  //   mph60_s: 21,
  //   year: 75
  // },
  // {
  //   name: "Buick Century",
  //   economy_mpg: 22.4,
  //   cylinders: 6,
  //   displacement_cc: 231,
  //   power_hp: 110,
  //   weight_lb: 3415,
  //   mph60_s: 15.8,
  //   year: 81
  // },
  // {
  //   name: "Buick Electra 225 Custom",
  //   economy_mpg: 12,
  //   cylinders: 8,
  //   displacement_cc: 455,
  //   power_hp: 225,
  //   weight_lb: 4951,
  //   mph60_s: 11,
  //   year: 73
  // },
  // {
  //   name: "Buick Estate Wagon (Wagon)",
  //   economy_mpg: 14,
  //   cylinders: 8,
  //   displacement_cc: 455,
  //   power_hp: 225,
  //   weight_lb: 3086,
  //   mph60_s: 10,
  //   year: 70
  // },
  // {
  //   name: "Buick Estate Wagon (Wagon)",
  //   economy_mpg: 16.9,
  //   cylinders: 8,
  //   displacement_cc: 350,
  //   power_hp: 155,
  //   weight_lb: 4360,
  //   mph60_s: 14.9,
  //   year: 79
  // },
  // {
  //   name: "Buick Lesabre Custom",
  //   economy_mpg: 13,
  //   cylinders: 8,
  //   displacement_cc: 350,
  //   power_hp: 155,
  //   weight_lb: 4502,
  //   mph60_s: 13.5,
  //   year: 72
  // },
  // {
  //   name: "Buick Opel Isuzu Deluxe",
  //   economy_mpg: 30,
  //   cylinders: 4,
  //   displacement_cc: 111,
  //   power_hp: 80,
  //   weight_lb: 2155,
  //   mph60_s: 14.8,
  //   year: 77
  // },
  // {
  //   name: "Buick Regal Sport Coupe (Turbo)",
  //   economy_mpg: 17.7,
  //   cylinders: 6,
  //   displacement_cc: 231,
  //   power_hp: 165,
  //   weight_lb: 3445,
  //   mph60_s: 13.4,
  //   year: 78
  // },
  // {
  //   name: "Buick Skyhawk",
  //   economy_mpg: 21,
  //   cylinders: 6,
  //   displacement_cc: 231,
  //   power_hp: 110,
  //   weight_lb: 3039,
  //   mph60_s: 15,
  //   year: 75
  // },
  // {
  //   name: "Buick Skylark 320",
  //   economy_mpg: 15,
  //   cylinders: 8,
  //   displacement_cc: 350,
  //   power_hp: 165,
  //   weight_lb: 3693,
  //   mph60_s: 11.5,
  //   year: 70
  // },
  // {
  //   name: "Buick Skylark Limited",
  //   economy_mpg: 28.4,
  //   cylinders: 4,
  //   displacement_cc: 151,
  //   power_hp: 90,
  //   weight_lb: 2670,
  //   mph60_s: 16,
  //   year: 79
  // },
  // {
  //   name: "Buick Skylark",
  //   economy_mpg: 20.5,
  //   cylinders: 6,
  //   displacement_cc: 231,
  //   power_hp: 105,
  //   weight_lb: 3425,
  //   mph60_s: 16.9,
  //   year: 77
  // },
  // {
  //   name: "Buick Skylark",
  //   economy_mpg: 26.6,
  //   cylinders: 4,
  //   displacement_cc: 151,
  //   power_hp: 84,
  //   weight_lb: 2635,
  //   mph60_s: 16.4,
  //   year: 81
  // },
  // {
  //   name: "Cadillac Eldorado",
  //   economy_mpg: 23,
  //   cylinders: 8,
  //   displacement_cc: 350,
  //   power_hp: 125,
  //   weight_lb: 3900,
  //   mph60_s: 17.4,
  //   year: 79
  // },
  // {
  //   name: "Cadillac Seville",
  //   economy_mpg: 16.5,
  //   cylinders: 8,
  //   displacement_cc: 350,
  //   power_hp: 180,
  //   weight_lb: 4380,
  //   mph60_s: 12.1,
  //   year: 76
  // },
  // {
  //   name: "Chevroelt Chevelle Malibu",
  //   economy_mpg: 16,
  //   cylinders: 6,
  //   displacement_cc: 250,
  //   power_hp: 105,
  //   weight_lb: 3897,
  //   mph60_s: 18.5,
  //   year: 75
  // },
  // {
  //   name: "Chevrolet Bel Air",
  //   economy_mpg: 15,
  //   cylinders: 8,
  //   displacement_cc: 350,
  //   power_hp: 145,
  //   weight_lb: 4440,
  //   mph60_s: 14,
  //   year: 75
  // },
  // {
  //   name: "Chevrolet Camaro",
  //   economy_mpg: 27,
  //   cylinders: 4,
  //   displacement_cc: 151,
  //   power_hp: 90,
  //   weight_lb: 2950,
  //   mph60_s: 17.3,
  //   year: 82
  // },
  // {
  //   name: "Chevrolet Caprice Classic",
  //   economy_mpg: 13,
  //   cylinders: 8,
  //   displacement_cc: 400,
  //   power_hp: 150,
  //   weight_lb: 4464,
  //   mph60_s: 12,
  //   year: 73
  // },
  // {
  //   name: "Chevrolet Caprice Classic",
  //   economy_mpg: 17,
  //   cylinders: 8,
  //   displacement_cc: 305,
  //   power_hp: 130,
  //   weight_lb: 3840,
  //   mph60_s: 15.4,
  //   year: 79
  // },
  // {
  //   name: "Chevrolet Caprice Classic",
  //   economy_mpg: 17.5,
  //   cylinders: 8,
  //   displacement_cc: 305,
  //   power_hp: 145,
  //   weight_lb: 3880,
  //   mph60_s: 12.5,
  //   year: 77
  // },
  // {
  //   name: "Chevrolet Cavalier 2-Door",
  //   economy_mpg: 34,
  //   cylinders: 4,
  //   displacement_cc: 112,
  //   power_hp: 88,
  //   weight_lb: 2395,
  //   mph60_s: 18,
  //   year: 82
  // },
  // {
  //   name: "Chevrolet Cavalier Wagon",
  //   economy_mpg: 27,
  //   cylinders: 4,
  //   displacement_cc: 112,
  //   power_hp: 88,
  //   weight_lb: 2640,
  //   mph60_s: 18.6,
  //   year: 82
  // },
  // {
  //   name: "Chevrolet Cavalier",
  //   economy_mpg: 28,
  //   cylinders: 4,
  //   displacement_cc: 112,
  //   power_hp: 88,
  //   weight_lb: 2605,
  //   mph60_s: 19.6,
  //   year: 82
  // },
  // {
  //   name: "Chevrolet Chevelle Concours (Wagon)",
  //   economy_mpg: "",
  //   cylinders: 8,
  //   displacement_cc: 350,
  //   power_hp: 165,
  //   weight_lb: 4142,
  //   mph60_s: 11.5,
  //   year: 70
  // },
  // {
  //   name: "Chevrolet Chevelle Concours (Wagon)",
  //   economy_mpg: 13,
  //   cylinders: 8,
  //   displacement_cc: 307,
  //   power_hp: 130,
  //   weight_lb: 4098,
  //   mph60_s: 14,
  //   year: 72
  // },
  // {
  //   name: "Chevrolet Chevelle Malibu Classic",
  //   economy_mpg: 16,
  //   cylinders: 6,
  //   displacement_cc: 250,
  //   power_hp: 100,
  //   weight_lb: 3781,
  //   mph60_s: 17,
  //   year: 74
  // },
  // {
  //   name: "Chevrolet Chevelle Malibu Classic",
  //   economy_mpg: 17.5,
  //   cylinders: 8,
  //   displacement_cc: 305,
  //   power_hp: 140,
  //   weight_lb: 4215,
  //   mph60_s: 13,
  //   year: 76
  // },
  // {
  //   name: "Chevrolet Chevelle Malibu",
  //   economy_mpg: 17,
  //   cylinders: 6,
  //   displacement_cc: 250,
  //   power_hp: 100,
  //   weight_lb: 3329,
  //   mph60_s: 15.5,
  //   year: 71
  // },
  // {
  //   name: "Chevrolet Chevelle Malibu",
  //   economy_mpg: 18,
  //   cylinders: 8,
  //   displacement_cc: 307,
  //   power_hp: 130,
  //   weight_lb: 3504,
  //   mph60_s: 12,
  //   year: 70
  // },
  // {
  //   name: "Chevrolet Chevette",
  //   economy_mpg: 29,
  //   cylinders: 4,
  //   displacement_cc: 85,
  //   power_hp: 52,
  //   weight_lb: 2035,
  //   mph60_s: 22.2,
  //   year: 76
  // },
  // {
  //   name: "Chevrolet Chevette",
  //   economy_mpg: 30,
  //   cylinders: 4,
  //   displacement_cc: 98,
  //   power_hp: 68,
  //   weight_lb: 2155,
  //   mph60_s: 16.5,
  //   year: 78
  // },
  // {
  //   name: "Chevrolet Chevette",
  //   economy_mpg: 30.5,
  //   cylinders: 4,
  //   displacement_cc: 98,
  //   power_hp: 63,
  //   weight_lb: 2051,
  //   mph60_s: 17,
  //   year: 77
  // },
  // {
  //   name: "Chevrolet Chevette",
  //   economy_mpg: 32.1,
  //   cylinders: 4,
  //   displacement_cc: 98,
  //   power_hp: 70,
  //   weight_lb: 2120,
  //   mph60_s: 15.5,
  //   year: 80
  // },
  // {
  //   name: "Chevrolet Citation",
  //   economy_mpg: 23.5,
  //   cylinders: 6,
  //   displacement_cc: 173,
  //   power_hp: 110,
  //   weight_lb: 2725,
  //   mph60_s: 12.6,
  //   year: 81
  // },
  // {
  //   name: "Chevrolet Citation",
  //   economy_mpg: 28,
  //   cylinders: 4,
  //   displacement_cc: 151,
  //   power_hp: 90,
  //   weight_lb: 2678,
  //   mph60_s: 16.5,
  //   year: 80
  // },
  // {
  //   name: "Chevrolet Citation",
  //   economy_mpg: 28.8,
  //   cylinders: 6,
  //   displacement_cc: 173,
  //   power_hp: 115,
  //   weight_lb: 2595,
  //   mph60_s: 11.3,
  //   year: 79
  // },
  // {
  //   name: "Chevrolet Concours",
  //   economy_mpg: 17.5,
  //   cylinders: 6,
  //   displacement_cc: 250,
  //   power_hp: 110,
  //   weight_lb: 3520,
  //   mph60_s: 16.4,
  //   year: 77
  // },
  // {
  //   name: "Chevrolet Impala",
  //   economy_mpg: 11,
  //   cylinders: 8,
  //   displacement_cc: 400,
  //   power_hp: 150,
  //   weight_lb: 4997,
  //   mph60_s: 14,
  //   year: 73
  // },
  // {
  //   name: "Chevrolet Impala",
  //   economy_mpg: 13,
  //   cylinders: 8,
  //   displacement_cc: 350,
  //   power_hp: 165,
  //   weight_lb: 4274,
  //   mph60_s: 12,
  //   year: 72
  // },
  // {
  //   name: "Chevrolet Impala",
  //   economy_mpg: 14,
  //   cylinders: 8,
  //   displacement_cc: 350,
  //   power_hp: 165,
  //   weight_lb: 4209,
  //   mph60_s: 12,
  //   year: 71
  // },
  // {
  //   name: "Chevrolet Impala",
  //   economy_mpg: 14,
  //   cylinders: 8,
  //   displacement_cc: 454,
  //   power_hp: 220,
  //   weight_lb: 4354,
  //   mph60_s: 9,
  //   year: 70
  // },
  // {
  //   name: "Chevrolet Malibu Classic (Wagon)",
  //   economy_mpg: 19.2,
  //   cylinders: 8,
  //   displacement_cc: 267,
  //   power_hp: 125,
  //   weight_lb: 3605,
  //   mph60_s: 15,
  //   year: 79
  // },
  // {
  //   name: "Chevrolet Malibu",
  //   economy_mpg: 13,
  //   cylinders: 8,
  //   displacement_cc: 350,
  //   power_hp: 145,
  //   weight_lb: 3988,
  //   mph60_s: 13,
  //   year: 73
  // },
  // {
  //   name: "Chevrolet Malibu",
  //   economy_mpg: 20.5,
  //   cylinders: 6,
  //   displacement_cc: 200,
  //   power_hp: 95,
  //   weight_lb: 3155,
  //   mph60_s: 18.2,
  //   year: 78
  // },
  // {
  //   name: "Chevrolet Monte Carlo Landau",
  //   economy_mpg: 15.5,
  //   cylinders: 8,
  //   displacement_cc: 350,
  //   power_hp: 170,
  //   weight_lb: 4165,
  //   mph60_s: 11.4,
  //   year: 77
  // },
  // {
  //   name: "Chevrolet Monte Carlo Landau",
  //   economy_mpg: 19.2,
  //   cylinders: 8,
  //   displacement_cc: 305,
  //   power_hp: 145,
  //   weight_lb: 3425,
  //   mph60_s: 13.2,
  //   year: 78
  // },
  // {
  //   name: "Chevrolet Monte Carlo S",
  //   economy_mpg: 15,
  //   cylinders: 8,
  //   displacement_cc: 350,
  //   power_hp: 145,
  //   weight_lb: 4082,
  //   mph60_s: 13,
  //   year: 73
  // },
  // {
  //   name: "Chevrolet Monte Carlo",
  //   economy_mpg: 15,
  //   cylinders: 8,
  //   displacement_cc: 400,
  //   power_hp: 150,
  //   weight_lb: 3761,
  //   mph60_s: 9.5,
  //   year: 70
  // },
  // {
  //   name: "Chevrolet Monza 2+2",
  //   economy_mpg: 20,
  //   cylinders: 8,
  //   displacement_cc: 262,
  //   power_hp: 110,
  //   weight_lb: 3221,
  //   mph60_s: 13.5,
  //   year: 75
  // },
  // {
  //   name: "Chevrolet Nova Custom",
  //   economy_mpg: 16,
  //   cylinders: 6,
  //   displacement_cc: 250,
  //   power_hp: 100,
  //   weight_lb: 3278,
  //   mph60_s: 18,
  //   year: 73
  // },
  // {
  //   name: "Chevrolet Nova",
  //   economy_mpg: 15,
  //   cylinders: 6,
  //   displacement_cc: 250,
  //   power_hp: 100,
  //   weight_lb: 3336,
  //   mph60_s: 17,
  //   year: 74
  // },
  // {
  //   name: "Chevrolet Nova",
  //   economy_mpg: 18,
  //   cylinders: 6,
  //   displacement_cc: 250,
  //   power_hp: 105,
  //   weight_lb: 3459,
  //   mph60_s: 16,
  //   year: 75
  // },
  // {
  //   name: "Chevrolet Nova",
  //   economy_mpg: 22,
  //   cylinders: 6,
  //   displacement_cc: 250,
  //   power_hp: 105,
  //   weight_lb: 3353,
  //   mph60_s: 14.5,
  //   year: 76
  // },
  // {
  //   name: "Chevrolet Vega (Wagon)",
  //   economy_mpg: 22,
  //   cylinders: 4,
  //   displacement_cc: 140,
  //   power_hp: 72,
  //   weight_lb: 2408,
  //   mph60_s: 19,
  //   year: 71
  // },
  // {
  //   name: "Chevrolet Vega 2300",
  //   economy_mpg: 28,
  //   cylinders: 4,
  //   displacement_cc: 140,
  //   power_hp: 90,
  //   weight_lb: 2264,
  //   mph60_s: 15.5,
  //   year: 71
  // },
  // {
  //   name: "Chevrolet Vega",
  //   economy_mpg: 20,
  //   cylinders: 4,
  //   displacement_cc: 140,
  //   power_hp: 90,
  //   weight_lb: 2408,
  //   mph60_s: 19.5,
  //   year: 72
  // },
  // {
  //   name: "Chevrolet Vega",
  //   economy_mpg: 21,
  //   cylinders: 4,
  //   displacement_cc: 140,
  //   power_hp: 72,
  //   weight_lb: 2401,
  //   mph60_s: 19.5,
  //   year: 73
  // },
  // {
  //   name: "Chevrolet Vega",
  //   economy_mpg: 25,
  //   cylinders: 4,
  //   displacement_cc: 140,
  //   power_hp: 75,
  //   weight_lb: 2542,
  //   mph60_s: 17,
  //   year: 74
  // },
  // {
  //   name: "Chevrolet Woody",
  //   economy_mpg: 24.5,
  //   cylinders: 4,
  //   displacement_cc: 98,
  //   power_hp: 60,
  //   weight_lb: 2164,
  //   mph60_s: 22.1,
  //   year: 76
  // },
  // {
  //   name: "Chevy C10",
  //   economy_mpg: 13,
  //   cylinders: 8,
  //   displacement_cc: 350,
  //   power_hp: 145,
  //   weight_lb: 4055,
  //   mph60_s: 12,
  //   year: 76
  // },
  // {
  //   name: "Chevy C20",
  //   economy_mpg: 10,
  //   cylinders: 8,
  //   displacement_cc: 307,
  //   power_hp: 200,
  //   weight_lb: 4376,
  //   mph60_s: 15,
  //   year: 70
  // },
  // {
  //   name: "Chevy S-10",
  //   economy_mpg: 31,
  //   cylinders: 4,
  //   displacement_cc: 119,
  //   power_hp: 82,
  //   weight_lb: 2720,
  //   mph60_s: 19.4,
  //   year: 82
  // },
  // {
  //   name: "Chrysler Cordoba",
  //   economy_mpg: 15.5,
  //   cylinders: 8,
  //   displacement_cc: 400,
  //   power_hp: 190,
  //   weight_lb: 4325,
  //   mph60_s: 12.2,
  //   year: 77
  // },
  // {
  //   name: "Chrysler Lebaron Medallion",
  //   economy_mpg: 26,
  //   cylinders: 4,
  //   displacement_cc: 156,
  //   power_hp: 92,
  //   weight_lb: 2585,
  //   mph60_s: 14.5,
  //   year: 82
  // },
  // {
  //   name: "Chrysler Lebaron Salon",
  //   economy_mpg: 17.6,
  //   cylinders: 6,
  //   displacement_cc: 225,
  //   power_hp: 85,
  //   weight_lb: 3465,
  //   mph60_s: 16.6,
  //   year: 81
  // },
  // {
  //   name: "Chrysler Lebaron Town & Country (Wagon)",
  //   economy_mpg: 18.5,
  //   cylinders: 8,
  //   displacement_cc: 360,
  //   power_hp: 150,
  //   weight_lb: 3940,
  //   mph60_s: 13,
  //   year: 79
  // },
  // {
  //   name: "Chrysler New Yorker Brougham",
  //   economy_mpg: 13,
  //   cylinders: 8,
  //   displacement_cc: 440,
  //   power_hp: 215,
  //   weight_lb: 4735,
  //   mph60_s: 11,
  //   year: 73
  // },
  // {
  //   name: "Chrysler Newport Royal",
  //   economy_mpg: 13,
  //   cylinders: 8,
  //   displacement_cc: 400,
  //   power_hp: 190,
  //   weight_lb: 4422,
  //   mph60_s: 12.5,
  //   year: 72
  // },
  // {
  //   name: "Citroen DS-21 Pallas",
  //   economy_mpg: "",
  //   cylinders: 4,
  //   displacement_cc: 133,
  //   power_hp: 115,
  //   weight_lb: 3090,
  //   mph60_s: 17.5,
  //   year: 70
  // },
  // {
  //   name: "Datsun 1200",
  //   economy_mpg: 35,
  //   cylinders: 4,
  //   displacement_cc: 72,
  //   power_hp: 69,
  //   weight_lb: 1613,
  //   mph60_s: 18,
  //   year: 71
  // },
  // {
  //   name: "Datsun 200SX",
  //   economy_mpg: 23.9,
  //   cylinders: 4,
  //   displacement_cc: 119,
  //   power_hp: 97,
  //   weight_lb: 2405,
  //   mph60_s: 14.9,
  //   year: 78
  // },
  // {
  //   name: "Datsun 200SX",
  //   economy_mpg: 32.9,
  //   cylinders: 4,
  //   displacement_cc: 119,
  //   power_hp: 100,
  //   weight_lb: 2615,
  //   mph60_s: 14.8,
  //   year: 81
  // },
  // {
  //   name: "Datsun 210",
  //   economy_mpg: 31.8,
  //   cylinders: 4,
  //   displacement_cc: 85,
  //   power_hp: 65,
  //   weight_lb: 2020,
  //   mph60_s: 19.2,
  //   year: 79
  // },
  // {
  //   name: "Datsun 210",
  //   economy_mpg: 37,
  //   cylinders: 4,
  //   displacement_cc: 85,
  //   power_hp: 65,
  //   weight_lb: 1975,
  //   mph60_s: 19.4,
  //   year: 81
  // },
  // {
  //   name: "Datsun 210",
  //   economy_mpg: 40.8,
  //   cylinders: 4,
  //   displacement_cc: 85,
  //   power_hp: 65,
  //   weight_lb: 2110,
  //   mph60_s: 19.2,
  //   year: 80
  // },
  // {
  //   name: "Datsun 280ZX",
  //   economy_mpg: 32.7,
  //   cylinders: 6,
  //   displacement_cc: 168,
  //   power_hp: 132,
  //   weight_lb: 2910,
  //   mph60_s: 11.4,
  //   year: 80
  // },
  // {
  //   name: "Datsun 310 GX",
  //   economy_mpg: 38,
  //   cylinders: 4,
  //   displacement_cc: 91,
  //   power_hp: 67,
  //   weight_lb: 1995,
  //   mph60_s: 16.2,
  //   year: 82
  // },
  // {
  //   name: "Datsun 310",
  //   economy_mpg: 37.2,
  //   cylinders: 4,
  //   displacement_cc: 86,
  //   power_hp: 65,
  //   weight_lb: 2019,
  //   mph60_s: 16.4,
  //   year: 80
  // },
  // {
  //   name: "Datsun 510 (Wagon)",
  //   economy_mpg: 28,
  //   cylinders: 4,
  //   displacement_cc: 97,
  //   power_hp: 92,
  //   weight_lb: 2288,
  //   mph60_s: 17,
  //   year: 72
  // },
  // {
  //   name: "Datsun 510 Hatchback",
  //   economy_mpg: 37,
  //   cylinders: 4,
  //   displacement_cc: 119,
  //   power_hp: 92,
  //   weight_lb: 2434,
  //   mph60_s: 15,
  //   year: 80
  // },
  // {
  //   name: "Datsun 510",
  //   economy_mpg: 27.2,
  //   cylinders: 4,
  //   displacement_cc: 119,
  //   power_hp: 97,
  //   weight_lb: 2300,
  //   mph60_s: 14.7,
  //   year: 78
  // },
  // {
  //   name: "Datsun 610",
  //   economy_mpg: 22,
  //   cylinders: 4,
  //   displacement_cc: 108,
  //   power_hp: 94,
  //   weight_lb: 2379,
  //   mph60_s: 16.5,
  //   year: 73
  // },
  // {
  //   name: "Datsun 710",
  //   economy_mpg: 24,
  //   cylinders: 4,
  //   displacement_cc: 119,
  //   power_hp: 97,
  //   weight_lb: 2545,
  //   mph60_s: 17,
  //   year: 75
  // },
  // {
  //   name: "Datsun 710",
  //   economy_mpg: 32,
  //   cylinders: 4,
  //   displacement_cc: 83,
  //   power_hp: 61,
  //   weight_lb: 2003,
  //   mph60_s: 19,
  //   year: 74
  // },
  // {
  //   name: "Datsun 810 Maxima",
  //   economy_mpg: 24.2,
  //   cylinders: 6,
  //   displacement_cc: 146,
  //   power_hp: 120,
  //   weight_lb: 2930,
  //   mph60_s: 13.8,
  //   year: 81
  // },
  // {
  //   name: "Datsun 810",
  //   economy_mpg: 22,
  //   cylinders: 6,
  //   displacement_cc: 146,
  //   power_hp: 97,
  //   weight_lb: 2815,
  //   mph60_s: 14.5,
  //   year: 77
  // },
  // {
  //   name: "Datsun B-210",
  //   economy_mpg: 32,
  //   cylinders: 4,
  //   displacement_cc: 85,
  //   power_hp: 70,
  //   weight_lb: 1990,
  //   mph60_s: 17,
  //   year: 76
  // },
  // {
  //   name: "Datsun B210 GX",
  //   economy_mpg: 39.4,
  //   cylinders: 4,
  //   displacement_cc: 85,
  //   power_hp: 70,
  //   weight_lb: 2070,
  //   mph60_s: 18.6,
  //   year: 78
  // },
  // {
  //   name: "Datsun B210",
  //   economy_mpg: 31,
  //   cylinders: 4,
  //   displacement_cc: 79,
  //   power_hp: 67,
  //   weight_lb: 1950,
  //   mph60_s: 19,
  //   year: 74
  // },
  // {
  //   name: "Datsun F-10 Hatchback",
  //   economy_mpg: 33.5,
  //   cylinders: 4,
  //   displacement_cc: 85,
  //   power_hp: 70,
  //   weight_lb: 1945,
  //   mph60_s: 16.8,
  //   year: 77
  // },
  // {
  //   name: "Datsun PL510",
  //   economy_mpg: 27,
  //   cylinders: 4,
  //   displacement_cc: 97,
  //   power_hp: 88,
  //   weight_lb: 2130,
  //   mph60_s: 14.5,
  //   year: 70
  // },
  // {
  //   name: "Datsun PL510",
  //   economy_mpg: 27,
  //   cylinders: 4,
  //   displacement_cc: 97,
  //   power_hp: 88,
  //   weight_lb: 2130,
  //   mph60_s: 14.5,
  //   year: 71
  // },
  // {
  //   name: "Dodge Aries SE",
  //   economy_mpg: 29,
  //   cylinders: 4,
  //   displacement_cc: 135,
  //   power_hp: 84,
  //   weight_lb: 2525,
  //   mph60_s: 16,
  //   year: 82
  // },
  // {
  //   name: "Dodge Aries Wagon (Wagon)",
  //   economy_mpg: 25.8,
  //   cylinders: 4,
  //   displacement_cc: 156,
  //   power_hp: 92,
  //   weight_lb: 2620,
  //   mph60_s: 14.4,
  //   year: 81
  // },
  // {
  //   name: "Dodge Aspen 6",
  //   economy_mpg: 20.6,
  //   cylinders: 6,
  //   displacement_cc: 225,
  //   power_hp: 110,
  //   weight_lb: 3360,
  //   mph60_s: 16.6,
  //   year: 79
  // },
  // {
  //   name: "Dodge Aspen SE",
  //   economy_mpg: 20,
  //   cylinders: 6,
  //   displacement_cc: 225,
  //   power_hp: 100,
  //   weight_lb: 3651,
  //   mph60_s: 17.7,
  //   year: 76
  // },
  // {
  //   name: "Dodge Aspen",
  //   economy_mpg: 18.6,
  //   cylinders: 6,
  //   displacement_cc: 225,
  //   power_hp: 110,
  //   weight_lb: 3620,
  //   mph60_s: 18.7,
  //   year: 78
  // },
  // {
  //   name: "Dodge Aspen",
  //   economy_mpg: 19.1,
  //   cylinders: 6,
  //   displacement_cc: 225,
  //   power_hp: 90,
  //   weight_lb: 3381,
  //   mph60_s: 18.7,
  //   year: 80
  // },
  // {
  //   name: "Dodge Challenger SE",
  //   economy_mpg: 15,
  //   cylinders: 8,
  //   displacement_cc: 383,
  //   power_hp: 170,
  //   weight_lb: 3563,
  //   mph60_s: 10,
  //   year: 70
  // },
  // {
  //   name: "Dodge Charger 2.2",
  //   economy_mpg: 36,
  //   cylinders: 4,
  //   displacement_cc: 135,
  //   power_hp: 84,
  //   weight_lb: 2370,
  //   mph60_s: 13,
  //   year: 82
  // },
  // {
  //   name: "Dodge Colt (Wagon)",
  //   economy_mpg: 28,
  //   cylinders: 4,
  //   displacement_cc: 98,
  //   power_hp: 80,
  //   weight_lb: 2164,
  //   mph60_s: 15,
  //   year: 72
  // },
  // {
  //   name: "Dodge Colt Hardtop",
  //   economy_mpg: 25,
  //   cylinders: 4,
  //   displacement_cc: 97.5,
  //   power_hp: 80,
  //   weight_lb: 2126,
  //   mph60_s: 17,
  //   year: 72
  // },
  // {
  //   name: "Dodge Colt Hatchback Custom",
  //   economy_mpg: 35.7,
  //   cylinders: 4,
  //   displacement_cc: 98,
  //   power_hp: 80,
  //   weight_lb: 1915,
  //   mph60_s: 14.4,
  //   year: 79
  // },
  // {
  //   name: "Dodge Colt M/M",
  //   economy_mpg: 33.5,
  //   cylinders: 4,
  //   displacement_cc: 98,
  //   power_hp: 83,
  //   weight_lb: 2075,
  //   mph60_s: 15.9,
  //   year: 77
  // },
  // {
  //   name: "Dodge Colt",
  //   economy_mpg: 26,
  //   cylinders: 4,
  //   displacement_cc: 98,
  //   power_hp: 79,
  //   weight_lb: 2255,
  //   mph60_s: 17.7,
  //   year: 76
  // },
  // {
  //   name: "Dodge Colt",
  //   economy_mpg: 27.9,
  //   cylinders: 4,
  //   displacement_cc: 156,
  //   power_hp: 105,
  //   weight_lb: 2800,
  //   mph60_s: 14.4,
  //   year: 80
  // },
  // {
  //   name: "Dodge Colt",
  //   economy_mpg: 28,
  //   cylinders: 4,
  //   displacement_cc: 90,
  //   power_hp: 75,
  //   weight_lb: 2125,
  //   mph60_s: 14.5,
  //   year: 74
  // },
  // {
  //   name: "Dodge Coronet Brougham",
  //   economy_mpg: 16,
  //   cylinders: 8,
  //   displacement_cc: 318,
  //   power_hp: 150,
  //   weight_lb: 4190,
  //   mph60_s: 13,
  //   year: 76
  // },
  // {
  //   name: "Dodge Coronet Custom (Wagon)",
  //   economy_mpg: 14,
  //   cylinders: 8,
  //   displacement_cc: 318,
  //   power_hp: 150,
  //   weight_lb: 4457,
  //   mph60_s: 13.5,
  //   year: 74
  // },
  // {
  //   name: "Dodge Coronet Custom",
  //   economy_mpg: 15,
  //   cylinders: 8,
  //   displacement_cc: 318,
  //   power_hp: 150,
  //   weight_lb: 3777,
  //   mph60_s: 12.5,
  //   year: 73
  // },
  // {
  //   name: "Dodge D100",
  //   economy_mpg: 13,
  //   cylinders: 8,
  //   displacement_cc: 318,
  //   power_hp: 150,
  //   weight_lb: 3755,
  //   mph60_s: 14,
  //   year: 76
  // },
  // {
  //   name: "Dodge D200",
  //   economy_mpg: 11,
  //   cylinders: 8,
  //   displacement_cc: 318,
  //   power_hp: 210,
  //   weight_lb: 4382,
  //   mph60_s: 13.5,
  //   year: 70
  // },
  // {
  //   name: "Dodge Dart Custom",
  //   economy_mpg: 15,
  //   cylinders: 8,
  //   displacement_cc: 318,
  //   power_hp: 150,
  //   weight_lb: 3399,
  //   mph60_s: 11,
  //   year: 73
  // },
  // {
  //   name: "Dodge Diplomat",
  //   economy_mpg: 19.4,
  //   cylinders: 8,
  //   displacement_cc: 318,
  //   power_hp: 140,
  //   weight_lb: 3735,
  //   mph60_s: 13.2,
  //   year: 78
  // },
  // {
  //   name: "Dodge Magnum XE",
  //   economy_mpg: 17.5,
  //   cylinders: 8,
  //   displacement_cc: 318,
  //   power_hp: 140,
  //   weight_lb: 4080,
  //   mph60_s: 13.7,
  //   year: 78
  // },
  // {
  //   name: "Dodge Monaco (Wagon)",
  //   economy_mpg: 12,
  //   cylinders: 8,
  //   displacement_cc: 383,
  //   power_hp: 180,
  //   weight_lb: 4955,
  //   mph60_s: 11.5,
  //   year: 71
  // },
  // {
  //   name: "Dodge Monaco Brougham",
  //   economy_mpg: 15.5,
  //   cylinders: 8,
  //   displacement_cc: 318,
  //   power_hp: 145,
  //   weight_lb: 4140,
  //   mph60_s: 13.7,
  //   year: 77
  // },
  // {
  //   name: "Dodge Omni",
  //   economy_mpg: 30.9,
  //   cylinders: 4,
  //   displacement_cc: 105,
  //   power_hp: 75,
  //   weight_lb: 2230,
  //   mph60_s: 14.5,
  //   year: 78
  // },
  // {
  //   name: "Dodge Rampage",
  //   economy_mpg: 32,
  //   cylinders: 4,
  //   displacement_cc: 135,
  //   power_hp: 84,
  //   weight_lb: 2295,
  //   mph60_s: 11.6,
  //   year: 82
  // },
  // {
  //   name: "Dodge St. Regis",
  //   economy_mpg: 18.2,
  //   cylinders: 8,
  //   displacement_cc: 318,
  //   power_hp: 135,
  //   weight_lb: 3830,
  //   mph60_s: 15.2,
  //   year: 79
  // },
  // {
  //   name: "Fiat 124 Sport Coupe",
  //   economy_mpg: 26,
  //   cylinders: 4,
  //   displacement_cc: 98,
  //   power_hp: 90,
  //   weight_lb: 2265,
  //   mph60_s: 15.5,
  //   year: 73
  // },
  // {
  //   name: "Fiat 124 TC",
  //   economy_mpg: 26,
  //   cylinders: 4,
  //   displacement_cc: 116,
  //   power_hp: 75,
  //   weight_lb: 2246,
  //   mph60_s: 14,
  //   year: 74
  // },
  // {
  //   name: "Fiat 124B",
  //   economy_mpg: 30,
  //   cylinders: 4,
  //   displacement_cc: 88,
  //   power_hp: 76,
  //   weight_lb: 2065,
  //   mph60_s: 14.5,
  //   year: 71
  // },
  // {
  //   name: "Fiat 128",
  //   economy_mpg: 24,
  //   cylinders: 4,
  //   displacement_cc: 90,
  //   power_hp: 75,
  //   weight_lb: 2108,
  //   mph60_s: 15.5,
  //   year: 74
  // },
  // {
  //   name: "Fiat 128",
  //   economy_mpg: 29,
  //   cylinders: 4,
  //   displacement_cc: 68,
  //   power_hp: 49,
  //   weight_lb: 1867,
  //   mph60_s: 19.5,
  //   year: 73
  // },
  // {
  //   name: "Fiat 131",
  //   economy_mpg: 28,
  //   cylinders: 4,
  //   displacement_cc: 107,
  //   power_hp: 86,
  //   weight_lb: 2464,
  //   mph60_s: 15.5,
  //   year: 76
  // },
  // {
  //   name: "Fiat Strada Custom",
  //   economy_mpg: 37.3,
  //   cylinders: 4,
  //   displacement_cc: 91,
  //   power_hp: 69,
  //   weight_lb: 2130,
  //   mph60_s: 14.7,
  //   year: 79
  // },
  // {
  //   name: "Fiat X1.9",
  //   economy_mpg: 31,
  //   cylinders: 4,
  //   displacement_cc: 79,
  //   power_hp: 67,
  //   weight_lb: 2000,
  //   mph60_s: 16,
  //   year: 74
  // },
  // {
  //   name: "Ford Capri II",
  //   economy_mpg: 25,
  //   cylinders: 4,
  //   displacement_cc: 140,
  //   power_hp: 92,
  //   weight_lb: 2572,
  //   mph60_s: 14.9,
  //   year: 76
  // },
  // {
  //   name: "Ford Country Squire (Wagon)",
  //   economy_mpg: 13,
  //   cylinders: 8,
  //   displacement_cc: 400,
  //   power_hp: 170,
  //   weight_lb: 4746,
  //   mph60_s: 12,
  //   year: 71
  // },
  // {
  //   name: "Ford Country Squire (Wagon)",
  //   economy_mpg: 15.5,
  //   cylinders: 8,
  //   displacement_cc: 351,
  //   power_hp: 142,
  //   weight_lb: 4054,
  //   mph60_s: 14.3,
  //   year: 79
  // },
  // {
  //   name: "Ford Country",
  //   economy_mpg: 12,
  //   cylinders: 8,
  //   displacement_cc: 400,
  //   power_hp: 167,
  //   weight_lb: 4906,
  //   mph60_s: 12.5,
  //   year: 73
  // },
  // {
  //   name: "Ford Escort 2H",
  //   economy_mpg: 29.9,
  //   cylinders: 4,
  //   displacement_cc: 98,
  //   power_hp: 65,
  //   weight_lb: 2380,
  //   mph60_s: 20.7,
  //   year: 81
  // },
  // {
  //   name: "Ford Escort 4W",
  //   economy_mpg: 34.4,
  //   cylinders: 4,
  //   displacement_cc: 98,
  //   power_hp: 65,
  //   weight_lb: 2045,
  //   mph60_s: 16.2,
  //   year: 81
  // },
  // {
  //   name: "Ford F108",
  //   economy_mpg: 13,
  //   cylinders: 8,
  //   displacement_cc: 302,
  //   power_hp: 130,
  //   weight_lb: 3870,
  //   mph60_s: 15,
  //   year: 76
  // },
  // {
  //   name: "Ford F250",
  //   economy_mpg: 10,
  //   cylinders: 8,
  //   displacement_cc: 360,
  //   power_hp: 215,
  //   weight_lb: 4615,
  //   mph60_s: 14,
  //   year: 70
  // },
  // {
  //   name: "Ford Fairmont (Auto)",
  //   economy_mpg: 20.2,
  //   cylinders: 6,
  //   displacement_cc: 200,
  //   power_hp: 85,
  //   weight_lb: 2965,
  //   mph60_s: 15.8,
  //   year: 78
  // },
  // {
  //   name: "Ford Fairmont (Man)",
  //   economy_mpg: 25.1,
  //   cylinders: 4,
  //   displacement_cc: 140,
  //   power_hp: 88,
  //   weight_lb: 2720,
  //   mph60_s: 15.4,
  //   year: 78
  // },
  // {
  //   name: "Ford Fairmont 4",
  //   economy_mpg: 22.3,
  //   cylinders: 4,
  //   displacement_cc: 140,
  //   power_hp: 88,
  //   weight_lb: 2890,
  //   mph60_s: 17.3,
  //   year: 79
  // },
  // {
  //   name: "Ford Fairmont Futura",
  //   economy_mpg: 24,
  //   cylinders: 4,
  //   displacement_cc: 140,
  //   power_hp: 92,
  //   weight_lb: 2865,
  //   mph60_s: 16.4,
  //   year: 82
  // },
  // {
  //   name: "Ford Fairmont",
  //   economy_mpg: 26.4,
  //   cylinders: 4,
  //   displacement_cc: 140,
  //   power_hp: 88,
  //   weight_lb: 2870,
  //   mph60_s: 18.1,
  //   year: 80
  // },
  // {
  //   name: "Ford Fiesta",
  //   economy_mpg: 36.1,
  //   cylinders: 4,
  //   displacement_cc: 98,
  //   power_hp: 66,
  //   weight_lb: 1800,
  //   mph60_s: 14.4,
  //   year: 78
  // },
  // {
  //   name: "Ford Futura",
  //   economy_mpg: 18.1,
  //   cylinders: 8,
  //   displacement_cc: 302,
  //   power_hp: 139,
  //   weight_lb: 3205,
  //   mph60_s: 11.2,
  //   year: 78
  // },
  // {
  //   name: "Ford Galaxie 500",
  //   economy_mpg: 14,
  //   cylinders: 8,
  //   displacement_cc: 351,
  //   power_hp: 153,
  //   weight_lb: 4129,
  //   mph60_s: 13,
  //   year: 72
  // },
  // {
  //   name: "Ford Galaxie 500",
  //   economy_mpg: 14,
  //   cylinders: 8,
  //   displacement_cc: 351,
  //   power_hp: 153,
  //   weight_lb: 4154,
  //   mph60_s: 13.5,
  //   year: 71
  // },
  // {
  //   name: "Ford Galaxie 500",
  //   economy_mpg: 15,
  //   cylinders: 8,
  //   displacement_cc: 429,
  //   power_hp: 198,
  //   weight_lb: 4341,
  //   mph60_s: 10,
  //   year: 70
  // },
  // {
  //   name: "Ford Gran Torino (Wagon)",
  //   economy_mpg: 13,
  //   cylinders: 8,
  //   displacement_cc: 302,
  //   power_hp: 140,
  //   weight_lb: 4294,
  //   mph60_s: 16,
  //   year: 72
  // },
  // {
  //   name: "Ford Gran Torino (Wagon)",
  //   economy_mpg: 14,
  //   cylinders: 8,
  //   displacement_cc: 302,
  //   power_hp: 140,
  //   weight_lb: 4638,
  //   mph60_s: 16,
  //   year: 74
  // },
  // {
  //   name: "Ford Gran Torino",
  //   economy_mpg: 14,
  //   cylinders: 8,
  //   displacement_cc: 302,
  //   power_hp: 137,
  //   weight_lb: 4042,
  //   mph60_s: 14.5,
  //   year: 73
  // },
  // {
  //   name: "Ford Gran Torino",
  //   economy_mpg: 14.5,
  //   cylinders: 8,
  //   displacement_cc: 351,
  //   power_hp: 152,
  //   weight_lb: 4215,
  //   mph60_s: 12.8,
  //   year: 76
  // },
  // {
  //   name: "Ford Gran Torino",
  //   economy_mpg: 16,
  //   cylinders: 8,
  //   displacement_cc: 302,
  //   power_hp: 140,
  //   weight_lb: 4141,
  //   mph60_s: 14,
  //   year: 74
  // },
  // {
  //   name: "Ford Granada Ghia",
  //   economy_mpg: 18,
  //   cylinders: 6,
  //   displacement_cc: 250,
  //   power_hp: 78,
  //   weight_lb: 3574,
  //   mph60_s: 21,
  //   year: 76
  // },
  // {
  //   name: "Ford Granada GL",
  //   economy_mpg: 20.2,
  //   cylinders: 6,
  //   displacement_cc: 200,
  //   power_hp: 88,
  //   weight_lb: 3060,
  //   mph60_s: 17.1,
  //   year: 81
  // },
  // {
  //   name: "Ford Granada L",
  //   economy_mpg: 22,
  //   cylinders: 6,
  //   displacement_cc: 232,
  //   power_hp: 112,
  //   weight_lb: 2835,
  //   mph60_s: 14.7,
  //   year: 82
  // },
  // {
  //   name: "Ford Granada",
  //   economy_mpg: 18.5,
  //   cylinders: 6,
  //   displacement_cc: 250,
  //   power_hp: 98,
  //   weight_lb: 3525,
  //   mph60_s: 19,
  //   year: 77
  // },
  // {
  //   name: "Ford LTD Landau",
  //   economy_mpg: 17.6,
  //   cylinders: 8,
  //   displacement_cc: 302,
  //   power_hp: 129,
  //   weight_lb: 3725,
  //   mph60_s: 13.4,
  //   year: 79
  // },
  // {
  //   name: "Ford LTD",
  //   economy_mpg: 13,
  //   cylinders: 8,
  //   displacement_cc: 351,
  //   power_hp: 158,
  //   weight_lb: 4363,
  //   mph60_s: 13,
  //   year: 73
  // },
  // {
  //   name: "Ford LTD",
  //   economy_mpg: 14,
  //   cylinders: 8,
  //   displacement_cc: 351,
  //   power_hp: 148,
  //   weight_lb: 4657,
  //   mph60_s: 13.5,
  //   year: 75
  // },
  // {
  //   name: "Ford Maverick",
  //   economy_mpg: 15,
  //   cylinders: 6,
  //   displacement_cc: 250,
  //   power_hp: 72,
  //   weight_lb: 3158,
  //   mph60_s: 19.5,
  //   year: 75
  // },
  // {
  //   name: "Ford Maverick",
  //   economy_mpg: 18,
  //   cylinders: 6,
  //   displacement_cc: 250,
  //   power_hp: 88,
  //   weight_lb: 3021,
  //   mph60_s: 16.5,
  //   year: 73
  // },
  // {
  //   name: "Ford Maverick",
  //   economy_mpg: 21,
  //   cylinders: 6,
  //   displacement_cc: 200,
  //   power_hp: "",
  //   weight_lb: 2875,
  //   mph60_s: 17,
  //   year: 74
  // },
  // {
  //   name: "Ford Maverick",
  //   economy_mpg: 21,
  //   cylinders: 6,
  //   displacement_cc: 200,
  //   power_hp: 85,
  //   weight_lb: 2587,
  //   mph60_s: 16,
  //   year: 70
  // },
  // {
  //   name: "Ford Maverick",
  //   economy_mpg: 24,
  //   cylinders: 6,
  //   displacement_cc: 200,
  //   power_hp: 81,
  //   weight_lb: 3012,
  //   mph60_s: 17.6,
  //   year: 76
  // },
  // {
  //   name: "Ford Mustang Boss 302",
  //   economy_mpg: "",
  //   cylinders: 8,
  //   displacement_cc: 302,
  //   power_hp: 140,
  //   weight_lb: 3353,
  //   mph60_s: 8,
  //   year: 70
  // },
  // {
  //   name: "Ford Mustang Cobra",
  //   economy_mpg: 23.6,
  //   cylinders: 4,
  //   displacement_cc: 140,
  //   power_hp: "",
  //   weight_lb: 2905,
  //   mph60_s: 14.3,
  //   year: 80
  // },
  // {
  //   name: "Ford Mustang GL",
  //   economy_mpg: 27,
  //   cylinders: 4,
  //   displacement_cc: 140,
  //   power_hp: 86,
  //   weight_lb: 2790,
  //   mph60_s: 15.6,
  //   year: 82
  // },
  // {
  //   name: "Ford Mustang II 2+2",
  //   economy_mpg: 25.5,
  //   cylinders: 4,
  //   displacement_cc: 140,
  //   power_hp: 89,
  //   weight_lb: 2755,
  //   mph60_s: 15.8,
  //   year: 77
  // },
  // {
  //   name: "Ford Mustang II",
  //   economy_mpg: 13,
  //   cylinders: 8,
  //   displacement_cc: 302,
  //   power_hp: 129,
  //   weight_lb: 3169,
  //   mph60_s: 12,
  //   year: 75
  // },
  // {
  //   name: "Ford Mustang",
  //   economy_mpg: 18,
  //   cylinders: 6,
  //   displacement_cc: 250,
  //   power_hp: 88,
  //   weight_lb: 3139,
  //   mph60_s: 14.5,
  //   year: 71
  // },
  // {
  //   name: "Ford Pinto (Wagon)",
  //   economy_mpg: 22,
  //   cylinders: 4,
  //   displacement_cc: 122,
  //   power_hp: 86,
  //   weight_lb: 2395,
  //   mph60_s: 16,
  //   year: 72
  // },
  // {
  //   name: "Ford Pinto Runabout",
  //   economy_mpg: 21,
  //   cylinders: 4,
  //   displacement_cc: 122,
  //   power_hp: 86,
  //   weight_lb: 2226,
  //   mph60_s: 16.5,
  //   year: 72
  // },
  // {
  //   name: "Ford Pinto",
  //   economy_mpg: 18,
  //   cylinders: 6,
  //   displacement_cc: 171,
  //   power_hp: 97,
  //   weight_lb: 2984,
  //   mph60_s: 14.5,
  //   year: 75
  // },
  // {
  //   name: "Ford Pinto",
  //   economy_mpg: 19,
  //   cylinders: 4,
  //   displacement_cc: 122,
  //   power_hp: 85,
  //   weight_lb: 2310,
  //   mph60_s: 18.5,
  //   year: 73
  // },
  // {
  //   name: "Ford Pinto",
  //   economy_mpg: 23,
  //   cylinders: 4,
  //   displacement_cc: 140,
  //   power_hp: 83,
  //   weight_lb: 2639,
  //   mph60_s: 17,
  //   year: 75
  // },
  // {
  //   name: "Ford Pinto",
  //   economy_mpg: 25,
  //   cylinders: 4,
  //   displacement_cc: 98,
  //   power_hp: "",
  //   weight_lb: 2046,
  //   mph60_s: 19,
  //   year: 71
  // },
  // {
  //   name: "Ford Pinto",
  //   economy_mpg: 26,
  //   cylinders: 4,
  //   displacement_cc: 122,
  //   power_hp: 80,
  //   weight_lb: 2451,
  //   mph60_s: 16.5,
  //   year: 74
  // },
  // {
  //   name: "Ford Pinto",
  //   economy_mpg: 26.5,
  //   cylinders: 4,
  //   displacement_cc: 140,
  //   power_hp: 72,
  //   weight_lb: 2565,
  //   mph60_s: 13.6,
  //   year: 76
  // },
  // {
  //   name: "Ford Ranger",
  //   economy_mpg: 28,
  //   cylinders: 4,
  //   displacement_cc: 120,
  //   power_hp: 79,
  //   weight_lb: 2625,
  //   mph60_s: 18.6,
  //   year: 82
  // },
  // {
  //   name: "Ford Thunderbird",
  //   economy_mpg: 16,
  //   cylinders: 8,
  //   displacement_cc: 351,
  //   power_hp: 149,
  //   weight_lb: 4335,
  //   mph60_s: 14.5,
  //   year: 77
  // },
  // {
  //   name: "Ford Torino (Wagon)",
  //   economy_mpg: "",
  //   cylinders: 8,
  //   displacement_cc: 351,
  //   power_hp: 153,
  //   weight_lb: 4034,
  //   mph60_s: 11,
  //   year: 70
  // },
  // {
  //   name: "Ford Torino 500",
  //   economy_mpg: 19,
  //   cylinders: 6,
  //   displacement_cc: 250,
  //   power_hp: 88,
  //   weight_lb: 3302,
  //   mph60_s: 15.5,
  //   year: 71
  // },
  // {
  //   name: "Ford Torino",
  //   economy_mpg: 17,
  //   cylinders: 8,
  //   displacement_cc: 302,
  //   power_hp: 140,
  //   weight_lb: 3449,
  //   mph60_s: 10.5,
  //   year: 70
  // },
  // {
  //   name: "Hi 1200D",
  //   economy_mpg: 9,
  //   cylinders: 8,
  //   displacement_cc: 304,
  //   power_hp: 193,
  //   weight_lb: 4732,
  //   mph60_s: 18.5,
  //   year: 70
  // },
  // {
  //   name: "Honda Accord CVCC",
  //   economy_mpg: 31.5,
  //   cylinders: 4,
  //   displacement_cc: 98,
  //   power_hp: 68,
  //   weight_lb: 2045,
  //   mph60_s: 18.5,
  //   year: 77
  // },
  // {
  //   name: "Honda Accord LX",
  //   economy_mpg: 29.5,
  //   cylinders: 4,
  //   displacement_cc: 98,
  //   power_hp: 68,
  //   weight_lb: 2135,
  //   mph60_s: 16.6,
  //   year: 78
  // },
  // {
  //   name: "Honda Accord",
  //   economy_mpg: 32.4,
  //   cylinders: 4,
  //   displacement_cc: 107,
  //   power_hp: 72,
  //   weight_lb: 2290,
  //   mph60_s: 17,
  //   year: 80
  // },
  // {
  //   name: "Honda Accord",
  //   economy_mpg: 36,
  //   cylinders: 4,
  //   displacement_cc: 107,
  //   power_hp: 75,
  //   weight_lb: 2205,
  //   mph60_s: 14.5,
  //   year: 82
  // },
  // {
  //   name: "Honda Civic (Auto)",
  //   economy_mpg: 32,
  //   cylinders: 4,
  //   displacement_cc: 91,
  //   power_hp: 67,
  //   weight_lb: 1965,
  //   mph60_s: 15.7,
  //   year: 82
  // },
  // {
  //   name: "Honda Civic 1300",
  //   economy_mpg: 35.1,
  //   cylinders: 4,
  //   displacement_cc: 81,
  //   power_hp: 60,
  //   weight_lb: 1760,
  //   mph60_s: 16.1,
  //   year: 81
  // },
  // {
  //   name: "Honda Civic 1500 GL",
  //   economy_mpg: 44.6,
  //   cylinders: 4,
  //   displacement_cc: 91,
  //   power_hp: 67,
  //   weight_lb: 1850,
  //   mph60_s: 13.8,
  //   year: 80
  // },
  // {
  //   name: "Honda Civic CVCC",
  //   economy_mpg: 33,
  //   cylinders: 4,
  //   displacement_cc: 91,
  //   power_hp: 53,
  //   weight_lb: 1795,
  //   mph60_s: 17.5,
  //   year: 75
  // },
  // {
  //   name: "Honda Civic CVCC",
  //   economy_mpg: 36.1,
  //   cylinders: 4,
  //   displacement_cc: 91,
  //   power_hp: 60,
  //   weight_lb: 1800,
  //   mph60_s: 16.4,
  //   year: 78
  // },
  // {
  //   name: "Honda Civic",
  //   economy_mpg: 24,
  //   cylinders: 4,
  //   displacement_cc: 120,
  //   power_hp: 97,
  //   weight_lb: 2489,
  //   mph60_s: 15,
  //   year: 74
  // },
  // {
  //   name: "Honda Civic",
  //   economy_mpg: 33,
  //   cylinders: 4,
  //   displacement_cc: 91,
  //   power_hp: 53,
  //   weight_lb: 1795,
  //   mph60_s: 17.4,
  //   year: 76
  // },
  // {
  //   name: "Honda Civic",
  //   economy_mpg: 38,
  //   cylinders: 4,
  //   displacement_cc: 91,
  //   power_hp: 67,
  //   weight_lb: 1965,
  //   mph60_s: 15,
  //   year: 82
  // },
  // {
  //   name: "Honda Prelude",
  //   economy_mpg: 33.7,
  //   cylinders: 4,
  //   displacement_cc: 107,
  //   power_hp: 75,
  //   weight_lb: 2210,
  //   mph60_s: 14.4,
  //   year: 81
  // },
  // {
  //   name: "Maxda GLC Deluxe",
  //   economy_mpg: 34.1,
  //   cylinders: 4,
  //   displacement_cc: 86,
  //   power_hp: 65,
  //   weight_lb: 1975,
  //   mph60_s: 15.2,
  //   year: 79
  // },
  // {
  //   name: "Maxda RX-3",
  //   economy_mpg: 18,
  //   cylinders: 3,
  //   displacement_cc: 70,
  //   power_hp: 90,
  //   weight_lb: 2124,
  //   mph60_s: 13.5,
  //   year: 73
  // },
  // {
  //   name: "Mazda 626",
  //   economy_mpg: 31.3,
  //   cylinders: 4,
  //   displacement_cc: 120,
  //   power_hp: 75,
  //   weight_lb: 2542,
  //   mph60_s: 17.5,
  //   year: 80
  // },
  // {
  //   name: "Mazda 626",
  //   economy_mpg: 31.6,
  //   cylinders: 4,
  //   displacement_cc: 120,
  //   power_hp: 74,
  //   weight_lb: 2635,
  //   mph60_s: 18.3,
  //   year: 81
  // },
  // {
  //   name: "Mazda GLC 4",
  //   economy_mpg: 34.1,
  //   cylinders: 4,
  //   displacement_cc: 91,
  //   power_hp: 68,
  //   weight_lb: 1985,
  //   mph60_s: 16,
  //   year: 81
  // },
  // {
  //   name: "Mazda GLC Custom L",
  //   economy_mpg: 37,
  //   cylinders: 4,
  //   displacement_cc: 91,
  //   power_hp: 68,
  //   weight_lb: 2025,
  //   mph60_s: 18.2,
  //   year: 82
  // },
  // {
  //   name: "Mazda GLC Custom",
  //   economy_mpg: 31,
  //   cylinders: 4,
  //   displacement_cc: 91,
  //   power_hp: 68,
  //   weight_lb: 1970,
  //   mph60_s: 17.6,
  //   year: 82
  // },
  // {
  //   name: "Mazda GLC Deluxe",
  //   economy_mpg: 32.8,
  //   cylinders: 4,
  //   displacement_cc: 78,
  //   power_hp: 52,
  //   weight_lb: 1985,
  //   mph60_s: 19.4,
  //   year: 78
  // },
  // {
  //   name: "Mazda GLC",
  //   economy_mpg: 46.6,
  //   cylinders: 4,
  //   displacement_cc: 86,
  //   power_hp: 65,
  //   weight_lb: 2110,
  //   mph60_s: 17.9,
  //   year: 80
  // },
  // {
  //   name: "Mazda RX-2 Coupe",
  //   economy_mpg: 19,
  //   cylinders: 3,
  //   displacement_cc: 70,
  //   power_hp: 97,
  //   weight_lb: 2330,
  //   mph60_s: 13.5,
  //   year: 72
  // },
  // {
  //   name: "Mazda RX-4",
  //   economy_mpg: 21.5,
  //   cylinders: 3,
  //   displacement_cc: 80,
  //   power_hp: 110,
  //   weight_lb: 2720,
  //   mph60_s: 13.5,
  //   year: 77
  // },
  // {
  //   name: "Mazda RX-7 Gs",
  //   economy_mpg: 23.7,
  //   cylinders: 3,
  //   displacement_cc: 70,
  //   power_hp: 100,
  //   weight_lb: 2420,
  //   mph60_s: 12.5,
  //   year: 80
  // },
  // {
  //   name: "Mercedes-Benz 240D",
  //   economy_mpg: 30,
  //   cylinders: 4,
  //   displacement_cc: 146,
  //   power_hp: 67,
  //   weight_lb: 3250,
  //   mph60_s: 21.8,
  //   year: 80
  // },
  // {
  //   name: "Mercedes-Benz 280S",
  //   economy_mpg: 16.5,
  //   cylinders: 6,
  //   displacement_cc: 168,
  //   power_hp: 120,
  //   weight_lb: 3820,
  //   mph60_s: 16.7,
  //   year: 76
  // },
  // {
  //   name: "Mercedes-Benz 300D",
  //   economy_mpg: 25.4,
  //   cylinders: 5,
  //   displacement_cc: 183,
  //   power_hp: 77,
  //   weight_lb: 3530,
  //   mph60_s: 20.1,
  //   year: 79
  // },
  // {
  //   name: "Mercury Capri 2000",
  //   economy_mpg: 23,
  //   cylinders: 4,
  //   displacement_cc: 122,
  //   power_hp: 86,
  //   weight_lb: 2220,
  //   mph60_s: 14,
  //   year: 71
  // },
  // {
  //   name: "Mercury Capri V6",
  //   economy_mpg: 21,
  //   cylinders: 6,
  //   displacement_cc: 155,
  //   power_hp: 107,
  //   weight_lb: 2472,
  //   mph60_s: 14,
  //   year: 73
  // },
  // {
  //   name: "Mercury Cougar Brougham",
  //   economy_mpg: 15,
  //   cylinders: 8,
  //   displacement_cc: 302,
  //   power_hp: 130,
  //   weight_lb: 4295,
  //   mph60_s: 14.9,
  //   year: 77
  // },
  // {
  //   name: "Mercury Grand Marquis",
  //   economy_mpg: 16.5,
  //   cylinders: 8,
  //   displacement_cc: 351,
  //   power_hp: 138,
  //   weight_lb: 3955,
  //   mph60_s: 13.2,
  //   year: 79
  // },
  // {
  //   name: "Mercury Lynx L",
  //   economy_mpg: 36,
  //   cylinders: 4,
  //   displacement_cc: 98,
  //   power_hp: 70,
  //   weight_lb: 2125,
  //   mph60_s: 17.3,
  //   year: 82
  // },
  // {
  //   name: "Mercury Marquis Brougham",
  //   economy_mpg: 12,
  //   cylinders: 8,
  //   displacement_cc: 429,
  //   power_hp: 198,
  //   weight_lb: 4952,
  //   mph60_s: 11.5,
  //   year: 73
  // },
  // {
  //   name: "Mercury Marquis",
  //   economy_mpg: 11,
  //   cylinders: 8,
  //   displacement_cc: 429,
  //   power_hp: 208,
  //   weight_lb: 4633,
  //   mph60_s: 11,
  //   year: 72
  // },
  // {
  //   name: "Mercury Monarch Ghia",
  //   economy_mpg: 20.2,
  //   cylinders: 8,
  //   displacement_cc: 302,
  //   power_hp: 139,
  //   weight_lb: 3570,
  //   mph60_s: 12.8,
  //   year: 78
  // },
  // {
  //   name: "Mercury Monarch",
  //   economy_mpg: 15,
  //   cylinders: 6,
  //   displacement_cc: 250,
  //   power_hp: 72,
  //   weight_lb: 3432,
  //   mph60_s: 21,
  //   year: 75
  // },
  // {
  //   name: "Mercury Zephyr 6",
  //   economy_mpg: 19.8,
  //   cylinders: 6,
  //   displacement_cc: 200,
  //   power_hp: 85,
  //   weight_lb: 2990,
  //   mph60_s: 18.2,
  //   year: 79
  // },
  // {
  //   name: "Mercury Zephyr",
  //   economy_mpg: 20.8,
  //   cylinders: 6,
  //   displacement_cc: 200,
  //   power_hp: 85,
  //   weight_lb: 3070,
  //   mph60_s: 16.7,
  //   year: 78
  // },
  // {
  //   name: "Nissan Stanza XE",
  //   economy_mpg: 36,
  //   cylinders: 4,
  //   displacement_cc: 120,
  //   power_hp: 88,
  //   weight_lb: 2160,
  //   mph60_s: 14.5,
  //   year: 82
  // },
  // {
  //   name: "Oldsmobile Cutlass Ciera (Diesel)",
  //   economy_mpg: 38,
  //   cylinders: 6,
  //   displacement_cc: 262,
  //   power_hp: 85,
  //   weight_lb: 3015,
  //   mph60_s: 17,
  //   year: 82
  // },
  // {
  //   name: "Oldsmobile Cutlass LS",
  //   economy_mpg: 26.6,
  //   cylinders: 8,
  //   displacement_cc: 350,
  //   power_hp: 105,
  //   weight_lb: 3725,
  //   mph60_s: 19,
  //   year: 81
  // },
  // {
  //   name: "Oldsmobile Cutlass Salon Brougham",
  //   economy_mpg: 19.9,
  //   cylinders: 8,
  //   displacement_cc: 260,
  //   power_hp: 110,
  //   weight_lb: 3365,
  //   mph60_s: 15.5,
  //   year: 78
  // },
  // {
  //   name: "Oldsmobile Cutlass Salon Brougham",
  //   economy_mpg: 23.9,
  //   cylinders: 8,
  //   displacement_cc: 260,
  //   power_hp: 90,
  //   weight_lb: 3420,
  //   mph60_s: 22.2,
  //   year: 79
  // },
  // {
  //   name: "Oldsmobile Cutlass Supreme",
  //   economy_mpg: 17,
  //   cylinders: 8,
  //   displacement_cc: 260,
  //   power_hp: 110,
  //   weight_lb: 4060,
  //   mph60_s: 19,
  //   year: 77
  // },
  // {
  //   name: "Oldsmobile Delta 88 Royale",
  //   economy_mpg: 12,
  //   cylinders: 8,
  //   displacement_cc: 350,
  //   power_hp: 160,
  //   weight_lb: 4456,
  //   mph60_s: 13.5,
  //   year: 72
  // },
  // {
  //   name: "Oldsmobile Omega Brougham",
  //   economy_mpg: 26.8,
  //   cylinders: 6,
  //   displacement_cc: 173,
  //   power_hp: 115,
  //   weight_lb: 2700,
  //   mph60_s: 12.9,
  //   year: 79
  // },
  // {
  //   name: "Oldsmobile Omega",
  //   economy_mpg: 11,
  //   cylinders: 8,
  //   displacement_cc: 350,
  //   power_hp: 180,
  //   weight_lb: 3664,
  //   mph60_s: 11,
  //   year: 73
  // },
  // {
  //   name: "Oldsmobile Starfire SX",
  //   economy_mpg: 23.8,
  //   cylinders: 4,
  //   displacement_cc: 151,
  //   power_hp: 85,
  //   weight_lb: 2855,
  //   mph60_s: 17.6,
  //   year: 78
  // },
  // {
  //   name: "Oldsmobile Vista Cruiser",
  //   economy_mpg: 12,
  //   cylinders: 8,
  //   displacement_cc: 350,
  //   power_hp: 180,
  //   weight_lb: 4499,
  //   mph60_s: 12.5,
  //   year: 73
  // },
  // {
  //   name: "Opel 1900",
  //   economy_mpg: 25,
  //   cylinders: 4,
  //   displacement_cc: 116,
  //   power_hp: 81,
  //   weight_lb: 2220,
  //   mph60_s: 16.9,
  //   year: 76
  // },
  // {
  //   name: "Opel 1900",
  //   economy_mpg: 28,
  //   cylinders: 4,
  //   displacement_cc: 116,
  //   power_hp: 90,
  //   weight_lb: 2123,
  //   mph60_s: 14,
  //   year: 71
  // },
  // {
  //   name: "Opel Manta",
  //   economy_mpg: 24,
  //   cylinders: 4,
  //   displacement_cc: 116,
  //   power_hp: 75,
  //   weight_lb: 2158,
  //   mph60_s: 15.5,
  //   year: 73
  // },
  // {
  //   name: "Opel Manta",
  //   economy_mpg: 26,
  //   cylinders: 4,
  //   displacement_cc: 97,
  //   power_hp: 78,
  //   weight_lb: 2300,
  //   mph60_s: 14.5,
  //   year: 74
  // },
  // {
  //   name: "Peugeot 304",
  //   economy_mpg: 30,
  //   cylinders: 4,
  //   displacement_cc: 79,
  //   power_hp: 70,
  //   weight_lb: 2074,
  //   mph60_s: 19.5,
  //   year: 71
  // },
  // {
  //   name: "Peugeot 504 (Wagon)",
  //   economy_mpg: 21,
  //   cylinders: 4,
  //   displacement_cc: 120,
  //   power_hp: 87,
  //   weight_lb: 2979,
  //   mph60_s: 19.5,
  //   year: 72
  // },
  // {
  //   name: "Peugeot 504",
  //   economy_mpg: 19,
  //   cylinders: 4,
  //   displacement_cc: 120,
  //   power_hp: 88,
  //   weight_lb: 3270,
  //   mph60_s: 21.9,
  //   year: 76
  // },
  // {
  //   name: "Peugeot 504",
  //   economy_mpg: 23,
  //   cylinders: 4,
  //   displacement_cc: 120,
  //   power_hp: 88,
  //   weight_lb: 2957,
  //   mph60_s: 17,
  //   year: 75
  // },
  // {
  //   name: "Peugeot 504",
  //   economy_mpg: 25,
  //   cylinders: 4,
  //   displacement_cc: 110,
  //   power_hp: 87,
  //   weight_lb: 2672,
  //   mph60_s: 17.5,
  //   year: 70
  // },
  // {
  //   name: "Peugeot 504",
  //   economy_mpg: 27.2,
  //   cylinders: 4,
  //   displacement_cc: 141,
  //   power_hp: 71,
  //   weight_lb: 3190,
  //   mph60_s: 24.8,
  //   year: 79
  // },
  // {
  //   name: "Peugeot 505S Turbo Diesel",
  //   economy_mpg: 28.1,
  //   cylinders: 4,
  //   displacement_cc: 141,
  //   power_hp: 80,
  //   weight_lb: 3230,
  //   mph60_s: 20.4,
  //   year: 81
  // },
  // {
  //   name: "Peugeot 604SL",
  //   economy_mpg: 16.2,
  //   cylinders: 6,
  //   displacement_cc: 163,
  //   power_hp: 133,
  //   weight_lb: 3410,
  //   mph60_s: 15.8,
  //   year: 78
  // },
  // {
  //   name: "Plymouth Arrow GS",
  //   economy_mpg: 25.5,
  //   cylinders: 4,
  //   displacement_cc: 122,
  //   power_hp: 96,
  //   weight_lb: 2300,
  //   mph60_s: 15.5,
  //   year: 77
  // },
  // {
  //   name: "Plymouth Barracuda 340",
  //   economy_mpg: 14,
  //   cylinders: 8,
  //   displacement_cc: 340,
  //   power_hp: 160,
  //   weight_lb: 3609,
  //   mph60_s: 8,
  //   year: 70
  // },
  // {
  //   name: "Plymouth Champ",
  //   economy_mpg: 39,
  //   cylinders: 4,
  //   displacement_cc: 86,
  //   power_hp: 64,
  //   weight_lb: 1875,
  //   mph60_s: 16.4,
  //   year: 81
  // },
  // {
  //   name: "Plymouth Cricket",
  //   economy_mpg: 26,
  //   cylinders: 4,
  //   displacement_cc: 91,
  //   power_hp: 70,
  //   weight_lb: 1955,
  //   mph60_s: 20.5,
  //   year: 71
  // },
  // {
  //   name: "Plymouth Custom Suburb",
  //   economy_mpg: 13,
  //   cylinders: 8,
  //   displacement_cc: 360,
  //   power_hp: 170,
  //   weight_lb: 4654,
  //   mph60_s: 13,
  //   year: 73
  // },
  // {
  //   name: "Plymouth Duster",
  //   economy_mpg: 20,
  //   cylinders: 6,
  //   displacement_cc: 198,
  //   power_hp: 95,
  //   weight_lb: 3102,
  //   mph60_s: 16.5,
  //   year: 74
  // },
  // {
  //   name: "Plymouth Duster",
  //   economy_mpg: 22,
  //   cylinders: 6,
  //   displacement_cc: 198,
  //   power_hp: 95,
  //   weight_lb: 2833,
  //   mph60_s: 15.5,
  //   year: 70
  // },
  // {
  //   name: "Plymouth Duster",
  //   economy_mpg: 23,
  //   cylinders: 6,
  //   displacement_cc: 198,
  //   power_hp: 95,
  //   weight_lb: 2904,
  //   mph60_s: 16,
  //   year: 73
  // },
  // {
  //   name: "Plymouth Fury Gran Sedan",
  //   economy_mpg: 14,
  //   cylinders: 8,
  //   displacement_cc: 318,
  //   power_hp: 150,
  //   weight_lb: 4237,
  //   mph60_s: 14.5,
  //   year: 73
  // },
  // {
  //   name: "Plymouth Fury III",
  //   economy_mpg: 14,
  //   cylinders: 8,
  //   displacement_cc: 318,
  //   power_hp: 150,
  //   weight_lb: 4096,
  //   mph60_s: 13,
  //   year: 71
  // },
  // {
  //   name: "Plymouth Fury III",
  //   economy_mpg: 14,
  //   cylinders: 8,
  //   displacement_cc: 440,
  //   power_hp: 215,
  //   weight_lb: 4312,
  //   mph60_s: 8.5,
  //   year: 70
  // },
  // {
  //   name: "Plymouth Fury III",
  //   economy_mpg: 15,
  //   cylinders: 8,
  //   displacement_cc: 318,
  //   power_hp: 150,
  //   weight_lb: 4135,
  //   mph60_s: 13.5,
  //   year: 72
  // },
  // {
  //   name: "Plymouth Fury",
  //   economy_mpg: 18,
  //   cylinders: 6,
  //   displacement_cc: 225,
  //   power_hp: 95,
  //   weight_lb: 3785,
  //   mph60_s: 19,
  //   year: 75
  // },
  // {
  //   name: "Plymouth Grand Fury",
  //   economy_mpg: 16,
  //   cylinders: 8,
  //   displacement_cc: 318,
  //   power_hp: 150,
  //   weight_lb: 4498,
  //   mph60_s: 14.5,
  //   year: 75
  // },
  // {
  //   name: "Plymouth Horizon 4",
  //   economy_mpg: 34.7,
  //   cylinders: 4,
  //   displacement_cc: 105,
  //   power_hp: 63,
  //   weight_lb: 2215,
  //   mph60_s: 14.9,
  //   year: 81
  // },
  // {
  //   name: "Plymouth Horizon Miser",
  //   economy_mpg: 38,
  //   cylinders: 4,
  //   displacement_cc: 105,
  //   power_hp: 63,
  //   weight_lb: 2125,
  //   mph60_s: 14.7,
  //   year: 82
  // },
  // {
  //   name: "Plymouth Horizon TC3",
  //   economy_mpg: 34.5,
  //   cylinders: 4,
  //   displacement_cc: 105,
  //   power_hp: 70,
  //   weight_lb: 2150,
  //   mph60_s: 14.9,
  //   year: 79
  // },
  // {
  //   name: "Plymouth Horizon",
  //   economy_mpg: 34.2,
  //   cylinders: 4,
  //   displacement_cc: 105,
  //   power_hp: 70,
  //   weight_lb: 2200,
  //   mph60_s: 13.2,
  //   year: 79
  // },
  // {
  //   name: "Plymouth Reliant",
  //   economy_mpg: 27.2,
  //   cylinders: 4,
  //   displacement_cc: 135,
  //   power_hp: 84,
  //   weight_lb: 2490,
  //   mph60_s: 15.7,
  //   year: 81
  // },
  // {
  //   name: "Plymouth Reliant",
  //   economy_mpg: 30,
  //   cylinders: 4,
  //   displacement_cc: 135,
  //   power_hp: 84,
  //   weight_lb: 2385,
  //   mph60_s: 12.9,
  //   year: 81
  // },
  // {
  //   name: "Plymouth Sapporo",
  //   economy_mpg: 23.2,
  //   cylinders: 4,
  //   displacement_cc: 156,
  //   power_hp: 105,
  //   weight_lb: 2745,
  //   mph60_s: 16.7,
  //   year: 78
  // },
  // {
  //   name: "Plymouth Satellite (Wagon)",
  //   economy_mpg: "",
  //   cylinders: 8,
  //   displacement_cc: 383,
  //   power_hp: 175,
  //   weight_lb: 4166,
  //   mph60_s: 10.5,
  //   year: 70
  // },
  // {
  //   name: "Plymouth Satellite Custom (Wagon)",
  //   economy_mpg: 14,
  //   cylinders: 8,
  //   displacement_cc: 318,
  //   power_hp: 150,
  //   weight_lb: 4077,
  //   mph60_s: 14,
  //   year: 72
  // },
  // {
  //   name: "Plymouth Satellite Custom",
  //   economy_mpg: 16,
  //   cylinders: 6,
  //   displacement_cc: 225,
  //   power_hp: 105,
  //   weight_lb: 3439,
  //   mph60_s: 15.5,
  //   year: 71
  // },
  // {
  //   name: "Plymouth Satellite Sebring",
  //   economy_mpg: 18,
  //   cylinders: 6,
  //   displacement_cc: 225,
  //   power_hp: 105,
  //   weight_lb: 3613,
  //   mph60_s: 16.5,
  //   year: 74
  // },
  // {
  //   name: "Plymouth Satellite",
  //   economy_mpg: 18,
  //   cylinders: 8,
  //   displacement_cc: 318,
  //   power_hp: 150,
  //   weight_lb: 3436,
  //   mph60_s: 11,
  //   year: 70
  // },
  // {
  //   name: "Plymouth Valiant Custom",
  //   economy_mpg: 19,
  //   cylinders: 6,
  //   displacement_cc: 225,
  //   power_hp: 95,
  //   weight_lb: 3264,
  //   mph60_s: 16,
  //   year: 75
  // },
  // {
  //   name: "Plymouth Valiant",
  //   economy_mpg: 18,
  //   cylinders: 6,
  //   displacement_cc: 225,
  //   power_hp: 105,
  //   weight_lb: 3121,
  //   mph60_s: 16.5,
  //   year: 73
  // },
  // {
  //   name: "Plymouth Valiant",
  //   economy_mpg: 22,
  //   cylinders: 6,
  //   displacement_cc: 225,
  //   power_hp: 100,
  //   weight_lb: 3233,
  //   mph60_s: 15.4,
  //   year: 76
  // },
  // {
  //   name: "Plymouth Volare Custom",
  //   economy_mpg: 19,
  //   cylinders: 6,
  //   displacement_cc: 225,
  //   power_hp: 100,
  //   weight_lb: 3630,
  //   mph60_s: 17.7,
  //   year: 77
  // },
  // {
  //   name: "Plymouth Volare Premier V8",
  //   economy_mpg: 13,
  //   cylinders: 8,
  //   displacement_cc: 318,
  //   power_hp: 150,
  //   weight_lb: 3940,
  //   mph60_s: 13.2,
  //   year: 76
  // },
  // {
  //   name: "Plymouth Volare",
  //   economy_mpg: 20.5,
  //   cylinders: 6,
  //   displacement_cc: 225,
  //   power_hp: 100,
  //   weight_lb: 3430,
  //   mph60_s: 17.2,
  //   year: 78
  // },
  // {
  //   name: "Pontiac Astro",
  //   economy_mpg: 23,
  //   cylinders: 4,
  //   displacement_cc: 140,
  //   power_hp: 78,
  //   weight_lb: 2592,
  //   mph60_s: 18.5,
  //   year: 75
  // },
  // {
  //   name: "Pontiac Catalina Brougham",
  //   economy_mpg: 14,
  //   cylinders: 8,
  //   displacement_cc: 400,
  //   power_hp: 175,
  //   weight_lb: 4464,
  //   mph60_s: 11.5,
  //   year: 71
  // },
  // {
  //   name: "Pontiac Catalina",
  //   economy_mpg: 14,
  //   cylinders: 8,
  //   displacement_cc: 400,
  //   power_hp: 175,
  //   weight_lb: 4385,
  //   mph60_s: 12,
  //   year: 72
  // },
  // {
  //   name: "Pontiac Catalina",
  //   economy_mpg: 14,
  //   cylinders: 8,
  //   displacement_cc: 455,
  //   power_hp: 225,
  //   weight_lb: 4425,
  //   mph60_s: 10,
  //   year: 70
  // },
  // {
  //   name: "Pontiac Catalina",
  //   economy_mpg: 16,
  //   cylinders: 8,
  //   displacement_cc: 400,
  //   power_hp: 170,
  //   weight_lb: 4668,
  //   mph60_s: 11.5,
  //   year: 75
  // },
  // {
  //   name: "Pontiac Firebird",
  //   economy_mpg: 19,
  //   cylinders: 6,
  //   displacement_cc: 250,
  //   power_hp: 100,
  //   weight_lb: 3282,
  //   mph60_s: 15,
  //   year: 71
  // },
  // {
  //   name: "Pontiac Grand Prix Lj",
  //   economy_mpg: 16,
  //   cylinders: 8,
  //   displacement_cc: 400,
  //   power_hp: 180,
  //   weight_lb: 4220,
  //   mph60_s: 11.1,
  //   year: 77
  // },
  // {
  //   name: "Pontiac Grand Prix",
  //   economy_mpg: 16,
  //   cylinders: 8,
  //   displacement_cc: 400,
  //   power_hp: 230,
  //   weight_lb: 4278,
  //   mph60_s: 9.5,
  //   year: 73
  // },
  // {
  //   name: "Pontiac J2000 Se Hatchback",
  //   economy_mpg: 31,
  //   cylinders: 4,
  //   displacement_cc: 112,
  //   power_hp: 85,
  //   weight_lb: 2575,
  //   mph60_s: 16.2,
  //   year: 82
  // },
  // {
  //   name: "Pontiac Lemans V6",
  //   economy_mpg: 21.5,
  //   cylinders: 6,
  //   displacement_cc: 231,
  //   power_hp: 115,
  //   weight_lb: 3245,
  //   mph60_s: 15.4,
  //   year: 79
  // },
  // {
  //   name: "Pontiac Phoenix LJ",
  //   economy_mpg: 19.2,
  //   cylinders: 6,
  //   displacement_cc: 231,
  //   power_hp: 105,
  //   weight_lb: 3535,
  //   mph60_s: 19.2,
  //   year: 78
  // },
  // {
  //   name: "Pontiac Phoenix",
  //   economy_mpg: 27,
  //   cylinders: 4,
  //   displacement_cc: 151,
  //   power_hp: 90,
  //   weight_lb: 2735,
  //   mph60_s: 18,
  //   year: 82
  // },
  // {
  //   name: "Pontiac Phoenix",
  //   economy_mpg: 33.5,
  //   cylinders: 4,
  //   displacement_cc: 151,
  //   power_hp: 90,
  //   weight_lb: 2556,
  //   mph60_s: 13.2,
  //   year: 79
  // },
  // {
  //   name: "Pontiac Safari (Wagon)",
  //   economy_mpg: 13,
  //   cylinders: 8,
  //   displacement_cc: 400,
  //   power_hp: 175,
  //   weight_lb: 5140,
  //   mph60_s: 12,
  //   year: 71
  // },
  // {
  //   name: "Pontiac Sunbird Coupe",
  //   economy_mpg: 24.5,
  //   cylinders: 4,
  //   displacement_cc: 151,
  //   power_hp: 88,
  //   weight_lb: 2740,
  //   mph60_s: 16,
  //   year: 77
  // },
  // {
  //   name: "Pontiac Ventura Sj",
  //   economy_mpg: 18.5,
  //   cylinders: 6,
  //   displacement_cc: 250,
  //   power_hp: 110,
  //   weight_lb: 3645,
  //   mph60_s: 16.2,
  //   year: 76
  // },
  // {
  //   name: "Renault 12 (Wagon)",
  //   economy_mpg: 26,
  //   cylinders: 4,
  //   displacement_cc: 96,
  //   power_hp: 69,
  //   weight_lb: 2189,
  //   mph60_s: 18,
  //   year: 72
  // },
  // {
  //   name: "Renault 12TL",
  //   economy_mpg: 27,
  //   cylinders: 4,
  //   displacement_cc: 101,
  //   power_hp: 83,
  //   weight_lb: 2202,
  //   mph60_s: 15.3,
  //   year: 76
  // },
  // {
  //   name: "Renault 18I",
  //   economy_mpg: 34.5,
  //   cylinders: 4,
  //   displacement_cc: 100,
  //   power_hp: "",
  //   weight_lb: 2320,
  //   mph60_s: 15.8,
  //   year: 81
  // },
  // {
  //   name: "Renault 5 Gtl",
  //   economy_mpg: 36,
  //   cylinders: 4,
  //   displacement_cc: 79,
  //   power_hp: 58,
  //   weight_lb: 1825,
  //   mph60_s: 18.6,
  //   year: 77
  // },
  // {
  //   name: "Renault Lecar Deluxe",
  //   economy_mpg: 40.9,
  //   cylinders: 4,
  //   displacement_cc: 85,
  //   power_hp: "",
  //   weight_lb: 1835,
  //   mph60_s: 17.3,
  //   year: 80
  // },
  // {
  //   name: "Saab 900S",
  //   economy_mpg: "",
  //   cylinders: 4,
  //   displacement_cc: 121,
  //   power_hp: 110,
  //   weight_lb: 2800,
  //   mph60_s: 15.4,
  //   year: 81
  // },
  // {
  //   name: "Saab 99E",
  //   economy_mpg: 25,
  //   cylinders: 4,
  //   displacement_cc: 104,
  //   power_hp: 95,
  //   weight_lb: 2375,
  //   mph60_s: 17.5,
  //   year: 70
  // },
  // {
  //   name: "Saab 99GLE",
  //   economy_mpg: 21.6,
  //   cylinders: 4,
  //   displacement_cc: 121,
  //   power_hp: 115,
  //   weight_lb: 2795,
  //   mph60_s: 15.7,
  //   year: 78
  // },
  // {
  //   name: "Saab 99LE",
  //   economy_mpg: 24,
  //   cylinders: 4,
  //   displacement_cc: 121,
  //   power_hp: 110,
  //   weight_lb: 2660,
  //   mph60_s: 14,
  //   year: 73
  // },
  // {
  //   name: "Saab 99LE",
  //   economy_mpg: 25,
  //   cylinders: 4,
  //   displacement_cc: 121,
  //   power_hp: 115,
  //   weight_lb: 2671,
  //   mph60_s: 13.5,
  //   year: 75
  // },
  // {
  //   name: "Subaru DL",
  //   economy_mpg: 30,
  //   cylinders: 4,
  //   displacement_cc: 97,
  //   power_hp: 67,
  //   weight_lb: 1985,
  //   mph60_s: 16.4,
  //   year: 77
  // },
  // {
  //   name: "Subaru DL",
  //   economy_mpg: 33.8,
  //   cylinders: 4,
  //   displacement_cc: 97,
  //   power_hp: 67,
  //   weight_lb: 2145,
  //   mph60_s: 18,
  //   year: 80
  // },
  // {
  //   name: "Subaru",
  //   economy_mpg: 26,
  //   cylinders: 4,
  //   displacement_cc: 108,
  //   power_hp: 93,
  //   weight_lb: 2391,
  //   mph60_s: 15.5,
  //   year: 74
  // },
  // {
  //   name: "Subaru",
  //   economy_mpg: 32.3,
  //   cylinders: 4,
  //   displacement_cc: 97,
  //   power_hp: 67,
  //   weight_lb: 2065,
  //   mph60_s: 17.8,
  //   year: 81
  // },
  // {
  //   name: "Toyota Carina",
  //   economy_mpg: 20,
  //   cylinders: 4,
  //   displacement_cc: 97,
  //   power_hp: 88,
  //   weight_lb: 2279,
  //   mph60_s: 19,
  //   year: 73
  // },
  // {
  //   name: "Toyota Celica GT Liftback",
  //   economy_mpg: 21.1,
  //   cylinders: 4,
  //   displacement_cc: 134,
  //   power_hp: 95,
  //   weight_lb: 2515,
  //   mph60_s: 14.8,
  //   year: 78
  // },
  // {
  //   name: "Toyota Celica GT",
  //   economy_mpg: 32,
  //   cylinders: 4,
  //   displacement_cc: 144,
  //   power_hp: 96,
  //   weight_lb: 2665,
  //   mph60_s: 13.9,
  //   year: 82
  // },
  // {
  //   name: "Toyota Corolla 1200",
  //   economy_mpg: 31,
  //   cylinders: 4,
  //   displacement_cc: 71,
  //   power_hp: 65,
  //   weight_lb: 1773,
  //   mph60_s: 19,
  //   year: 71
  // },
  // {
  //   name: "Toyota Corolla 1200",
  //   economy_mpg: 32,
  //   cylinders: 4,
  //   displacement_cc: 71,
  //   power_hp: 65,
  //   weight_lb: 1836,
  //   mph60_s: 21,
  //   year: 74
  // },
  // {
  //   name: "Toyota Corolla 1600 (Wagon)",
  //   economy_mpg: 27,
  //   cylinders: 4,
  //   displacement_cc: 97,
  //   power_hp: 88,
  //   weight_lb: 2100,
  //   mph60_s: 16.5,
  //   year: 72
  // },
  // {
  //   name: "Toyota Corolla Liftback",
  //   economy_mpg: 26,
  //   cylinders: 4,
  //   displacement_cc: 97,
  //   power_hp: 75,
  //   weight_lb: 2265,
  //   mph60_s: 18.2,
  //   year: 77
  // },
  // {
  //   name: "Toyota Corolla Tercel",
  //   economy_mpg: 38.1,
  //   cylinders: 4,
  //   displacement_cc: 89,
  //   power_hp: 60,
  //   weight_lb: 1968,
  //   mph60_s: 18.8,
  //   year: 80
  // },
  // {
  //   name: "Toyota Corolla",
  //   economy_mpg: 28,
  //   cylinders: 4,
  //   displacement_cc: 97,
  //   power_hp: 75,
  //   weight_lb: 2155,
  //   mph60_s: 16.4,
  //   year: 76
  // },
  // {
  //   name: "Toyota Corolla",
  //   economy_mpg: 29,
  //   cylinders: 4,
  //   displacement_cc: 97,
  //   power_hp: 75,
  //   weight_lb: 2171,
  //   mph60_s: 16,
  //   year: 75
  // },
  // {
  //   name: "Toyota Corolla",
  //   economy_mpg: 32.2,
  //   cylinders: 4,
  //   displacement_cc: 108,
  //   power_hp: 75,
  //   weight_lb: 2265,
  //   mph60_s: 15.2,
  //   year: 80
  // },
  // {
  //   name: "Toyota Corolla",
  //   economy_mpg: 32.4,
  //   cylinders: 4,
  //   displacement_cc: 108,
  //   power_hp: 75,
  //   weight_lb: 2350,
  //   mph60_s: 16.8,
  //   year: 81
  // },
  // {
  //   name: "Toyota Corolla",
  //   economy_mpg: 34,
  //   cylinders: 4,
  //   displacement_cc: 108,
  //   power_hp: 70,
  //   weight_lb: 2245,
  //   mph60_s: 16.9,
  //   year: 82
  // },
  // {
  //   name: "Toyota Corona Hardtop",
  //   economy_mpg: 24,
  //   cylinders: 4,
  //   displacement_cc: 113,
  //   power_hp: 95,
  //   weight_lb: 2278,
  //   mph60_s: 15.5,
  //   year: 72
  // },
  // {
  //   name: "Toyota Corona Liftback",
  //   economy_mpg: 29.8,
  //   cylinders: 4,
  //   displacement_cc: 134,
  //   power_hp: 90,
  //   weight_lb: 2711,
  //   mph60_s: 15.5,
  //   year: 80
  // },
  // {
  //   name: "Toyota Corona Mark II",
  //   economy_mpg: 24,
  //   cylinders: 4,
  //   displacement_cc: 113,
  //   power_hp: 95,
  //   weight_lb: 2372,
  //   mph60_s: 15,
  //   year: 70
  // },
  // {
  //   name: "Toyota Corona",
  //   economy_mpg: 24,
  //   cylinders: 4,
  //   displacement_cc: 134,
  //   power_hp: 96,
  //   weight_lb: 2702,
  //   mph60_s: 13.5,
  //   year: 75
  // },
  // {
  //   name: "Toyota Corona",
  //   economy_mpg: 25,
  //   cylinders: 4,
  //   displacement_cc: 113,
  //   power_hp: 95,
  //   weight_lb: 2228,
  //   mph60_s: 14,
  //   year: 71
  // },
  // {
  //   name: "Toyota Corona",
  //   economy_mpg: 27.5,
  //   cylinders: 4,
  //   displacement_cc: 134,
  //   power_hp: 95,
  //   weight_lb: 2560,
  //   mph60_s: 14.2,
  //   year: 78
  // },
  // {
  //   name: "Toyota Corona",
  //   economy_mpg: 31,
  //   cylinders: 4,
  //   displacement_cc: 76,
  //   power_hp: 52,
  //   weight_lb: 1649,
  //   mph60_s: 16.5,
  //   year: 74
  // },
  // {
  //   name: "Toyota Cressida",
  //   economy_mpg: 25.4,
  //   cylinders: 6,
  //   displacement_cc: 168,
  //   power_hp: 116,
  //   weight_lb: 2900,
  //   mph60_s: 12.6,
  //   year: 81
  // },
  // {
  //   name: "Toyota Mark II",
  //   economy_mpg: 19,
  //   cylinders: 6,
  //   displacement_cc: 156,
  //   power_hp: 108,
  //   weight_lb: 2930,
  //   mph60_s: 15.5,
  //   year: 76
  // },
  // {
  //   name: "Toyota Mark II",
  //   economy_mpg: 20,
  //   cylinders: 6,
  //   displacement_cc: 156,
  //   power_hp: 122,
  //   weight_lb: 2807,
  //   mph60_s: 13.5,
  //   year: 73
  // },
  // {
  //   name: "Toyota Starlet",
  //   economy_mpg: 39.1,
  //   cylinders: 4,
  //   displacement_cc: 79,
  //   power_hp: 58,
  //   weight_lb: 1755,
  //   mph60_s: 16.9,
  //   year: 81
  // },
  // {
  //   name: "Toyota Tercel",
  //   economy_mpg: 37.7,
  //   cylinders: 4,
  //   displacement_cc: 89,
  //   power_hp: 62,
  //   weight_lb: 2050,
  //   mph60_s: 17.3,
  //   year: 81
  // },
  // {
  //   name: "Toyouta Corona Mark II (Wagon)",
  //   economy_mpg: 23,
  //   cylinders: 4,
  //   displacement_cc: 120,
  //   power_hp: 97,
  //   weight_lb: 2506,
  //   mph60_s: 14.5,
  //   year: 72
  // },
  // {
  //   name: "Triumph TR7 Coupe",
  //   economy_mpg: 35,
  //   cylinders: 4,
  //   displacement_cc: 122,
  //   power_hp: 88,
  //   weight_lb: 2500,
  //   mph60_s: 15.1,
  //   year: 80
  // },
  // {
  //   name: "Vokswagen Rabbit",
  //   economy_mpg: 29.8,
  //   cylinders: 4,
  //   displacement_cc: 89,
  //   power_hp: 62,
  //   weight_lb: 1845,
  //   mph60_s: 15.3,
  //   year: 80
  // },
  // {
  //   name: "Volkswagen 1131 Deluxe Sedan",
  //   economy_mpg: 26,
  //   cylinders: 4,
  //   displacement_cc: 97,
  //   power_hp: 46,
  //   weight_lb: 1835,
  //   mph60_s: 20.5,
  //   year: 70
  // },
  // {
  //   name: "Volkswagen 411 (Wagon)",
  //   economy_mpg: 22,
  //   cylinders: 4,
  //   displacement_cc: 121,
  //   power_hp: 76,
  //   weight_lb: 2511,
  //   mph60_s: 18,
  //   year: 72
  // },
  // {
  //   name: "Volkswagen Dasher (Diesel)",
  //   economy_mpg: 43.4,
  //   cylinders: 4,
  //   displacement_cc: 90,
  //   power_hp: 48,
  //   weight_lb: 2335,
  //   mph60_s: 23.7,
  //   year: 80
  // },
  // {
  //   name: "Volkswagen Dasher",
  //   economy_mpg: 25,
  //   cylinders: 4,
  //   displacement_cc: 90,
  //   power_hp: 71,
  //   weight_lb: 2223,
  //   mph60_s: 16.5,
  //   year: 75
  // },
  // {
  //   name: "Volkswagen Dasher",
  //   economy_mpg: 26,
  //   cylinders: 4,
  //   displacement_cc: 79,
  //   power_hp: 67,
  //   weight_lb: 1963,
  //   mph60_s: 15.5,
  //   year: 74
  // },
  // {
  //   name: "Volkswagen Dasher",
  //   economy_mpg: 30.5,
  //   cylinders: 4,
  //   displacement_cc: 97,
  //   power_hp: 78,
  //   weight_lb: 2190,
  //   mph60_s: 14.1,
  //   year: 77
  // },
  // {
  //   name: "Volkswagen Jetta",
  //   economy_mpg: 33,
  //   cylinders: 4,
  //   displacement_cc: 105,
  //   power_hp: 74,
  //   weight_lb: 2190,
  //   mph60_s: 14.2,
  //   year: 81
  // },
  // {
  //   name: "Volkswagen Model 111",
  //   economy_mpg: 27,
  //   cylinders: 4,
  //   displacement_cc: 97,
  //   power_hp: 60,
  //   weight_lb: 1834,
  //   mph60_s: 19,
  //   year: 71
  // },
  // {
  //   name: "Volkswagen Pickup",
  //   economy_mpg: 44,
  //   cylinders: 4,
  //   displacement_cc: 97,
  //   power_hp: 52,
  //   weight_lb: 2130,
  //   mph60_s: 24.6,
  //   year: 82
  // },
  // {
  //   name: "Volkswagen Rabbit C (Diesel)",
  //   economy_mpg: 44.3,
  //   cylinders: 4,
  //   displacement_cc: 90,
  //   power_hp: 48,
  //   weight_lb: 2085,
  //   mph60_s: 21.7,
  //   year: 80
  // },
  // {
  //   name: "Volkswagen Rabbit Custom Diesel",
  //   economy_mpg: 43.1,
  //   cylinders: 4,
  //   displacement_cc: 90,
  //   power_hp: 48,
  //   weight_lb: 1985,
  //   mph60_s: 21.5,
  //   year: 78
  // },
  // {
  //   name: "Volkswagen Rabbit Custom",
  //   economy_mpg: 29,
  //   cylinders: 4,
  //   displacement_cc: 97,
  //   power_hp: 78,
  //   weight_lb: 1940,
  //   mph60_s: 14.5,
  //   year: 77
  // },
  // {
  //   name: "Volkswagen Rabbit Custom",
  //   economy_mpg: 31.9,
  //   cylinders: 4,
  //   displacement_cc: 89,
  //   power_hp: 71,
  //   weight_lb: 1925,
  //   mph60_s: 14,
  //   year: 79
  // },
  // {
  //   name: "Volkswagen Rabbit L",
  //   economy_mpg: 36,
  //   cylinders: 4,
  //   displacement_cc: 105,
  //   power_hp: 74,
  //   weight_lb: 1980,
  //   mph60_s: 15.3,
  //   year: 82
  // },
  // {
  //   name: "Volkswagen Rabbit",
  //   economy_mpg: 29,
  //   cylinders: 4,
  //   displacement_cc: 90,
  //   power_hp: 70,
  //   weight_lb: 1937,
  //   mph60_s: 14,
  //   year: 75
  // },
  // {
  //   name: "Volkswagen Rabbit",
  //   economy_mpg: 29,
  //   cylinders: 4,
  //   displacement_cc: 90,
  //   power_hp: 70,
  //   weight_lb: 1937,
  //   mph60_s: 14.2,
  //   year: 76
  // },
  // {
  //   name: "Volkswagen Rabbit",
  //   economy_mpg: 29.5,
  //   cylinders: 4,
  //   displacement_cc: 97,
  //   power_hp: 71,
  //   weight_lb: 1825,
  //   mph60_s: 12.2,
  //   year: 76
  // },
  // {
  //   name: "Volkswagen Rabbit",
  //   economy_mpg: 41.5,
  //   cylinders: 4,
  //   displacement_cc: 98,
  //   power_hp: 76,
  //   weight_lb: 2144,
  //   mph60_s: 14.7,
  //   year: 80
  // },
  // {
  //   name: "Volkswagen Scirocco",
  //   economy_mpg: 31.5,
  //   cylinders: 4,
  //   displacement_cc: 89,
  //   power_hp: 71,
  //   weight_lb: 1990,
  //   mph60_s: 14.9,
  //   year: 78
  // },
  // {
  //   name: "Volkswagen Super Beetle 117",
  //   economy_mpg: "",
  //   cylinders: 4,
  //   displacement_cc: 97,
  //   power_hp: 48,
  //   weight_lb: 1978,
  //   mph60_s: 20,
  //   year: 71
  // },
  // {
  //   name: "Volkswagen Super Beetle",
  //   economy_mpg: 26,
  //   cylinders: 4,
  //   displacement_cc: 97,
  //   power_hp: 46,
  //   weight_lb: 1950,
  //   mph60_s: 21,
  //   year: 73
  // },
  // {
  //   name: "Volkswagen Type 3",
  //   economy_mpg: 23,
  //   cylinders: 4,
  //   displacement_cc: 97,
  //   power_hp: 54,
  //   weight_lb: 2254,
  //   mph60_s: 23.5,
  //   year: 72
  // },
  // {
  //   name: "Volvo 144EA",
  //   economy_mpg: 19,
  //   cylinders: 4,
  //   displacement_cc: 121,
  //   power_hp: 112,
  //   weight_lb: 2868,
  //   mph60_s: 15.5,
  //   year: 73
  // },
  // {
  //   name: "Volvo 145E (Wagon)",
  //   economy_mpg: 18,
  //   cylinders: 4,
  //   displacement_cc: 121,
  //   power_hp: 112,
  //   weight_lb: 2933,
  //   mph60_s: 14.5,
  //   year: 72
  // },
  // {
  //   name: "Volvo 244DL",
  //   economy_mpg: 22,
  //   cylinders: 4,
  //   displacement_cc: 121,
  //   power_hp: 98,
  //   weight_lb: 2945,
  //   mph60_s: 14.5,
  //   year: 75
  // },
  // {
  //   name: "Volvo 245",
  //   economy_mpg: 20,
  //   cylinders: 4,
  //   displacement_cc: 130,
  //   power_hp: 102,
  //   weight_lb: 3150,
  //   mph60_s: 15.7,
  //   year: 76
  // },
  // {
  //   name: "Volvo 264GL",
  //   economy_mpg: 17,
  //   cylinders: 6,
  //   displacement_cc: 163,
  //   power_hp: 125,
  //   weight_lb: 3140,
  //   mph60_s: 13.6,
  //   year: 78
  // },
  // {
  //   name: "Volvo Diesel",
  //   economy_mpg: 30.7,
  //   cylinders: 6,
  //   displacement_cc: 145,
  //   power_hp: 76,
  //   weight_lb: 3160,
  //   mph60_s: 19.6,
  //   year: 81
  // }
];