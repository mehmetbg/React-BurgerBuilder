import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState ({ loading: true})
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Batuhan Gezen',
                address: {
                    street: 'Test',
                    zipCode: '34343',
                    country: 'Turkey'
                },
                email: 'test@test.com'},
                deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
        .then(response => {
            this.setState({loading: false});
            this.props.history.push('./')})
        .catch(error => {
            this.setState({loading: false})});
    }

    render(){
        let form = (<form>
            <div>
                <input type="text" name="name" placeholder="Name"/>
            </div>
            <div>
                <input type="email" name="email" placeholder="Email"/>
            </div>
            <div>
                <input type="text" name="street" placeholder="Street"/>
            </div>
            <div>
                <input type="text" name="postal" placeholder="Postal Code"/>
            </div>
            <Button btnType="Success" clicked={this.orderHandler}>Order Now!</Button>
        </form>);
        if (this.state.loading){
            form = <Spinner />;
        }
        return(
            <div className={classes.ContactData}>
                <h4> Contact Information </h4>
                {form}
            </div>
        )
    }
}

export default ContactData;