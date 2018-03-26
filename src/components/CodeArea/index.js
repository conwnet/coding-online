import React, {PureComponent} from 'react';
import {Controlled as CodeMirror} from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/go/go';
import 'codemirror/mode/ruby/ruby';
import 'codemirror/mode/swift/swift';
import 'codemirror/mode/clike/clike';
import 'codemirror/mode/python/python';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/matchbrackets';
import './styles.css';

const LANGUAGE_TO_MODE = {
    'c': 'text/x-csrc',
    'cpp': 'text/x-c++src',
    'java': 'text/x-java',
    'python': 'text/x-python',
    'python3': 'text/x-python',
    'javascript': 'text/javascript',
    'golang': 'text/x-go',
    'kotlin': 'text/x-kotlin',
    'swift': 'text/x-swift',
    'ruby': 'text/x-ruby',
    'csharp': 'text/x-csharp',
    'scala': 'text/x-scala'
};

const options = {
    lineNumbers: true,
    theme: 'material',
    indentUnit: 4,
    indentWithTabs: true,
    matchBrackets: true,
	autoCloseBrackets: true
};

class CodeArea extends PureComponent {
    handleChange = (editor, data, value) => {
        this.props.onCodeChange(value);
    }

    render() {
        const {language, code} = this.props;
    
        Object.assign(options, {mode: LANGUAGE_TO_MODE[language]});
        return <CodeMirror value={code} className="code-area" options={options} onBeforeChange={this.handleChange} />;
    }
}

export default CodeArea;
