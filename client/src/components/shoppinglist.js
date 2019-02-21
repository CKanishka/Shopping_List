import React from 'react';
import { Button,ListGroup,ListGroupItem} from 'reactstrap';
import {connect} from 'react-redux';
import {getItems,deleteItem} from '../actions/itemActions';

class ShoppingList extends React.Component{
    componentDidMount(){
        this.props.getItems();      //calling the action
    }

    onDeleteClick = (id) =>{
        this.props.deleteItem(id);  //calling the action
    }

    render(){
        const {items}=this.props.item;
        console.log(items);
        return(
            <div>
                 <ListGroup>
                    {
                    items.map(({_id,name})=>
                    <ListGroupItem key={_id} color='warning'>
                        <Button className="remove-btn" color="danger" size="sm"
                            onClick={this.onDeleteClick.bind(this,_id)}>
                        - </Button>    
                        {name}
                    </ListGroupItem>
                    )
                     }
                </ListGroup>    

            </div>    

        );
    }
}
const mapStateToProps = (state) => ({
    item:state.item   //from reducer
});
export default connect(mapStateToProps,{getItems,deleteItem})(ShoppingList);