import React, {Component} from 'react';
import {Header, CodeArea, Tools} from './components';
import {postCode, getStatus} from './api';
import ReactTimeout from 'react-timeout'
import store from 'storejs';
import {get} from 'lodash';
import './App.css';

class App extends Component {

    state = {
        language: 'c',
        codes: {},
        side: false,
        input: '',
        outputs: [],
        status: 'finished'
    }

    componentDidMount = () => {
        const {language, codes} = store();
        this.setState({language, codes});
    }

    saveStatus = () => {
        const {language, codes} = this.state;
        store({language, codes});
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

    handleCodeRun = async () => {
        this.saveStatus();
        this.setState({side: true, status: 'running'});
        const {language, codes, input} = this.state;
        const data = {
            data_input: input,
            lang: language,
            typed_code: get(codes, language, '')
        };
        try {
            const {interpret_id} = await postCode(data);
            this.checkRunStatus(interpret_id, 50);
        } catch (e) {
            this.setState({status: 'error'});
        }
    }

    checkRunStatus = async (id, ttl) => {
        const res = await getStatus(id);
        if (ttl === 0) {
            this.setState({status: 'error'});
        } else if (res.state !== 'SUCCESS') {
            this.props.setTimeout(() => this.checkRunStatus(id, ttl - 1), 500);
        } else {
            this.getOutput(res);
        }
    }

    getOutput = res => {
        const {status_code} = res;
        const {outputs} = this.state;
        switch (status_code) {
            case 10: outputs.push({
                type: 'success',
                title: `Finished in ${res.status_runtime}`,
                content: res.code_output.join('\r\n')
            }); break;
            case 20: outputs.push({
                type: 'error',
                title: res.status_msg,
                content: res.compile_error
            }); break;
            default: outputs.push({
                type: 'error',
                title: res.status_msg,
                content: ''
            }); break;
        }
        this.setState({outputs, status: 'finished'});
    }

    handleSideChange = side => {
        this.setState({side});
    }

    handleInputChange = input => {
        this.setState({input});
    }

    render() {
        const {language, codes, side, input, outputs, status} = this.state;

        return (
            <div className="root">
                <Header
                    value={language}
                    status={status}
                    onCodeRun={this.handleCodeRun}
                    onLanguageChange={this.handleLanguageChange}
                />
                <main className="main">
                    <CodeArea
                        language={language}
                        code={get(codes, language, '')}
                        onCodeChange={this.hanldeCodeChange}
                    />
                    <Tools
                        side={side}
                        input={input}
                        status={status}
                        outputs={outputs}
                        onSideChange={this.handleSideChange}
                        onInputChange={this.handleInputChange}
                    />
                </main>
            </div>
        );
    }
}

export default ReactTimeout(App);
