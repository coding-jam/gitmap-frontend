import React from "react";
import AppBar from 'material-ui/AppBar';
import SearchIcon from 'material-ui/svg-icons/action/search';
import {white} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';

export default class App extends React.Component{

  render() {

    return (
      <div>
        <AppBar
          title="git-map"
          zDepth={1}
          iconElementRight={
              <div>
                  <TextField hintText="Search by Language"/>
                  <SearchIcon color={white}/>
              </div>
          }
          />
      </div>
    );
  }
}
