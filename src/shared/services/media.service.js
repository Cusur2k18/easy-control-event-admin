import { cloudinaryConfiguration } from '../../utils/config';

export class MediaService {

 
  /**
   *
   * @description Trigger the uploader widget from cloudinary
   * @todo Implement our own uploader.
   * @static
   * @memberof MediaService
   */
  static showUploader(cb) {
    const config = { 
      cloud_name: cloudinaryConfiguration.cloud_name, 
      upload_preset: cloudinaryConfiguration.upload_preset
    };

    window.cloudinary.openUploadWidget(config, cb);
  }
}