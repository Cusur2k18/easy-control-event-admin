export function transformImage (imageUrl, type) {
  
  const thumbTransform = 't_media_lib_thumb';

  switch (type) {
    case 'thumb':
      return imageUrl.split('upload').join(`upload/${thumbTransform}`)
  
    // no default
  }
}