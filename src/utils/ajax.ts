export function post<T>(url: string, data: any): Promise<T> {

    var request = new Request(url, {
        method: 'POST', 
        body: !!data ? JSON.stringify(data): null,
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
        })
    });

    return fetch(request).then(r => r.json());
}
