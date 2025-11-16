
import { product, ProductData } from './../types/products.type';
import ProductCard from './_Components/ProductCard/ProductCard';
import MainSlider from './_Components/MainSlider/MainSlider';


export default async function Home() {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/products`)
  const data:ProductData = await res.json()
  const ProductList:product[] = data.data

  // useEffect(()=>{
  //   getdata()
  // },[])

  return (

   <>
   <MainSlider/>
   
   
   <div className='grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 mt-10'>
    
      {
      ProductList.map((item)=>{
        return <ProductCard key={item._id} item={item}/>
      })
      }
   
   </div>
   
   </>
  )
}
