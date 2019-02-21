import React from 'react';
import {connect} from 'react-redux';
import {addItem} from '../actions/itemActions';
import { Modal,ModalHeader,ModalBody,Button, Form, FormGroup, Label, Input} from 'reactstrap';


class InputModal extends React.Component{
    state={
        modal:false,
        name:" "
    };

    toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
      };

    onChange = (e) => {
        this.setState({
            name:e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            name:this.state.name
        };

        this.props.addItem(newItem);      //calling the action

        this.toggle();
    };

    render(){
        return(
            <div>
                <Button className="add-btn" 
                color="danger" 
                style={{marginBotom:'2rem'}}
                onClick={this.toggle}>
                    Add Item
                </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add items to the list</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={this.onSubmit}>
                                <FormGroup>
                                <Label for="item">Item</Label>
                                <Input type="text" name="name" id="item" 
                                placeholder="Add Item" 
                                onChange={this.onChange}/>
                                <Button color="info" style={{margin:'0.5rem'}}>Add +</Button>
                                </FormGroup>
                            </Form>    
                        </ModalBody>
                </Modal>
            </div>     
        );
    }
}

export default connect(null,{addItem})(InputModal);