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
          <div className={styles.SelectCountContainer}>
            {console.log([value.label])}
            {showPageSizeSelect && (
              <React.Fragment>
                <Typography variant='p4' component='span' className={styles.SelectLabel}>
                  Row per page: {[value.label]}
                </Typography>
                <span
                  className={styles.SelectIconContainer}
                  style={{
                    transform: isMenuOpen ? 'rotate(0deg)' : 'rotate(180deg)'
                  }}>
                  <DropdownArrowIconUp />
                </span>
              </React.Fragment>
            )}
            {showTotalCountInfo && (
              <div className={styles.CountNumbers}>
                <Typography variant='p4' component='span'>
                  1-{[value.label]} of {totalCount}
                </Typography>
              </div>
            )}
          </div>
        )}
        options={optionsValue}
      />

      <div className={styles.PaginationFormContainer}>
        {page >= 1 && (
          <ReactPaginate
            className={styles.PaginationList}
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
    </div>
  );
};

export default Pagination;
