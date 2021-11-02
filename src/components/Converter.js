import React from 'react';
import SelectCurrency from "./SelectCurrency";
import {InputNumber} from 'antd';



function removeCommas(amount) {
    while (amount.search(",") >= 0) {
        amount = (amount + "").replace(',', '');
    }
    return parseInt(amount);
}

function calculateUSD(amount) {

    const value = amount * 0.33;
    const calculatedAmount = Number.parseFloat(value).toFixed(2);

    if (calculatedAmount > 9999){
        return calculatedAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
        return calculatedAmount;
    }
}

function calculateXLM(amount) {

    const value = amount * 3.01;
    const calculatedAmount = Number.parseFloat(value).toFixed(2);

    if (calculatedAmount > 9999){
        return calculatedAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
        return calculatedAmount;
    }
}

function calculateRWF({amount, currency}) {

    if (currency === "usd"){
        //
        const value = amount * 13000;
        const calculatedAmount = Number.parseFloat(value).toFixed(2);

        if (calculatedAmount > 9999){
            return calculatedAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        } else {
            return calculatedAmount;
        }

    } else {
        const value = amount * 4290;
        const calculatedAmount = Number.parseFloat(value).toFixed(2);

        if (calculatedAmount > 9999){
            return calculatedAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        } else {
            return calculatedAmount;
        }

    }
}

function calculateKES({amount, currency}) {

    if (currency === "usd"){
        //
        const value = amount * 115;
        const calculatedAmount = Number.parseFloat(value).toFixed(2);

        if (calculatedAmount > 9999){
            return calculatedAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        } else {
            return calculatedAmount;
        }

    } else {
        const value = amount * 37.95;
        const calculatedAmount = Number.parseFloat(value).toFixed(2);

        if (calculatedAmount > 9999){
            return calculatedAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        } else {
            return calculatedAmount;
        }
    }
}

function calculateTZS({amount, currency}) {

    if (currency === "usd"){
        //
        const value = amount * 2300;
        const calculatedAmount = Number.parseFloat(value).toFixed(2);

        if (calculatedAmount > 9999){
            return calculatedAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        } else {
            return calculatedAmount;
        }
    } else {
        const value = amount * 765.60;
        const calculatedAmount = Number.parseFloat(value).toFixed(2);

        if (calculatedAmount > 9999){
            return calculatedAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        } else {
            return calculatedAmount;
        }
    }
}

function Convert({amount, currency}) {
    //
    if (amount && currency){
        //

        if (isNaN(amount)) {
            amount = removeCommas(amount);
        }

        switch (currency) {
            case "usd":
                return (
                    <div>
                        <p>XLM: {calculateXLM(amount)}</p>
                        <p>RWF: {calculateRWF({amount, currency})}</p>
                        <p>KES: {calculateKES({amount, currency})}</p>
                        <p>TZS: {calculateTZS({amount, currency})}</p>
                    </div>
                );
            case "xlm":
                return (
                    <div>
                        <p>USD: {calculateUSD(amount)}</p>
                        <p>RWF: {calculateRWF({amount, currency})}</p>
                        <p>KES: {calculateKES({amount, currency})}</p>
                        <p>TZS: {calculateTZS({amount, currency})}</p>
                    </div>
                );

            default:
                return null;
        }
    }
}

class Converter extends React.Component {
    //
    constructor(props) {
        super(props);

        this.state = {
            amount: "",
            currency: "",
        }
        this.selectCurrency = this.selectCurrency.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange({ value }) {
        //
        if(value > 9999){
            //
            const amountValue = value.toLocaleString('en-US');
            this.setState({amount: amountValue});

        } else {
            //
            this.setState({amount: value});
        }
    }

    selectCurrency(value){

        this.setState({currency: value});
    }

    render() {

        const {amount, currency} = this.state;

        return(
            <div>
                <SelectCurrency onChange={this.selectCurrency} value={currency}/>
                <InputNumber min={0} value={amount} onChange={(value) => this.onChange({ value})} />

                <div>
                    {
                        Convert({amount, currency})
                    }
                </div>
            </div>
        );
    }
}

export default Converter;