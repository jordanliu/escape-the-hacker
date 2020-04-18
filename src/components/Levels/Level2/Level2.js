import React from "react"
import { useHistory } from "react-router-dom"
import "./Level2.scss"

const Level2 = () => {
  const history = useHistory()

  const handleReport = () => {
    if (window.confirm("Report this email for abuse?")) {
      return history.push("/level/3")
    }
  }

  return (
    <div>
      <div className="container app">
        <aside className="sidebar">
          <h1 className="logo">
            <a href="#/">
              fish<strong>Mail</strong>
            </a>
          </h1>
          <nav className="main-nav">
            <ul>
              <li>
                <a href="#/">Profile</a>
              </li>
              <li className="active">
                <a href="#/">Email</a>
                <br />
                <a href="#/" className="btn btn-primary">
                  Compose new
                </a>
                <ul>
                  <li className="active">
                    <a href="#/">
                      Inbox <span className="btn btn-primary">25</span>
                    </a>
                  </li>
                  <li>
                    <a href="#/">Drafts</a>
                  </li>
                  <li>
                    <a href="#/">Sent</a>
                  </li>
                  <li>
                    <a href="#/">Trash</a>
                  </li>
                  <li>
                    <a href="#/">Junk Mail</a>
                  </li>
                </ul>
                <ul className="labels">
                  <li>
                    <a href="#/">
                      Clients <span className="btn btn-primary label"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#/">
                      Friends <span className="btn btn-primary label"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#/">
                      Family <span className="btn btn-primary label"></span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#/">Docs</a>
              </li>
              <li>
                <a href="#/">Stats</a>
              </li>
            </ul>
          </nav>
        </aside>
        <div className="main">
          <header className="header">
            <form action="">
              <input type="search" name="s" placeholder="Search on fishMail" />
            </form>
            <nav className="nav-settings">
              <ul>
                <li>
                  <a href="#/">Jon Snow</a>
                </li>
                <li>
                  <span href="#/" className="icon icon-gear"></span>
                </li>
              </ul>
            </nav>
            <div className="clr"></div>
          </header>
          <div className="container">
            <div className="messages">
              <h1>
                Inbox <span className="icon icon-arrow-down"></span>
              </h1>
              <form action="">
                <input
                  type="search"
                  className="search"
                  placeholder="Search Inbox"
                />
              </form>
              <ul className="message-list">
                <li className="new">
                  <input type="checkbox" />
                  <div className="preview">
                    <h3>
                      Google <small>Jul 15</small>
                    </h3>
                    <p>
                      <strong>New Account Login - </strong>A device located...
                    </p>
                  </div>
                </li>
                <li className="active">
                  <input type="checkbox" />
                  <div className="preview">
                    <h3>
                      PayPal <small>Jul 15</small>
                    </h3>
                    <p>
                      <strong>[SECURED] Reset Password - </strong>A password
                      request...
                    </p>
                  </div>
                </li>
                <li className="">
                  <input type="checkbox" />
                  <div className="preview">
                    <h3>
                      Twitter <small>Jul 14</small>
                    </h3>
                    <p>
                      <strong>Weekly Digest - </strong>Hi Jon, see your...
                    </p>
                  </div>
                </li>
                <li className="">
                  <input type="checkbox" />
                  <div className="preview">
                    <h3>
                      PayPal <small>Jul 13</small>
                    </h3>
                    <p>
                      <strong>[SECURED] Reset Password - </strong>A password
                      request...
                    </p>
                  </div>
                </li>
                <li className="">
                  <input type="checkbox" />
                  <div className="preview">
                    <h3>
                      Facebook <small>Jul 13</small>
                    </h3>
                    <p>
                      <strong>New Friend Request - </strong>Michael Jackson has
                      sent...
                    </p>
                  </div>
                </li>
                <li className="">
                  <input type="checkbox" />
                  <div className="preview">
                    <h3>
                      CONGRATS! <small>Jul 12</small>
                    </h3>
                    <p>
                      <strong>You win! - </strong>You have won $10,000, click...
                    </p>
                  </div>
                </li>
                <li className="">
                  <input type="checkbox" />
                  <div className="preview">
                    <h3>
                      African King <small>Jul 12</small>
                    </h3>
                    <p>
                      <strong>Looking for heir - </strong>I want to share my
                      wealth...
                    </p>
                  </div>
                </li>
                <li className="">
                  <input type="checkbox" />
                  <div className="preview">
                    <h3>
                      fishMail <small>Jul 12</small>
                    </h3>
                    <p>
                      <strong>Upgrade to a premium account - </strong>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <section className="message">
              <h2>
                <span className="icon icon-star-large"></span> Password Request{" "}
                <span className="icon icon-reply-large"></span>
                <span className="icon icon-delete-large"></span>
              </h2>
              <div className="meta-data">
                <p>
                  <img
                    src="http://placehold.it/40x40"
                    className="avatar"
                    alt=""
                  />
                  PayPal [request@payppal.com] to{" "}
                  <span className="user">me</span>
                  <span className="date">July 15, 2021</span>
                </p>
                <span className="report" onClick={handleReport}>
                  Report Abuse
                </span>
              </div>
              <div className="body">
                <p>Hi Jon,</p>
                <p>
                  A password request has been requested to this email address.
                  Please confirm your current password for us to verify your
                  account before initating this request, if this email is
                  ignored - your account will be locked until. PayPal is
                  continously trying to find new ways to improve security.
                  Please reset your password by confirming your exising
                  password, click{" "}
                  <a href="#/" onClick={() => alert("Redirecting...")}>
                    here
                  </a>
                  .
                </p>
                <p>
                  Cheers, <br /> PayPal
                </p>
              </div>
              <div className="action">
                <ul className="options">
                  <li>
                    <a href="#/" className="active">
                      Answering
                    </a>
                  </li>
                  <li>
                    <a href="#/">Forward</a>
                  </li>
                  <div className="clr"></div>
                </ul>
                <div className="textarea">
                  <textarea name="r"></textarea>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Level2
