import React from 'react'
// Part 5 与运算符&&
function Mailbox(props){
    const unreadMessages = props.unreadMessages;
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