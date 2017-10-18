import React from 'react';
import '../index.css';
import Box from './BoxElement';

export default class Grid extends React.Component {
    render() {
        const width = this.props.cols * 14;
        var rowsArr = [];
        var boxClass = '';
        for (var idx = 0; idx < this.props.rows; idx++) {
            for (var jdx = 0; jdx < this.props.cols; jdx++) {
                let boxId = idx + '_' + jdx;
                boxClass = this.props.gridFull[idx][jdx]
                    ? 'box on'
                    : 'box off';
                rowsArr.push(<Box
                    boxClass={boxClass}
                    key={boxId}
                    boxId={boxId}
                    row={idx}
                    col={jdx}
                    selectBox={this.props.selectBox}/>)
            }
        }
        return (
            <div className="grid" style={{
                width: width
            }}>
                {rowsArr}
            </div>
        );
    }
}
