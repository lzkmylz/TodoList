import React from 'react';
import { connect } from 'react-redux';
import {
  sortByLevel,
  sortByTitletext,
  sortByExpireDate,
  sortByStartDate,
  sortByIsFinish,
} from '../actions/filters';

export class TodoListFilter extends React.Component {
  constructor(props) {
    super(props);

  }

  onTextChange = (e) => {
    this.props.sortByTitletext(e.target.value);
  }

  render() {
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input 
              className="text-input" 
              type="text" 
              value={this.props.filters.titleText} 
              onChange={this.onTextChange} 
              placeholder="Search Tasks"
            />
          </div>
          
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      filters: state.filters
  }
};

const mapDispatchToProps = (dispatch) => ({
  sortByLevel: () => dispatch(sortByLevel(text)),
  sortByTitletext: (titleText) => dispatch(sortByTitletext(titleText)),
  sortByExpireDate: () => dispatch(sortByExpireDate()),
  sortByStartDate: () => dispatch(sortByStartDate()),
  sortByIsFinish: (finishState) => dispatch(sortByIsFinish(finishState))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListFilter);
