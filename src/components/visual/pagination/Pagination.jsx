import stylePagination from "../../../assets/styles/pagination/pagination.module.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const { prev, next, container, container_nextPrev, text } = stylePagination;

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <>
      <span className={text}>
        {currentPage} of {totalPages}
      </span>
      <section className={container}>
        <div className={container_nextPrev}>
          <div
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className={prev}
          >
            {"<"}
          </div>
          <div
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={next}
          >
            {">"}
          </div>
        </div>
      </section>
    </>
  );
};

export default Pagination;
