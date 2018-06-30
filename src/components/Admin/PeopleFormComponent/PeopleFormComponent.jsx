import React from 'react';

import TextField from '@atlaskit/field-text';
import ImageIcon from '@atlaskit/icon/glyph/image';
import AddIcon from '@atlaskit/icon/glyph/add-circle';
import { Label } from '@atlaskit/field-base';

import RichTextEditor from 'react-rte';

import { ImageComponent } from '../../'

export default (props) => {

  return (
    <div className="col-sm-12">
      <form action="" className="needs-validation" noValidate>
        <div className="row">
        
          <div className="col-sm-12 col-md-12">

            <div className="card">
              <div className="card-header text-left bg-info text-white">
                Datos del usuario
              </div>
              <div className="card-body px-5">
                <div className="form-row">
                  <div className="col-sm-12">
                    <TextField required compact={true} label="Nombre del usuario" shouldFitContainer={true}/>
                  </div>
                </div>
                <div className="form-row mt-3">
                  <div className="col-sm-12">
                    <TextField required compact={true} label="Apellidos" shouldFitContainer={true} />
                  </div>
                </div>
                <div className="form-row mt-3 mb-3">
                  <div className="col-sm-12">
                    <TextField required compact={true} label="Email" shouldFitContainer={true} />
                  </div>
                </div>
                <div className="form-row mt-3 mb-3">
                  <div className="col-sm-12">
                    <Label label="Descripcion del puesto" isRequired />
                    <small className="text-muted">Esto es lo que se va a imprimir debajo de su nombre en las constancias*</small>
                    <RichTextEditor
                      value={RichTextEditor.createEmptyValue()}
                      onChange={props.editorChange}
                      placeholder="Descripcion"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="col-sm-12 col-md-12 mt-4">

            <div className="card">
              <div className="card-header text-left bg-dark text-white">
                Firma digital
              </div>
              <div className="card-body px-5">
                <div className="form-row mt-3">
                  <div className="col-sm-12 col-md-3 right-gray-border">
                    <h5>Foto de la firma</h5>
                    <button type="button" className="btn btn-primary mt-3" onClick={props.click}>
                      <ImageIcon size="medium" /> Subir foto
                    </button>
                  </div>
                  <div className="col-sm-12 col-md-8 offset-md-1">
                    <div className="preview mt-4">
                      <ImageComponent
                        height={140}
                        width={140}
                        src="http://via.placeholder.com/140x140"
                        type="thumb"
                        position="left" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="col-sm-12 col-md-12">
            <hr/>
            <button type="button" className="btn btn-success">
              <AddIcon size="small" primaryColor="#28a745" /> Crear Usuario
            </button>
          </div>

        </div>
      </form>
    </div>
  )
}
