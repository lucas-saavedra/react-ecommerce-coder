const productos =
    [
        {
            "id": 1,
            "title": "Lampara",
            "price": 3000,
            "category": "iluminacion",
            "color": "blanco",
            "detail": "Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur",
            "url": "https://source.unsplash.com/pxoZSTdAzeU/800x600",
            "stock": 0
        },
        {
            "id": 2,
            "title": "Ventilador",
            "price": 5000,
            "category": "acondicionamiento",
            "color": "negro",
            "detail": "Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur",
            "url": "https://source.unsplash.com/6KZcjJoaqNI/800x600",
            "stock": 10
        },
        {
            "id": 3,
            "title": "Sillon",
            "price": 25000,
            "category": "muebles",
            "color": "gris",
            "detail": "Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur",
            "url": "https://source.unsplash.com/fZuleEfeA1Q/800x600",
            "stock": 0
        },
        {
            "id": 4,
            "title": "Mesa de luz",
            "price": 6000,
            "category": "iluminacion",
            "color": "amariilo",
            "detail": "Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur",
            "url": "https://source.unsplash.com/DW2LlXiiFFA/800x600",
            "stock": 10
        },
        {
            "id": 5,
            "title": "Pelota",
            "price": 1000,
            "category": "futbol",
            "color": "blanco",
            "detail": "Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur",
            "url": "https://source.unsplash.com/F3M8FmvWQo4/800x600",
            "stock": 10
        },
        {
            "id": 6,
            "title": "Anillo de oro",
            "price": 49000,
            "category": "joyeria",
            "color": "amarillo",
            "detail": "Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur",
            "url": "https://source.unsplash.com/HC-FGU-chN0/800x600",
            "stock": 10
        },
        {
            "id": 7,
            "title": "Taladro inalambrico",
            "price": 10000,
            "category": "hogar",
            "color": "blanco",
            "detail": "Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur",
            "url": "https://source.unsplash.com/MXeDE_yCdHQ/800x600",
            "stock": 10
        },
        {
            "id": 8,
            "title": "Pava electrica",
            "price": 1500,
            "category": "electrodomesticos",
            "color": "rojo",
            "detail": "Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur",
            "url": "https://source.unsplash.com/kf0GtI-wKDo/800x600",
            "stock": 10
        },
        {
            "id": 9,
            "title": "PS5",
            "price": 40000,
            "category": "gaming",
            "color": "blanco",
            "detail": "Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur",
            "url": "https://source.unsplash.com/NVD_32BBZFE/800x600",
            "stock": 10
        },
        {
            "id": 10,
            "title": "Xbox One X",
            "price": 40000,
            "category": "gaming",
            "color": "negro",
            "detail": "Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur",
            "url": "https://source.unsplash.com/DPOdCl4bGJU/800x600",
            "stock": 5
        },
        {
            "id": 11,
            "title": "Galaxy S20",
            "price": 80000,
            "category": "smartphones",
            "color": "negro",
            "detail": "Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur",
            "url": "https://source.unsplash.com/Aon3Ov8toHM/800x600",
            "stock": 5
        },
        {
            "id": 12,
            "title": "Nintendo Switch",
            "price": 60000,
            "category": "gaming",
            "color": "negro",
            "detail": "Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur",
            "url": "https://source.unsplash.com/EdUYo2Y435s/800x600",
            "stock": 5
        }
    ]
//generando la promesa con el timeout
export const getProducts = new Promise((successed, rejected) => {
    setTimeout(() => {
        successed(productos)
    }, 3000);
})
