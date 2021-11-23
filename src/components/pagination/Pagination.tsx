import { getMyUIPrefix } from '@/configs';
import { ArrowNext, ArrowPrev } from '@/icons';
import { Select, Typography } from '@/my-ui-core';
import { IComponent } from '@/types';
import classNames from 'classnames';
import React, { FC, useCallback, useMemo, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { PaginationInput } from '.';
import styles from './Pagination.module.scss';
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
  dropDownTitle: string;
  inputTitle: string;
}

const Pagination: FC<PaginationProps> = ({
  page,
  totalCount,
  onChange,
  showPageSizeSelect,
  showTotalCountInfo,
  showJumpToPage,
  pageSize,
  dropDownTitle,
  inputTitle
}) => {
  const [goToPage, setGoToPage] = useState<number | string>(1);
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
              {dropDownTitle}
            </Typography>
            <div className={classNames(styles.PaginationSelectWrapper, `${getMyUIPrefix()}-PaginationSelectWrapper`)}>
              <Select
                renderInput={(value, isMenuOpen) => (
                  <div
                    style={{
                      display: 'flex',
                      color: '#505d6e',
                      fontSize: '14px',
                      justifyContent: 'center',
                      alignItems: 'baseline'
                    }}>
                    <div>{value.label}</div>
                    <span
                      style={{
                        color: '#505D6E',
                        width: '2.4rem',
                        height: '2.4rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transform: isMenuOpen ? 'rotate(0deg)' : 'rotate(180deg)'
                      }}>
                      <svg xmlns='http://www.w3.org/2000/svg' width='12' height='6' viewBox='0 0 10 5'>
                        <path
                          id='Shape'
                          d='M.122,4.383,4.657.123a.572.572,0,0,1,.71,0l4.512,4.26c.273.239.056.617-.355.617H.476C.066,5-.152,4.622.122,4.383Z'
                          fill='currentColor'
                        />
                      </svg>
                    </span>
                  </div>
                )}
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
        {showJumpToPage && <PaginationInput pageCount={page} setGoToPage={setGoToPage} inputTitle={inputTitle} />}
      </div>
    </div>
  );
};

export default Pagination;
