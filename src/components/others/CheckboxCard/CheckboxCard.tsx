import classNames from 'classnames';
import { getMyUIPrefix } from '@/configs';
import React from 'react';
import styles from './CheckboxCard.module.scss';
import { OperaIcon, ChromeIcon } from '@/icons';

const CheckboxCard = () => {
  return (
    <>
      <div
        className={classNames(
          styles['CheckboxCardList'],
          styles['CheckboxCardList--primary'],
          `${getMyUIPrefix()}-CheckboxCardList--primary`,
          `${getMyUIPrefix()}-CheckboxCardList`
        )}>
        {/* prettier-ignore */}
        <div
          className={classNames(
            styles['CheckboxCard'],
            styles['CheckboxCard--selected'],
            `${getMyUIPrefix()}-CheckboxCard`,
            `${getMyUIPrefix()}-CheckboxCard--selected`,
          )}>
          <div
            className={classNames(
              styles['CheckboxCard__ElementsGroup'],
              `${getMyUIPrefix()}-CheckboxCard__ElementsGroup`,
            )}>
            <OperaIcon width='30px' />
            <span className={classNames(
              styles['CheckboxCard__Label'],
              `${getMyUIPrefix()}-CheckboxCard__Label`,
            )}>
              Opera
            </span>
          </div>
        </div>
        {/* prettier-ignore */}
        <div
          className={classNames(
            styles['CheckboxCard'],
            styles['CheckboxCard--selected'],
            styles['CheckboxCard--disable'],
            `${getMyUIPrefix()}-CheckboxCard`,
            `${getMyUIPrefix()}-CheckboxCard--selected`,
            `${getMyUIPrefix()}-CheckboxCard--disable`,
          )}>
          <div
            className={classNames(
              styles['CheckboxCard__ElementsGroup'],
              `${getMyUIPrefix()}-CheckboxCard__ElementsGroup`
            )}>
            <OperaIcon width='30px' />
            <span className={classNames(
              styles['CheckboxCard__Label'], 
              `${getMyUIPrefix()}-CheckboxCard__Label`
            )}>
              Opera
            </span>
          </div>
        </div>
        {/* prettier-ignore */}
        <div
          className={classNames(
            styles['CheckboxCard'],
            styles['CheckboxCard--disable'],
            `${getMyUIPrefix()}-CheckboxCard`,
            `${getMyUIPrefix()}-CheckboxCard--disable`,
          )}>
          <div className={classNames(
                styles['CheckboxCard__ElementsGroup'],
                `${getMyUIPrefix()}-CheckboxCard__ElementsGroup`
                )}>
            <ChromeIcon width='30px' />
            <span className={classNames(
                    styles['CheckboxCard__Label'],
                    `${getMyUIPrefix()}-CheckboxCard__Label`
                  )}>Chrome</span>
          </div>
        </div>
        {/* prettier-ignore */}
        <div className={classNames(
              styles['CheckboxCard'],
              `${getMyUIPrefix()}-CheckboxCard`,
              )}>
          <div className={classNames(
                styles['CheckboxCard__ElementsGroup'],
                `${getMyUIPrefix()}-CheckboxCard__ElementsGroup`,
                )}>
            <ChromeIcon width='30px' />
            <span className={classNames(
                    styles['CheckboxCard__Label'],
                    `${getMyUIPrefix()}-CheckboxCard__Label`,
                  )}>Chrome</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckboxCard;
