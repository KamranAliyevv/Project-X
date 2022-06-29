import React from 'react'
import {RiDeleteBinLine} from "react-icons/ri";
const BasketContent = () => {
  return (
    <div className='basket-list'>
        <div className="basket-item">
            <div className="item-img">
                <input type="checkbox" />
                <img src="https://irshad.az/resized/fit540x550/center/products/77917/12pro-graphite.jpg" alt="basketImg" />
            </div>
            <div className="basket-content">
                <div className="item-info">
                    <h3>iPhone 12, 64 GB, Bənövşəyi, (MJNM3) Golden  5 G 8690604083886 0212042</h3>
                    <div className="item-labels">
                        <div className="item-options">
                            <div className="option">
                                <p>Rəng:</p>
                                <span>Bənövşəyi</span>
                            </div>
                            <div className="option">
                                <p>Yaddas:</p>
                                <span>64 Gb</span>
                            </div>
                        </div>
                        <div className="item-price">
                            <div className="price">
                                <span className="old-price">200 ₼</span>
                                <span className="new-price">100 ₼</span>
                            </div>
                            <div className="counter">
                                <span className='minus'>-</span>
                                <p>1</p>
                                <span className='plus'>+</span>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="counter">
                                <span className='minus'>-</span>
                                <p>1</p>
                                <span className='plus'>+</span>
                            </div>
                    <div className="delete-btn">
                        <RiDeleteBinLine/>
                    </div>
            </div>
        </div>
        <div className="basket-item">
            <div className="item-img">
                <input type="checkbox" />
                <img src="https://irshad.az/resized/fit540x550/center/products/77917/12pro-graphite.jpg" alt="basketImg" />
            </div>
            <div className="basket-content">
                <div className="item-info">
                    <h3>iPhone 12, 64 GB, Bənövşəyi, (MJNM3) Golden  5 G 8690604083886 0212042</h3>
                    <div className="item-labels">
                        <div className="item-options">
                            <div className="option">
                                <p>Rəng:</p>
                                <span>Bənövşəyi</span>
                            </div>
                            <div className="option">
                                <p>Yaddas:</p>
                                <span>64 Gb</span>
                            </div>
                        </div>
                        <div className="item-price">
                            <div className="price">
                                <span className="old-price">200 ₼</span>
                                <span className="new-price">100 ₼</span>
                            </div>
                            <div className="counter">
                                <span className='minus'>-</span>
                                <p>1</p>
                                <span className='plus'>+</span>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="counter">
                                <span className='minus'>-</span>
                                <p>1</p>
                                <span className='plus'>+</span>
                            </div>
                    <div className="delete-btn">
                        <RiDeleteBinLine/>
                    </div>
            </div>
        </div>
        <div className="basket-item">
            <div className="item-img">
                <input type="checkbox" />
                <img src="https://irshad.az/resized/fit540x550/center/products/77917/12pro-graphite.jpg" alt="basketImg" />
            </div>
            <div className="basket-content">
                <div className="item-info">
                    <h3>iPhone 12, 64 GB, Bənövşəyi, (MJNM3) Golden  5 G 8690604083886 0212042</h3>
                    <div className="item-labels">
                        <div className="item-options">
                            <div className="option">
                                <p>Rəng:</p>
                                <span>Bənövşəyi</span>
                            </div>
                            <div className="option">
                                <p>Yaddas:</p>
                                <span>64 Gb</span>
                            </div>
                        </div>
                        <div className="item-price">
                            <div className="price">
                                <span className="old-price">200 ₼</span>
                                <span className="new-price">100 ₼</span>
                            </div>
                            <div className="counter">
                                <span className='minus'>-</span>
                                <p>1</p>
                                <span className='plus'>+</span>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="counter">
                                <span className='minus'>-</span>
                                <p>1</p>
                                <span className='plus'>+</span>
                            </div>
                    <button className="delete-btn">
                        <RiDeleteBinLine/>
                    </button>
            </div>
        </div>
    </div>
  )
}

export default BasketContent