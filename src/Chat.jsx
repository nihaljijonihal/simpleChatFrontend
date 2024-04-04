
import './Chat.css'
import io from "socket.io-client"
import { useState, useEffect, useRef } from 'react'
import { nanoid } from "nanoid"




const socket = io.connect("https://simplechatbackend.onrender.com/")
const userId = nanoid(4)
function Chat({ userName, setUserName,userIcon,setUserIcon}) {




    const [message, setMessage] = useState('')
    const [chat, setChat] = useState([])
    const bottomOfChat = useRef(null)


//SENDING MESSAGE
    const sendChat = () => {
         socket.emit("chat", { message: message, userName: userName,userId:userId,type:"message",icon:userIcon })
        //socket.emit("chat", { message: message, userName: userName,userId:userId})
        setMessage("");
    };
  
    

//LISTENING
    useEffect(() => {


        socket.on("chat", (payload) => {
            setChat(prevChat => [...prevChat, payload]);
        });
        
        //NEW USER TOST
        socket.on("newUserToast", ({newUserName,newUserId}) => {
            // if(userId!=newUserId)
            setChat(prevChat => [...prevChat, { message: `${newUserName} joined the chat.`, userName: "",userId:"",type:"join" ,icon:""}]);
            
        //  alert(`New User Id ${newUserId} and Name ${newUserName}`)
        })
    //USER LEFT TOST
        socket.on("userLeftToast", ({ leftUserName, leftUserId }) => {
            setChat(prevChat => [...prevChat, { message: `${leftUserName} left the chat.`, userName: "",userId:"",type:"left",icon:"" }]);
          
       
        })
   

    },[socket])
    useEffect(() => {
        console.log("🚀 ~ socket.on ~ chat:", chat)
    }, [chat])
    

//LEAVING


//JOINING
    useEffect(() => {
        socket.emit("chatJoin", { userName: userName,userId:userId })
        return () =>{
            socket.emit('disconnect',{userName: userName,userId:userId });
            socket.off();
          }
    }, [])



//SCROLLING
    useEffect(() => {
        bottomOfChat.current?.scrollIntoView()
    }, [chat])
    
    
    return (
        <>
    
    
           <div className='containerr' >
                <div className='chatbox'>
                        <div className='mainChatHeader d-flex align-items-center'><img style={{height:"3.4rem"}} src={userIcon} alt="awdawd" /><h2 style={{overflow:"hidden"}} className='fw-bolder ms-3'>{userName}</h2></div>
                    <div className=' chat'>
                       

                     
                            
                       <div className='chatBody'>
                            {chat.map((payload, index) =>{
                                return(<div key={index}>
                                {payload.type==="message"&&( payload.userId == userId?
                                            <div className='sendMsgOuter'>
                                            <div className='sendMsg msg'>{payload.message}</div>
                                            </div>
                                            :
                                            <div className='recMsgOuter'> 
                                                <div className='resMsgHeadder'>
                                                <img className='profileIcon' src={payload.icon} alt="aw" />
                                             <div className='recMsgName msgName'>{payload.userName}</div>
                                                    </div>
                                            <div className='recMsg msg'>{payload.message}</div> </div>
                            )}
                                {payload.type==="join"&&( 
                                    <div className='toastNotificationOuter'><div className='toastNotification'>{payload.message}</div></div>
    
                                )}
                                {payload.type==="left"&&( 
                                    <div className='toastNotificationOuter'><div className='toastNotification'>{payload.message}</div></div>
    
                                )}
                                </div>)
    
    
                                })}
    
                                          
                                            {/* <div className='recMsgOuter'> 
                                            <div className='resMsgHeadder'>
                                                <img className='profileIcon' src={icon1} alt="awdawd" />
                                                 <div className='recMsgName msgName'>Nihal</div>
                                            </div>
                                            <div className='recMsg msg'>awjhgdkga  khgawgda ihgjghawd khghggwad</div> </div>
                        
                                            <div className='toastNotificationOuter'><div className='toastNotification'>awjhgdkga  khgawgda ihgjghawd khghggwad</div></div>
    
    
                                     */}
    
    
    
                                       
                                   <div ref={bottomOfChat}/>
                       </div>
                    </div>
                    <div className=' inputBox d-flex'>
                    

                        <input className='form-control rounded me-3' type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Message'/>
                        <button style={{overflow: "hidden"}} onClick={sendChat} className='btn btn-primary d-flex align-items-center pe-3'>Send</button>
                        
                        {/* <button className='btn btn-primary rounded-circle d-flex  justify-content-center' onClick={sendChat}><i className
                        ="fas fa-paper-plane sendIcon"></i></button> */}
    
                    </div>
                </div>
           </div>
          
        </>
    )
    }
    
    export default Chat


 

//     return (
//         <>


//            <div className='containerr' >
//                 <div className='chatbox'>
//                     <div className=' chat'>
//                         <div className='box'></div>
//                         {/* {chat.map((payload, index) => (
//                                 <div key={index}>
//                                     <h4>{payload.userName} : {payload.message}</h4>
                                    
//                                 </div>))}
//                                <div ref={bottomOfChat}/> 
//                                */}
//                                <div className='sendMsg msg'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
//                                <div className='recMsg msg'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
//                     </div>
//                     <div className=' inputBox'>
//                         <input className='messageBox form-control' type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
//                         <button className='btn btn-primary rounded-circle d-flex  justify-content-center' onClick={sendChat}><i class="fas fa-paper-plane sendIcon"></i></button>
    
//                     </div>
//                 </div>
//            </div>
//         </>
//     )
// }

// export default Chat


