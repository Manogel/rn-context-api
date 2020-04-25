interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'aaa',
        user: {
          name: 'Manoel',
          email: 'manoelgomes@gmail.com',
        },
      });
    }, 2000);
  });
}
