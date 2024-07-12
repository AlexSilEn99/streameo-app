import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './layout-components/header/Header.jsx'
import Footer from './layout-components/footer/Footer.jsx'
import Background from './layout-components/background/Background.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('header')).render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('background')).render(
    <React.StrictMode>
        <div className="background-frame">
            <Background className="background" />
        </div>
    </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('footer')).render(
    <React.StrictMode>
        <Footer />
    </React.StrictMode>,
)
