import React, { useState } from 'react';
import product1 from '../assets/Printer 1.jpg'
import product2 from '../assets/Printer 2.jpg'

const ComponentName = () => {        
    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-md mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Our featured items</h2>
            <p className="mt-4 text-base font-normal leading-7 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus faucibus massa dignissim tempus.</p>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-2">
            

           
            <div className="relative group">
                <div className="overflow-hidden aspect-w-1 aspect-h-1">
                    <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src={product1} alt="" />
                </div>
              
                <div className="flex items-start justify-between mt-4 space-x-4">
                    <div>
                        <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                            <a href="#" title="">
                                Canon Colorado 1630 Printer
                                <span className="absolute inset-0" aria-hidden="true"></span>
                            </a>
                            
                        </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatem laborum ab. Voluptate beatae assumenda iste debitis blanditiis itaque corporis qui accusantium repudiandae repellat nemo ducimus alias reprehenderit fugiat quis neque ratione provident in consequuntur ea tempore, dolor fugit? Magnam, ab animi dolorem ad aut vitae doloremque iure a quasi?</p>
                        
                    </div>

                    
                </div>
            </div>

            <div className="relative group">
                <div className="overflow-hidden aspect-w-1 aspect-h-1">
                    <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src={product2} alt="" />
                </div>
                <div className="flex items-start justify-between mt-4 space-x-4">
                    <div>
                        <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                            <a href="#" title="">
                                Canon imagePRESS V1000
                                <span className="absolute inset-0" aria-hidden="true"></span>
                            </a>
                        </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non magni veniam, laudantium a sed nobis adipisci esse voluptatem ratione doloremque. Obcaecati nobis sapiente voluptatum officiis qui tenetur placeat saepe minus eveniet architecto eligendi aliquid recusandae aspernatur, quae, ut, eius perferendis officia ducimus cupiditate facere hic eos quia quis quo. Quis?</p>
                        
                    </div>

                   
                </div>
            </div>
        </div>
    </div>
</section>

    )
}
export default ComponentName;