function handleAjax<T>(ajax: Promise<Response>): Promise<T> {
  return ajax
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      return response;
    })
    .then((r: any) => r.json());
}

export function post<T>(url: string, data: any): Promise<T> {
  const request = new Request(url, {
    body: !!data ? JSON.stringify(data) : null,
    headers: new Headers({
      "Accept": "application/json",
      "Content-Type": "application/json"
    }),
    method: "POST"
  });

  return handleAjax(fetch(request));
}

export function remove<T>(url: string): Promise<T> {
  const request = new Request(url, {
    headers: new Headers({
      "Accept": "application/json",
      "Content-Type": "application/json"
    }),
    method: "DELETE"
  });

  return handleAjax(fetch(request));
}

export function get<T>(url: string): Promise<T> {
  return handleAjax(fetch(url));
}
