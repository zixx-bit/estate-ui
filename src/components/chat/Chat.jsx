import React, { useContext, useEffect, useRef, useState } from "react";
import "./chat.scss";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import { format } from "timeago.js";
import { SocketContext } from "../../context/SocketContext";

const Chat = ({ chats }) => {
  const [chat, setChat] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const { socket } = useContext(SocketContext);
  const [onlineUser, setOnlineUser] = useState(null);
  // console.log(chats)

  useEffect(() => {
    if (socket) {
      socket.on("onlineUser", (user) => {       
        setOnlineUser(user);
      });
  
      // return () => {
      //   socket.off("onlineUser");
      // };
    }
  }, [socket]);

  const messageEndRef = useRef();
  useEffect(() =>{
    messageEndRef.current?.scrollIntoView({ behavior: "smooth"})
  }, [chat])

  const handleOpenChat = async (id, receiver) => {
    try {
      const res = await apiRequest("/chats/" + id);
      setChat({...res.data, receiver});
      console.log(chats.receiver)
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitMessage = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const text = formData.get("text");
    if (!text) return;
    try {
      const res = await apiRequest.post("/messages/" + chat.id, { text });
      setChat((prev) => ({ ...prev, messages: [...prev.messages, res.data] }));
      e.target.reset();
      socket.emit("sendMessage", {
        receiverId: chat.receiver.id,
        data: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    const read = async () =>{
      try {
        await apiRequest.put("/chats/read" + chat.id);
      } catch (error) {
        console.log(error)
      }
    }

    if ((chat && socket)) {    
      socket.on("getMessage", (data)=>{
        if (chat.id === data.chatId) {
          setChat((prev)=> ({...prev, messages:[...prev.messages, data]}))
          read();
        }
      })
    }
    return () =>{
      socket.off("getMessage");
    };
  }, [socket, chat])


  return (
    <div className="chat">
  {/* <button onClick={testSocket}>test socket</button> */}
      {/* Messages */}
      <div className="messages">
        <h1>Messages</h1>
        {chats?.map((c) => (
          <div
            className="message"
            key={c.id}
            style={{
              backgroundColor: c.seenBy.includes(currentUser.id) || chat?.id === c.id
                ? "white"
                : "#fecd514e",
            }}
            onClick={() => handleOpenChat(c.id, c.receiver)}
          >
          <div className="avatarStatusWrapper">
            <img src={c.receiver.avatar || "/noavatar.jpg"} alt="" />
                {/* {onlineUser.some ((u)=> u.userId === c.receiver.id) ? (
               <span className="onlineDot" />
                 ) : ""} */}

                     {onlineUser && (
      <span className="onlineDot" />
    )}

            </div>
            <span>{c.receiver.username}</span>
            <p>{c.lastmessage}</p>
          </div>
        ))}
      </div>

      {/* chat box */}
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img src={chat.receiver.avatar || "noavatar.jpg"} alt="" />
              {chat.receiver.username}
            </div>
            <span className="close" onClick={() => setChat(null)}>
              X
            </span>
          </div>

          <div className="center">
            {chat.messages.map((message) => (
              <div
                key={message.id}
                className={
                  message.userId === currentUser.id
                    ? "chatMessage own right"
                    : "chatMessage left"
                }
              >
                <p>{message?.text}</p>
                <span>{format(message.createdAt)}</span>
              </div>
            ))}
            <div ref={messageEndRef}></div>
          </div>

          <div className="bottom">
            <form onSubmit={handleSubmitMessage}>
              <textarea name="text"></textarea>
              <button>
                Send
                <span>
                  <img src="/send1.png" />
                </span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
