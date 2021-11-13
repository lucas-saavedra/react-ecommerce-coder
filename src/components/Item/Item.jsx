
const Item = ({ title, price, category, imgUrl }) => {
    return (
        <div className="col">
            <div className="card card h-100">
                <img src={imgUrl} className="card-img-top" alt="..."></img>
                <div className="card-body text-center">
                    <h5 className="h3">{title}</h5>
                    <p className="price h5">{price}</p>
                    <p className="h5"> <span className="category badge bg-primary">{category}</span> </p>
                </div>
            </div>
        </div>
    )
}
export default Item
