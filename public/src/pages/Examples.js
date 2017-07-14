import React, { Component } from 'react';
import Panel from '../components/Panel.js';
import Rich from '../components/Rich.js';
import RichQuill from '../components/RichEditorQuill';
import RichTextEditor from '../components/ReactRTE';
import DraftJSPluginsEditor from '../components/DraftJSPluginsEditor.js';
import EditorMentions from '../components/MentionsEditor';
import PluginSamples from '../components/PluginSample';

class Examples extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Panel title="Draftjs with Mentions" features="Mentions">
            <EditorMentions />
          </Panel>
          <Panel title="Rich Text using Draftjs" source="https://github.com/facebook/draft-js/blob/master/examples/rich/rich.html" features="Classic Rich text editor">
            <Rich />
          </Panel>
          <Panel title="React Quill Editor" features="React Quill text editor">
              <RichQuill />
          </Panel>
          {/*<Panel title="https://react-rte.org/demo" source="https://react-rte.org/demo" features="Rich Text Buttons">
             <iframe src="https://react-rte.org/demo"  style={{display: 'block', width: '100%', height: 500}} frameBorder="0"/>
             <RichTextEditor />
          </Panel>*/}
          {/*<Panel title="DraftJS-Plugins Editor" source="https://www.draft-js-plugins.com/" features="1. @mention w/ menu 2. Stickers! 3. colorful links 4. Hashtags 5. Undo/Redo">
            <DraftJSPluginsEditor />
          </Panel>*/}
        </div>
      </div>
    );
  }
}

console.error = (function(_error) {
  return function(message) {
    if(typeof message !== 'string' || message.indexOf('component is `contentEditable') === -1) {
      _error.apply(console, arguments)
    }
  }
})(console.error);


export default Examples;
