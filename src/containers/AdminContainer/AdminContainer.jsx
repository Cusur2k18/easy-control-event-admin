import React from 'react';
import './AdminContainer.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SettingsIcon from '@atlaskit/icon/glyph/settings';
import AddIcon from '@atlaskit/icon/glyph/add-circle';
import Button from '@atlaskit/button';

import { 
  ConfigRow, 
  TableComponent, 
  CardComponent,
  PeopleDetailComponent,
  PeopleFormComponent
} from '../../components';
import { ConfigurationItems } from '../../utils/config';

export class AdminContainer extends React.Component {

  state = {
    currentView: 'root',
    selectedUser: false,
    isCreatePeople: false
  }

  handleClickItem = (url) => {
    this.props.history.push(url);
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.componentDidChange(prevProps)) {
      this.setState({
        ...this.state,
        currentView: this.props.match.params.segment !== '' ? this.props.match.params.segment : 'root',
        isCreatePeople: this.props.match.url.indexOf('people/create') >= 0
      })
    }
  }

  componentDidChange = (prevProps) => {
    return this.props.match.params.segment !== prevProps.match.params.segment 
      || this.props.match.url !== prevProps.match.url;
  }

  onPeopleDetail = () => {
    this.setState({
      ...this.state,
      selectedUser: true
    })
  }

  closeDetailDrawer = () => {
    this.setState({
      ...this.state,
      selectedUser: false
    })
  }

  onCreateNewPeople = () => {
    this.props.history.push(this.props.location.pathname + '/create');
  }

  render() {
    let content;

    if (this.state.isCreatePeople) {
      content = <PeopleFormComponent />
    } else {

      switch (this.state.currentView) {
        case 'people':
          content = (
            <React.Fragment>
              <div className="container-fluid">
                <div className="col-sm-12 mb-4 text-left">
                  <Button
                    onClick={this.onCreateNewPeople}
                    appearance="primary">
                      <AddIcon size="small" primaryColor="white" secondaryColor="#0052CC" />
                      &nbsp;Crear Usuario nuevo
                  </Button>
                </div>
                <div className="row">
                  <div className={this.state.selectedUser ? 'col-sm-12 col-md-8' : 'col-sm-12 col-md-12'}>
                    <TableComponent hoverable borderless click={this.onPeopleDetail}/>
                  </div>
                  {
                    this.state.selectedUser && (
                      <div className="col-sm-12 col-md-4 p-2 left-gray-border left-shadow">
                        <PeopleDetailComponent 
                          closeClick={this.closeDetailDrawer}
                          />
                      </div>
                    )
                  }
                  
                </div>
              </div>
            </React.Fragment>
          )
          break;
  
        case 'diplomas':
          content = (
            <div className="row">
              <CardComponent elements={5}/>
            </div>
          )
          break;
      
        default:
          content = (
            <ConfigRow 
              configurationItems={ConfigurationItems}
              onConfigClick={this.handleClickItem}/>
          )
          break;
      }
    }


    return (
      <div id="admin-page">
        <div className="row">
          <div className="col-sm-12">
            <h2><SettingsIcon size="large" /> { this.props.match.params.segment && (<React.Fragment><span> > </span><SettingsIcon size="large" /></React.Fragment>) }</h2>
            <hr/>
          </div>

          <div className="col-sm-12">
            {content}
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(connect()(AdminContainer));
