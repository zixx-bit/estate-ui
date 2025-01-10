import React, { useState } from 'react'
import "./chat.scss"


const Chat = () => { 
  const [chat, setChat] = useState (true);

  return (  
     <div className='chat'>
    {/* Messages */}
        <div className='messages'>
        <h1>Messages</h1>
            <div className='message'>
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=''/>
            <span>John Doe</span>
            <p>
            Array methods have different behaviors when encountering...
            </p>
            </div>
            
            <div className='message'>
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=''/>
            <span>John Doe</span>
            <p>
            Array methods have different behaviors when encountering...
            </p>
            </div>
                 
            <div className='message'>
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=''/>
            <span>John Doe</span>
            <p>
            Array methods have different behaviors when encountering...
            </p>
            </div>

            <div className='message'>
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=''/>
            <span>John Doe</span>
            <p>
            Array methods have different behaviors when encountering...
            </p>
            </div>

            <div className='message'>
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=''/>
            <span>John Doe</span>
            <p>
            Array methods have different behaviors when encountering...
            </p>
            </div>
                 
            <div className='message'>
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=''/>
            <span>John Doe</span>
            <p>
            Array methods have different behaviors when encountering...
            </p>
            </div>

            <div className='message'>
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=''/>
            <span>John Doe</span>
            <p>
            Array methods have different behaviors when encountering...
            </p>
            </div>
         </div>
         
        {/* chat box */}
        
      {chat  && (
        <div className='chatBox'>
          <div className='top'>
            <div className='user'>
              <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  alt=''/>
              John Doe
            </div>
            <span className='close' onClick={ ()=> setChat(null) }>X</span>
         </div>
          <div className='center'>
            <div className='chatMessage left'>
              <p>vsycucoekcdncnidhvjcnjxn  r</p>
              <span>1 hour ago</span>
            </div>
            <div className='chatMessage own right'>
              <p>vsycucoekcdncnidhvjcnjxn  </p>
              <span>1 hour ago</span>
            </div>
            <div className='chatMessage left'>
              <p>vsycucoekcdncnidhvjcnjxn  </p>
              <span>1 hour ago</span>
            </div>
            <div className='chatMessage own right'>
              <p>vsycucoekcdncnidhvjcnjxn </p>
              <span>1 hour ago</span>
            </div>
            <div className='chatMessage left'>
              <p>vsycucoekcdncnidhvjcnjxn </p>
              <span>1 hour ago</span>
            </div>
            <div className='chatMessage own right'>
              <p>vsycucoekcdncnidhvjcnjxnb  </p>
              <span>1 hour ago</span>
            </div>
            <div className='chatMessage left'>
              <p>Hello jane, how are you? </p>
              <span>1 hour ago</span>
            </div>
            <div className='chatMessage own right'>
              <p>Good morning john doe. Is the house available?
               </p>
              <span>1 hour ago</span>
            </div>
     
          </div>
          <div className='bottom'>
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>  
        )}
    </div>
    
  )
}

export default Chat