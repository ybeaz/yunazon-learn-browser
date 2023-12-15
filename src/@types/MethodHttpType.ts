/**
 * @description 
  *   GET
      The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.
  
      HEAD
      The HEAD method asks for a response identical to a GET request, but without the response body.
      
      POST
      The POST method submits an entity to the specified resource, often causing a change in state or side effects on the server.
      
      PUT
      The PUT method replaces all current representations of the target resource with the request payload.
      
      DELETE
      The DELETE method deletes the specified resource.
      
      CONNECT
      The CONNECT method establishes a tunnel to the server identified by the target resource.
      
      OPTIONS
      The OPTIONS method describes the communication options for the target resource.
      
      TRACE
      The TRACE method performs a message loop-back test along the path to the target resource.
      
      PATCH
      The PATCH method applies partial modifications to a resource.
      @import import { MethodHttpType } from '../@types/MethodHttpType'
 */

export enum MethodHttpEnumType {
  get = 'get',
  head = 'head',
  post = 'post',
  put = 'put',
  delete = 'delete',
  connect = 'connect',
  options = 'options',
  trace = 'trace',
  patch = 'patch',

  GET = 'GET',
  HEAD = 'HEAD',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  CONNECT = 'CONNECT',
  OPTIONS = 'OPTIONS',
  TRACE = 'TRACE',
  PATCH = 'PATCH',
}

export type MethodHttpType =
  | MethodHttpEnumType
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'
  | 'purge'
  | 'PURGE'
  | 'link'
  | 'LINK'
  | 'unlink'
  | 'UNLINK'
