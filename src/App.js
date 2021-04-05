import './App.css';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

function App() {
  return (
    <div className="rectangle-top">
      <h1>EMAILS AND NOTIFICATIONS</h1>

      <div className="left-box">
        <div className="casing-box">

         <h2>SCENARIOS</h2>

         <div className="cont-item1">

           <h3>Approvals</h3>
           <ArrowDropDownIcon />
          
        </div>

        <div className="cont-item1">

           <h3>Rejections</h3>
           <ArrowDropDownIcon />
          
        </div>

        <div className="cont-item1">

           <h3>Requested</h3>
           <ArrowDropDownIcon />
          
        </div>

        <div className="cont-item1">

           <h3>In Progress</h3>
           <ArrowDropDownIcon />
          
        </div>


        <div className="cont-item1">

           <h3>Validations</h3>
           <ArrowDropDownIcon />
          
        </div>


        <div className="cont-item1">

           <h3>Creations</h3>
           <ArrowDropDownIcon />
          
        </div>

        <div className="cont-item1">

           <h3>Custom Email</h3>
           <ArrowRightIcon />
          
        </div>


        </div>


       


        

        

      
     </div>


     <div className="right-box">
       <h3>Custom Email</h3>
       

       <div className="heading-line">        

       </div>

       

       <div className="tab1">
         <h3>EMAIL</h3>
         
          

       </div>

       <div className="tab2">
         <h3>TEMPLATES</h3>
       </div>


       <div className="tab1-email">


          <div className="col1">
            <label for="name">Template Name</label>

          </div>

          <div className="col2">
            <input type="text" id="name" ></input>
          </div>


          <div className="col12">
            <label for="lname">Subject</label>
          </div>

          <div className="col13">
            <input type="text" id="lname"></input>
          </div>


          <div className="col14">
            <label for="body">Body</label>

          </div>

          <div className="col15">
            <textarea type="text" id="body" ></textarea> 
          </div>
            





       </div>

      



      
       

       



       
       

      

      
     </div>

    


   

     


     

     
     
    </div>



   
  );
}

export default App;
