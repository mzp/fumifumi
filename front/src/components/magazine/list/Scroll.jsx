/* eslint-disable react/no-set-state */
import React from "react";
import scrollTo from "scroll-to";
import NavButton from "./NavButton";

function floor (n, base) {
    return Math.floor(n / base) * base;
}

function ceil (n, base) {
    return Math.ceil(n / base) * base;
}

export default class extends React.Component {
    static displayName = "MagazineList.Scroll"
    static propTypes = {
        "children": React.PropTypes.arrayOf(React.PropTypes.element),
        "layout": React.PropTypes.func
    }

    static defaultProps = {"children": []}

    constructor (...args) {
        super(...args);

        this.state = {"scroll": 0};

        this.handleScroll = (e) => {
            this.setState({"scroll": e.target.scrollLeft});
        };
    }

    componentWillUnmount () {
        this.contents.removeEventListener("scroll", this.handleScroll);
        this.contents = null;
    }

    ref (contents) {
        if (this.contents) {
            return;
        }
        this.contents = contents;
        contents.addEventListener("scroll", this.handleScroll);
    }

    isPrev () {
        if (!this.contents) {
            return true;
        }
        const max = this.contents.scrollWidth - this.contents.offsetWidth;


        return this.state.scroll !== max;
    }

    onPrev () {
        scrollTo(this.contents, floor(this.x + this.unit, this.width()), 0);
    }

    isNext () {
        return this.state.scroll !== 0;
    }

    onNext () {
        scrollTo(this.contents, ceil(this.x - this.unit, this.width()), 0);
    }

    get x () {
        return this.contents.scrollLeft;
    }

    get unit () {
        return this.width() * 3;
    }

    render () {
        const {children, layout} = this.props;

        return (
            <div className={layout()}>
                <NavButton
                    enable={this.isPrev()}
                    label="<"
                    layout={layout("prev")}
                    onNav={::this.onPrev}
                />
                <NavButton
                    enable={this.isNext()}
                    label=">"
                    layout={layout("next")}
                    onNav={::this.onNext}
                />
                <div
                    className={layout("contents")}
                    ref={::this.ref}
                >
                    <div
                        className={layout("content")}
                        ref={(c) => {
                            this.width = () => c.offsetWidth;
                        }}
                    />
                    {children}
                    <div className={layout("content")} />
                </div>
            </div>
        );
    }
}
