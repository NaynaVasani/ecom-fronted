import React, { useState, useEffect } from 'react';

const CartField = ({ item, index, handleRemove, handleQuantityUpdate }) => {
    const [count, setCount] = useState(item.quantity);

    useEffect(() => {
        handleQuantityUpdate(index, count)
    }, [count]);

    const addValue = () => {
        setCount(count => count + 1)
    }
    const minusValue = () => {
        count > 1 && setCount(count => count - 1)
        if(count ==1 ){
            handleRemove(index)
        }
    }

    return(
        <div id="pro-1" key={index}>
            <div className="row prod-col-con">
                <div className="col-md-4 col-sm-4 col-xl-4">
                    <div className="row">
                        <div className=" col-md-9 col-sm-9 col-xl-9">
                            <img src={item.image}/>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xl-3">
                            <h3 className="steve">STEVE JOBS</h3>
                            <h6 className="waiter">{item.name}</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 col-sm-2 col-xl-2">
                    <div className="pro_total">
                        <h4>{item.price}$</h4>
                    </div>
                </div>
                <div className="col-md-2 col-sm-2 col-xl-2">
                    <div className="pro_title1">
                        {/* <h4>QUANTITY</h4> */}
                        <div className="num-block skin-2">
                            <div className="num-in">
                                <span className="minus dis" onClick={() =>minusValue(index)}></span>
                                <input type="text" className="in-num" value={count} readOnly=""/>
                                <span className="plus" onClick={() => addValue(index)}></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 col-sm-2 col-xl-2">
                    <div className="pro_total">
                        <h4>{(count * Number(item.price)).toFixed(2)}$</h4>
                    </div>
                </div>
                <div className="col-md-2 col-sm-2 col-xl-2">
                    <div className="fa-icon" onClick={()=> handleRemove(index)}>
                        <i className="fa fa-trash" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartField;