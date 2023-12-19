import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{margin : 0 ; padding : 0 ; box-sizing : border-box}
header{
    position:relative;
}
.section{
    padding : 30px 0;
}
.stop_scrolling{
    height : 100%;
    overflow : hidden;
}
.button__1 {
    padding : 5px 10px;
    font-size : 16px;
    border : none;
    background : #ff0094;
    color : white;
}
/* --hero section  */
.hero{
display: flex;
justify-content : space-between;
align-items :center;
}
.hero__left{
width: 47%;
}
.hero__right{
width : 47%; 
}
.hero__right img{
max-width: 500px;
width : 100%;
height: 100%;
margin-left: auto;
display : block;
}
.hero__left h1{
    color: #aa34cb;
    text-shadow: 3px -2px 3px #a48bdc;
    letter-spacing: 3px;
    margin-top: 15px;
    font-size: 35px;
}
.hero__left h3{
    color: #ff0094;
}
.hero__left p{
    color: #5a5a5a;
    margin-top: 10px;
    margin-bottom  :25px;
}
.hero__left button{
    background: #aa34cb;
    border: none;
    padding: 9px 10px;
    color: white;
    font-weight: bold;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 15px;
    cursor : pointer;
}
 /* --service section  */
 .service{
    display : flex;
    justify-content : center;
    align-items : center;
    gap: 30px;
 }
 .service__Cards{
    width : 25%;
    ${'' /* min-height : 260px; */}
    background : #f2f4ff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
 }
 .service__Cards p{
    text-align : center;
 }
 .service__centerCard{
    width : 25%;
    min-height : 260px;
   
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
 }
.service__centerCard__child{
    width : 100%;
    min-height: 100px;
    background : #f2f4ff;
    display: flex;
    justify-content: center;
    align-items: center;
    gap : 15px;
}
.service__icons {
    background: white;
    padding: 12px 15px;
    border-radius: 35px;
}
.service__icons svg {
    color: #4242dcde;
    font-size: 23px;
}
 /* --service section  */
 .companies {
    background: #f2f4ff;
    height: 260px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    font-size: 20px;
    font-weight: bold;
    color: #00000091;
}
.companies__details{
    display : flex;
    justify-content: space-between;
    width : 60%;
}
.companies__details img {
    width: 85px;
}
 /* --contact section  */
    .contact h2{
        text-align: center;
        margin-bottom: 30px;
    }
.contact__form form {
    max-width: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 0 auto;
    margin-top: 30px;
}   
.contact__form input ,textarea{
    padding : 5px;
}
.contact__form__send{
    width : 100px;
    background: #aa34cb;
    border: none;
    color: white;
    font-weight: bold;
    font-size: 16px;
}

/* --footer section  */

