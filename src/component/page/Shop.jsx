import React  from "react";
import Container from "../layer/Container";
import Category from "../Category";
import Paginate from "../Paginate";


const Shop = () => {

  return (
    <div className="flex flex-col gap-y-20">
      <Container className="w-full">
        <Category />
      </Container>
      <Container className="flex gap-x-7 ">
        <div className="filter w-1/4 border">


        
        </div>
        <div className="main w-3/4 grid grid-cols-3 gap-y-14 gap-x-7 relative mb-20 ">
          <Paginate itemsPerPage={15} />
        </div>
      </Container>
    </div>
  );
};

export default Shop;
