import React from 'react';

import { ImageComponent } from '../../';
import DefaultUser from '../../../assets/default-user-image.png';

import UserIcon from '@atlaskit/icon/glyph/followers';
import PersonCircleIcon from '@atlaskit/icon/glyph/person-circle';
import EmailIcon from '@atlaskit/icon/glyph/email';
import LockIcon from '@atlaskit/icon/glyph/lock-filled';
import TextField from '@atlaskit/field-text';
import Button from '@atlaskit/button';

export default () => {

  return (
    <div className="row">
      <div className="col-sm-12 col-md-3">
        <div className="row">
          <div className="col-sm-12">
            <ImageComponent
              height={200}
              width={200}
              src={DefaultUser}
              type="thumb"
              position="center" />
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-8">
        <div className="row">

          <div className="col-sm-12">
            <div className="card">
              <div className="card-header bg-info text-white">
                <PersonCircleIcon size="medium" /> Datos del usuario
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <UserIcon size="small" /> Nombre:
                  </li>
                  <li className="list-group-item">
                    <EmailIcon size="small" /> Email:
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-sm-12 mt-5">
            <div className="card">
              <div className="card-header bg-warning text-white">
                <LockIcon size="medium"/> Contraseña
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <div className="row">

                      <form action="" style={{width: '100%', display: 'inherit'}}>

                        <div className="col-sm-12 col-md-4">
                          <TextField required compact={true} label="Vieja contraseña" />
                        </div>

                        <div className="col-sm-12 col-md-4">
                          <TextField required compact={true} label="Nueva contraseña" />
                        </div>

                        <div className="col-sm-12 col-md-4">
                          <TextField required compact={true} label="Repetir Nueva contraseña" />
                        </div>

                      </form>
                    </div>
                    <div className="row">
                      <div className="col-sm-12 col-md-12">
                        <hr />
                        <Button isDisabled appearance="primary" type="submit" className="float-right">
                          Cambiar Contraseña
                        </Button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
