import { ArrowNext, ArrowPrev } from '@/icons';
import { Select, SelectOptionType, Typography } from '@/my-ui-core';
import { IComponent } from '@/types';
import classNames from 'classnames';
import React, { FC, useCallback } from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';
import PaginationInput from './PaginationInput';

export interface PaginationProps extends IComponent {
  pageSizeSelect?: {
    options: SelectOptionType[];
    dropdownLabel: string;
    defaultValue?: SelectOptionType['value'];
    onChange: (value: SelectOptionType['value']) => void;
  };

  page: number;
  totalPagesCount: number;
  onChange: (updatedPage: number) => void;

  totalCountInfo?: string;
  breakLabel?: string;
  pageRangeDisplayed?: number;
  marginPagesDisplayed?: number;

  jumpToPage?: {
    inputTitle?: string;
    placeholder?: string;
  };
}

const Pagination: FC<PaginationProps> = ({
  page = 1,
  totalPagesCount,
  onChange,
  pageSizeSelect,
  totalCountInfo,
  breakLabel = '...',
  pageRangeDisplayed = 3,
  marginPagesDisplayed = 1,
  jumpToPage,
  className
}) => {
  const handlePaginationChange = useCallback(
    (event: { selected: number }) => {
      onChange(event.selected + 1);
    },
    [onChange]
  );

  return (
    <div className={classNames(styles.PaginationWrapper, className)}>
      {(pageSizeSelect || totalCountInfo) && (
        <div className={styles.PaginationInputWrapper}>
          {pageSizeSelect && (
            <>
              <Typography variant='p4' component='span' className={styles.SelectLabel}>
                {pageSizeSelect.dropdownLabel}
              </Typography>
              <div className={styles.PaginationSelectWrapper}>
                <Select
                  renderInput={(value, isMenuOpen) => (
                    <div className={styles.PaginationPageSizeWrapper}>
                      <div>{value?.label}</div>
                      <span
                        className={styles.PaginationPageSizeIcon}
                        style={{
                          transform: isMenuOpen ? 'rotate(0deg)' : 'rotate(180deg)'
                        }}>
                        <svg xmlns='http://www.w3.org/2000/svg' width='10' viewBox='0 0 12 6' fill='currentColor'>
                          <path d='M11.8.2c-.1-.1-.3-.2-.5-.2H.7C.5 0 .3.1.2.2c-.3.4-.2.7.1.9l5.2 4.7c.3.3.8.3 1.1 0l5.2-4.7.1-.1c.2-.2.2-.6-.1-.8z' />
                        </svg>

                        {/* <svg xmlns='http://www.w3.org/2000/svg' width='12' viewBox='0 0 10 5'>
                          <path
                            id='Shape'
                            d='M.122,4.383,4.657.123a.572.572,0,0,1,.71,0l4.512,4.26c.273.239.056.617-.355.617H.476C.066,5-.152,4.622.122,4.383Z'
                            fill='currentColor'
                          />
                        </svg> */}
                      </span>
                    </div>
                  )}
                  inputLabel={null}
                  fullWidth
                  className={styles.SelectWrapper}
                  defaultValue={pageSizeSelect.defaultValue}
                  options={pageSizeSelect.options}
                  onChange={pageSizeSelect.onChange}
                  isSearchable={false}
                  color='primary'
                />
              </div>
            </>
          )}

          {totalCountInfo && (
            <div className={styles.CountNumbers}>
              <Typography variant='p4' component='span'>
                {totalCountInfo}
              </Typography>
            </div>
          )}
        </div>
      )}

      <div className={styles.PaginationFormContainer}>
        {page >= 1 && totalPagesCount > 1 && (
          <ReactPaginate
            className={styles.PaginationList}
            onPageChange={handlePaginationChange}
            breakLabel={breakLabel}
            nextLabel={<ArrowNext width='0.71rem' className={classNames(styles['ArrowNext'], 'ArrowNext')} />}
            forcePage={page - 1}
            pageRangeDisplayed={pageRangeDisplayed}
            pageCount={totalPagesCount}
            marginPagesDisplayed={marginPagesDisplayed}
            previousLabel={<ArrowPrev width='0.71rem' className={classNames(styles['ArrowNext'], 'ArrowPrev')} />}
            renderOnZeroPageCount={null}
          />
        )}

        {jumpToPage && totalPagesCount > 1 && (
          <PaginationInput
            totalPagesCount={totalPagesCount}
            onChange={(value) => {
              handlePaginationChange({
                selected: value
              });
            }}
            inputTitle={jumpToPage.inputTitle}
            placeholder={jumpToPage.placeholder}
          />
        )}
      </div>
    </div>
  );
};

export default Pagination;
