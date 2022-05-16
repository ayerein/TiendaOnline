export const productos = [
    {id: '1', 
    stock: 4, 
    categoria: 'interior', 
    nombre:'Sansevieria', 
    precio: 450 , 
    img: 'https://images.pexels.com/photos/2922353/pexels-photo-2922353.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    descripcion: 'La sansevieria necesita muy poca agua y su llamativo color verde suma vitalidad a cualquier rincón. Además, ¡mejora el aire en tu casa!'},

    {id: '2', 
    stock: 6, 
    categoria: 'interior', 
    nombre:'Monstera', 
    precio: 550 , 
    img: 'https://images.pexels.com/photos/3125197/pexels-photo-3125197.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    descripcion: 'Una planta de hojas grandes muy fácil de cuidar que cada vez está consiguiendo más adeptos en los hogares. ¡Su poder decorativo es enorme!'},

    {id: '3', 
    stock: 2, 
    categoria: 'interior', 
    nombre:'Alocasia', 
    precio: 600 , 
    img: 'https://images.pexels.com/photos/3644742/pexels-photo-3644742.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    descripcion: 'Por su tamaño y belleza de sus hojas, esta planta es perfecta para decorar la casa. Además, es muy resistente y fácil de cuidar.'},

    {id: '4', 
    stock: 7, 
    categoria: 'interior', 
    nombre:'Potus', 
    precio: 650 , 
    img: 'https://images.pexels.com/photos/2374967/pexels-photo-2374967.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    descripcion: 'Su porte colgante, sus llamativas hojas en forma de corazón y su capacidad de depurar el aire la convierten en una planta ideal para el hogar.'},

    {id: '5', 
    stock: 3, 
    categoria: 'interior', 
    nombre:'Palo de agua', 
    precio: 470 , 
    img: 'https://i.pinimg.com/564x/db/91/c5/db91c5af09703985511c5c671754ba21.jpg',
    descripcion: 'Es una planta de origen tropical que es común verla en interiores aunque también puede ubicarse en el exterior.'},

    {id: '6', 
    stock: 4, 
    categoria: 'interior', 
    nombre:'Lirio de la paz', 
    precio: 500 , 
    img: 'https://i.pinimg.com/564x/6f/02/e6/6f02e632eb39defb32a5bfa967229ad9.jpg',
    descripcion: 'Sus frondosas hojas verdes y delicadas flores blancas, no solo son una belleza, sino que apenas precisarán de tus cuidados.'},
    
    {id: '7', 
    stock: 9, 
    categoria: 'exterior', 
    nombre:'Jazmin', 
    precio: 700 , 
    img: 'https://www.elmueble.com/medio/2021/05/26/00461764_63ee8ca6_1200x1797.jpg',
    descripcion: 'Es una de nuestras plantas aromáticas con flor favoritas, es resistente a las heladas y de crecimiento lento.'},

    {id: '8', 
    stock: 10, 
    categoria: 'exterior', 
    nombre:'Glicina', 
    precio: 750 , 
    img: 'https://www.elmueble.com/medio/2021/05/26/porche-bajo-la-glicina_abe18c2f_979x1280.jpg',
    descripcion: 'Esta vistosa planta no requiere de muchos cuidados y llenará tu terraza de un halo romántico superacogedor.'},

    {id: '9', 
    stock: 3, 
    categoria: 'exterior', 
    nombre:'Petunias', 
    precio: 800 , 
    img: 'https://www.elmueble.com/medio/2020/05/26/maceta-de-barro-con-lantana-y-petunias_46490419_853x1280.jpg',
    descripcion: 'Rosas, moradas, blancas, rojas, las petunias son amantes del sol directo y de una tierra bien drenada para sobrevivir.'},

    {id: '10', 
    stock: 6, 
    categoria: 'exterior', 
    nombre:'Claveles', 
    precio: 1500 , 
    img: 'https://www.elmueble.com/medio/2020/05/26/macetas-blancas-con-claveles-rosas-y-lilas_7fd53382_917x1280.jpg',
    descripcion: 'Los claveles llenan los balcones, las terrazas y los jardines de alegría y de color. Aguantan el sol directo del verano'},
]


export const getFetch = (id) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const products = id ? productos.find(producto => producto.id === id) : productos
            resolve (products)
        }, 2000)
    })
}