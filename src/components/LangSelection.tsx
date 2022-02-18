import pyton from '../assets/python.jpg'

export default function LangSelection(){
    return (
        <div>
        <div className="col"style={{marginRight:'1rem'}}>

            <div className='border p-1 mb-4' >
            <img src="https://img.icons8.com/color/48/000000/python--v2.png"/>
            </div>
            <div className='border p-1 mb-4'>
            <img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v2.png"/>            </div>
          <div className='border p-1 mb-4'>
          <img src="https://img.icons8.com/color/48/000000/c-programming.png"/>
            </div>
            <div className='border p-1 mb-4'>
            <img src="https://img.icons8.com/color/48/000000/javascript--v2.png"/>
            </div>

        </div>
        </div>
    );
}