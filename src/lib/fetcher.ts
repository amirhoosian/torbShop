export async function fetcher(url: string) {
  // Generic fetch function
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
}

export async function postData(url: string, data: any) {
  // POST request function
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
}

export async function putData(url: string, data: any) {
  // PUT request function
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
}

export async function deleteData(url: string) {
  // DELETE request function
  const response = await fetch(url, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.ok;
}
