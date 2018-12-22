/**
 * Basic info and configuration displayed at the top
 * of the page.
 * The config values are read/written directly to the global
 * config object.
 */

import React from "react"
import * as Bootstrap from "reactstrap"

import * as config from "../config"

import "./InfoAndConfig.css"

class InfoAndConfig extends React.Component {

  constructor(props) {
    super(props)
    this.delayInputRef = React.createRef()
    this.simulateErrorsRef = React.createRef()
  }

  onDelayChange = () =>
    config.debug.staticDataProviderPauseMillis = this.delayInputRef.current.value * 1000

  onSimulateErrorsChange = () =>
    config.debug.simulateErrors = this.simulateErrorsRef.current.checked

  render() {
    return (
      <Bootstrap.Card id="input-and-config" body className="mb-3 p-2">
      <Bootstrap.CardText>
        This is demo of a simple application written using
        React, Redux, React Router and Bootstrap
        written by Michal Molhanec.
        See <a href="https://github.com/molhanec/bookmarks-frontend">
        the source code and README on GitHub</a>.
        This is just a front-end, the data are not stored anywhere
        so any page reload will reset the app.
        You can open the browser's developer console to see
        Redux actions logs.
        UI tested with Chrome/Firefox on PC, Chrome on Android and Safari on iPhone.
        If you found any bug please fill the GitHub issue. Thanks.
      </Bootstrap.CardText>
      <Bootstrap.InputGroup>
        <Bootstrap.InputGroupAddon addonType="prepend">Simulated Response Delay</Bootstrap.InputGroupAddon>
        <input type="number" min="0" className="text-right form-control"
          ref={this.delayInputRef}
          defaultValue={config.debug.staticDataProviderPauseMillis / 1000}
          onChange={this.onDelayChange}
        />
        <Bootstrap.InputGroupAddon addonType="append">seconds</Bootstrap.InputGroupAddon>
      </Bootstrap.InputGroup>
      <div className="form-group form-check mt-2 mb-0">
        <input type="checkbox" className="form-check-input"
          id="simulate-errors"
          ref={this.simulateErrorsRef}
          defaultValue={config.debug.simulateErrors}
          onChange={this.onSimulateErrorsChange}
        />
        <label htmlFor="simulate-errors" className="form-check-label">
          Simulate response error
        </label>
      </div>
    </Bootstrap.Card>
    )
  }

}

export default InfoAndConfig