.section.footer{
    background : #040445;
    padding-bottom : 15px;
    color : white;
    position : relative;
    margin-top: 50px;
}
.footer .getStarted{
    position: absolute;
    top: -27px;
    left: 50%;
    transform: translate(-50%, 0);
    background: #ffffff;
    box-shadow: 0 0 15px #040445;
    color: black;
    max-width: 760px;
    width: 100%;
}
.getStarted__wrapper {
    display: flex;
    justify-content: space-between;
    align-items : center;
    padding: 20px;
}
.getStarted p{
    font-weight : bold;
}
.footerCardParent{
    display : flex;
    justify-content : center;
    align-items : start;
    flex-wrap : wrap;
    gap : 15px ;
    margin-top : 80px;
    margin-bottom : 45px;
}
.footerCard{
    max-width: 250px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
   
}
.footerCard p:nth-child(1){
    font-size : 17px;
    font-weight : 400;
    margin-bottom :25px;
}
.footer p{
    line-height : 22px;
    font-size: 15px;
}
.footerCard input{
    padding: 5px 5px;
    margin-bottom : 23px;
}
.footer__button {
    padding : 5px 10px;
    font-size : 16px;
    border : none;
    background : #5973f4;
    color : white;
    cursor : pointer;
}
.footer__button a{
    text-decoration : none;
    color : white;
}
.footer__icons a {
    font-size: 25px;
    text-decoration: none;
    color: white;
    border: 1px solid white;
    margin-right: 12px;
    border-radius: 16px;
    padding: 5px 6px 1px 6px;
}
.callUs a{
    color : white;
    text-decoration : none;
}
.footer__policy{
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap : wrap;
    margin-top: 15px;
}
 /* --Error page  */
 .errorPage h2{
    font-size: 45px;
 }
 .errorPage h2 , .errorPage h3 , .errorPage p , .errorPage button{
    margin-bottom: 15px;
    text-align: center;
 }
 .errorPage button{
    margin: 0 auto;
    display: block;
    margin-top : 25px;
 }
 .errorPage a{
    text-decoration : none;
    color : white;
 }
 /* --featureProducts section  */
 .featureProducts h3{
    font-weight: 400;
 }
 .featureProducts h2{
    margin-bottom: 30px;
    margin-top: 3px;
 }
 .product_row{
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 15px;
 }
 .product_row a{
    text-decoration : none;
    color : unset;
 }
 .imageWrapper {
    max-width: 300px;
    width: 100%;
        height: 230px;
    position: relative;
}
.imageWrapper img{
    width : 100%;
    height : 100%;
}
.imageWrapper h3 {
    position: absolute;
    top: 4%;
    right: 14%;
    background: white;
    border-radius: 15px;
    padding: 1px 12px;
    padding-bottom: 6px;
    box-shadow: 0 0 9px 0px black;
    font-size: 16px;
}
.name_price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 7px;
    font-weight: 500;
}
.name_price span{
    color : #626ab8;
}
.imageWrapper::after {
    content: '';
    width: 0px;
    height: 100%;
    background: white;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0.5;
    transition: 1s linear;
}
.imageWrapper:hover.imageWrapper::after{
    max-width : 300px;
    width : 100%;
}
 .loading_image{
    width: 450px;
    height: 300px;
    display: block;
    margin: 0 auto;
 }
 // --single Product Page ----

 .singleProduct__row{
    display : flex;
    justify-content : space-between;
    align-items : center;
    gap: 15px;
 }
 .singleProduct__left{
    display : flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    max-width: 600px;
    width: 100%;
 }
 .singleProduct__right {
    max-width: 550px;
    width: 100%;
}
.smallImages {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    justify-content: center;
}
 .smallImages img{
    width: 95px;
    height: 95px;
 }
 .bigImage{
    max-width : 350px;
    width : 100%;
    height: 320px;
 }
 .bigImage img{
    width: 100%;
    height: 100%;
 }
 .singleProduct__right h2 {
    font-weight: 400;
    margin-bottom: 12px;
}
.rating {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 5px;
}
.rating svg {
    font-size: 25px;
    color: orange;
}
p.mrp {
    font-weight: bold;
    color: green;
    margin-bottom: 10px;
}
.singleProduct__right h3 {
    color: #5973f4;
    margin-bottom: 10px;
}
.description{
    color: grey;
    margin-bottom: 15px;
    max-width: 435px;
    width: 100%;
}
.convenience {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin-bottom: 15px;
    text-align: center;
}
.convenience svg{
    font-size: 25px;
}
.convenience p{
    font-size: 14px;
    font-weight: 500;
}
.availavle_stock{
    color: grey;
    margin-bottom: 10px;
    font-size: 17px;
}
.availavle_stock span{
    color : black;
    font-weight : 500;
}
hr{
    font-weight: bold;
    width: 100%;
    color: black;
    height: 2px;
    background: black;
    margin: 14px 0;
}
.colors {
    font-weight: 500;
    font-size: 20px;
}
.colors .wrapperBtn{
    display : flex;
    align-items : center;
    margin-top: 6px;
}
.colors button{
    background-color: lightblue;
    border-radius: 50%;
    padding: 0px 13px;
    margin-left: 10px;
    height: 26px;
    width: 26px;
    border: none;
    position: relative;
    opacity : 0.4;
    cursor : pointer;
}
.colors button.active{
    opacity : 1;
}
.colors button:hover{
    opacity : 1;
}
.colors button svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: white;
}
.addProduct {
    margin: 15px 0;
    display: flex;
}
.addProduct button {
    background: none;
    border: none;
    background: none;
    font-size: 20px;
    color: darkslategrey;
    cursor : pointer;
}
.addProduct p {
    font-size: 21px;
    margin: 0 13px;
    padding-bottom: 5px;
}
//PageNavigation ------------
.pageNavigation{   
    display: flex;
    align-items: center;
    gap: 10px;
}
.pageNavigation a{
    text-decoration: none;
}
.pageNavigation span{
    font-size: 20px;
}
//Product section css 
.AllProduct .row {
    display : flex;
    justify-content : space-between;

}
.AllProduct .row .left{
    width : 280px;
}
.AllProduct .row .right{
    max-width : 900px;
    width : 100%;
}
.CardList_parent{
    display : flex;
    justify-content : space-around;
    align-items : center;
    gap : 20px;
    flex-wrap : wrap;
}
.AllProducts__Card{
    max-width: 250px;
    width: 100%; 
}
.CardList_parent .imageWrapper{
    max-width: 250px;
    width: 100%;
    min-height: 165px;
    height: unset;
    display: flex;
    align-items: center;
    justify-content: center;
}
.CardList_parent .imageWrapper img{
    min-height : 165px;
 }
 .AllProduct .searchPList{
    border: none;
    box-shadow: 2px 2px 6px;
    padding: 5px;
 }
 .AllProduct h2 {
    font-weight: 500;
    margin-top: 10px;
    margin-bottom: 10px;
}
 .AllProduct select {
    width: 170px;
    padding: 5px;
}
 .AllProduct p {
    color: #000000a1;
    margin-bottom: 5px;
}
 .AllProduct button.clearFilter {
    border: none;
    background: #ff000078;
    color: white;
    padding: 5px;
    font-weight: 600;
    margin-top: 10px;
}
.filterColor {
    display: flex;
    gap: 7px;
}
.filter_sec form button {
    display: block;
    background: unset;
    border: none;
    border-bottom: 1px solid;
    margin-top: 10px;
    font-size: 16px;
    cursor: pointer;
    color: #000000a1;
}

