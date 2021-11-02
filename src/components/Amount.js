import React from 'react';


export class Amount extends React.Component {
    render() {
        return (
            <div>
                <input
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    onChange={this.props.onChange}
                    name={ this.props.name }
                    accept={this.props.accept}
                    maxLength={this.props.maxLength}
                />
            </div>
        );
    }
}