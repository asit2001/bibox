const data: DataType[] = [
    {
        url:"https://www.pcstudio.in/wp-content/uploads/2022/03/Ant-Esports-690-Air-ARGB-E-ATX-Cabinet-Black-1.jpg",
        type:"cabinet",
        name:"Ant Esports 690 Air"
    },
    {
        url:"https://www.pcstudio.in/wp-content/uploads/2022/08/Adata-XPG-Starker-Air-ARGB-ATX-Cabinet-Black-1.webp",
        type:"cabinet",
        name:"Adata XPG Starker Air"
    },
    {
        url:"https://www.pcstudio.in/wp-content/uploads/2022/08/Adata-XPG-Starker-Air-ARGB-ATX-Cabinet-Black-1.webp",
        type:"cabinet",
        name:"Ant Esports 690 Air"
    },
    {
        url:"https://www.pcstudio.in/wp-content/uploads/2022/01/Ant-Esports-510-Air-ARGB-Black-1.jpg",
        type:"cabinet",
        name:"Ant Esports 510 Air"
    },
    {
        url:"https://www.pcstudio.in/wp-content/uploads/2022/11/ice-100-black-image_main-600x600-1.webp",
        type:"cabinet",
        name:"Adata XPG Starker 390"
    },
]



export default data;



export interface DataType{
    url:string,
    type:"cabinet"|"ram"|"cpu"|"motherboard"| "storage"
    name:string
}