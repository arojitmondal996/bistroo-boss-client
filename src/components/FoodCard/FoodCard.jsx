import React from 'react';

const FoodCard = ({ item }) => {
    const { image, price, recipe, name } = item || {}

    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={image}>

                    </img>
                </figure>
                <p className='absolute right-4 mr-4 mt-4px-4 bg-slate-900 text-white'>${price}</p>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline bg-slate-100 border-orange-400 border-0 border-b-4 mt-4">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;