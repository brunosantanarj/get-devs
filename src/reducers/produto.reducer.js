export const products = [
    { id_product: 1 , product_image: '/images/image1.jpg', product_title: 'BATA BORDADA', product_preco: 398, product_date: '11/04/2017', tamanhos: ['G', 'P', 'M', '38', '40', '46'], cores: ['Vermelho', 'Amarelo'] },
    { id_product: 2 , product_image: '/images/image2.jpg', product_title: 'BLUSA TRICOT', product_preco: 288, product_date: '12/04/2017', tamanhos: ['G', 'P', 'M', '38', '40', '46'], cores: ['Vermelho', 'Amarelo'] },
    { id_product: 3 , product_image: '/images/image3.jpg', product_title: 'BATA BORDADA', product_preco: 390, product_date: '11/04/2016', tamanhos: ['G', 'P', 'M', '38', '40', '46'], cores: ['Vermelho', 'Amarelo'] },
    { id_product: 4 , product_image: '/images/image4.jpg', product_title: 'BLUSA TRICOT CANELADA', product_preco: 290, product_date: '11/04/2016', tamanhos: ['G', 'P', 'M', '38', '40', '46'], cores: ['Vermelho', 'Amarelo'] },
    { id_product: 5 , product_image: '/images/image5.jpg', product_title: 'BATA BORDADA', product_preco: 50, product_date: '11/04/2015', tamanhos: ['G', 'P', 'M', '38', '40', '46'], cores: ['Vermelho', 'Amarelo'] },
    { id_product: 6 , product_image: '/images/image6.jpg', product_title: 'BLUSA TRICOT CANELADA', product_preco: 180, product_date: '11/04/2015', tamanhos: ['G', 'P', 'M', '38', '40', '46'], cores: ['Vermelho', 'Amarelo'] },
]

export default (state = products, action ) => {
    switch (action.type) {
        case 'PRODUCT_FULLFILED': {
            return {
                ...state,
                product_request: action.payload
            }
        } case 'ORDER_PRODUCT_MAIORPRECO': {
            return {
                ...state,
                orderMaiorPreco: action.payload
            }
        }
        default: {
            return state
        }
    }
}
