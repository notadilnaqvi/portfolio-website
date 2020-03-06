/*
"Title" compenent credited to user "Colonel Thirty Two" from https://stackoverflow.com/a/54911693
*/

import { Component } from 'react';
import ReactDOM from 'react-dom';

class Title extends Component {
    constructor(props) {
        super(props);
        this.titleEl = document.getElementsByTagName("title")[0];
    }

    render() {
        let fullTitle;
        if(this.props.pageTitle) {
            fullTitle = this.props.pageTitle;
		} 
		
        return ReactDOM.createPortal(
            fullTitle || "",
            this.titleEl
        );
    }
}
Title.defaultProps = {
    pageTitle: null,
};

export default Title;