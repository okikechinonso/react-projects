import './wallet.css'
import image from "./imgs/walletprofilepic.jpeg"
export default function WalletHome(){
    return (
        <div className="wallet-container">
            <Header />
            <Balance />
        </div>
    )
}

function Header(){
    return(
        <div className='wallet-header'>
            <div className="wallet-header-title">
                <span className='title1'>Wallet</span>
                <span className='title2'>Active</span>
            </div>
            <div height={64} width={64}>
            <img  className='wallet-header-img' src={image} alt='walletprofilepic' height={48} width={48} />
            </div>
            
        </div>
    )
}
function Balance(){
    return (
        <div className='wallet-balance-card'>
            <div className='wallet-balance'></div>
            <div className='cirlce-fill'></div>
        </div>
    )
}