import { collection } from './collection'


export const getContent = () => {
  return fetch('http://192.168.32.2:3333/api/content/', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  })
    .then(a => a.json());
};

export const addContent = (caption: string, image_base_64: string) => {

  return fetch('http://192.168.32.2:3333/api/content/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      caption, image_base_64: collection.find((e) => e.id === Number(image_base_64))?.base64
    })
  });
};

export const deleteContent = (id: string) => {

  return fetch('http://192.168.32.2:3333/api/content/' + id, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }    
  });
};
