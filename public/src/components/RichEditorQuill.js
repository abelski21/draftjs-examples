import React, {Component} from 'react';
import ReactQuill, {Quill} from 'react-quill';
import {QuillMentions} from 'quill-mentions';

import '../../style/quill.snow.css';
import '../../style/rich-quill-custom.css';
import '../../style/quill-mentions.css';

// import mentions from '../data/mentions';

Quill.register("mentions", QuillMentions);

class RichEditorQuill extends React.Component {
    constructor(props) {
      super(props);
      this.state = {text: ''};
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value) {
        this.setState({
            text: value
        });
    }

    editorModules() {
      return {
          toolbar: [
              [{ 'header': [1, 2, false] }],
              ['bold', 'italic', 'underline','strike', 'blockquote'],
              [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
              ['code-block']
          ],
      };
    }

    editorFormat() {
        return [
            'header',
            'bold', 'italic', 'underline', 'strike', 'blockquote',
            'list', 'bullet', 'indent',
            'code-block',
            '@'
        ];
    }

    render() {

        return(
            <div id="editor-container">
                <ReactQuill value={this.state.text}
                        theme="snow"
                        modules={this.editorModules()}
                        formats={this.editorFormat()}
                        onChange={this.handleChange} />

                <div className="quill-placeholder">
                    {this.state.text}
                </div>
            </div>

        )
    }
}

export default RichEditorQuill