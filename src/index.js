import React from 'react';

import s from "./styles.css";



const defaultProps = {
    position: "top-right", // Can be top-right, top-left, 
    type: "default", // inky, starless, default
    //customPosition:{}  Since Switch position is absolute with relatively larger zIndex. Provide css position styles with (right, left, bottom, top)
}

class Monochroma extends React.Component {
    componentDidMount() {
        const { type } = this.props;

        if (localStorage.getItem("_monochroma_mode") === "dark") {
            switch (type) {
                case "inky":
                    document.body.classList.add(s.inky);
                    break;
                case "starless":
                    document.body.classList.add(s.starless);
                    break;
                default:
                    document.body.classList.add(s.dark);
                    break;
            }

        }
    };
    toggleMode = () => {
        const { type } = this.props;
        if (
            !localStorage.getItem("_monochroma_mode") ||
            localStorage.getItem("_monochroma_mode") === "default"
        ) {
            switch (type) {
                case "inky":
                    document.body.classList.add(s.inky);
                    break;
                case "starless":
                    document.body.classList.add(s.starless);
                    break;
                default:
                    document.body.classList.add(s.dark);
                    break;
            }
            localStorage.setItem("_monochroma_mode", "dark");
        } else {
            switch (type) {
                case "inky":
                    document.body.classList.remove(s.inky);
                    break;
                case "starless":
                    document.body.classList.remove(s.starless);
                    break;
                default:
                    document.body.classList.remove(s.dark);
                    break;
            }

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

    getSwitchPosition() {
        const { position, customPosition } = this.props;
        switch (position) {
            case "top-right":
                return {
                    right: "35px",
                    top: "35px"
                }
            case "top-left":
                return {
                    left: "35px",
                    top: "35px"
                }
            case "bottom-left":
                return {
                    left: "35px",
                    bottom: "35px"
                }
            case "bottom-right":
                return {
                    right: "35px",
                    bottom: "35px"
                }
            case "custom":
                return customPosition;
            default:
                return {
                    right: "35px",
                    top: "35px"
                }
        }
    }

    render() {
        return (
            <div className={s.monochroma_parent}>
                <span className={s.switchParent} style={this.getSwitchPosition()}>
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
