import trollface from "../images/trollface.png"
export default function Header(){
    return(<div className="header">
        <img src={trollface} alt="mera ye" className="header-image" />
        <h2 className="header-title">Memechat</h2>
        <h3 className="header-project">React-course Project 3</h3>
    </div>)
}