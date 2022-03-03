import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "./styles.css";

// Example items, to simulate fetching from another resources.

function Items({ currentItems, componentCreator }) {
  return (
    <>{currentItems && currentItems.map((item) => componentCreator(item))}</>
  );
}

function Pagination({ itemsPerPage, items, component }) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]); // eslint-disable-line

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  // We need to bind the component we received by prop with Items:
  const componentWithItems = (item) => React.cloneElement(component, { item });
  return (
    <>
      <Items
        currentItems={currentItems}
        componentCreator={componentWithItems}
      />
      <div className="containerPagination">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          pageCount={pageCount}
          pageRangeDisplayed={5}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          onPageChange={handlePageClick}
        />
      </div>
    </>
  );
}

// Add a <div id="container"> to your HTML to see the componend rendered.
export default Pagination;
