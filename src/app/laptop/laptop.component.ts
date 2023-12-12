import { Component } from '@angular/core';
import { ProductI } from '../laptop-i';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrl: './laptop.component.css'
})
export class LaptopComponent {
  

  product:ProductI={
    id:1,
    image:"/assets/hp 1.webp",
    name:"HP Laptop 15s",
    description:"HP Laptop 15s, 12th Gen Intel Core i7-1255U, 15.6-inch (39.6 cm), FHD, 16GB DDR4, 512GB SSD, Intel Iris Xe Graphics, Backlit KB, Thin & Light (Win 11, MSO 2021, Silver, 1.69 kg), fq5190TU ",
    price: 50000
  };
  
  product1:ProductI={

    id:2,
      image:"/assets/dell 2.webp",
      name:"Dell 15 Vostro ",
      description:"Dell 15 Vostro 3510 Laptop, Intel Core i5-1135G7 Proc/16GB DDR4/512GB SSD/Intel UHD Graphic/15.6 (39.562cm) FHD/Win 11+MSO'21/Thin & Light 1.69kg/15 Month McAfee/Spill-Resistant Keyboard/Carbon,7T2YC",
      price:51490
  };

  product2:ProductI={

    id:3,
      image:"/assets/apple 3.jpg",
      name:"Apple MacBook Air ",
      description:"Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Space Grey ",
      price:85000
  };

  product3:ProductI={

    id:4,
      image:"/assets/lenevo 4.webp",
      name:"Lenova ipad 3 ",
      description:"Lenovo Idea Pad 3 15IAU7 Intel Core i3 12th Gen (15.6 inch, 8GB, 256GB, Windows 11, MS Office 2021, Intel UHD, Full HD Display, Grey, 82RK00WXIN)",
      price:35990
  };

  product4:ProductI={

    id:5,
      image:"/assets/infinix 6.jpg",
      name:"Infinix y1 plus neo",
      description:"Infinix Y1 Plus Neo Intel Intel Celeron Quad Core 11th Gen JSL N5100 - (8 GB/512 GB SSD/Windows 11 Home) XL30 Thin and Light Laptop  (15.36 inch, Blue, 1.76 Kg)",
      price:65458
  };

  product5:ProductI={

    id:6,
      image:"/assets/lg 7.jpg",
      name:"LG gram 17",
      description:"LG gram 17” Lightweight Laptop, Intel 13th Gen Core i7 Evo Platform, Windows 11 Home, NVIDIA RTX3050 4GB GPU, 32GB RAM, 2TB SSD, Black ",
      price:32599
  };

  product6:ProductI={

    id:7,
      image:"/assets/samsung 8.jpg",
      name:"Samsung galaxy  book 3",
      description:"SAMSUNG Galaxy Book3 Intel Core i5 13th Gen 1335U - (16 GB/512 GB SSD/Windows 11 Home) NP750XFG-KA2IN Thin and Light Laptop  (15.6 Inch, Graphite, 1.58 Kg, With MS Office)",
      price:79990
  };

  product7:ProductI={

    id:8,
      image:"/assets/asus 9.webp",
      name:"Asus ROG ",
      description:"ASUS ROG Zephyrus Duo 16 Dual Screen Laptop, 16 (40.64 cm) UHD+/FHD+ 120Hz/240Hz/3ms, AMD Ryzen 9 6900HX, 16GB RTX 3080 Ti, Gaming Laptop (32GB/2TB SSD/Win 11/Office/Black/2.55 Kg), GX650RXZ-LB226WS",
      price:309990
  };

