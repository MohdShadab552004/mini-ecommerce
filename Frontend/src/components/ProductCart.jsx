import React from 'react';


const ProductCart = ({ data }) => {
    return (
        <section className='product-cart max-w-[300px]'>
            <img  src={data.image_url?.trim() ? data.image_url : "/photos/image-not-found.png"} alt="" className='w-full h-[300px]  rounded-[45px] overflow-hidden' />
            <div className='w-full my-5'>
                <p className='text-zinc-500 text-[18px]'>{data.name}</p>
                <h2 className='text-zinc-700 font-normal text-[20px] mt-2'>{data.description}</h2>
                <p className='text-xl text-zinc-900 font-semibold '>${data.price}</p>
            </div>
        </section>
    );
}
export default ProductCart;

