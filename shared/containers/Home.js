import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as PostActions from '../actions/post'

@connect(
  state => ({ post: state.post }),
  dispatch => ({ actions: bindActionCreators(PostActions, dispatch) })
)
class Home extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };

  // componentDidMount = () => {
  //   this.props.actions.getPosts()
  // };

  _handleClick = () => {
    window.alert('OK')
  };

  render = () => {
    const { post } = this.props

    return (
      <div>
        <h1>Home page</h1>
        <button onClick={this._handleClick}>Click me</button>
        <ul>
          {post.get('posts').map(p =>
            <li key={p.get('id')}>
              {p.get('title')}
            </li>
          )}
        </ul>
      </div>
    )
  };
}

export default Home