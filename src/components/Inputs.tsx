import { useState } from "react";

export default function Input() {

    



  const selectedLanguage = "python";
  const codeSnippit = {
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
    javaScript: `
console.log("Hello In Js");
`,
  };

  const handelSubmission = async (event: any) => {
    event.preventDefault();
    console.log(`New data ${sourceCode}`);
  const response:Response = await fetch('http://localhost:3010/python',
         {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ source_code:sourceCode })
        },
    );
    console.log(response.body);
  };
  let [sourceCode, setSourcecode] = useState(codeSnippit[selectedLanguage]);
  return (
    <div>
      <form onSubmit={handelSubmission} onChange={(e) => e.target}>
        <div className="col-sm-6">
          <textarea
            name=""
            spellCheck={false}
            id=""
            cols={50}
            rows={20}
            value={sourceCode}
            onChange={(e) => setSourcecode(e.target.value)}
          ></textarea>
        </div>

        <div>
          <button className="btn btn-primary" type="submit">
            Compile
          </button>
        </div>
      </form>
    </div>
  );
}
