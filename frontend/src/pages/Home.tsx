import FloatButton from '../components/FloatButton';
import Header from '../components/Header';
import { Product } from '../components/ListItem';
import ListProducts from '../components/ListProducts';
import { useEffect, useState } from 'react';
import { listAllProducts } from '../services/product.service';
import Modal from '../components/Modal';

const Home = () => {
  const [listProducts, setListProducts] = useState<Product[]>([]);
  const [open, setOpen] = useState(false);

  function handleModal() {
    setOpen(!open);
  }

  async function getProducts() {
    const response = await listAllProducts();

    setListProducts(response.data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Header />
      <ListProducts products={listProducts} />
      <FloatButton handleClick={handleModal} />
      <Modal open={open} handleClose={handleModal} />
    </>
  );
};

export default Home;
