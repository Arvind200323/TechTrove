

const products = [
  {
    // _id: '1',
    name: 'GIGABYTE Nvidia Geforce RTX 4090',
    image:'/images/rtx4090.jpg',
    description:
    'The Nvidia GeForce RTX 4090 is a high-end desktop graphics card based on the AD102 chip using the Ada Lovelace architecture. The 4090 offers 16,384 of the 18,432 cores and 24 GB GDDR6X graphics memory with a 384 bit memory bus and clocked at 21 Gbits.',
    brand:'GigaByte',
    category:'Graphics Card',
    price: 2099,
    countInStock: 10,
    rating: 4.0,
    numReviews: 69,
  },
 
  {
    // _id: '2',
    name: 'AMD Ryzen 9 5900x',
    image:'/images/amd_r9.jpg',
    description:
    'The AMD Ryzen 9 5900X processor is the ultimate video game and streaming processor: 12 Cores, 24 Threads and 70MB GameCache.',
    brand:'AMD',
    category:'Processor',
    price: 759,
    countInStock: 10,
    rating: 4.7,
    numReviews: 12,
  },

  {
    // _id: '7',
    name: 'Intel i9 13900k',
    image:'/images/i9.jpg',
    description:
    'Intel Core i9-13900K Desktop Processor LGA 1700 24 cores (8 P-cores + 16 E-cores) 36M Cache, up to 5.8 GHz',
    brand:'Intel',
    category:'Processor',
    price: 659,
    countInStock: 15,
    rating: 4.7,
    numReviews: 12,
  },

  {
    // _id: '3',
    name: 'MSI MPG X570S Carbon Max WiFi ATX Motherboard',
    image:'/images/msi_x570.jpg',
    description:
    'The MSI MPG X570S Carbon Max WiFi ATX motherboard is designed for use with AMD’s latest Ryzen series processors, built for ultra-fast performance. The board is made with premium class material, which provides lifetime durability. It has a large heat sink to help dissipate heat, as well as a customizable RGB lighting system. The board supports dual-channel DDR4 memory up to 5300MHz (OC). This MSI motherboard is the perfect solution for gamers who want to take their gaming to the next level.',
    brand:'MSI',
    category:'Motherboard',
    price: 499,
    countInStock: 10,
    rating: 4.2,
    numReviews: 8,
  },

  {
    // _id: '3',
    name: 'ASUS ROG Strix Z790-E Gaming',
    image:'/images/rog_mot.jpg',
    description:
    'The MSI MPG X570S Carbon Max WiFi ATX motherboard is designed for use with AMD’s latest Ryzen series processors, built for ultra-fast performance. The board is made with premium class material, which provides lifetime durability. It has a large heat sink to help dissipate heat, as well as a customizable RGB lighting system. The board supports dual-channel DDR4 memory up to 5300MHz (OC). This MSI motherboard is the perfect solution for gamers who want to take their gaming to the next level.',
    brand:'ASUS',
    category:'Motherboard',
    price: 399,
    countInStock: 7,
    rating: 4.2,
    numReviews: 8,
  },

  {
    // _id: '4',
    name: 'GSKILL Trident Z RGB 16GB (2 * 8GB) DDR4 3200 MHz',
    image:'/images/gskill.jpg',
    description:
    'Trident Z RGB retains the iconic design element of the traditional Trident Z lineup - featuring luxurious hair-line finished aluminum heatspreaders and an aggressive fin design for highly efficient heat dissipation. The top of the heatsink has been exclusively engineered to mount a wider light diffuser for more extravagant lighting effects. Look no further for a memory that combines performance and beauty for building a stylish, modern PC!',
    brand:'GSKILL',
    category:'RAM',
    price: 139,
    countInStock: 10,
    rating: 4.5,
    numReviews: 5,
  },

  {
    // _id: '5',
    name: 'WD_Black SN850X NVMe SSD 1TB',
    image:'/images/wd.jpg',
    description:
    'Get the ultimate gaming edge over your competition with insane speeds up to 7,300 MB/s2 for top-level performance and ridiculously short load times.',
    brand:'WD',
    category:'SSD',
    price: 89,
    countInStock: 10,
    rating: 3.7,
    numReviews: 2,
  },

  {
    // _id: '6',
    name: 'Cooler Master MWE 850 Gold V2 Power Supply',
    image:'/images/cm.jpg',
    description:
    'The MWE Series comes with a standard limited manufacturing warranty of 5 years from the date of purchase for complete peace of mind Compliance with latest ATX 12V V2.52 specification ensures power requirement for new age multi-core processors and Graphics card are properly met., 120 mm HBD Fan All MWE Gold models have 2 EPS connectors for universal current generation motherboard compatibility. ATX 24 PIN x1, EPS 4+4 PIN x1, EPS 8 PIN x1, PCI-E 6+2 PIN x4, SATA x12, Peripheral 4 pin x4. All flat modular cables take up less space and are easier to manipulate within the chassis improving ease of build and air airflow.',
    brand:'CoolerMaster',
    category:'PSU',
    price: 109,
    countInStock: 10,
    rating: 4.7,
    numReviews: 12,
  },

  {
    // _id: '7',
    name: 'Ant Esports Ice Thunder Cabinet',
    image:'/images/cabinet.jpg',
    description:
    'Cabinet',
    brand:'GigaByte',
    category:'CABINET',
    price: 759,
    countInStock: 10,
    rating: 4.7,
    numReviews: 12,
  },

  {
    // _id: '7',
    name: 'Acer23.8 Inch Full HD LED LCD Monitor',
    image:'/images/monitor.jpg',
    description:
    'Exceptional Full HD VA 23.8 Inch Display : Enjoy immaculate image quality with 1920x1080 resolution and 178 degree wide viewing angles I 72% NTSC I 250 Nits Brightness I 6 Axis color adjustments',
    brand:'acer',
    category:'monitor',
    price: 139,
    countInStock: 7,
    rating: 4.7,
    numReviews: 12,
  },

  {
    // _id: '7',
    name: 'Redragon LED Backlit TKL Ten Key-Less Mechanical',
    image:'/images/red.jpg',
    description:
    'enkeyless compact mechanical gaming keyboard Redragon k552 tkl small compact with dust proof mechanical switches cherry mx red equivalent Linear switches quiet click sound fast action with minimal resistance without a tactile bump feel',
    brand:'reddragon',
    category:'keyboard',
    price: 79,
    countInStock: 15,
    rating: 4.7,
    numReviews: 12,
  },

  {
    // _id: '7',
    name: 'Logitech G102 USB Light Sync Gaming Mouse',
    image:'/images/mouse.jpg',
    description:
    'CLASSIC,GAMER TESTED DESIGN : Play comfortably and with total control. The simple 6-button layout and classic gaming shape form a comfortable, time-tested and loved design',
    brand:'logitech',
    category:'mouse',
    price: 59,
    countInStock: 6,
    rating: 4.7,
    numReviews: 12,
  },
 

 
]

export default products