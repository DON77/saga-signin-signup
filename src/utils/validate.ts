/* eslint-disable no-useless-escape */
const mailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const login = (value: string) : string => (!value && 'loginExist') || (!mailReg.test(value) && 'loginMail') || '';

export const password = (value: string) : string => (!value && 'passExist') || (value.length < 6 && 'passLength') || '';

export const name = (value: string) : string => (!value && 'nameExist') || (value.length < 2 && 'nameLength') || '';
