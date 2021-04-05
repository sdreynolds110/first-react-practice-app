import React, { Component } from 'react';
import StatusList from './statuslist';
import './status.css';

export default class StatusAll extends Component {
    constructor(props) {
      super(props);
      this.state = {
        newStatusText: '',
        statuses: [
        ]
      }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.delete = this.delete.bind(this);
    }

    delete(index) {
        let copy = [...this.state.statuses];
        copy.splice(index, 1)
        this.setState({statuses: copy});
    }
    handleChange(ev) {
        debugger;
        this.setState({newStatusText: ev.target.value})
    }    
    handleSubmit(ev) {
        ev.preventDefault();
        let newStatuses = [this.state.newStatusText, ...this.state.statuses]
        this.setState({
            newStatusText: '',
            statuses: newStatuses
        })
    }
    render() {
      return (
        <div>
            <div className="status">
                <h1>Enter New Status</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.newStatusText}
                        onChange={this.handleChange} placeholder="What's on your mind?" />
                    <button type="submit">Add Status</button>
                </form>
            </div>
            <div>
                <h1>All Statuses</h1>
                <StatusList statuses={this.state.statuses} 
                            delete={this.delete} />
            </div>
        </div>
      );
    }
  }
  