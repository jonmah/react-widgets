import { connect } from 'react-redux'

import Songs from './Songs'
import { populate, select } from './actions'

const mapStateToProps = state => {
  return state.songs
}

const mapDispatchToProps = dispatch => {
  return {
    populate: () => dispatch(populate()),
    select: data => dispatch(select(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Songs)
