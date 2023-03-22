import styles from "./pagination.module.scss";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = ({ currentPage, totalPages, setCurrentPage }: PaginationProps) => {

    const handleNextPage = () => {
        if(currentPage < totalPages-1){
            setCurrentPage( prev => prev+1);
        }
    }

    const handlePreviousPage = () => {
        if(currentPage > 0){
            setCurrentPage( prev => prev-1);
        }
    }

    return (
        <div className={styles.pagination}>
            <BsFillArrowLeftCircleFill data-testid="arrow-left" onClick={handlePreviousPage} size={30} />
            <ul>
                {
                    Array.from(Array(totalPages)).map((x, index) => (
                        <li 
                            onClick={() => setCurrentPage(index)}
                            key={index}
                            className={ currentPage === index ? "isActive" : ""}
                        >
                            {index+1}
                        </li>
                    ))
                }
            </ul>
            <BsFillArrowRightCircleFill data-testid="arrow-right" onClick={handleNextPage} size={30} />
        </div >
    )
};

export default Pagination;
