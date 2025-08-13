import {HttpInterceptorFn} from '@angular/common/http';

export const AuthInterceptors: HttpInterceptorFn = (req, next) => {
  const publicApi = [
    '/api/auth/',
  ]
  const isPublicApi = publicApi.some(api => req.url.startsWith(api));
  if(isPublicApi){
    console.log("public")
    return next(req);
  }
  const token = localStorage.getItem('keokera');
  if(token != null){
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
        Content_Type: 'application/json'
      }
    })
    console.log("private")
  }
  return next(req);
}
