import React, { useEffect, useState } from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
    const { id } = useParams();
    const [post, SetPost] = useState({});
    console.log(post , "post")
    console.log(id , "Product");
    useEffect(() => {
        const fetch = async () => {
          try {
            const { data } = await axios.get(`http://127.0.0.1:8000/api/v1/productdetail/${id}`);
            SetPost(data);
          } catch (err) {
            console.error(err);
          }
        };
        fetch();
      }, []);
    
    
    return (
        <>
            <Header />
          dsddssd
            <Footer />
        </>
    )
}

export default ProductDetail