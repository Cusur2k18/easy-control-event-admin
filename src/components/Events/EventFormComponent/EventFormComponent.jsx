import React from 'react';

import TextField from '@atlaskit/field-text';
import { DateTimePicker } from '@atlaskit/datetime-picker';
import { Label } from '@atlaskit/field-base';
import ImageIcon from '@atlaskit/icon/glyph/image';
import AddIcon from '@atlaskit/icon/glyph/add-circle';
import EditIcon from '@atlaskit/icon/glyph/edit-filled';

import RichTextEditor from 'react-rte';

import { ImageComponent } from '../../'

export default (props) => {

  let action = (
    <button type="submit" className="btn btn-success" disabled={!props.validForm} >
      <AddIcon size="small" primaryColor="#28a745"/> Crear Evento
    </button>
  )

  console.log('props.isEditing', props.isEditing)
  if (props.isEditing) {
    action = <button type="submit" className="btn btn-warning" disabled={!props.validForm} >
      <EditIcon size="small" primaryColor="#212529"/> Editar Evento
    </button>
  }

  return (
    <div className="col-sm-12">
      <form onSubmit={props.onSubmit} className="needs-validation" noValidate>
        <div className="row">
        
          <div className="col-sm-12 col-md-6">

            <div className="card">
              <div className="card-header text-center bg-info text-white">
                Datos del evento
              </div>
              <div className="card-body px-5">
                <div className="form-row">
                  <div className="col-sm-12">
                    <TextField 
                      value={props.controls.name.value}
                      required
                      onChange={(e) => {props.formHandler(e.target.value, props.controls.name.key)}}
                      compact={true}
                      label="Nombre del evento"
                      shouldFitContainer={true}
                      isInvalid={(props.controls.name.touched && !props.controls.name.valid) || (props.formSubmitted && !props.controls.name.valid)}
                    />
                    {
                      ((props.controls.name.touched && !props.controls.name.valid) || (props.formSubmitted && !props.controls.name.valid)) 
                        && (<small className="text-danger">Porfavor ingresa el nombre</small>)
                    }
                  </div>
                </div>
                <div className="form-row mt-3">
                  <div className="col-sm-12">
                    <TextField 
                      value={props.controls.career.value}
                      required
                      onChange={(e) => {props.formHandler(e.target.value, props.controls.career.key)}}
                      compact={true} 
                      label="Carrera a la que aplica" 
                      shouldFitContainer={true}
                      isInvalid={(props.controls.career.touched && !props.controls.career.valid) || (props.formSubmitted && !props.controls.career.valid)}
                    />
                    {
                      ((props.controls.career.touched && !props.controls.career.valid) || (props.formSubmitted && !props.controls.career.valid)) 
                        && (<small className="text-danger">Porfavor ingresa la carrera para la que aplica</small>)
                    }
                  </div>
                </div>
                <div className="form-row mt-3 mb-3">
                  <div className="col-sm-12">
                    <TextField 
                      value={props.controls.location.value}
                      required 
                      onChange={(e) => {props.formHandler(e.target.value, props.controls.location.key)}}
                      compact={true} 
                      label="Lugar" 
                      shouldFitContainer={true} 
                      isInvalid={(props.controls.location.touched && !props.controls.location.valid) || (props.formSubmitted && !props.controls.location.valid)}
                    />
                    {
                      ((props.controls.location.touched && !props.controls.location.valid) || (props.formSubmitted && !props.controls.location.valid)) 
                        && (<small className="text-danger">Porfavor ingresa el lugar</small>)
                    }
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
                    value={props.controls.startDateTime.value}
                    onChange={(time) => {props.formHandler(time, props.controls.startDateTime.key)}}
                    dateFormat="DD/MMM/YY"
                    datePickerSelectProps={{
                      placeholder: 'e.g. 31/Dec/18',
                    }}
                    isInvalid={(props.controls.startDateTime.touched && !props.controls.startDateTime.valid) || (props.formSubmitted && !props.controls.startDateTime.valid)}
                  />
                  {
                    ((props.controls.startDateTime.touched && !props.controls.startDateTime.valid) || (props.formSubmitted && !props.controls.startDateTime.valid)) 
                      && (<small className="text-danger">Porfavor ingresa la fecha de inicio</small>)
                  }
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-sm-12">
                  <Label label="Fecha y hora de Finalizacion" isRequired />
                  <DateTimePicker
                    value={props.controls.endDateTime.value}
                    onChange={(time) => {props.formHandler(time, props.controls.endDateTime.key)}}
                    dateFormat="DD/MMM/YY"
                    datePickerSelectProps={{
                      placeholder: 'e.g. 31/Dec/18',
                    }}
                    isInvalid={(props.controls.endDateTime.touched && !props.controls.endDateTime.valid) || (props.formSubmitted && !props.controls.endDateTime.valid)}
                  />
                  {
                    ((props.controls.endDateTime.touched && !props.controls.endDateTime.valid) || (props.formSubmitted && !props.controls.endDateTime.valid)) 
                      && (<small className="text-danger">Porfavor ingresa la fecha de finalizacion</small>)
                  }
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
                  {
                    props.imagePreview && (
                      <div className="col-sm-12 col-md-6">
                        <div className="preview mt-4">
                          <ImageComponent
                            click={props.imageClick}
                            height={140}
                            width={140}
                            src={props.imagePreview}
                            type="thumb"
                            position="center"
                            clickable />
                        </div>
                      </div>)
                  }
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
                      value={props.controls.description.value}
                      onChange={(value) => {props.formHandler(value, props.controls.description.key)}}
                      placeholder="Descripcion del evento...."
                    />
                  </div>
                </div>
              </div>
            </div>
          
          </div>

          <div className="col-sm-12 col-md-12">
            <hr/>
            {action}
          </div>

        </div>
      </form>
    </div>
  )
}
