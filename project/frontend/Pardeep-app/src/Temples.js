import React from "react";
const Temp=()=>{
    return(
        <>
        <h1 data-aos="zoom-in"s style={{fontFamily:'Brush Script MT',fontSize:'70px',textAlign:'center'}}>Temples in Himachal Pradesh</h1>
      <div className="row">
        <div className="col-lg-12"></div>
        </div>
      <br></br><br></br>
      <div class="row">
            <div class="col-lg-3 text-center p-3"><img data-aos="fade-up" data-aos-duration="3000" src="https://www.tourmyindia.com/blog//wp-content/uploads/2015/04/hidimba-temple-1.jpg" style={{width:'350px',height:'400px',borderRadius:'2%',boxShadow:'10px 10px 10px black'}} />
             <br></br>
             </div> 
            <div class="col-lg-3 text-center p-3"> <img data-aos="fade-down" data-aos-duration="3000" src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Masrur_rockcut_temple.jpg"  style={{width:'350px',height:'500px',borderRadius:'2%',boxShadow:'10px 10px 10px black'}}/>
            </div>
          <div class="col-lg-3 text-center p-3"> <img data-aos="fade-up" data-aos-duration="3000" src="data:image/jpeg;base64,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"  style={{width:'350px',height:'600px',borderRadius:'2%',boxShadow:'10px 10px 10px black'}}/>
           </div>
            <div class="col-lg-3 text-center p-3"><img  data-aos="fade-down" data-aos-duration="3000" src="https://static.toiimg.com/photo/photo/105108985/105108985.jpg?imgsize=141210"  style={{width:'340px',height:'700px',borderRadius:'2%',boxShadow:'10px 10px 10px black'}}/>
            </div>
        </div>
          <br></br>   
     <hr></hr>
      <br></br>
      <div className="row">
   <div class="col-lg-6 text-center p-3">
    <img data-aos="zoom-in" data-aos-duration="3000"  src="https://static.toiimg.com/photo/photo/105108985/105108985.jpg?imgsize=141210" 
    style={{borderRadius:'5px', width:"500px",height:"500px", boxShadow:"5px 5px 10px  5px gray"}}></img></div>
   <div class="col-lg-6 text-center p-3"><h1 style={{fontFamily:'Brush Script MT',fontSize:'70px',textAlign:'center',marginTop:'25%'}}>Jakhoo Temple</h1>
    <p style={{fontFamily:"times new roman"}}>Jakhoo Temple is one such shrine. According to Ramayana, Lord Hanuman stopped at this hill to rest while searching for the Sanjivni Booti to revive his brother Lakshmana. Due to this event, the temple at Jakhoo Hill holds prime significance among pilgrims and tourists.</p>
<br></br>
<button  data-aos="zoom-in"
     data-aos-duration="3000" type="button" class="btn btn-primary" style={{fontFamily:'times new roman',fontSize:'20px'}}>More Detail</button>
     </div></div>

  <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
   <hr></hr>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className="row">
      <div class="col-lg-6 text-center p-3">
      <h1 style={{fontFamily:'Brush Script MT',fontSize:'70px',textAlign:'center',marginTop:'25%'}}>Naina Devi</h1>
    <p style={{fontFamily:"times new roman"}}>This is one of the 51 shaktipeethas (where the severed body parts of Goddess Sati fell) associated with the cult of Goddess Durga. It is believed that this is the location where the eyes of Goddess Sati fell and that is why the temple is called Naina (literally meaning eyes) Devi.</p>
 <br></br>
 <button  data-aos="zoom-in"
     data-aos-duration="3000" type="button" class="btn btn-primary" style={{fontFamily:'times new roman',fontSize:'20px'}}>More Detail</button>
     </div>
 <div class="col-lg-6 text-center p-3">
<img data-aos="zoom-in" data-aos-duration="3000"  src="https://www.astroved.com/astropedia/assets/images/temples/naina-devi.jpg" 
style={{width:'500px',height:'500px',boxShadow:'5px 5px 10px  5px orange',borderRadius:'5px'}}></img></div>
</div><br></br>
<hr></hr>
<div className="row">
   <div class="col-lg-6 text-center p-3">
    <img data-aos="zoom-in" data-aos-duration="3000"  src="https://i0.wp.com/www.aaosikhen.com/wp-content/uploads/2023/08/%E0%A4%AC%E0%A5%88%E0%A4%9C%E0%A4%A8%E0%A4%BE%E0%A4%A5-%E0%A4%AE%E0%A4%82%E0%A4%A6%E0%A4%BF%E0%A4%B0.jpeg?resize=1024%2C730&ssl=1" 
    style={{borderRadius:'5px', width:"500px",height:"500px", boxShadow:"5px 5px 10px  5px gray"}}></img></div>
   <div class="col-lg-6 text-center p-3">
   <h1 style={{fontFamily:'Brush Script MT',fontSize:'70px',textAlign:'center',marginTop:'25%'}}>Bhejnath Temple</h1>
   <p style={{fontFamily:"times new roman"}}>Situated on the banks of the pristine Gomti river, Bajinath lies at an altitude of 1,130 m. Best known for the famous 13th-century temple dedicated to Lord Shiva, who is worshipped as Vaidyanath or the Lord of physicians. The Baijnath temple has been a significant spiritual site ever since its construction in 1204 AD.</p>
<br></br>
<button  data-aos="zoom-in"
     data-aos-duration="3000" type="button" class="btn btn-primary" style={{fontFamily:'times new roman',fontSize:'20px'}}>More Detail</button>
     </div></div>

  <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
   <hr></hr>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className="row">
      <div class="col-lg-6 text-center p-3">
      <h1 style={{fontFamily:'Brush Script MT',fontSize:'70px',textAlign:'center',marginTop:'25%'}}>Chamunda Devi</h1>
    <p style={{fontFamily:"times new roman"}}>The temple, counted among 51 shakti peethas, is dedicated to Chamundeshwari Devi, one of seven matrikas. The legend has it that Chamunda emerged from an eyebrow of Goddess Durga with an aim to kill demons Chanda and Munda. After a fierce battle, Devi killed both these generals of demon kings Shumbha and Nishumbha.</p>
 <br></br>
 <button  data-aos="zoom-in"
     data-aos-duration="3000" type="button" class="btn btn-primary" style={{fontFamily:'times new roman',fontSize:'20px'}}>More Detail</button>
     </div>
 <div class="col-lg-6 text-center p-3">
<img data-aos="zoom-in" data-aos-duration="3000"  src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/1d/a5/71/chamunda-devi.jpg?w=1200&h=-1&s=1" 
style={{width:'500px',height:'500px',boxShadow:'5px 5px 10px  5px orange',borderRadius:'5px'}}></img></div>
</div><br></br>
<hr></hr>

                {/* footer */}
                <div className="row">
      <div className="col-lg-12 text-center p-4" >
        <img src="https://cdn-icons-png.flaticon.com/128/3670/3670124.png" style={{width:'50px',height:'50px'}}/>&emsp;
        <img   src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="" style={{width:'50px',height:'50px'}} />&emsp;
      <img  src="https://cdn-icons-png.flaticon.com/128/3670/3670151.png" style={{width:'50px',height:'50px'}}/>&emsp;
      <img   src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png" style={{width:'50px',height:'50px'}}/>
      
       </div>
    </div>
    <div className="row" >
      <div className="col-lg-3 text-center p-5" style={{backgroundColor:'#3E3A3A'}}> <ul data-aos="fade-up"
     data-aos-duration="3000" style={{listStyle:"none",fontSize:'25px',fontFamily:'times new roman'}}><li style={{fontFamily:"Lucida Handwriting",fontWeight:"bolder",color:"white",fontSize:'40px'}}>Himachal Pradesh</li>
      <li style={{fontSize:'20px',color:'white'}}>Himachal Pradesh came into being as a Union Territory in April 1948 as a result of integration of 30 princely States spread over 27,000 sq.km. In 1954, when another
       C"class state of Bilaspur merged in Himachal Pradesh, its area increased to 28,241 sq.km.</li></ul>

    </div>
      <div className="col-lg-3 text-center p-5" style={{backgroundColor:'#3E3A3A'}}><ul data-aos="fade-up"
     data-aos-duration="3000" style={{listStyle:"none",fontSize:'20px',fontFamily:'times new roman'}}><li style={{fontSize:'40px',fontFamily:"Lucida Handwriting",fontWeight:"bolder",color:"white"}}>Useful Links</li>
      <li style={{color:"white"}}><u>Your Account</u></li>
      <li style={{color:"white"}}><u>Find the place</u></li>
      <li style={{color:"white"}}><u>Information</u></li>
      <li style={{color:"white"}}><u>Help</u></li>
      <li style={{color:"white"}}><u>Services</u></li>
      <li style={{color:"white"}}><u>SocialMedias</u></li>
      <li style={{color:"white"}}><u>Center</u></li>
      <li style={{color:"white"}}><u>Policy</u></li>
      <li style={{color:"white"}}><u>Account</u></li>
      </ul></div>
      <div className="col-lg-3 text-center p-5"  style={{backgroundColor:'#3E3A3A'}}><ul data-aos="fade-up"
     data-aos-duration="3000" style={{listStyle:"none",fontSize:'20px',fontFamily:'times new roman'}}><li style={{fontSize:'40px',fontFamily:"Lucida Handwriting",fontWeight:"bolder",color:"white"}}>Locations</li>
      <li><img src="https://cdn-icons-png.flaticon.com/128/5973/5973651.png"  style={{height:"80px"}}></img></li>
      <li style={{color:"white"}}><u>Shimla</u></li>
      <li style={{color:"white"}}><u>Manali</u></li>
      <li style={{color:"white"}}><u>Hamirpur</u></li>
      <li style={{color:"white"}}><u>kasol</u></li>
      <li style={{color:"white"}}><u>kullu</u></li>
      <li style={{color:"white"}}><u>Palampur</u></li>
      <li style={{color:"white"}}><u>Solanr</u></li>
      <li style={{color:"white"}}><u>Kurfi</u></li></ul></div>
      <div className="col-lg-3 text-center p-5"  style={{backgroundColor:'#3E3A3A'}}><ul data-aos="fade-up"
     data-aos-duration="3000"
     style={{listStyle:"none",fontSize:'20px',fontFamily:'times new roman'}}><li style={{fontSize:'40px',fontFamily:"Lucida Handwriting",fontWeight:"bolder",color:"white"}}>Address</li>
      <li><img src="https://cdn-icons-png.flaticon.com/128/9695/9695171.png" style={{height:"80px"}}></img></li>
      <li style={{color:"white"}}>Vill.Jandmangoli,Teh.Rajpura (PB),patiala,Pin-140417,IND</li><br></br>
      <li style={{color:"white",fontSize:'30px'}}>Help Line No.</li>
      <li style={{color:"white"}}><u>0099445533</u></li>
      <li style={{color:"white"}}><u>6644234502</u></li>
</ul></div>
      </div>
      <div class="footer-copyright text-center py-3 bg-dark" style={{fontFamily:'times new roman',fontSize:'20px'}}> <span style={{color:'white'}}>© 2024 Copyright:</span>
  <a href="">PardeepSingh2002.@gmail.com</a>
</div> 
   </>
    );
}
export default Temp;