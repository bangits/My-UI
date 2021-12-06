import { ArrowTop } from '@/icons';
import classNames from 'classnames';
import styles from './TreeSelect.module.scss';

const TreeSelect = () => {
  return (
    <div className={classNames(styles['Select-Tree'])}>
      <ul className={classNames(styles['Select-Tree-List'])}>
        <li className={classNames(styles['Select-Tree-List__Item'])}>
          <span className={classNames(styles['Select-Tree-List__Item-Inner'])}>
            <span className={classNames(styles['Select-Tree-List__Item-label'])}>
              <span className={classNames(styles['Select-Tree-List__Item-label-inner'])}>
                Company Name 1 Company Name 1Com Company Name 1 Company Name 1Com
              </span>
            </span>
            <i className={classNames(styles['Select-Tree-List__Item-number'])}>(45)</i>
          </span>
        </li>
        {/*  */}
        <li className={classNames(styles['Select-Tree-List__Item'], styles['Select-Tree-List__Item-parent'])}>
          <i className={classNames(styles['Select-Tree-List__Item-chain'])}></i>
          <span className={classNames(styles['Select-Tree-List__Item-Inner'])}>
            <span className={classNames(styles['Select-Tree-List__Item-label'])}>
              <span className={classNames(styles['Select-Tree-List__Item-label-inner'])}>Company</span>
            </span>
            <i className={classNames(styles['Select-Tree-List__Item-number'])}>(45)</i>
            <i className={classNames(styles['Select-Tree-List__Item-arrow'])}>
              <ArrowTop width='10' />
            </i>
          </span>

          <ul className={classNames(styles['Select-Tree-List'])}>
            <i className={classNames(styles['Select-Tree-List__Item-chain'])}></i>
            <li className={classNames(styles['Select-Tree-List__Item'])}>
              <i className={classNames(styles['Select-Tree-List__Item-chain'])}></i>
              <span className={classNames(styles['Select-Tree-List__Item-Inner'])}>
                <span className={classNames(styles['Select-Tree-List__Item-label'])}>
                  <span className={classNames(styles['Select-Tree-List__Item-label-inner'])}>
                    Company Name 1 Company Name 1Com Company Name 1 Company Name 1Com
                  </span>
                </span>
                <i className={classNames(styles['Select-Tree-List__Item-number'])}>(451)</i>
              </span>
            </li>
            <li className={classNames(styles['Select-Tree-List__Item'], styles['Select-Tree-List__Item-parent'])}>
              <i className={classNames(styles['Select-Tree-List__Item-chain'])}></i>
              <span className={classNames(styles['Select-Tree-List__Item-Inner'])}>
                <span className={classNames(styles['Select-Tree-List__Item-label'])}>
                  <span className={classNames(styles['Select-Tree-List__Item-label-inner'])}>
                    Company Name 1 Company Name 1Com Company Name 1 Company Name 1Com
                  </span>
                </span>
                <i className={classNames(styles['Select-Tree-List__Item-number'])}>(4512)</i>
                <i className={classNames(styles['Select-Tree-List__Item-arrow'])}>
                  <ArrowTop width='10' />
                </i>
              </span>

              <ul className={classNames(styles['Select-Tree-List'])}>
                <li className={classNames(styles['Select-Tree-List__Item'])}>
                  <i className={classNames(styles['Select-Tree-List__Item-chain'])}></i>
                  <span className={classNames(styles['Select-Tree-List__Item-Inner'])}>
                    <span className={classNames(styles['Select-Tree-List__Item-label'])}>
                      <span className={classNames(styles['Select-Tree-List__Item-label-inner'])}>
                        Company Name 1 Company Name 1Com Company Name 1 Company Name 1Com
                      </span>
                    </span>
                    <i className={classNames(styles['Select-Tree-List__Item-number'])}>(451)</i>
                  </span>
                </li>
                <li className={classNames(styles['Select-Tree-List__Item'], styles['Select-Tree-List__Item-parent'])}>
                  <i className={classNames(styles['Select-Tree-List__Item-chain'])}></i>
                  <span className={classNames(styles['Select-Tree-List__Item-Inner'])}>
                    <span className={classNames(styles['Select-Tree-List__Item-label'])}>
                      <span className={classNames(styles['Select-Tree-List__Item-label-inner'])}>
                        Company Name 1 Company Name 1Com Company Name 1 Company Name 1Com
                      </span>
                    </span>
                    <i className={classNames(styles['Select-Tree-List__Item-number'])}>(4512)</i>
                    <i className={classNames(styles['Select-Tree-List__Item-arrow'])}>
                      <ArrowTop width='10' />
                    </i>
                  </span>

                  <ul className={classNames(styles['Select-Tree-List'])}>
                    <li className={classNames(styles['Select-Tree-List__Item'])}>
                      <i className={classNames(styles['Select-Tree-List__Item-chain'])}></i>
                      <span className={classNames(styles['Select-Tree-List__Item-Inner'])}>
                        <span className={classNames(styles['Select-Tree-List__Item-label'])}>
                          <span className={classNames(styles['Select-Tree-List__Item-label-inner'])}>
                            Company Name 1 Company Name 1Com Company Name 1 Company Name 1Com
                          </span>
                        </span>
                        <i className={classNames(styles['Select-Tree-List__Item-number'])}>(451)</i>
                      </span>
                    </li>
                    <li className={classNames(styles['Select-Tree-List__Item'])}>
                      <i className={classNames(styles['Select-Tree-List__Item-chain'])}></i>
                      <span className={classNames(styles['Select-Tree-List__Item-Inner'])}>
                        <span className={classNames(styles['Select-Tree-List__Item-label'])}>
                          <span className={classNames(styles['Select-Tree-List__Item-label-inner'])}>
                            Company Name 1 Company Name 1Com Company Name 1 Company Name 1Com
                          </span>
                        </span>
                        <i className={classNames(styles['Select-Tree-List__Item-number'])}>(451)</i>
                      </span>
                    </li>
                  </ul>
                </li>

                <li className={classNames(styles['Select-Tree-List__Item'])}>
                  <i className={classNames(styles['Select-Tree-List__Item-chain'])}></i>
                  <span className={classNames(styles['Select-Tree-List__Item-Inner'])}>
                    <span className={classNames(styles['Select-Tree-List__Item-label'])}>
                      <span className={classNames(styles['Select-Tree-List__Item-label-inner'])}>
                        Company Name 1 Company Name 1Com Company Name 1 Company Name 1Com
                      </span>
                    </span>
                    <i className={classNames(styles['Select-Tree-List__Item-number'])}>(45123)</i>
                  </span>
                </li>
                <li className={classNames(styles['Select-Tree-List__Item'])}>
                  <i className={classNames(styles['Select-Tree-List__Item-chain'])}></i>
                  <span className={classNames(styles['Select-Tree-List__Item-Inner'])}>
                    <span className={classNames(styles['Select-Tree-List__Item-label'])}>
                      <span className={classNames(styles['Select-Tree-List__Item-label-inner'])}>
                        Company Name 1 Company Name 1Com Company Name 1 Company Name 1Com
                      </span>
                    </span>
                    <i className={classNames(styles['Select-Tree-List__Item-number'])}>(45)</i>
                  </span>
                </li>
              </ul>
            </li>

            <li className={classNames(styles['Select-Tree-List__Item'])}>
              {/* <span className={classNames(styles['Select-Tree-List__Item-el-group'])}> */}
              <i className={classNames(styles['Select-Tree-List__Item-chain'])}></i>
              <span className={classNames(styles['Select-Tree-List__Item-Inner'])}>
                <span className={classNames(styles['Select-Tree-List__Item-label'])}>
                  <span className={classNames(styles['Select-Tree-List__Item-label-inner'])}>
                    UCompany Name 1 Company Name 1Com Company Name 1 Company Name 1Com
                  </span>
                </span>
                <i className={classNames(styles['Select-Tree-List__Item-number'])}>(45123)</i>
              </span>
              {/* </span> */}
            </li>
            <li className={classNames(styles['Select-Tree-List__Item'])}>
              <i className={classNames(styles['Select-Tree-List__Item-chain'])}></i>
              <span className={classNames(styles['Select-Tree-List__Item-Inner'])}>
                <span className={classNames(styles['Select-Tree-List__Item-label'])}>
                  <span className={classNames(styles['Select-Tree-List__Item-label-inner'])}>
                    Company Name 1 Company Name 1Com Company Name 1 Company Name 1Com
                  </span>
                </span>
                <i className={classNames(styles['Select-Tree-List__Item-number'])}>(45)</i>
              </span>
            </li>
          </ul>
        </li>
        <li className={classNames(styles['Select-Tree-List__Item'], styles['Select-Tree-List__Item-parent'])}>
          <i className={classNames(styles['Select-Tree-List__Item-chain'])}></i>
          <span className={classNames(styles['Select-Tree-List__Item-Inner'])}>
            <span className={classNames(styles['Select-Tree-List__Item-label'])}>
              <span className={classNames(styles['Select-Tree-List__Item-label-inner'])}>
                Company Name 1 Company Name 1Com Company Name 1 Company Name 1Com
              </span>
            </span>
            <i className={classNames(styles['Select-Tree-List__Item-number'])}>(4)</i>
            <i className={classNames(styles['Select-Tree-List__Item-arrow'])}>
              <ArrowTop width='10' />
            </i>
          </span>

          <ul className={classNames(styles['Select-Tree-List'])}>
            <li className={classNames(styles['Select-Tree-List__Item'])}>
              <i className={classNames(styles['Select-Tree-List__Item-chain'])}></i>
              <span className={classNames(styles['Select-Tree-List__Item-Inner'])}>
                <span className={classNames(styles['Select-Tree-List__Item-label'])}>
                  <span className={classNames(styles['Select-Tree-List__Item-label-inner'])}>
                    Company Name 1 Company Name 1Com Company Name 1 Company Name 1Com
                  </span>
                </span>
                <i className={classNames(styles['Select-Tree-List__Item-number'])}>(1)</i>
              </span>
            </li>
            <li className={classNames(styles['Select-Tree-List__Item'])}>
              <i className={classNames(styles['Select-Tree-List__Item-chain'])}></i>
              <span className={classNames(styles['Select-Tree-List__Item-Inner'])}>
                <span className={classNames(styles['Select-Tree-List__Item-label'])}>
                  <span className={classNames(styles['Select-Tree-List__Item-label-inner'])}>
                    Company Name 1 Company Name 1Com Company Name 1 Company Name 1Com
                  </span>
                </span>
                <i className={classNames(styles['Select-Tree-List__Item-number'])}>(99999)</i>
              </span>
            </li>

            <li className={classNames(styles['Select-Tree-List__Item'])}>
              <i className={classNames(styles['Select-Tree-List__Item-chain'])}></i>
              <span className={classNames(styles['Select-Tree-List__Item-Inner'])}>
                <span className={classNames(styles['Select-Tree-List__Item-label'])}>
                  <span className={classNames(styles['Select-Tree-List__Item-label-inner'])}>
                    Company Name 1 Company Name 1Com Company Name 1 Company Name 1Com
                  </span>
                </span>
                <i className={classNames(styles['Select-Tree-List__Item-number'])}>(9999999999)</i>
              </span>
            </li>
            <li className={classNames(styles['Select-Tree-List__Item'])}>
              <i className={classNames(styles['Select-Tree-List__Item-chain'])}></i>
              <span className={classNames(styles['Select-Tree-List__Item-Inner'])}>
                <span className={classNames(styles['Select-Tree-List__Item-label'])}>
                  <span className={classNames(styles['Select-Tree-List__Item-label-inner'])}>Company Name</span>
                </span>
                <i className={classNames(styles['Select-Tree-List__Item-number'])}>(2)</i>
              </span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default TreeSelect;
