import { Select, Typography } from '@/my-ui-core';
import ReactPaginate from 'react-paginate';
import classNames from 'classnames';
import React, { useState, useMemo, FC, useCallback } from 'react';
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
  const [count, setCount] = useState<number>(20);

  const optionsValue = useMemo(() => pageSize.map((p) => ({ value: p.value, label: p.label })), [pageSize]);

  const handleChange = useCallback((event) => {
    onChange(event.selected + 1);
  }, []);

  return (
    <div className={styles.PaginationWrapper}>
      <div className={styles.PaginationInputWrapper}>
        {showPageSizeSelect && (
          <>
            <Typography variant='p4' component='span' className={styles.SelectLabel}>
              Row per page:
            </Typography>
            <div className={styles.PaginationSelectWrapper}>
              <Select
                inputLabel={null}
                fullWidth
                className={styles.SelectWrapper}
                defaultValue={20}
                maxLength={3}
                options={optionsValue}
                onChange={(e) => {
                  setCount(e);
                }}
                color='primary'
              />
            </div>{' '}
          </>
        )}

        {showTotalCountInfo && (
          <div className={styles.CountNumbers}>
            <Typography variant='p4' component='span'>
              1-{count} of {totalCount}
            </Typography>
          </div>
        )}
      </div>

      <div className={styles.PaginationFormContainer}>
        {page >= 1 && (
          <ReactPaginate
            className={styles.PaginationList}
            onPageChange={handleChange}
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
        {showJumpToPage && <PaginationInput pageCount={page} setGoToPage={setGoToPage} />}
      </div>
    </div>
  );
};

export default Pagination;
