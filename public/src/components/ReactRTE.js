import React, {Component} from 'react';
import RichTextEditor from 'react-rte';

class ReactRTE extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: RichTextEditor.createEmptyValue(), htmlValue: ''};
        this.onChange = this.onChange.bind(this);
    }

    onChange(value) {
      this.setState({
        value: value
      });
    }

    convert() {
      const {value} = this.state;
      this.setState({
        htmlValue: value.toString('html')
      })
    }

    render() {
        const {value, htmlValue} = this.state;
        return (
          <div>
              <RichTextEditor value={value} onChange={this.onChange} />
              <button onClick={this.convert.bind(this)}>Convert</button>
              <div>{htmlValue}</div>
          </div>

        );
    }
}
export default ReactRTE