function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    images = Object.values(images);
    return images;
  }
  
const images = importAll(require.context('/public/images/cover_images', false, /\.(jpg|jpeg|png)$/));
export default images;
  