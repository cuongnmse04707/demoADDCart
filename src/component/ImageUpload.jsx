import React, { Component } from 'react';
import {storage} from '../firebaseconnect';
import lottie from 'lottie-web';
import animationFile from './a1.json'

function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i].id === obj) {
            return i;
        }
    }
    return -1;
}

class ImageUpload extends Component {
    constructor(props){
        super(props);
        this.state={
            image: null, // anh
            url: '', // duong dan anh
            progress: 0, // thanh tien trinh
            show: true // show animation
        };
        this.handleChangeImage = this.handleChangeImage.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
        this.handleAnimation = this.handleAnimation.bind(this);
        this.handleAnimationPause = this.handleAnimationPause.bind(this);
    }

    // componentDidUpdate(){
        
    // }

    // shouldComponentUpdate(){
        
    // }

    handleChangeImage = (e) =>{
        var car2 = {type:"Fiat2", model:"5002", color:"white2"};
        const ud = JSON.parse(window.localStorage.getItem("cart"));
        ud.push(car2)
        console.log(ud);
        window.localStorage.setItem('cart',JSON.stringify(ud));
    };

    //////////////////// Cart

    handleAnimation = (e) =>{
        // this.setState({show: true})
        const quatityBuy = 5;
        const product = {"id":"1","ProductName":"Cây Xanh", "quatity":"20" ,"price":"100000","quatityBuy":1};
        const cart = JSON.parse(window.localStorage.getItem("cart")) || [];
        const indexNumber = containsObject(product.id,cart);
        if(indexNumber>=0){
            if(cart[indexNumber].quatity < (cart[indexNumber].quatityBuy) + quatityBuy){
                console.log("Không Đủ Hàng")
            }else{
                cart[indexNumber].quatityBuy = (cart[indexNumber].quatityBuy) + quatityBuy;
            }
        }else{
            cart.push(product)
        }
        localStorage.setItem('cart', JSON.stringify(cart));
    };
    handleAnimation2 = (e) =>{
        const quatityBuy = 5;
        const product = {"id":"2","ProductName":"Cây Xanh", "quatity":"20" ,"price":"100000","quatityBuy":5};
        const cart = JSON.parse(window.localStorage.getItem("cart")) || [];
        const indexNumber = containsObject(product.id,cart);
        if(indexNumber>=0){
            if(cart[indexNumber].quatity < (cart[indexNumber].quatityBuy) + quatityBuy){
                console.log("Không Đủ Hàng") 
            }else{
                cart[indexNumber].quatityBuy = (cart[indexNumber].quatityBuy) + quatityBuy;
            }
        }else{
            cart.push(product)
        }
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    handleAnimation3 = (e) =>{
        const quatityBuy = 5;
        const product = {"id":"3","ProductName":"Cây Xanh", "quatity":"20" ,"price":"100000","quatityBuy":1};
        const cart = JSON.parse(window.localStorage.getItem("cart")) || [];
        const indexNumber = containsObject(product.id,cart);
        if(indexNumber>=0){
            if(cart[indexNumber].quatity < (cart[indexNumber].quatityBuy) + quatityBuy){
                console.log("Không Đủ Hàng")
            }else{
                cart[indexNumber].quatityBuy = (cart[indexNumber].quatityBuy) + quatityBuy;
            }
        }else{
            cart.push(product)
        }
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    handleAnimation4 = (e) =>{
        // const quatityBuy = 5;
        // const product = {"id":"3","ProductName":"Cây Xanh", "quatity":"20" ,"price":"100000","quatityBuy":1};
        const cart = JSON.parse(window.localStorage.getItem("cart")) || [];
        const send = {
            data : cart,
        }
        console.log(send);
        // const indexNumber = containsObject(product.id,cart);
        // if(indexNumber>=0){
        //     if(cart[indexNumber].quatity < (cart[indexNumber].quatityBuy) + quatityBuy){
        //         console.log("Không Đủ Hàng")
        //     }else{
        //         cart[indexNumber].quatityBuy = (cart[indexNumber].quatityBuy) + quatityBuy;
        //     }
        // }else{
        //     cart.push(product)
        // }
        // localStorage.setItem('cart', JSON.stringify(cart));
    };

    //////////////////// Cart

    handleAnimationPause = (e) =>{
        const product = {"id":"3","ProductName":"Cây Xanh", "quatity":"20" ,"price":"100000"};
        const cart = JSON.parse(window.localStorage.getItem("cart")) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    handleUpload = e =>{
        console.log(this.state.image);

        // show animation khi an vao Upload File
        if(this._animation){
            this._animation.destroy();
        }
        this._animation = lottie.loadAnimation({
            container: document.getElementById("animationDOM"), // render vao dau
            renderer: 'svg',
            animationData: animationFile, // 
            loop: true,
            autoplay: true,
          })
          //

        const uploadTask = storage.ref(`images/${this.state.image.name}`).put(this.state.image);
        
          uploadTask.on('state_changed', 
            (snapshot) => {
                  // progrss function ....
                  // dang up anh len store voi id khac nhau
                    console.log(`Loading`); // load lai trang nhieu lan
                    const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    this.setState({progress});
                    //
                    
                }, 
                (error) => {
                    // error function ....
                    console.log(error);
                }, 
                () => {
                    // complete function ....
                    uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
                        
                            console.log(downloadURL);
                            this._animation.destroy();
                            // this.setState({
                            //     show:false
                            // })
                            this.setState({url:downloadURL});    
                    })
                });
        // if(e.target.file[0]){
        //     const {image2} = e.target.file[0];
        //     this.setState({
        //         image: image2,
        //     });
        //     console.log(this.state.image);
        // }
    };

    render() {
        const style = {
            height: '100vh',
            display: 'flex',
            flexDirection : 'column',
            alignItems : 'center',
            justifyContent : 'center'
        };
        return (
            <div>
                <div style={style}>
                                {this.state.show ? (
                                    <div  height="300" width="400" id="animationDOM"/>
                                ): null}
                                
                                <button onClick={this.handleAnimation}>Product 1</button>
                                <button onClick={this.handleAnimation2}>Product 2</button>
                                <button onClick={this.handleAnimation3}>Product 3</button>
                                <button onClick={this.handleAnimation4}>Send Cart</button>
                                <button onClick={this.handleAnimationPause}> Pause </button>
                                <button onClick={(e)=>{
                                    this._animation.play()
                                }}> Start</button>
                                <progress value={this.state.progress} max="100"/>

                            
                                <input type="file" onChange={this.handleChangeImage}/>

                                <button onClick={this.handleUpload}>Upload</button>
                                <br/>
                                <img src={this.state.url || 'http://via.placeholder.com/400x300'} alt="Uploaded images" height="300" width="400"/>
                            </div>
            </div>
            
        );
    }
}

export default ImageUpload;