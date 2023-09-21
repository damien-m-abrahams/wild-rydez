import React from 'react'
import PropTypes from 'prop-types'
import AddToCart from './add-to-cart'
import styles from './product-card.module.css'

const ProductCard = (props: any) => {
  return (
    <div className={ styles.cardContainer }>
      Cart
      <AddToCart/>
    </div>
  )
}

ProductCard.propTypes = {
  name: PropTypes.string
}

export default ProductCard
