import  { useState, createContext } from 'react';
import Cartcard from './Components/Cartcard';

export const UserContext = createContext();

function App() {
  const [product, setProduct] = useState([
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",      
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",      
      price: 109.95,
      discountPercentage: 12.96,
      rating: 4.69,
      brand:	"Fjällräven",
      stock: 94,
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",  
      },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Linen",
      category: "men's clothing",
      thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      
    },
    {
      id: 3,
      title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      description:
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      price: 1249,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      brand: "Temple Design",
      category: "jewelery",
      thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
      image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    },
  ]);
  return (
    <UserContext.Provider value={{ product, setProduct }}>
      <Cartcard />
    </UserContext.Provider>
  );
}

export default App;
    // {
    //     id: 4,
    //     title: "Mens Casual Slim Fit",
       
    //     description: "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    //        price: 15.99,
    //     category: "men's clothing",
    //     discountPercentage: 17.91,
    //     rating: 4.3,
    //     stock: 123,
    //     brand:"Meesho"
    //     thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
    //     image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        
    //   },
  

    
    // {
    //   id: 5,
    //   title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    //   price: 695,
    //   description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    //   "category": "jewelery",
    //   price: 499,
    //   discountPercentage: 10.58,
    //   rating: 4.09,
    //   stock: 32,
    //   brand: "Kerala Design",
    //   thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
    //   image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    // },
    // {
    //   id: 6,
    //   title: "Solid Gold Petite Micropave ",
    // price: 168,
    //   description: "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    //   "category": "jewelery",
    //   thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",

    //   image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    // },
    // {
    //   id: 7,
    //   title: "White Gold Plated Princess",
    //   price: 9.99,
    //   description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    //   category: "jewelery",
    //   thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",

    //   image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
     
    // },
    // {
    //   id: 8,
    //   title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    //   price: 10.99,
    //   description: "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    //   category: "jewelery",
    //   thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",

    //   image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      
    // },
    // {
    //   id: 9,
    //   title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    //   price: 64,
    //   description: "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    //   category: "electronics",
    //   thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",

    //   image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
     
    // },
    // {
    //   id: 10,
    //   title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    //   price: 109,
    //   description: "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    //   "category": "electronics",
    //   thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",

    //   image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      
    // }
          





//     {
//       id: 4,
//       title: "OPPOF19",
//       description: "OPPO F19 is officially announced on April 2021.",
//       price: 280,
//       discountPercentage: 17.91,
//       rating: 4.3,
//       stock: 123,
//       brand: "OPPO",
//       category: "smartphones",
//       thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
//       image: "https://i.dummyjson.com/data/products/4/3.jpg",
//     },
//     {
//       id: 5,
//       title: "Huawei P30",
//       description:
//         "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
//       price: 499,
//       discountPercentage: 10.58,
//       rating: 4.09,
//       stock: 32,
//       brand: "Huawei",
//       category: "smartphones",
//       thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
//       image: "https://i.dummyjson.com/data/products/5/3.jpg",
//     },
//     // Add more products as needed
//   ]);

 