  product8:ProductI={

    id:9,
      image:"/assets/dell 2.webp",
      name:"Dell 15 Vostro ",
      description:"Dell 15 Vostro 3510 Laptop, Intel Core i5-1135G7 Proc/16GB DDR4/512GB SSD/Intel UHD Graphic/15.6 (39.562cm) FHD/Win 11+MSO'21/Thin & Light 1.69kg/15 Month McAfee/Spill-Resistant Keyboard/Carbon,7T2YC",
      price:51490
  };
  product9:ProductI={
    id: 10,
    image: "/assets/acer chrombook.jpg",
    name: "Acer Chromebook ",
    description: "Acer Chromebook Intel Celeron Dual Core N4000 - (4 GB/16 GB EMMC Storage/Chrome OS) C733 Chromebook  (11.6 inch, Black, 1.26 kg)",
    price: 21490
  };
  product10:ProductI={
    id: 11,
    image: "/assets/chuwi corebook.jpg",
    name: "CHUWI Corebook",
    description: "CHUWI Intel Core i3 10th Gen 1005G1 - (8 GB/512 GB SSD/Windows 11 Home) CoreBook X Grey Laptop  (14 inch, Grey, 1.40 kg)",
    price: 23990
  };
  product11:ProductI={
    id: 12,
    image: "/assets/asus chrombook.jpg",
    name: "ASUS Chromebook ",
    description: "ASUS Chromebook Intel Celeron Dual Core N4020 - (4 GB/32 GB EMMC Storage/Chrome OS) CX1101CMA_ID-GJ0004 / GJ0003 Chromebook  (11.6 Inch, Transparent Silver, 1.24 Kg)",
    
    price: 16990
  };
  product12:ProductI={
    id: 13,
    image: "/assets/lenevo crombook.jpg",
    name: "Lenovo Slim 3 Chromebook",
    description: "Lenovo Slim 3 Chromebook Touch Intel Intel Celeron Dual Core N4020 - (4 GB/64 GB EMMC Storage/Chrome OS) 14IGL05 Chromebook  (14 inch, Platinum Grey, 1.4 Kg",
    price: 19890
  };
  product13:ProductI={
    id: 14,
    image: "/assets/Asus chrombook 8 gb.jpg",
    name: "ASUS Chromebook",
    description: "ASUS Chromebook Intel Celeron Dual Core N4500 - (8 GB/64 GB EMMC Storage/Chrome OS) CX1500CKA-EJ0275 Chromebook  (15.6 Inch, Transparent Silver, 1.80 Kg",
    price: 24990
  };
  product14:ProductI={
    id: 15,
    image: "/assets/hp crombook.jpg",
    name: "HP Chromebook ",
    description: "HP Chromebook Intel Intel Celeron Dual Core N4020 - (4 GB/64 GB EMMC Storage/Chrome OS) 14a- na0002TU Chromebook  (14 inch, Ceramic White, 1.46 kg",
    price: 24990
  };
  product15:ProductI={
    id: 16,
    image: "/assets/asus vivobook s 14 flip.jpg ",
    name: "ASUS Vivobook S 14 Flip ",
    description: "ASUS Vivobook S 14 Flip (2023) AMD Ryzen 5 Hexa Core 7530U - (16 GB/512 GB SSD/Windows 11 Home) TN3402YAB-LZ541WS 2 in 1 Laptop  (14 Inch, Quiet Blue, 1.50 Kg, With MS Office)",
    price: 60990
  };
  product16:ProductI={
    id: 17,
    image: "/assets/lenevo idea pad.jpg",
    name: "Lenovo IdeaPad Flex 5  ",
    description: "Lenovo IdeaPad Flex 5 Intel Intel Core i7 13th Gen 1355U - (16 GB/512 GB SSD/Windows 11 Home) 14IRU8 2 in 1 Laptop  (14 Inch, Arctic Grey, 1.5 kg, With MS Office",
    price: 87990
  };
  product17:ProductI={
    id: 18,
    image: "/assets/hp pavillion x360.jpg",
    name: "HP Pavilion x360",
    description: "HP Pavilion x360 Intel Intel Core i5 13th Gen 1335U - (16 GB/1 TB SSD/Windows 11 Home) 14-ek1010TU 2 in 1 Laptop  (14 Inch, Natural Silver, 1.41 Kg, With MS Office)",
    price: 79990};
    product18:ProductI={
      id: 19,
      image: "/assets/chuwi frebook.jpg",
      name: "CHUWI freebook",
      description: "Chuwi FreeBook 13.5 Inch 2 in 1 Touchscreen Laptop, Flipped 360 Degree, Windows 11, Core i3-1215U 12th gen, 12 GB RAM LPDDR4 512 GB SSD Expandable Upto 1 TB, 2.4G+6G Dual Band WiFi, Backlit Keyboard",
      price: 37990};

