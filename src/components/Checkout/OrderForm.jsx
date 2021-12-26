import { useState } from "react";
const OrderForm = ({ submitOrder }) => {
    const [validator, setValidator] = useState()
    const [msg, setMsg] = useState()

    const onInput = () => {
        let bool;
        const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const email = document.getElementById('email').value
        const reEmail = document.getElementById('reEmail').value
        if (email.length === 0 || reEmail.length === 0) {
            setMsg('Campos vacios');
            bool = false;
        } else if (email !== reEmail) {
            setMsg('Los emails ingresados no coinciden')
            bool = false;
        } else if (!emailRegExp.test(email) || !emailRegExp.test(reEmail)) {
            setMsg('Debe ingresar un email valido')
            bool = false;
        } else {
            bool = true;
        }
        setValidator(bool);
    }
    const getOrder = (e) => {
        e.preventDefault();
        const form = document.getElementById('buyerForm')
        const email = form.email.value
        const name = form.name.value;
        const lastName = form.lastName.value;
        const adress = form.adress.value
        const phone = form.phone.value
        const order = {}
        order.buyer = { name, lastName, phone, email, adress };
        submitOrder(order)
    }
    return (
        <div className="row">
            <div className="col-md-5 mx-auto pt-3 ">
                <form className="card row" id="buyerForm" onSubmit={getOrder}>
                    <div className="card-header fs-4 text text-center py-1">Ingrese sus datos para finalizar la compra</div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nombre</label>
                        <input type="text" className="form-control" required id="name"
                            placeholder="Ingrese el su nombre"></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Apellido</label>
                        <input type="text" className="form-control" required id="lastName"
                            placeholder="Ingrese el su Apeliido"></input>
                    </div>
                    <div onInput={onInput} >
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className={`form-control ${validator ? 'is-valid' : 'is-invalid'}`} id="email" required
                                placeholder="Ingrese el su email"></input>
                        </div>
                        <div className="mb-3">
                            <input type="email" className={`form-control ${validator ? 'is-valid' : 'is-invalid'}`} id="reEmail" required
                                placeholder="Ingrese nuevamente su email"></input>
                            <div id="validationServer05Feedback" className="invalid-feedback">
                                {msg}
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Telefono</label>
                        <input type="tel" className="form-control" id="phone" required
                            placeholder="Ingrese el su telefono"></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="adress" className="form-label">Dirección</label>
                        <input type="adress" className="form-control" id="adress" required
                            placeholder="Ingrese el su dirección"></input>
                    </div>
                    {validator &&
                        <>
                            <div className="col mt-2 mb-2">
                                <button className="form-control btn btn-success" type="submit" >
                                    Finalizar compra
                                </button>
                            </div>

                        </>
                    }
                </form>
            </div>
        </div>
    )
}

export default OrderForm
