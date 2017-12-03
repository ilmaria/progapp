import App from '../app/App'
import GoogleData from './GoogleData'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

class AppContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentFile: null,
      error: null,
    }

    this.openMenu = this.openMenu.bind(this)
    this.startSearch = this.startSearch.bind(this)
    this.selectFile = this.selectFile.bind(this)
  }

  openMenu() {}

  startSearch() {}

  selectFile(file) {
    return () => {
      this.setState({ currentFile: file })
    }
  }

  render() {
    return (
      <Router>
        <GoogleData>
          {(user, login, getFilesInFolder, getRecentFiles) => {
            return (
              <App
                user={user}
                login={login}
                getFilesInFolder={getFilesInFolder}
                getRecentFiles={getRecentFiles}
                currentFile={this.state.currentFile}
                selectFile={this.selectFile}
                openMenu={this.openMenu}
                startSearch={this.startSearch}
              />
            )
          }}
        </GoogleData>
      </Router>
    )
  }
}

export default AppContainer