.filterColor.colors button:nth-child(1) {
    color: black;
    opacity: 1;
    border: unset;
    padding: unset;
}

//List Product
.list_product .featureProducts__row{
    border: 1px solid grey;
    padding: 15px 40px;
    margin-bottom: 25px;
}
.list_product .featureProducts__Card {
    display: flex;
    justify-content: space-between;
    gap: 30px;
} 
    
.list_product .name_price{
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
} 
button.read_more {
    padding: 6px 12px;
    background: white;
    border: 2px solid #b8c2ff;
    color: #626ab8;
    border-radius: 10px;
    cursor : pointer;
}
.list_product .name_price p:nth-child(1) {
    font-weight: 700;
    color: black;
}
//Sort Component
.sorting {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
.serach__price_grid{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
.sortingIcons svg {
    font-size: 24px;
    margin-right: 15px;
    cursor : pointer;
    padding: 5px;
    background: gainsboro;
}
.sortingIcons {
    display: flex;
    align-items: center;
}
.filter_product_qty{
    margin-top: unset;
    margin-bottom: unset;
    font-weight: bolder;
    text-shadow: 2px 2px 6px burlywood;
    font-family: monospace;
    font-size: 22px;
    text-align : center;
    margin-bottom : 20px !important;
}
.sortingIcons .active{
    background : #5973f4;;
    color : white;
}
//Cart page
.userInfo {
    margin-bottom: 25px;
    display: flex;
    gap: 20px;
}
.cartNav .row {
    display: flex;
    justify-content: space-around;
}

.cartNav h3 {
    font-weight: 400;
    max-width: 220px;
    width: 100%;
    text-align: center;
}

.cartInfoSingle {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
}

.cartInfoItem {
    max-width: 220px;
    width: 100%;
    display: flex;
    justify-content: center;
}

.cartInfo p {
    max-width: 220px;
    width: 100%;
    text-align: center;
}
.nameColor .color{
    display: flex;
    align-items: center;
}
.nameColor span{
    padding: 0px 10px;
    border-radius: 11px;
    margin-left: 10px;
    display: block;
    height: 20px;
    width: 20px;
    margin-top: 5px;
}

.cartInfo .addProduct {
    max-width: 220px;
    width: 100%;
}
.cartInfo .remove{
    max-width: 220px;
    width: 100%;
}
.cartInfo .forCart{
    max-width: 220px;
    width: 100%;
}
.cartInfo .forCart .addProduct{
    width: 100px;
    margin: 0 auto;
}
.cartInfoItem img{
    width: 50px;
    height: 34px;
    margin-right: 12px;
}
.cartInfo .remove svg {
    max-width: 220px;
    width: 100%;
    cursor: pointer;
    color: red;
    font-size: 21px;
}
.cartInfoItem .row{
    max-width: 175px;
    width: 100%;
    justify-content: start;
}
.nameColor p{
    text-align : left;
}
.continueShop{
    display: flex;
    justify-content : space-between;
    align-items : center;
    margin-top : 40px;
}
.continueShop a{
    padding: 10px 10px;
    font-size: 16px;
    border: none;
    background: #5973f4;
    color: white;
    cursor: pointer;
    text-decoration: none;
}
.continueShop button{
    padding: 10px 10px;
    font-size: 16px;
    border: none;
    background: #f4597a;
    color: white;
    cursor: pointer;
}
.no_cart {
    font-family: math;
    height: 220px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.orderTotalPrice{
    display : flex;
    justify-content : right;
    margin-top: 20px;
}
.orderTotalPrice .row{
    display : block;
    background-color: #80808012;
    padding: 20px;
    max-width: 247px;
    width: 100%;
}
.orderTotalPrice .row div{
    display : flex;
    justify-content : space-between;
    align-items: center;
    margin-top: 20px;
}
.orderTotalPrice p {
    color: #0000008f;
    width: 100%;
}
.orderTotalPrice .row h3{
    text-align : right;
}
 
@media screen and (max-width: ${({ theme }) => theme.media.mobile}){
   
    // Navbar ------
    .bxpOIp .navBar a {
    font-size: 20px;
    }
    .bxpOIp .cart_trolley_icon {
    font-size: 24px !important;
    }
    // Service section  
    .service {
    flex-direction: column;
    }
    .service__Cards{
        width : 270px !important;
    }
    /* --hero section  */
    .hero {
    flex-direction: column-reverse;
    gap: 30px;
    }
    .hero__left {
    max-width: 346px;
    width: 100%;
    }
    .hero__right {
    max-width: 270px;
    width: 100%;
    }
    // Our feature 
    .product_row{
        flex-direction : column;
    }
    .featureProducts img{
    width: 250px;
    height: 205px;
    }

    // Companies section

    .companies__details{
        width: 100%;
        justify-content : center;
        gap: 10px;
        flex-wrap : wrap;
        
    }
    .companies__details img{
        width: 55px;
    }

    //get started
    .getStarted__wrapper {
    padding: 20px 0 20px 0;
    }

   // footer 
   .footer__policy {
    gap: 7px;
    text-align :center;
    }

    // cart page
    .continueShop{
        flex-direction: column;
        gap: 20px;
    }
    .orderTotalPrice {
    justify-content: center;
    }
    .items_info{
        width : 738px
    }
    .items_info__wrapper{
        width: 100%;
        overflow-x: scroll;
        padding-bottom: 10px;
    }
    .right_scroll{
    font-size: 17px;
    color: #808080c2;
    text-align: right !important;
    max-width: 310px !important;
    }

    //sorting section 
    .sorting{
        flex-wrap: wrap;
        justify-content: right;
        gap : 20px;
    }
    .sortingIcons svg{
        margin-right : unset;
    }
    .show_filter{
    background: darkblue;
    padding: 3px 15px;
    color: white;
    letter-spacing: 0.5px;
    border: none;
    cursor : pointer;
    }
    .filter_doneBtn{
    position: absolute;
    right: 15px;
    top: 24px;
    color: green !important;
    font-size: 28px !important;
    margin-top: unset !important;
    border: none !important;
    }
    

    //products page
    .allPro_sec{
        position : relative;
    }
    .AllProduct .row .left {
    ${'' /* width: 0;
    overflow: hidden; */}
    transition: 1s linear;
    }
    .AllProduct .row .left.remove_act{
    position: absolute;
    left : 0;
    top: 0;
    overflow: hidden;
    z-index: 10;
    background: white;
    width: 0;
    padding: 0;
    }
    .AllProduct .row .left.active {
    position: absolute;
    left : 0;
    top: 0;
    overflow: hidden;
    z-index: 10;
    background: white;
    width: 100%;
    padding: 0 20px;
    }

    // list products
    .imageWrapper {
    max-width: 120px;
    height: 100px;
    }
    .list_product .featureProducts__Card {
    flex-direction: column;
    gap: 15px;
    }

    
    // single product page
    .singleProduct__row{
        flex-direction : column;
        margin-top : 20px;
    }
    .bigImage {
    height: 215px;
    }

    //feauture product
    .featureProducts__Card .imageWrapper{
        max-width: 250px;
        height: 160px;
    }
    .featureProducts__Card .imageWrapper {
    height: 100%;
    }

}

`