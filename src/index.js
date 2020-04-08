import React from 'react';

import "./styles.css";



const defaultProps = {}

class Monochroma extends React.Component {
    componentDidMount() {
        if (localStorage.getItem("_monochroma_mode") === "dark") {
            document.body.classList.add("dark");
        }
    };
    toggleMode() {
        if (
            !localStorage.getItem("_monochroma_mode") ||
            localStorage.getItem("_monochroma_mode") === "default"
        ) {
            document.body.classList.add("dark");
            localStorage.setItem("_monochroma_mode", "dark");
        } else {
            document.body.classList.remove("dark");
            localStorage.setItem("_monochroma_mode", "default");
        }
    };

    getChecked() {
        if (localStorage.getItem('_monochroma_mode') === 'default' && !localStorage.getItem("_monochroma_mode")) {
            return false;
        }
        if (localStorage.getItem('_monochroma_mode') === 'dark') {
            return true;
        }
    }

    render() {
        return (
            <div className={'monochroma_parent'}>
                <span className={'switchParent'}>
                    <label class="switch">
                        <input
                            type="checkbox"
                            onClick={this.toggleMode}
                            defaultChecked={this.getChecked()}
                        />
                        <span class="slider round"></span>
                    </label>
                </span>
                {this.props.children}
            </div>
        );
    }
}

Monochroma.defaultProps = defaultProps;

export default Monochroma;
