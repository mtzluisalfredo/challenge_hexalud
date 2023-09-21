import request, { Response } from 'superagent';

const RN_URL_BASE = 'https://pokeapi.co/api/v2';

let token: string = '';

function auth(this: request.SuperAgentRequest) {
  if (token) {
    this.set('Authorization', `Bearer ${token}`);
  }
}

function handleError(body: {
  error: { path?: any; code?: any; data?: any; message?: any };
  type: any;
}): {
  code: number;
  path: string;
  message: string;
  data: any;
  type: any;
} {
  let message: string = body?.error?.message || '';
  const type: string = body?.type || '';
  const { path, code, data } = body?.error || {};

  if (typeof message !== 'string') {
    message = String(message);
  }

  return {
    code,
    path,
    message,
    data,
    type,
  };
}

function connection(
  type: string,
  endpoint: string,
  data?: any,
  urlEncoded?: boolean
): Promise<any> {
  const { attach, ...others } = data || {};
  const params = { ...others };

  const req = request(type, `${RN_URL_BASE}` + endpoint);

  Object.keys(params).forEach(
    key => params[key] === null && delete params[key]
  );

  req
    .set('Accept', 'application/json')
    .set('X-Forwarded-For', '')
    .use(auth.bind(req))
    .query({
      no_cache: new Date().getTime(),
    });

  if (attach) {
    const attachs = [].concat(attach || []);
    for (let i = 0; i < attachs.length; i += 1) {
      // @ts-ignore
      req.attach(attachs[i].name, attachs[i].file);
    }
    Object.keys(params).forEach(key => req.field(key, params[key]));
  } else if (type === 'GET') {
    req.query(params);
  } else {
    if (urlEncoded) {
      req.set('Content-Type', 'application/x-www-form-urlencoded');
    }
    req.send(params);
  }

  return new Promise((resolve, reject) => {
    req.end((err: any, res: Response) => {
      if (err) {
        reject(err);
      } else {
        const { body } = res;

        if (body && body.error) {
          reject(handleError(body));
        } else if (res.body) {
          resolve(res.body);
        } else if (res.text) {
          resolve({
            text: res.text,
          });
        }
      }
    });
  });
}

const Request = {
  setToken(t: string | null) {
    token = t || '';
  },

  post(endpoint: string, data?: any, multipart?: boolean) {
    return connection('POST', endpoint, data, multipart);
  },

  put(endpoint: string, data?: any) {
    return connection('PUT', endpoint, data);
  },

  get(endpoint: string, data?: any) {
    return connection('GET', endpoint, data);
  },

  del(endpoint: string, data?: any) {
    return connection('DELETE', endpoint, data);
  },
};

export default Request;
