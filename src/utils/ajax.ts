export function post<T>(url: string, data: any): Promise<T> {

    const request = new Request(url, {
        body: !!data ? JSON.stringify(data) : null,
        headers: new Headers({
            "Accept": "application/json",
            "Content-Type": "application/json",
        }),
        method: "POST",
    });

    return fetch(request).then((r: any) => r.json());
}
