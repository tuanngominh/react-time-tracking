import React from "react";
import moment from "moment";

export class TimeEntryInputWidget extends React.Component {
  emptyEntry = {
    id: null,
    start: null,
    end: null,
    title: "",
  };

  constructor(props) {
    super(props);
    this.state = {
      entry: {
        ...this.emptyEntry,
        ...(!!props && !!props.entry && { ...props.entry }),
      },
    };

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);

    if (this.state.entry.id) {
      this.timerId = setInterval(() => this.tick(), 1000);
    }
  }

  start() {
    const start = new Date();
    this.props.onCreate({
      title: this.state.entry.title,
      start,
    });
    this.setState((state) => ({
      entry: {
        ...state.entry,
        start,
        end: new Date(),
      },
    }));
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  stop() {
    this.props.onUpdate({
      id: this.props.entry && this.props.entry.id ? this.props.entry.id : null,
      end: new Date(),
    });

    this.setState({
      entry: {
        ...this.emptyEntry,
      },
    });
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  tick() {
    this.setState((state) => {
      return {
        entry: {
          ...state.entry,
          end: new Date(),
        },
      };
    });
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  get durationAsText() {
    const entry = this.state.entry;
    if (entry.start && entry.end) {
      const start = moment(entry.start);
      const end = moment(entry.end);
      const d = moment.duration(end.diff(start, "second"), "second");
      if (d.asDays() > 1) {
        return d.humanize().toString();
      } else {
        return (
          Math.round(d.hours()) +
          " : " +
          Math.round(d.minutes()) +
          " : " +
          Math.round(d.seconds())
        );
      }
    }
    return null;
  }

  handleTitleChange(event) {
    const value = event.target.value;
    this.props.onUpdate({
      id: this.state.entry.id,
      title: value,
    });
    this.setState((state) => ({
      entry: {
        ...state.entry,
        title: value,
      },
    }));
  }

  render() {
    let duration = <span></span>;
    let button = (
      <button data-testid="start-button" onClick={this.start}>
        Start
      </button>
    );
    if (this.state.entry.start) {
      duration = <span data-testid="duration">{this.durationAsText}</span>;
      button = (
        <button data-testid="stop-button" onClick={this.stop}>
          Stop
        </button>
      );
    }
    return (
      <div>
        <input
          placeholder="What are you doing?"
          value={this.state.entry.title}
          onChange={this.handleTitleChange}
        />
        {duration}
        {button}
      </div>
    );
  }
}
