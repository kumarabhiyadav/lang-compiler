import { useState } from "react";
import  '../components/input.css'

export default function Input() {
  const selectedLanguage:string= "c";
  const codeSnippit:any = {
    python: `def print_hello():
        print("Hello, World")
print_hello()`,
    java: `public class HelloWorld {
        public static void main(String[] args) {
            // Write your code here
            System.out.println("Hello, Java")
        }
    }`,
    c: `#include<stdio.h> 
int main(){
    printf("Hello, World");
    return 0;
  }
  `,
    javascript: `
  console.log("Hello In Js");
  `,
  };
  let [sourceCode, setSourcecode] = useState(codeSnippit[selectedLanguage]);

  let [output,setOutput] = useState('');

  const handelSubmission = async (event: any) => {
    event.preventDefault();
    console.log(`New data ${sourceCode}`);
    const response: Response = await fetch(`http://localhost:3010/${selectedLanguage}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_code: sourceCode }),
    });
    let outputResponse=await response.json();
    console.log(outputResponse);
    setOutput(outputResponse.data);

  };
  return (
    <div style={{display:'flex', }}>
    <div>
      <form onSubmit={handelSubmission} onChange={(e) => e.target}>
        <div className="col-sm-6 mr-2">
          {/* <textarea
            name=""
            spellCheck={false}
            id=""
            cols={50}
            rows={20}
            value={sourceCode}
            onChange={(e) => setSourcecode(e.target.value)}
          ></textarea> */}
          <div contentEditable={true}
           translate='no'
           className='input-box'
           defaultValue={sourceCode}
           onChange={(e) => setSourcecode("e")}
           >
{sourceCode}
          </div>
        </div>

        <div>
          <button className="btn btn-primary" type="submit">
            Compile
          </button>
        </div>
      </form>
    </div>

    <div className="col-sm-6">
          <textarea
            name=""
            spellCheck={false}
            id=""
            cols={50}
            rows={20}
            value={output}
            readOnly ={true}  
          
          ></textarea>
        </div>
    </div>
  );
}
