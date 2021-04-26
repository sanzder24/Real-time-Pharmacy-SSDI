import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
  

    return (
        <div className="home">
           <img
           className="home__image" 
           src="https://previews.123rf.com/images/kotoffei/kotoffei1812/kotoffei181200001/113563200-pharmacy-posters-set-with-flat-icons-vector-illustration-for-medical-or-healthcare-presentation-docu.jpg"
           alt=""
           />
           {/* Products */}
           <div className="home__row">
           <Product 
               id="12321341"
               title="Redemsvir Antivirals"
               price={2.99}
               rating={5}
               image="https://www.biospace.com/getasset/77178dc8-8e13-47d6-897c-ad3e7de860bb/"
           />
           <Product 
               id="89893333"
               title="Dexamethasone Steroids"
               price={5.99}
               rating={5}
               image="https://images.indianexpress.com/2020/06/dexamethasone-1200.jpg"
           />
           <Product 
               id="92326678"
               title="Vicks NyQuil and DayQuil SEVERE Cough"
               price={9.99}
               rating={5}
               image="https://www.cvs.com/bizcontent/merchandising/productimages/large/323900017788.jpg"
           />
           </div>
           <div className="home__row">
           <Product 
               id="67893426"
               title="Privigen Antivirals"
               price={9.99}
               rating={5}
               image="https://cdn.sanity.io/images/0vv8moc6/pharmacytimes/a76270bbe85f4d2ead64e99130377938a5167630-415x370.jpg"
           />
           <Product 
               id="73282018"
               title="Black Face mask 30ct"
               price={5.00}
               rating={4}
               image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkEY5s4mA0KWe8lWGkVijEsdLmE6Js79e9sch0nvs_Z6dmyoq8TZz5lsh3F-1KkjJyPmrlNVVn&usqp=CAc"
           />
           <Product 
               id="23281018"
               title="Hand Sanitizer by Purell"
               price={1.99}
               rating={5}
               image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUXa4IMWlbytiE3DLxdKz9qSqh_TkplIq7_gGOYBzs-1nj87C5adXJ0ZlqzONREUASn7x60jg&usqp=CAc"
           />  
           </div>
           <div className="home__row">
           <Product 
               id="32949249"
               title="Bamlanivimab Antibodies"
               price={7.20}
               rating={4}
               image="https://media.npr.org/assets/img/2020/11/10/bam_lilly_ap_20315042063994_custom-4d41d31e7dc8526ad587d24bf0d30426f6cc55d2.jpg"
           />
           <Product 
               id="32729109"
               title="Casirivimab and Imdevimab Injections"
               price={8.99}
               rating={4}
               image="https://www.idstewardship.com/wp-content/uploads/2020/11/Screen-Shot-2020-11-22-at-11.43.54-AM.png"
           />
           </div>

           
        </div>
    )
}

export default Home