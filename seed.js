const mongoose = require('mongoose');
const Product = require('./src/models/Product');

mongoose.connect('mongodb+srv://amrendra:amrendra@cluster0.il2niun.mongodb.net/Ecom')
    .then(()=>{console.log('E-com Conected')})
    .catch((err)=>{console.log(err)});

const dummy_data = [
    {
        name:'Drone',
        imageUrl:'https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        price:200,
        desc:'Ziria Foldable Toy Drone with HQ WiFi Camera Remote Control for Kids Quadcopter with Gesture Selfie, Flips Bounce Mode,'
    },
    {
        name:'Iphone',
        imageUrl:'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vYmlsZSUyMHBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        price:150,
        desc:'Ziria Foldable Toy Drone with HQ WiFi Camera Remote Control for Kids Quadcopter with Gesture Selfie, Flips Bounce Mode,'
    },
    {
        name:'Macbook',
        imageUrl:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        price:200,
        desc:'Ziria Foldable Toy Drone with HQ WiFi Camera Remote Control for Kids Quadcopter with Gesture Selfie, Flips Bounce Mode,'
    },
    {
        name:'Macbook',
        imageUrl:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        price:200,
        desc:'Ziria Foldable Toy Drone with HQ WiFi Camera Remote Control for Kids Quadcopter with Gesture Selfie, Flips Bounce Mode,'
    },
    {
        name:'Nike Shoes',
        imageUrl:'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmlrZSUyMHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        price:60,
        desc:'Ziria Foldable Toy Drone with HQ WiFi Camera Remote Control for Kids Quadcopter with Gesture Selfie, Flips Bounce Mode,'
    },
    {
        name:'Watch',
        imageUrl:'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2F0Y2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        price:120,
        desc:'Ziria Foldable Toy Drone with HQ WiFi Camera Remote Control for Kids Quadcopter with Gesture Selfie, Flips Bounce Mode,'
    },
    {
        name:'Headphones',
        imageUrl:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        price:220,
        desc:'Ziria Foldable Toy Drone with HQ WiFi Camera Remote Control for Kids Quadcopter with Gesture Selfie, Flips Bounce Mode,'
    }
]

Product.create(dummy_data)
    .then(()=>{console.log('Db seeded')})
    .catch(()=>{console.log('DB not Seeded')})