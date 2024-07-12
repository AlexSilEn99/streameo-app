import logo from './assets/logo.svg'
import './App.css'
import './Index.css'

function App() {
    return (
        <>
            <div>
            <a href="#" target="_blank">
                <img src={logo} className="logo" alt="React logo" />
            </a>
            </div>
            <h1 className="title text-uppercase pt-4 silkscreen-regular">Streameo</h1>
            <h1 className="subtitle robot-regular">Stream the way you want, whenever you want</h1>

            <div className="input-group input-group-lg p-4 d-flex justify-content-center">
                <span className="input-group-text border-0 bg-transparent" id="basic-addon1">
                        <i className="fa fa-search"></i>
                    </span>
                <input type="text" className="form-control transparent-input rounded-0" aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="Search for new movies"/>
            </div>
        </>
    )
}

export default App
