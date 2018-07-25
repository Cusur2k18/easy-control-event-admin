import React from 'react'
import { START_DATE, END_DATE } from 'react-dates/constants';
import { DateRangePicker } from 'react-dates';

export default class DateRangeWrapper extends React.Component {

  constructor(props) {
    super(props);

    let focusedInput = null;
    if (props.autoFocus) {
      focusedInput = START_DATE;
    } else if (props.autoFocusEndDate) {
      focusedInput = END_DATE;
    }

    this.state = {
      focusedInput,
      startDate: props.initialStartDate,
      endDate: props.initialEndDate,
    };
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.props.onChangeDate(startDate, endDate)
    this.setState({
      startDate: startDate,
      endDate: endDate
    });
  }

  onFocusChange = (focusedInput) => {
    this.setState({ focusedInput });
  }

  render() {

    const { focusedInput, startDate, endDate } = this.state;

    return (
      <div>
        <DateRangePicker
          startDateId="from"
          endDateId="to"
          displayFormat="DD/MM/YYYY"
          startDatePlaceholderText="Inicio"
          endDatePlaceholderText="Fin"
          isOutsideRange={() => false}
          onDatesChange={this.onDatesChange}
          onFocusChange={this.onFocusChange}
          focusedInput={focusedInput}
          startDate={startDate}
          endDate={endDate}
        />
      </div>
    );
  }
}
