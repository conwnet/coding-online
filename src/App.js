import React, {Component} from 'react';
import {Header, CodeArea} from './components';
import {get} from 'lodash';
import './App.css';

class App extends Component {

    state = {
        language: 'c',
        codes: {}
    }

    handleLanguageChange = language => {
        this.setState({language});
    }

    hanldeCodeChange = code => {
        const {language} = this.state;
        this.setState(prevState => ({
            codes: Object.assign(prevState.codes, {[language]: code})
        }));
    }

    handleCodeRun = () => {
        const {language, codes} = this.state;
        const data = {
            data_input: '',
            lang: language,
            type_code: get(codes, language, '')
        }
        console.log(data);
    }

    render() {
        const {language, codes} = this.state;
        return (
            <div className="root">
                    <Header
                        value={language}
                        onCodeRun={this.handleCodeRun}
                        onLanguageChange={this.handleLanguageChange}
                    />
                    <CodeArea
                        language={language}
                        code={get(codes, language, '')}
                        onCodeChange={this.hanldeCodeChange}
                    />
            </div>
        );
    }
}

export default App;
