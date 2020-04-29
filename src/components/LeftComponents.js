import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchItems,checkItem } from "../actions/checkAction";



class LeftComponents extends Component {

  componentDidMount() {
    this.props.fetchItems();
  }

  onChange = (event) => {
  }

  onClick = (list_Id,id) => {
      this.props.checkItem(list_Id,id);
  } 

  render() {
    return (
      <div className="left-component">
        {
            this.props.items && this.props.items.length>0 ? this.props.items.map(item => (
                <div key={item.id}>
                <div className="item-list-name">
                  <h3>
                  {item.name}
                  </h3>
                  {
                      item.items.map(listItem => (
                  <div className="itemList" onClick={() => this.onClick(item.id,listItem.id,)} key={listItem.id}>
                    <label className="container" htmlFor={listItem.name}> {listItem.name}
                    <input 
                        type="checkbox" 
                        name={listItem.name} 
                        checked={listItem.checked} 
                        onChange={this.onChange}
                    />
                    <span className="checkmark"></span>
                    </label>
                  </div>
                      ))
                  }
                </div>
                </div>
            ))
            :
            (
             <div></div>
            )
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items.items,
  updatedItem:state.items.selectedItem
});

export default connect(
  mapStateToProps,
  { fetchItems,checkItem }
)(LeftComponents);