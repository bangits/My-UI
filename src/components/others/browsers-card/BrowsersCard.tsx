import classNames from 'classnames';
import { getMyUIPrefix } from '@/configs';
import React from 'react';
import styles from './BrowsersCard.module.scss';
import { OperaIcon, ChromeIcon } from '@/icons';

const BrowsersCard = () => {
  return (
    <div className={classNames(styles['BrowsersCardList'], `${getMyUIPrefix()}-BrowsersCardList`)}>
      <div
        className={classNames(
          styles['BrowsersCard'],
          styles['BrowsersCard--selected'],
          `${getMyUIPrefix()}-BrowsersCard`
        )}>
        <div
          className={classNames(
            styles['BrowsersCard__ElementsGroup'],
            `${getMyUIPrefix()}-BrowsersCard__ElementsGroup`
          )}>
          <OperaIcon width='30px' />
          <span className={classNames(styles['BrowsersCard__Label'])}>Opera</span>
        </div>
      </div>
      <div className={classNames(styles['BrowsersCard'], styles['BrowsersCard--selected-disable'])}>
        <div className={classNames(styles['BrowsersCard__ElementsGroup'])}>
          <OperaIcon width='30px' />
          <span className={classNames(styles['BrowsersCard__Label'])}>Opera</span>
        </div>
      </div>
      <div className={classNames(styles['BrowsersCard'], styles['BrowsersCard--disable'])}>
        <div className={classNames(styles['BrowsersCard__ElementsGroup'])}>
          <ChromeIcon width='30px' />
          <span className={classNames(styles['BrowsersCard__Label'])}>Chrome</span>
        </div>
      </div>
      <div className={classNames(styles['BrowsersCard'], styles['BrowsersCard--active'])}>
        <div className={classNames(styles['BrowsersCard__ElementsGroup'])}>
          <ChromeIcon width='30px' />
          <span className={classNames(styles['BrowsersCard__Label'])}>Chrome</span>
        </div>
      </div>
    </div>
  );
};

export default BrowsersCard;
