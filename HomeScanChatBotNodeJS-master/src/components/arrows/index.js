import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import './style.scss'

export const PrevArrow = ({ className, style, onClick }) => (
  <div className={cx('RecastAppArrow prev', className)} style={{ ...style }} onClick={onClick}>
    <img src="https://cdn.recast.ai/webchat/arrow-back.svg" className="arrowSvg" />
  </div>
)

export const NextArrow = ({ className, style, onClick }) => (
  <div className={cx('RecastAppArrow next', className)} style={{ ...style }} onClick={onClick}>
    <img src="https://cdn.recast.ai/webchat/arrow-forward.svg" className="arrowSvg" />
  </div>
)

const arrowPropTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
}

PrevArrow.propTypes = arrowPropTypes
NextArrow.propTypes = arrowPropTypes
