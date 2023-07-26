import React, {useState, useEffect} from 'react'
import "./ChatBody.css"
import test from "../../images/download.jpeg"

const ChatBody = ({ responseList }) => {

  return (
    <div className='message_body'>
      <div className='message_screen'>
        {responseList?.map((msg, index) => {
          return (
            (msg?.msg_left || msg?.msg_right) &&
            <div className='bot_chat' key={index}>
              <div className={`chat_message ${msg?.msg_left ? "chat_bot_one" : "chat_bot_two"}`}>
                <div className={`user_img ${msg?.msg_left ? "user_incoming" : "user_sent"}`}> <span className="from_right user_icon_body">{msg?.msg_left ? "C" : "U"}</span></div>
                <div className='user_message'>
                  <div className={`chat_bot_message ${msg?.msg_left ? "chat_bot_white" : "chat_bot_green"}`}>{msg?.msg_left ? msg?.msg_left : msg?.msg_right}</div>
                </div>
              </div>
            </div>
          )
        }
        )}
      </div>
    </div>
  )
}

export default ChatBody
