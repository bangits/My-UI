import { Select, Typography } from '@/my-ui-core';
import ReactPaginate from 'react-paginate';
import classNames from 'classnames';
import React, { useState, useMemo, FC } from 'react';
import styles from './Pagination.module.scss';
import PaginationInput from './PaginationInput';
import { ArrowNext, ArrowPrev, DropdownArrowIconUp } from '@/icons';
import { IComponent } from '@/types';

export interface PaginationProps extends IComponent {
  page: number;
  totalCount: number;
  showPageSizeSelect: boolean;
  showTotalCountInfo: boolean;
  showJumpToPage: boolean;
  pageSize?: {
    label: string;
    value: number;
  }[];
  bottomButtonLabel?: string;
  onChange: (e: any) => void;
}

const Pagination: FC<PaginationProps> = ({
  page,
  totalCount,
  onChange,
  showPageSizeSelect,
  showTotalCountInfo,
  showJumpToPage,
  pageSize
}) => {
  const [goToPage, setGoToPage] = useState(1);
  const optionsValue = useMemo(() => pageSize.map((p) => ({ value: p.value, label: p.label })), [pageSize]);
  return (
    <div className={styles.PaginationWrapper}>
      <Select
        defaultValue={20}
        renderInput={(value, isMenuOpen) => (
          <>
            {console.log([value.label])}
            {showPageSizeSelect && (
              <React.Fragment>
                <span>Row per page: {[value.label]}</span>
                <span
                  style={{
                    width: '2.4rem',
                    height: '2.4rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: isMenuOpen ? 'rotate(0deg)' : 'rotate(180deg)'
                  }}>
                  <DropdownArrowIconUp />
                </span>
              </React.Fragment>
            )}
            {showTotalCountInfo && (
              <div>
                <span>
                  1-{[value.label]} of {totalCount}
                </span>
              </div>
            )}
          </>
        )}
        options={optionsValue}
      />

      {page >= 1 && (
        <ReactPaginate
          onPageChange={onChange}
          breakLabel='...'
          nextLabel={page > 1 ? <ArrowNext /> : null}
          forcePage={goToPage}
          pageRangeDisplayed={3}
          pageCount={page}
          marginPagesDisplayed={1}
          previousLabel={page > 1 ? <ArrowPrev /> : null}
          renderOnZeroPageCount={null}
        />
      )}
      {showJumpToPage && <PaginationInput setGoToPage={setGoToPage} />}
    </div>
  );
};

export default Pagination;
