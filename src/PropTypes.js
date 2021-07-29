
function FavoriteNumber({favoriteNumber}) {
    return <div>My favorite number is: {favoriteNumber}</div>
  }

export default function DisplayProps() {
    return (
        <div>
            <FavoriteNumber favoriteNumber="NaN" />
        </div>
    )
}
  
const PropTypes = {
    number(props, propName, componentName) {
      if (typeof props[propName] !== 'number') {
        return new Error('Some useful error message here')
      }
    },
  }
  
  FavoriteNumber.propTypes = {
    favoriteNumber: PropTypes.number,
  }