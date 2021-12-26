
const Loader = ({ msg = 'Cargando detalle' }) => {
    return (
        <div className="d-flex align-items-center justify-content-around m-5"
            style={{
                height: '20vh'
            }
            }>
            <h3>{msg}</h3>
            <div className="spinner-grow text-secondary" style={{ width: '3rem', height: ' 3rem' }} role="status">
                <span className="visually-hidden">{msg}</span>
            </div>
        </div>


    )
}

export default Loader
