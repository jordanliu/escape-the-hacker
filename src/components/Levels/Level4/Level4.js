import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import "./Level4.scss"

const Level4 = () => {
  const history = useHistory()
  const [message, setMessage] = useState("")

  const handleOnSubmit = (e) => {
    e.preventDefault()
    let text = message.toString().toLowerCase()
    let answer = "social engineering"
    if (text === answer) {
      console.log("true")
      history.push("/level/5")
    } else {
      console.log("false")
    }
  }

  return (
    <div className="level4-wrapper">
      <div className="page">
        <div className="marvel-device nexus5">
          <div className="top-bar"></div>
          <div className="sleep"></div>
          <div className="volume"></div>
          <div className="camera"></div>
          <div className="screen">
            <div className="screen-container">
              <div className="status-bar">
                <div className="time"></div>
                <div className="battery">
                  <i className="zmdi zmdi-battery"></i>
                </div>
                <div className="network">
                  <i className="zmdi zmdi-network"></i>
                </div>
                <div className="wifi">
                  <i className="zmdi zmdi-wifi-alt-2"></i>
                </div>
                <div className="star">
                  <i className="zmdi zmdi-star"></i>
                </div>
              </div>
              <div className="chat">
                <div className="chat-container">
                  <div className="user-bar">
                    <div className="back">
                      <i className="zmdi zmdi-arrow-left"></i>
                    </div>
                    <div className="avatar">
                      <img
                        src="data:image/jpeg;base64,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"
                        alt="Avatar"
                      />
                    </div>
                    <div className="name">
                      <span>Pablo (Old Friend)</span>
                      <span className="status">online</span>
                    </div>
                    <div className="actions more">
                      <i className="zmdi zmdi-more-vert"></i>
                    </div>
                    <div className="actions attachment">
                      <i className="zmdi zmdi-attachment-alt"></i>
                    </div>
                    <div className="actions">
                      <i className="zmdi zmdi-phone"></i>
                    </div>
                  </div>
                  <div className="conversation">
                    <div className="conversation-container">
                      <div className="message received">
                        Hey man, do you remember me? We went to primary school
                        together.
                        <span className="metadata">
                          <span className="time">10:00</span>
                        </span>
                      </div>
                      <div className="message sent">
                        For sure, man. I remember when you fell in that pool and
                        you were crying for days. How are you? It's been a
                        while.
                        <span className="metadata">
                          <span className="time">10:15</span>
                          <span className="tick">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="15"
                              id="msg-dblcheck-ack"
                              x="2063"
                              y="2076"
                            >
                              <path
                                d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"
                                fill="#4fc3f7"
                              />
                            </svg>
                          </span>
                        </span>
                      </div>
                      <div className="message received">
                        <span id="random">
                          I'm doing great, so hey! How's your mom? She still
                          lives at 100 Mona Road and she's about 60, now, right?
                        </span>
                        <span className="metadata">
                          <span className="time">10:15</span>
                        </span>
                      </div>
                      <div className="message sent">
                        That's a weird question, how do you even know where my
                        mother lives and her age? You a stalker or something?
                        <span className="metadata">
                          <span className="time">10:16</span>
                          <span className="tick">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="15"
                              id="msg-dblcheck-ack"
                              x="2063"
                              y="2076"
                            >
                              <path
                                d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"
                                fill="#4fc3f7"
                              />
                            </svg>
                          </span>
                        </span>
                      </div>
                      <div className="message received">
                        <span id="random">
                          WHAT??? STALKER? How dare you accuse me of that, my
                          mom is friends with your mom! She was just trying to
                          get back in contact with her.
                        </span>
                        <span className="metadata">
                          <span className="time">10:17</span>
                        </span>
                      </div>
                      <div className="message sent">
                        Oh.
                        <span className="metadata">
                          <span className="time">10:18</span>
                          <span className="tick">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="15"
                              id="msg-dblcheck-ack"
                              x="2063"
                              y="2076"
                            >
                              <path
                                d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"
                                fill="#4fc3f7"
                              />
                            </svg>
                          </span>
                        </span>
                      </div>
                      <div className="message received">
                        <span id="random">
                          Could you answer these questions for me? <br />
                          1. What's her middle name? <br />
                          2. What's her maiden name? <br />
                          3. Which parish did she born again? <br />
                        </span>
                        <span className="metadata">
                          <span className="time">10:18</span>
                        </span>
                      </div>
                      <div className="message sent">
                        I'm reporting you for s_____ ___________.
                        <span className="metadata">
                          <span className="time">10:19</span>
                          <span className="tick">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="15"
                              id="msg-dblcheck-ack"
                              x="2063"
                              y="2076"
                            >
                              <path
                                d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"
                                fill="#4fc3f7"
                              />
                            </svg>
                          </span>
                        </span>
                      </div>
                      <div className="message received">
                        <span id="random">You're reporting me for what?</span>
                        <span className="metadata">
                          <span className="time">10:20</span>
                        </span>
                      </div>
                    </div>
                    <form
                      className="conversation-compose"
                      onSubmit={handleOnSubmit}
                    >
                      <div className="emoji">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          id="smiley"
                          x="3147"
                          y="3209"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.153 11.603c.795 0 1.44-.88 1.44-1.962s-.645-1.96-1.44-1.96c-.795 0-1.44.88-1.44 1.96s.645 1.965 1.44 1.965zM5.95 12.965c-.027-.307-.132 5.218 6.062 5.55 6.066-.25 6.066-5.55 6.066-5.55-6.078 1.416-12.13 0-12.13 0zm11.362 1.108s-.67 1.96-5.05 1.96c-3.506 0-5.39-1.165-5.608-1.96 0 0 5.912 1.055 10.658 0zM11.804 1.01C5.61 1.01.978 6.034.978 12.23s4.826 10.76 11.02 10.76S23.02 18.424 23.02 12.23c0-6.197-5.02-11.22-11.216-11.22zM12 21.355c-5.273 0-9.38-3.886-9.38-9.16 0-5.272 3.94-9.547 9.214-9.547a9.548 9.548 0 0 1 9.548 9.548c0 5.272-4.11 9.16-9.382 9.16zm3.108-9.75c.795 0 1.44-.88 1.44-1.963s-.645-1.96-1.44-1.96c-.795 0-1.44.878-1.44 1.96s.645 1.963 1.44 1.963z"
                            fill="#7d8489"
                          />
                        </svg>
                      </div>
                      <input
                        className="input-msg"
                        name="input"
                        placeholder="Type a message"
                        autoComplete="off"
                        autoFocus
                        onChange={(e) => setMessage(e.target.value)}
                      />
                      <button className="send">
                        <div className="circle">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0)">
                              <path
                                d="M23.7945 0.206801C23.5956 0.0078636 23.2972 -0.0533082 23.0362 0.0511291L0.442488 9.08852C0.183973 9.19192 0.0108643 9.43811 0.000926824 9.71641C-0.00896378 9.99466 0.146286 10.2525 0.396785 10.374L9.3062 14.695L13.6272 23.6044C13.7451 23.8474 13.9912 24.0007 14.2597 24.0007C14.2681 24.0007 14.2764 24.0006 14.2848 24.0003C14.563 23.9904 14.8093 23.8173 14.9127 23.5588L23.9502 0.965143C24.0546 0.703956 23.9934 0.405691 23.7945 0.206801ZM2.44236 9.80317L20.3779 2.62902L9.68908 13.3178L2.44236 9.80317ZM14.1981 21.5589L10.6834 14.3121L21.3723 3.62333L14.1981 21.5589Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0">
                                <rect width="24" height="24" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Level4