      product19:ProductI={
        id: 20,
        image: "/assets/dell inspiron.jpg",
        name: "DELL Inspiron",
        description: "DELL Inspiron AMD Ryzen 5 Hexa Core 5625U - (8 GB/512 GB SSD/Windows 11 Home) New Inspiron 14 2-in-1 2 in 1 Laptop  (14 Inch, Pebble Green, 1.63 Kg, With MS Office)",
        price: 61640};
        product20:ProductI={
          id: 21,
          image: "/assets/acer spin 5.jpg",
          name: "Acer Spin 5 ",
          description: "Acer Spin 5 Intel EVO Intel Core i7 12th Gen 1260P - (16 GB/1 TB SSD/Windows 11 Home) SP514-51N 2 in 1 Laptop  (14 inch, Concrete Gray, With MS Office)",
          price: 103490};
          product21:ProductI={
            id: 22,
            image: "/assets/acer nitro.jpg",
            name: "Acer Nitro ",
            description: "Acer Nitro 5 Intel Core i7 12th Gen 12650H - (16 GB/1 TB SSD/Windows 11 Home/8 GB Graphics/NVIDIA GeForce RTX 3070 Ti) AN515-58 Gaming Laptop  (15.6 Inch, Obsidian Black, 2.6 Kg)",
            price: 99990};
            product22:ProductI={
              id: 23,
              image: "/assets/dell g15.jpg",
              name: "DELL G15  ",
              description: "DELL G15 Intel Core i5 12th Gen 12500H - (8 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce RTX 3050/120 Hz) G15-5520 Gaming Laptop  (15.6 Inch, Dark Shadow Grey, 2.57 kg, With MS Office)",
              price: 6899};
              product23:ProductI={
                id: 24,
                image: "/assets/msi gf63.jpg",
                name: "MSI GF63 ",
                description: "MSI GF63 Intel Core i5 11th Gen 11260H - (16 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce RTX 2050/60 Hz) GF63 Thin 11UCX-1496IN Gaming Laptop  (15.6 Inch, Black, 1.86 Kg)",
                price: 58990};
                product24:ProductI={
                  id: 25,
                  image: "/assets/hp victus.jpg",
                  name: " HP Victus  ",
                  description: "HP Victus AMD Ryzen 5 Hexa Core 7535HS - (8 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce RTX 2050) 15-fb1015AX Gaming Laptop  (15.6 Inch, Mica Silver, 2.37 Kg)",
                  price: 54990};
                  product25:ProductI={
                    id: 26,
                    image: "/assets/lenevo idea pad.jpg",
                    name: "Lenovo IdeaPad ",
                    description: "Lenovo IdeaPad Gaming 3 Intel Intel Core i5 11th Gen 11300H - (8 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce GTX 1650/120 Hz) 15IHU6 Gaming Laptop  (15.6 Inch, Shadow Black, 2.25 kg)",
                    price: 53990};
                    product26:ProductI={
                      id: 27,
                      image: "/assets/asus tuf gaming.webp",
                      name: "ASUS TUF Gaming F15 ",
                      description: "ASUS TUF Gaming F15 with 90WHr Battery Intel Core i5 11th Gen 11400H - (16 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce RTX 3050/144 Hz/75 W) FX506HC-HN362W Gaming Laptop  (15.6 Inch, Graphite Black, 2.30 Kg)",
                      price:63990};

  



  constructor(private cartService:CartService,private router:ActivatedRoute){}

  addTocart(product:ProductI){
    this.cartService.addTocart(product);
    window.alert('product is added to cart......!');
  }

  
}
