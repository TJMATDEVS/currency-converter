import React from 'react';
import { Select } from 'antd';


const { Option } = Select;

class SelectCurrency extends React.Component {

    render() {
        //
        return (
            <div>
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select Currency"
                    optionFilterProp="children"
                    onChange={this.props.onChange}
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    <Option value="usd">USD</Option>
                    <Option value="xlm">XLM</Option>
                </Select>
            </div>
        );
    }
}

export default SelectCurrency;