/*
 * @Author: xzt
 * @Date: 2019-11-20 11:46:01
 * @LastEditors: xzt
 * @LastEditTime: 2019-11-20 15:11:47
 * @Description: 
 * @FilePath: \react-my-prac\src\components\RouteComponent\MailBox.js
 */
import React from 'react'
// Part 5 与运算符&&
function Mailbox(props){
    console.log(111, props)
    const unreadMessages = props.location.query || '';
    console.log(1)
    return (
        <div>
            <p>Part 5 与运算符&&</p>
            <h4>Hello!</h4>
            {unreadMessages.length > 0 &&
                <h2>
                    You have {unreadMessages.length} unread message.
                </h2>
            }
        </div>
    );
}

// const message = ['react', 'Re:react', 'Re:Re:react']

// ReactDOM.render(
//     <Mailbox unreadMessages={message}/>,
//     document.getElementById('root')
// )

export default Mailbox