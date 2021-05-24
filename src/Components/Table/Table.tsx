import React, { Component,} from 'react';
import { Table, Container, Button, Row } from 'reactstrap';
export type ListViewColumn = {
    key: string;
    title: string;
  };
  export type DataTableProps = {
    cols: Array<ListViewColumn>;
    data: Array<any>;
    onClick: (row: any) => void;
  };
  
class TableComp extends Component<DataTableProps>{
    renderValue = (row: any, column: ListViewColumn) => {
        const value = row[column.key];
        return value;
      };
    rowClick = (row: any) => this.props.onClick && this.props.onClick(row);
    render(){
    return(
        <Container style={{position: 'relative'}} >
            <div>
                <h2 style={{marginTop: '40px', display: 'flex', justifyContent: 'center'}}>List of available courses</h2>   
                <Table hover style={{backgroundColor: 'white', marginTop: '40px'}}>
                    <thead>
                        <tr>
                        <th  scope="row"></th>
                            {this.props.cols.map((col : any, index : any) => (
                                <th>{col.title}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data.map((row : any, index : any) => (
                            <tr  onClick={() => this.rowClick(row)}>
                                <th  scope="row"></th>
                                
                            {this.props.cols.map((col : any, index : any) => (
                                <td>              {this.renderValue(row, col)}
</td>
                            ))}
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </Container>
    )
    }
}

export default TableComp;