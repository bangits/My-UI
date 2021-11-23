import { Select, Typography } from '@/my-ui-core';
import ReactPaginate from 'react-paginate';
import classNames from 'classnames';
import React, { useState, useMemo, FC, useCallback } from 'react';
import styles from './Pagination.module.scss';
import PaginationInput from './PaginationInput';
import { ArrowNext, ArrowPrev, DropdownArrowIconUp } from '@/icons';
import { IComponent } from '@/types';
import { getMyUIPrefix } from '@/configs';
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
    <div className={classNames(styles.PaginationWrapper, `${getMyUIPrefix()}-PaginationWrapper`)}>
      <div className={classNames(styles.PaginationInputWrapper, `${getMyUIPrefix()}-PaginationInputWrapper`)}>
        {showPageSizeSelect && (
          <>
            <Typography
              variant='p4'
              component='span'
              className={classNames(styles.SelectLabel, `${getMyUIPrefix()}-SelectLabel`)}>
              Row per page:
            </Typography>
            <div className={classNames(styles.PaginationSelectWrapper, `${getMyUIPrefix()}-PaginationSelectWrapper`)}>
              <Select
                inputLabel={null}
                fullWidth
                className={classNames(styles.SelectWrapper, `${getMyUIPrefix()}-SelectWrapper`)}
                defaultValue={20}
                maxLength={3}
                options={optionsValue}
                onChange={(e) => {
                  setCount(e);
                }}
                isSearchable={false}
                color='primary'
              />
            </div>{' '}
          </>
        )}

        {showTotalCountInfo && (
          <div className={classNames(styles.CountNumbers, `${getMyUIPrefix()}-CountNumbers`)}>
            <Typography variant='p4' component='span'>
              1-{count} of {totalCount}
            </Typography>
          </div>
        )}
      </div>

      <div className={classNames(styles.PaginationFormContainer, `${getMyUIPrefix()}-PaginationFormContainer`)}>
        {page >= 1 && (
          <ReactPaginate
            className={classNames(styles.PaginationList, `${getMyUIPrefix()}-PaginationList`)}
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
