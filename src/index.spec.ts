import { expect, jest, test } from '@jest/globals'
import { KeqContext } from 'keq'
import { NEXT_INVOKED_PROPERTY } from 'keq/dist/umd/src/constant'
import { setHeader, setHeaders,  appendHeader, appendHeaders, insertHeader, insertHeaders  } from './index'

test('setHeader', () => {
  const context = {
    request: {
      url: new URL('http://example.com'),
      method: 'get',
      headers: new Headers(),
      routeParams: {},
      body: {},
    },
    options: {},
    global: {},
  } as unknown as KeqContext

  const next = jest.fn(() => {})

  setHeader('x-test', 'test')(context, next)
  expect(context.request.headers.get('x-test')).toBe('test')
  expect(next.mock.calls.length).toBe(1)
})

test('setHeaders', () => {
  const context = {
    request: {
      url: new URL('http://example.com'),
      method: 'get',
      headers: new Headers(),
      routeParams: {},
      body: {},
    },
    options: {},
    global: {},
  } as unknown as KeqContext

  const next = jest.fn(() => {})

  setHeaders({
    'x-test1': 'test1',
    'x-test2': 'test2',
  })(context, next)

  expect(context.request.headers.get('x-test1')).toBe('test1')
  expect(context.request.headers.get('x-test2')).toBe('test2')
  expect(next.mock.calls.length).toBe(1)
})


test('appendHeader', () => {
  const context = {
    request: {
      url: new URL('http://example.com'),
      method: 'get',
      headers: new Headers({ 'x-append': 'initial' }),
      routeParams: {},
      body: {},
    },
    options: {},
    global: {},
  } as unknown as KeqContext
  const next = jest.fn(() => {})

  appendHeader('x-append', 'appended')(context, next)
  expect(context.request.headers.get('x-append')).toBe('initial, appended')
  expect(next.mock.calls.length).toBe(1)
})

test('appendHeaders', () => {
  const context = {
    request: {
      url: new URL('http://example.com'),
      method: 'get',
      headers: new Headers({
        'x-append1': 'initial1',
        'x-append2': 'initial2',
      }),
      routeParams: {},
      body: {},
    },
    options: {},
    global: {},
  } as unknown as KeqContext

  const next = jest.fn(() => {})

  appendHeaders({
    'x-append1': 'appended1',
    'x-append2': 'appended2',
  })(context, next)

  expect(context.request.headers.get('x-append1')).toBe('initial1, appended1')
  expect(context.request.headers.get('x-append2')).toBe('initial2, appended2')
  expect(next.mock.calls.length).toBe(1)
})

test('insertHeader', () => {
  const context = {
    request: {
      url: new URL('http://example.com'),
      method: 'get',
      headers: new Headers({ 'x-insert': 'exists' }),
      routeParams: {},
      body: {},
    },
    options: {},
    global: {},
  } as unknown as KeqContext
  const next = jest.fn(() => {})

  insertHeader('x-insert', 'new')(context, next)
  insertHeader('x-new', 'inserted')(context, next)
  expect(context.request.headers.get('x-insert')).toBe('exists')
  expect(context.request.headers.get('x-new')).toBe('inserted')
  expect(next.mock.calls.length).toBe(2) // Called twice for each insertHeader invocation
})

test('insertHeaders', () => {
  const context = {
    request: {
      url: new URL('http://example.com'),
      method: 'get',
      headers: new Headers({
        'x-insert1': 'exists1',
      }),
      routeParams: {},
      body: {},
    },
    options: {},
    global: {},
  } as unknown as KeqContext

  const next = jest.fn(() => {})

  insertHeaders({
    'x-insert1': 'new1',
    'x-insert2': 'new2',
  })(context, next)

  expect(context.request.headers.get('x-insert1')).toBe('exists1')
  expect(context.request.headers.get('x-insert2')).toBe('new2')
  expect(next.mock.calls.length).toBe(1)
})
