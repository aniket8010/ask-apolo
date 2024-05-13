import React from 'react'
import { Pagination } from 'antd';

 const AppPagination = ({ total = 0, onPageChnage, currentPage = 1 }) => {
    const itemRender = (_, type, originalElement) => {
        if (type === 'prev') {
            return <span className='cursor-pointer'>Previous</span>;
        }
        if (type === 'next') {
            return <span className='cursor-pointer'>Next</span>;
        }
        return originalElement;
    };
    return (
        <Pagination current={currentPage} onChange={onPageChnage} total={total} pageSize={2} itemRender={itemRender} />
    )
}
export default AppPagination