import { useState } from "react";

export default function Input(){
   const selectedLanguage  = 'python';
   const codeSnippit= {
 'python':"print('Hello World')"
   };
   const handelSubmission= (event:any) =>{
       event.preventDefault();
       console.log(`New data ${sourceCode}`);

   }
    const [sourceCode,setSourcecode]  = useState(codeSnippit.python);
    return (
    
      <div >
  <form onSubmit={handelSubmission}  
  onChange={(e) => e.target}  
  >

          <div className="col-sm-6"> 

      <textarea name="" id="" cols={30} rows={10}
      value={sourceCode}
      
      ></textarea>
          </div>

          <div>
              <div className="btn btn-primary">Compile</div>
          </div>
      </form>

      </div>

    
    );
} 