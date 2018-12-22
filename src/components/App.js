/**
 * Main React entry point.
 */

import React from "react"
import * as Redux from "react-redux"
import * as Router from "react-router-dom"
import { CSSTransitionGroup } from "react-transition-group"
import uuid from "uuid/v4"

import BookmarkForm from "./BookmarkForm"
import InfoAndConfig from "./InfoAndConfig"
import MainContent from "./MainContent"
import Message from "./Message"
import Spinner from "./Spinner"
import VisibleDiv from "./VisibleDiv"

import { readAllBookmarks } from "../stateManagement/bookmarks/readAllBookmarks"
import { stateShape } from "../stateManagement/stateShape"

import "./App.css"

class App extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(readAllBookmarks())
  }

  goToRoot = () =>
    this.props.history.push("/")

  onAddClick = () =>
    this.props.history.push("/add")

  renderAll = () => {
    delete this.selectedLabel
    return (
      <MainContent
        allBookmarks={this.props.bookmarks}
      />
    )
  }

  renderLabelRoute = ({match}) => {
    this.selectedLabel = match.params.label
    return (
      <MainContent
        allBookmarks={this.props.bookmarks}
        selectedLabel={this.selectedLabel}
      />
    )
  }

  renderEditRoute = ({match}) => {
    const id = match.params.id
    const bookmark = this.props.bookmarks[id]
    const dispatch = this.props.dispatch
    if (bookmark) {
      return <BookmarkForm key="edit" id={id} bookmark={bookmark} dispatch={dispatch} />
    }
    return <Router.Redirect to="/" />
  }

  renderAddRoute = () =>
    <BookmarkForm key="add" id={uuid()} dispatch={this.props.dispatch} selectedLabel={this.selectedLabel} />

  renderError = () => (
    <Message color="danger" key="error">
      {this.props.info.error}
    </Message>
  )

  renderSuccess = () => (
    <Message color="success" key="success">
      {this.props.info.success}
    </Message>
  )

  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-dark bg-secondary rounded mb-3">
          <Router.Link to="/"><span className="navbar-brand">Bookmarks Manager</span></Router.Link>
          <button className="btn" onClick={this.onAddClick}>Add</button>
        </nav>
        <InfoAndConfig />
        {this.props.info.progress && <Spinner />}

        {/*
          When the progress is shown we hide the rest of UI.
          We still render it so the components are not unmounted.
          This is one possible approach not to loose form values.
          Alternatively we could store them inside Redux' state.
        */}
        <VisibleDiv visible={!this.props.info.progress}>
          <CSSTransitionGroup
            transitionName="message"
            transitionEnterTimeout={1}
            transitionLeaveTimeout={1000}
          >
            {this.props.info.error && this.renderError()}
            {this.props.info.success && this.renderSuccess()}
          </CSSTransitionGroup>
          <Router.Switch key="switch">
            <Router.Route exact path="/"
              render={this.renderAll}
            />
            <Router.Route path="/label/:label"
              render={this.renderLabelRoute}
            />
            <Router.Route path="/edit/:id"
              render={this.renderEditRoute}
            />
            <Router.Route path="/add"
              render={this.renderAddRoute}
            />
            <Router.Redirect to="/" />
          </Router.Switch>
        </VisibleDiv>
      </div>
    )
  }
}

App.propTypes = stateShape

const mapStateToProps = state => state

export default Router.withRouter(Redux.connect(mapStateToProps)(App))

