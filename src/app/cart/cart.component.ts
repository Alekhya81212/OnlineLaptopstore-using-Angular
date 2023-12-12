import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';



declare var Razorpay:any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  
  items=this.cartService.getItems();
  constructor(private cartService:CartService){}
  ngOnInit(): void {
    
  }

  ClearCart(){
    this.items=[];
    return this.items;
  }

  GetTotal(){
    return this.items.reduce((a,b)=>{
      return (b.price)+a
    },0)
  }
  delete(){
    
  }
  cartitem(cartitem: any): number {
    throw new Error('Method not implemented.');
  }
  
  
  payNow(){
   
    const RazorPayOptions={
       description:'RazorPay Demo',
       currency:'INR',
       amount:50000*100,
       name:' Alekhya',
       key:'rzp_test_9GaJnMfGhdcs5s',
  
       prefills:{
        name:'Chinni Alekhya',
        email:'alekhyasurya121@gmail.com',
        phone:'1472583694'
       },
       theme:{
        color:'#f37254'
       },
       modal:{
        ondismiss:()=>{
          console.log('dismissed')
        }
       }
  
    }
    const successCallback=(paymentid:any)=>{
      console.log(paymentid);
    }
    const failureCallback=(e:any)=>{
      console.log(e);
    }
  
  
    Razorpay.open(RazorPayOptions,successCallback,failureCallback)
  
    }


  
  }

