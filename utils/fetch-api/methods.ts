export const fetcherPost = (url: string, data: object) => 
  fetch(window.location.origin + url, {
    method: "POST",
    //credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => {
    return res.json()
  })


export const fetcherGet = (url: string) => 
  fetch(window.location.origin + url, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    }
  }).then((r) => {
    return r.json();
  })

export const fetcherPut = (url: string, data: object) => 
  fetch(window.location.origin + url, {
    method: "PUT",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((r) => {
    return r.json();
  })