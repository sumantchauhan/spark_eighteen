import React, { Component } from 'react'
import { connect } from "react-redux";
import { fetchItems,checkItem } from "../actions/checkAction";

export class RightComponent extends Component {
    
    componentDidMount(){
        this.props.fetchItems();
    }

    unChecked = (list_Id,id) => {
        this.props.checkItem(list_Id,id);
    }

    render() {
        return (
            <div className="right-component">
              {
                  this.props.updatedItem && this.props.updatedItem.length>0 ? this.props.updatedItem.map(element => (
                      <div key={element.id}>
                        {
                            element.isChecked ? (
                                <div>
                                  <div className="right-list-name">
                                  {element.name}
                                  </div>
                                  {
                                      element.items.map(checkItem => (
                                        <div key={checkItem.id}>
                                          {
                                              checkItem.checked ? (
                                                  <div className="right-item-list">
                                                      <div style={{flex:1}}>{checkItem.name}</div>
                                                      <div className="unchecked" onClick={() => this.unChecked(element.id,checkItem.id)}>X</div>
                                                  </div>
                                              )
                                              :
                                              (
                                                  <div></div>
                                              )
                                          }
                                        </div>
                                      ))
                                  }
                                </div>
                            ) : (<div></div>)
                        }
                      </div>
                  ))
                  :
                  (
                      <div></div>
                  )
              }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    items: state.items.items,
    updatedItem:state.items.selectedItem
  });

export default connect(
    mapStateToProps,
    { fetchItems,checkItem }
  )(RightComponent);


