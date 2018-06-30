import React from 'react';

import TextField from '@atlaskit/field-text';
import { DateTimePicker } from '@atlaskit/datetime-picker';
import { Label } from '@atlaskit/field-base';
import ImageIcon from '@atlaskit/icon/glyph/image';
import AddIcon from '@atlaskit/icon/glyph/add-circle';

import RichTextEditor from 'react-rte';

import { ImageComponent } from '../../'

export default (props) => {

  return (
    <div className="col-sm-12">
      <form action="" className="needs-validation" noValidate>
        <div className="row">
        
          <div className="col-sm-12 col-md-6">

            <div className="card">
              <div className="card-header text-center bg-info text-white">
                Datos del evento
              </div>
              <div className="card-body px-5">
                <div className="form-row">
                  <div className="col-sm-12">
                    <TextField required compact={true} label="Nombre del evento" shouldFitContainer={true}/>
                  </div>
                </div>
                <div className="form-row mt-3">
                  <div className="col-sm-12">
                    <TextField required compact={true} label="Carrera a la que aplica" shouldFitContainer={true} />
                  </div>
                </div>
                <div className="form-row mt-3 mb-3">
                  <div className="col-sm-12">
                    <TextField required compact={true} label="Lugar" shouldFitContainer={true} />
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="col-sm-12 col-md-6">

            <div className="card">
              <div className="card-header text-center bg-primary text-white">
                Hora y fecha
              </div>
              <div className="card-body px-5">
                <div className="form-row">
                  <div className="col-sm-12">
                  <Label label="Fecha y hora de Inicio" isRequired />
                  <DateTimePicker
                    onChange={console.log}
                    dateFormat="DD/MMM/YY"
                    datePickerSelectProps={{
                      placeholder: 'e.g. 31/Dec/18',
                    }}
                  />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-sm-12">
                  <Label label="Fecha y hora de Finalizacion" isRequired />
                  <DateTimePicker
                    onChange={console.log}
                    dateFormat="DD/MMM/YY"
                    datePickerSelectProps={{
                      placeholder: 'e.g. 31/Dec/18',
                    }}
                  />
                  </div>
                </div>
                <hr/>
                <div className="form-row mt-3">
                  <div className="col-sm-12 col-md-6 right-gray-border">
                    <h5>Foto de portada</h5>
                    <button type="button" className="btn btn-primary mt-3" onClick={props.click}>
                      <ImageIcon size="medium" /> Subir foto
                    </button>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div className="preview mt-4">
                      <ImageComponent
                        height={140}
                        width={140}
                        src="http://via.placeholder.com/140x140"
                        type="thumb"
                        position="center" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
          </div>

          <div className="col-sm-12 col-md-12 mt-4">

            <div className="card">
              <div className="card-header text-left bg-dark text-white">
                Descripcion
              </div>
              <div className="card-body px-5">
                <div className="form-row">
                  <div className="col-sm-12">
                    <RichTextEditor 
                      value={props.eventDescription}
                      onChange={props.editorChange}
                      placeholder="Descripcion del evento...."
                    />
                  </div>
                </div>
              </div>
            </div>
          
          </div>

          <div className="col-sm-12 col-md-12">
            <hr/>
            <button type="button" className="btn btn-success">
              <AddIcon size="small" primaryColor="#28a745" /> Crear Evento
            </button>
          </div>

        </div>
      </form>
    </div>
  )
}
