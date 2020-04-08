import React from 'react';

import s from "./styles.css";



const defaultProps = {}

class Monochroma extends React.Component {
    componentDidMount() {
        if (localStorage.getItem("_monochroma_mode") === "dark") {
            document.body.classList.add(s.dark);
        }
    };
    toggleMode() {
        if (
            !localStorage.getItem("_monochroma_mode") ||
            localStorage.getItem("_monochroma_mode") === "default"
        ) {
            document.body.classList.add(s.dark);
            localStorage.setItem("_monochroma_mode", "dark");
        } else {
            document.body.classList.remove(s.dark);
            localStorage.setItem("_monochroma_mode", "default");
        }
    };

    getChecked() {
        if (localStorage.getItem('_monochroma_mode') === 'default' || !localStorage.getItem("_monochroma_mode")) {
            return false;
        }
        if (localStorage.getItem('_monochroma_mode') === "dark") {
            return true;
        }
    }

    render() {
        return (
            <div className={s.monochroma_parent}>
                <span className={s.switchParent}>
                    <label className={s.switch}>
                        <input
                            type="checkbox"
                            onClick={this.toggleMode}
                            defaultChecked={this.getChecked()}
                        />
                        <span className={`${s.slider} ${s.round}`}></span>
                    </label>
                </span>
                {this.props.children}
            </div>
        );
    }
}

Monochroma.defaultProps = defaultProps;

export default Monochroma;
