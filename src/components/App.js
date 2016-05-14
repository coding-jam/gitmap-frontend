import React from "react";
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

export default class App extends React.Component{

  render() {

    return (
      <div>
        <AppBar
          title="git-map"
          zDepth={1}
          showMenuIconButton={false}
          iconElementRight={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          />
      </div>
    );
  }
}
